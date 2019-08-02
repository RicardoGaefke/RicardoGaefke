using System;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyApp.Email;
using MyApp.Domain;

namespace MyApp.WebJob.Email
{
    class Program
    {
        public static void Main(string[] args)
        {
            Secrets.ConnectionStrings myConfig = new Secrets.ConnectionStrings();
            
            var builder = new HostBuilder()
            .ConfigureAppConfiguration((hostingContext, config) =>
            {
                config.AddJsonFile("appsettings.json", optional: true);
                config.AddEnvironmentVariables();
            })
            .ConfigureServices((hostContext, services) =>
            {
                hostContext.Configuration.GetSection("CUSTOMCONNSTR_ConnectionStrings").Bind(myConfig);
                services.AddOptions<Secrets.ConnectionStrings>()
                    .Bind(hostContext.Configuration.GetSection("CUSTOMCONNSTR_ConnectionStrings"));
                
                services.AddSingleton<Functions>(new Functions(myConfig));
                services.AddSingleton<IMyEmail, MyEmail>();
                services.Configure<Secrets.ConnectionStrings>(hostContext.Configuration.GetSection("CUSTOMCONNSTR_ConnectionStrings"));
                // services.AddSingleton<Functions, Functions>();
            })
            .ConfigureWebJobs(b =>
            {
                b.AddAzureStorageCoreServices();
                b.AddAzureStorage();
            })
            .ConfigureLogging((context, b) =>
            {
                b.AddConsole();
                string instrumentationKey = context.Configuration["APPINSIGHTS_INSTRUMENTATIONKEY"];
                if (!string.IsNullOrEmpty(instrumentationKey))
                {
                    b.AddApplicationInsights(o => o.InstrumentationKey = instrumentationKey);
                }
            })
            .UseConsoleLifetime();

            var host = builder.Build();
            
            using (host)
            {
                host.Run();
            }
        }
    }
}
