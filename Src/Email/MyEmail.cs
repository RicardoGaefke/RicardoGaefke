using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Options;
using MyApp.Domain;

namespace MyApp.Email
{
  public class MyEmail
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connectionStrings;

  public MyEmail(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
  {
    _connectionStrings = ConnectionStrings;
  }
    public async Task<string> SendMail()
    {
      // string apiKey = "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";
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      SendGridMessage msg = new SendGridMessage();
      msg.SetFrom(new EmailAddress("donotreply@ricardogaefke.com", "Ricardo Gaefke"));
      msg.SetSubject("My SG test");
      msg.AddTo(new EmailAddress("ricardogaefke@gmail.com", "Ricardo Gaefke"));
      msg.AddContent(MimeType.Html, "<strong>and easy to do anywhere, even with C#</strong>");
            
      Response response = await client.SendEmailAsync(msg);
      
      return response.Headers.GetValues("x-message-id").FirstOrDefault(); ;
    }
  }
}