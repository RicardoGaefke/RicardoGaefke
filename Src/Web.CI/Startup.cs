﻿using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Microsoft.Extensions.FileProviders;
using System.IO;
using MyApp.DI;
using MyApp.Domain;

namespace MyApp.Web.CI
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment environment)
        {
            Configuration = configuration;
            HostingEnvironment = environment;
        }

        // readonly string RicardoGaefkeCors = "_RicardoGaefkeCors";

        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add your AppInsights ID here to make it globally available //
            services.AddApplicationInsightsTelemetry("b67197a1-4fac-4177-a4e7-c42f808c7abd");

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    if (HostingEnvironment.IsDevelopment())
                    {
                      builder
                        .WithOrigins(
                            "https://localhost:5050",
                            "https://localhost:5055",
                            "https://localhost:5060",
                            "https://localhost:5065"
                        )
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                      ;
                    }
                    else
                    {
                        builder
                          .WithOrigins(
                              "https://*.ricardogaefke.com"
                          ).SetIsOriginAllowedToAllowWildcardSubdomains()
                          .AllowAnyMethod()
                          .AllowAnyHeader()
                          .AllowCredentials()
                      ;
                    }
                });
            });

            Bootstrap.Configure(services, Configuration);

            services.AddNodeServices();

            CookiesAuth.Configure(services, Configuration, HostingEnvironment.IsDevelopment());

            services.Configure<Secrets.ConnectionStrings>(Configuration.GetSection("ConnectionStrings"));

            services.AddMvc(config =>
            {
                var policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build()
                ;

                config.Filters.Add(new AuthorizeFilter(policy));
            })
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

            app.UseCors();

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
                //  My personal info
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
