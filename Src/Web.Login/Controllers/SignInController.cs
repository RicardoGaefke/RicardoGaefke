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
      try
      {
        var claims = new List<Claim>
        {
          new Claim(ClaimTypes.Name, "Ricardo Gaefke"),
          new Claim(ClaimTypes.Email, "ricardogaefke@gmail.com"),
          new Claim("Custom", "Ricardo Gaefke"),
          new Claim(ClaimTypes.Role, "Master"),
        };

        var claimsIdentity = new ClaimsIdentity(
          claims,
          CookieAuthenticationDefaults.AuthenticationScheme
        );

        var principal = new ClaimsPrincipal(claimsIdentity);

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
          principal,
          authProperties
        );

        return HttpContext.User.Identity.IsAuthenticated.ToString();
      }
      catch (System.Exception ex)
      {
          return $"errou: {ex.Message}";
      }
      
    }

    [HttpGet("check")]
    public InitialState Check()
    {
      InitialState MyInitialState = new InitialState();

      MyInitialState.isAuthenticated = HttpContext.User.Identity.IsAuthenticated;
      MyInitialState.name = User.Identity.Name;
      MyInitialState.email = User.FindFirst(claim => claim.Type == System.Security.Claims.ClaimTypes.Email)?.Value;
      MyInitialState.language = "ENG";
      MyInitialState.theme = "dark";

      return MyInitialState;
    }

    [HttpGet("out")]
    public async Task<ActionResult<string>> Out()
    {
      await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

      return "saiu";
    }
  }
}