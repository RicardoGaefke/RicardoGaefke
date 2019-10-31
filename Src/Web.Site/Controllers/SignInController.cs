using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http.Features;
using System.Security.Claims;
using MyApp.Domain;

namespace MyApp.Web.Login.Controllers
{
  [Route("api/sign")]
  [ApiController]
  public class SignInController : ControllerBase
  {
    [HttpGet("check")]
    public InitialState Check()
    {
      var consentFeature = HttpContext.Features.Get<ITrackingConsentFeature>();
      var showBanner = !consentFeature?.CanTrack ?? false;
      
      InitialState MyInitialState = new InitialState();

      MyInitialState.isAuthenticated = HttpContext.User.Identity.IsAuthenticated;
      MyInitialState.Name = User.Identity.Name;
      MyInitialState.Email = User.FindFirst(claim => claim.Type == System.Security.Claims.ClaimTypes.Email)?.Value;
      MyInitialState.language = "ENG";
      MyInitialState.theme = "dark";
      MyInitialState.consentCookie = showBanner;

      return MyInitialState;
    }
  }
}