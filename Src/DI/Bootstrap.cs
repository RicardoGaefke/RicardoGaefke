using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DI
{
    public class Bootstrap
    {
        public static void Configure(IServiceCollection services)
        {
            // Add your AppInsights ID here to make it globally available
            services.AddApplicationInsightsTelemetry("");

                //services.AddSingleton<Pages>();
        }
    }
}
