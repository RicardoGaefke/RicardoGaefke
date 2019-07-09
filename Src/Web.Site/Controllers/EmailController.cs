using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MyApp.Email;

namespace Web.Site.Controllers
{
  [Route("api/email")]
  [ApiController]
  public class EmailController: ControllerBase
  {
    private readonly MyEmail _myEmail;

    public EmailController(MyEmail MyEmail)
    {
      _myEmail = MyEmail;
    }

    [HttpGet]
    public async Task<ActionResult<string>> SendEmail()
    {
      return await _myEmail.SendMail();
    }
  }
}