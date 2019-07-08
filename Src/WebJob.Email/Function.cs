using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace WebJobsSDKSample
{
  public class Functions
  {
    public static async void ProcessQueueMessage([QueueTrigger("email")] string message, ILogger logger)
    {
      var apiKey = "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";
      var client = new SendGridClient(apiKey);

      var msg = new SendGridMessage();
      msg.SetFrom(new EmailAddress("suporte@mi3dplus.com", "Suporte MI3D Plus"));
      msg.SetSubject("Email da plataforma");
      msg.AddContent(MimeType.Html, "<strong>Assim serão as chaves</strong>");
      msg.AddTo(new EmailAddress("ricardogaefke@gmail.com", "Ricardo Gaefke"));
      msg.AddCc(new EmailAddress("coachcarlosdesouza@hotmail.com", "Carlos de Souza"));

      var response = await client.SendEmailAsync(msg);

      string mId = response.Headers.GetValues("x-message-id").FirstOrDefault();
      
      logger.LogInformation(mId);
    }
  }
}
