using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Cors;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Security.Claims;
using MyApp.Domain;


namespace MyApp.Web.CI.Controllers
{
  [Route("api/test")]
  [ApiController]
  public class TestController : ControllerBase
  {
    [EnableCors]
    [HttpGet("in")]
    public string In()
    {
      return "Testando";
    }
  }
}