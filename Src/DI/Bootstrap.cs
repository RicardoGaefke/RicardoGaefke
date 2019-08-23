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
                options.EventsType = typeof(CustomCookieAuthenticationEvents);
                
                if (HostingEnvironment.IsDevelopment())
                {
                    options.Cookie.Domain = "localhost";
                    options.Cookie.SameSite = SameSiteMode.Lax;
                }
                else
                {
                    options.Cookie.Domain = ".ricardogaefke.com";
                    options.Events = new CookieAuthenticationEvents()
                    {
                        OnRedirectToLogin = (context) =>
                        {
                            context.HttpContext.Response.Redirect("https://login.ricardogaefke.com");
                            return Task.CompletedTask;
                        }
                    };
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

            services.AddScoped<CustomCookieAuthenticationEvents>();

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
                Secrets.Login myLogin = new Secrets.Login();
                Configuration.GetSection("login").Bind(myLogin);
                
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
}
