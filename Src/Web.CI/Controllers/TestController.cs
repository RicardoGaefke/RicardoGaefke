using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http.Features;
using System.Security.Claims;
using MyApp.Domain;


namespace MyApp.Web.CI.Controllers
{
  [Route("api/test")]
  [ApiController]
  public class TestController : ControllerBase
  {
    [HttpGet("in")]
    public string In()
    {
      return "Testando";
    }
  }
}