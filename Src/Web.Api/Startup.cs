using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MyApp.DI;
using MyApp.Email;

namespace MyApp.Web.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration, Microsoft.Extensions.Hosting.IHostingEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            HostingEnvironment = hostingEnvironment;
        }

        readonly string RicardoGaefkeCors = "_ricardoGaefkeCors";

        public IConfiguration Configuration { get; }
        public Microsoft.Extensions.Hosting.IHostingEnvironment HostingEnvironment { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add your AppInsights ID here to make it globally available //
            services.AddApplicationInsightsTelemetry("9e5cc6db-d8d8-49c5-aa18-d60b4d06196b");

            // string hostCors = Configuration.GetSection("ConnectionStrings")["Cors"];
            
            services.AddCors(options =>
            {
                options.AddPolicy(RicardoGaefkeCors,
                    builder =>
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
                            .SetIsOriginAllowedToAllowWildcardSubdomains()
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowCredentials();
                    }
                );
            });

            //  project's DI
            services.AddSingleton<MyEmail>();

            Bootstrap.Configure(services, Configuration);
            CookiesAuth.Configure(services, Configuration, HostingEnvironment.IsDevelopment());
            
            services.AddControllers();

            services.AddSwaggerDocument();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseOpenApi();
            app.UseSwaggerUi3();

            app.UseCors();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireCors(RicardoGaefkeCors);
            });
        }
    }
}
