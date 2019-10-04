using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Microsoft.Extensions.FileProviders;
using System.IO;
using MyApp.DI;
using MyApp.Domain;

namespace MyApp.Web.Login
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment environment)
        {
            Configuration = configuration;
            HostingEnvironment = environment;
        }

        readonly string RicardoGaefkeCors = "_RicardoGaefkeCors";

        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add your AppInsights ID here to make it globally available //
            services.AddApplicationInsightsTelemetry("ad26124a-c2fe-415a-859a-1852f7d2c75e");

            services.AddCors(options =>
            {
                options.AddPolicy(RicardoGaefkeCors, builder =>
                {
                    builder
                        .WithOrigins(
                            "https://localhost:5050",
                            "https://localhost:5055",
                            "https://localhost:5060",
                            "https://www.ricardogaefke.com",
                            "https://login.ricardogaefke.com",
                            "https://ci.ricardogaefke.com"
                        )
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                      ;
                    }
                );
            });

            //  project's DI
            services.AddSingleton<MyEmail>();

            services.AddNodeServices();

            Bootstrap.Configure(services, Configuration);

            CookiesAuth.Configure(services, Configuration, HostingEnvironment.IsDevelopment());

            services.Configure<Secrets.ConnectionStrings>(Configuration.GetSection("ConnectionStrings"));

            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(options => {
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    options.SerializerSettings.DefaultValueHandling = DefaultValueHandling.Ignore;
                })
            ;

            services.AddResponseCompression(options =>
            {
                options.MimeTypes = new[]
                {
                    // Default
                    "text/plain",
                    // "image/png",
                    "image/jpg",
                    "image/jpeg",
                    "image/jp2",
                    "text/css",
                    "application/javascript",
                    "text/html",
                    "application/xml",
                    "text/xml",
                    "application/json",
                    "text/json",
                    "font",
                    "font/woff2",
                    "font/woff",
                    "image/x-icon",
                    // Custom
                    "image/svg+xml",
                    "script"
                };
                options.EnableForHttps = true;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            var configuration = app.ApplicationServices.GetService<Microsoft.ApplicationInsights.Extensibility.TelemetryConfiguration>();
            var cachePeriod = env.IsDevelopment() ? "600" : "31557600";
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                // do not trace AppInsights for dev env
                configuration.DisableTelemetry = true;
                configuration.InstrumentationKey = "";
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseCors(RicardoGaefkeCors);

            app.UseResponseCompression();
            app.UseHttpsRedirection();
            app.UseCookiePolicy();

            var provider = new FileExtensionContentTypeProvider();
            provider.Mappings[".webmanifest"] = "application/manifest+json";

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")
                ),
                RequestPath = "",
                ContentTypeProvider = provider,
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
                }
            });

            app.Use((context, next) =>
            {
                context.Response.Headers["Author"] = "Ricardo Gaefke";
                context.Response.Headers["Author_email"] = "ricardogaefke@gmail.com";
                context.Response.Headers["Author_URL"] = "www.ricardogaefke.com";
                return next.Invoke();
            });

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}"
                );

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new {
                        controller = "Home", action = "Index"
                    }
                );
            });
        }
    }
}
