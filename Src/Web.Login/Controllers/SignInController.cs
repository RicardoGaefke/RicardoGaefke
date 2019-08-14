using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using MyApp.Domain;

namespace MyApp.Web.Login.Controllers
{
  [Route("api/sign")]
  [ApiController]
  public class SignInController : ControllerBase
  {
    [HttpGet("in")]
    public async Task<ActionResult<string>> In()
    {
      var claims = new List<Claim>
      {
        new Claim(ClaimTypes.Name, "ricardogaefke@gmail.com"),
        new Claim("UserName", "Ricardo Gaefke"),
        new Claim(ClaimTypes.Role, "Master"),
      };

      var claimsIdentity = new ClaimsIdentity(
        claims
      );

      var authProperties = new AuthenticationProperties
      {
        AllowRefresh = true,
        // Refreshing the authentication session should be allowed.

        //ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10),
        // The time at which the authentication ticket expires. A 
        // value set here overrides the ExpireTimeSpan option of 
        // CookieAuthenticationOptions set with AddCookie.

        IsPersistent = true,
        // Whether the authentication session is persisted across 
        // multiple requests. When used with cookies, controls
        // whether the cookie's lifetime is absolute (matching the
        // lifetime of the authentication ticket) or session-based.

        //IssuedUtc = <DateTimeOffset>,
        // The time at which the authentication ticket was issued.

        //RedirectUri = <string>
        // The full path or absolute URI to be used as an http 
        // redirect response value.
      };

      await HttpContext.SignInAsync(
        CookieAuthenticationDefaults.AuthenticationScheme,
        new ClaimsPrincipal(claimsIdentity),
        authProperties
      );

      return "entrou";
    }

    [HttpGet("check")]
    public bool Check()
    {
      return HttpContext.User.Identity.IsAuthenticated;
    }

    [HttpGet("out")]
    public async Task<ActionResult<string>> Out()
    {
      await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

      return "saiu";
    }
  }
}