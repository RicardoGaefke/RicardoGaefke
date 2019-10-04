using System;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using MyApp.Domain;

namespace MyApp.DI
{
    public class Bootstrap
    {
        public static void Configure(IServiceCollection services, IConfiguration Configuration)
        {
            // Add your AppInsights ID here to make it globally available //
            services.AddApplicationInsightsTelemetry("465f47b3-8d7a-46ee-a81e-e51182c12296");

            Secrets.Login myLogin = new Secrets.Login();
            Configuration.GetSection("ConnectionStrings").Bind(myLogin);

            services.AddDataProtection()
                .SetApplicationName("ricardogaefke")
                .PersistKeysToAzureBlobStorage(new Uri(myLogin.Blob))
                .ProtectKeysWithAzureKeyVault(
                    myLogin.KeyVault,
                    myLogin.ClientID,
                    myLogin.ClientSecret
                )
            ;
        }
    }
}
