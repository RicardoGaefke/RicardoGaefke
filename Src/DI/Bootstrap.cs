using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyApp.Email;

namespace MyApp.DI
{
    public class Bootstrap
    {
        public static void Configure(IServiceCollection services, IHostingEnvironment HostingEnvironment)
        {
            // Add your AppInsights ID here to make it globally available
            services.AddApplicationInsightsTelemetry("465f47b3-8d7a-46ee-a81e-e51182c12296");

            services.AddSingleton<MyEmail>();

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;

                if (HostingEnvironment.IsDevelopment())
                {
                    options.ConsentCookie.Domain = "localhost";
                }
                else
                {
                    options.ConsentCookie.Domain = ".ricardogaefke.com";
                }
            });
        }
    }
}
