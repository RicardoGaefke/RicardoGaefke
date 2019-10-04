using System;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using MyApp.Domain;

namespace MyApp.DI
{
    public class Bootstrap
    {
        public static void Configure(IServiceCollection services, IConfiguration Configuration)
        {
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
