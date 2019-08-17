using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.Cookies;
using MyApp.Email;
using MyApp.Domain;

namespace MyApp.DI
{
    public class Bootstrap
    {
        public static void Configure(IServiceCollection services, IHostingEnvironment HostingEnvironment, IConfiguration Configuration)
        {
            // Add your AppInsights ID here to make it globally available
            services.AddApplicationInsightsTelemetry("465f47b3-8d7a-46ee-a81e-e51182c12296");

            services.AddSingleton<MyEmail>();

            services.AddNodeServices();

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            .AddCookie(options =>
            {
                if (HostingEnvironment.IsDevelopment())
                {
                options.Cookie.Domain = "localhost";
                }
                else
                {
                options.Cookie.Domain = ".ricardogaefke.com";
                }

                options.Cookie.Name = "ricardogaefke";
                options.Cookie.IsEssential = true;
                options.Cookie.HttpOnly = true;
                options.Cookie.SecurePolicy = CookieSecurePolicy.Always;

                options.Events.OnRedirectToLogin = (context) =>
                    {
                    context.Response.StatusCode = 401;
                    return Task.CompletedTask;
                };
            });

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

            if (HostingEnvironment.IsDevelopment())
            {
                services.AddDataProtection();
            }
            else
            {
                services.AddDataProtection()
                    .SetApplicationName("ricardogaefke")
                    .PersistKeysToAzureBlobStorage(new Uri("https://ricardogaefke.blob.core.windows.net/ricardogaefke-login/keys.xml?sp=rcw&st=2019-08-17T02:22:19Z&se=2030-08-17T10:22:19Z&spr=https&sv=2018-03-28&sig=vgQ0IHHjtJe6zAbIT3rgibVuulQfy59GJYEjUERB7Yg%3D&sr=b"))
                    .ProtectKeysWithAzureKeyVault(
                        "https://ricardogaefke.vault.azure.net/keys/ricardogaefke-login/",
                        "116095b6-cd59-4de7-af03-6f7f3615729d",
                        "oowc2QhH8I_k+KzATqUp0UCx.6CJ*G-w"
                    )
                ;
            }
        }
    }
}
