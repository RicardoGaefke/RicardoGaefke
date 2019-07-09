using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyApp.Email;

namespace MyApp.DI
{
    public class Bootstrap
    {
        public static void Configure(IServiceCollection services)
        {
            // Add your AppInsights ID here to make it globally available
            services.AddApplicationInsightsTelemetry("465f47b3-8d7a-46ee-a81e-e51182c12296");

            services.AddSingleton<MyEmail>();
        }
    }
}
