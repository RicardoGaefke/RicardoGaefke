using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;

namespace MyApp.DI
{
    public class CookiesAuth
    {
        public static void Configure(IServiceCollection services, IConfiguration Configuration, bool IsDev)
        {
            services
                .AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(options =>
                {
                    options.Cookie.Name = "ricardogaefke";
                    options.Cookie.IsEssential = true;
                    options.Cookie.HttpOnly = true;
                    options.Cookie.SameSite = SameSiteMode.None;

                    if (IsDev)
                    {
                        options.Cookie.Domain = "localhost";
                        options.Events = new CookieAuthenticationEvents()
                        {
                            OnRedirectToLogin = (context) =>
                            {
                                context.HttpContext.Response.Redirect("https://localhost:5055?ReturnUrl=" + context.Request.Host.Value);
                                // context.HttpContext.Response.StatusCode = 401;
                                return Task.CompletedTask;
                            },
                            OnSignedIn = (context) =>
                            {
                                // context.HttpContext.Response.Redirect("https://localhost:5060/");
                                return Task.CompletedTask;
                            }
                        };
                    }
                    else
                    {
                        options.Cookie.Domain = ".ricardogaefke.com";
                        options.Events = new CookieAuthenticationEvents()
                        {
                            OnRedirectToLogin = (context) =>
                            {
                                context.HttpContext.Response.Redirect("https://login.ricardogaefke.com?ReturnUrl=https://" + context.Request.Host.Value);
                                // context.HttpContext.Response.StatusCode = 401;
                                return Task.CompletedTask;
                            },
                            OnSignedIn = (context) =>
                            {
                                // context.HttpContext.Response.Redirect("https://ci.ricardogaefke.com");
                                return Task.CompletedTask;
                            }
                        };
                    }
                })
            ;
        }
    }
}