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
            string hostCors = Configuration.GetSection("ConnectionStrings")["Cors"];
            
            services.AddCors(options =>
            {
                options.AddPolicy(RicardoGaefkeCors,
                    builder =>
                    {
                        builder
                            .WithOrigins(
                                hostCors
                            )
                            .SetIsOriginAllowedToAllowWildcardSubdomains()
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowCredentials();
                    }
                );
            });

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

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireCors(RicardoGaefkeCors);
            });
        }
    }
}
