using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using MyApp.Email;
using MyApp.Domain;

namespace MyApp.Web.Site.Controllers
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
    public async Task<ActionResult<object>> SendEmail()
    {
      try
      {
        Address myAddress = new Address("Ricardo Gaefke", "ricardogaefke@gmail.com");
        Address myAddressCarlos = new Address("Carlos", "coachcarlosdesouza@hotmail.com");

        List<Address> myTo = new List<Address>();
        myTo.Add(myAddress);
        myTo.Add(myAddressCarlos);

        Emails myMsg = new Emails("Ricardo Gaefke, Contact", myTo, "Mensagem a ser <strong>enviada pelo MI3D</strong>");

        return await _myEmail.SendMailMI3D(myMsg);
        // return myMsg;
      }
      catch (System.Exception ex)
      {
          return ex.Message + " - " + ex.StackTrace;
      }
    }

    [HttpGet("sendgrid")]
    public string GetSendGrid(long id)
    {
      return _myEmail.SendGridConnStr().Substring(0, 35);
    }
  }
}