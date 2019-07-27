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
  public class MyEmail : IMyEmail
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connectionStrings;

    public MyEmail(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connectionStrings = ConnectionStrings;
    }

    // Criar construtor sem as connstr

    public string SendGridConnStr()
    {
      return _connectionStrings.Value.SendGrid;
    }

    public async Task<string> SendMail(Emails emails)
    {
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      SendGridMessage msg = new SendGridMessage();
      msg.SetFrom(new EmailAddress("donotreply@ricardogaefke.com", "Ricardo Gaefke"));
      msg.SetSubject(emails.Subject);

      foreach (Address item in emails.To)
      {
          msg.AddTo(item.Email, item.DisplayName);
      }

      // foreach (Address item in emails.Cc)
      // {
      //   msg.AddCc(item.Email, item.DisplayName);
      // }

      // foreach (Address item in emails.Bc)
      // {
      //   msg.AddBcc(item.Email, item.DisplayName);
      // }
      
      msg.AddContent(MimeType.Html, emails.Body);
            
      Response response = await client.SendEmailAsync(msg);
      
      return response.Headers.GetValues("x-message-id").FirstOrDefault(); ;
    }

    public async Task<string> SendMailMI3D(Emails emails)
    {
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      SendGridMessage msg = new SendGridMessage();
      msg.SetFrom(new EmailAddress("atendimento@mi3dplus.com", "Atendimento MI3D Plus"));
      msg.SetSubject(emails.Subject);

      foreach (Address item in emails.To)
      {
        msg.AddTo(item.Email, item.DisplayName);
      }

      msg.AddContent(MimeType.Html, emails.Body);

      Response response = await client.SendEmailAsync(msg);

      return response.Headers.GetValues("x-message-id").FirstOrDefault(); ;
    }
  }
}