using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;
using Newtonsoft.Json;

namespace WebJobsSDKSample
{
  public class Functions
  {
    public static async void ProcessQueueMessage([QueueTrigger("email")] string message, ILogger logger)
    {
      var apiKey = "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";
      var client = new SendGridClient(apiKey);

      MyEmail email = JsonConvert.DeserializeObject<MyEmail>(message);

      var msg = new SendGridMessage();
      msg.SetFrom(new EmailAddress("atendimento@mi3dplus.com", "Atendimento MI3D Plus"));
      msg.SetSubject(email.Subject);
      msg.AddContent(MimeType.Html, email.Body);
      msg.AddTo(new EmailAddress(email.To.First().Address, email.To.First().DisplayName));
      msg.AddCc(new EmailAddress("coachcarlosdesouza@hotmail.com", "Carlos de Souza"));

      var response = await client.SendEmailAsync(msg);

      string mId = response.Headers.GetValues("x-message-id").FirstOrDefault();
      
      logger.LogInformation(mId);
    }
  }

  public class MyEmail
  {
    public string Subject;
    public IEnumerable<MyAddress> To;
    public string Body;
  }

  public class MyAddress
  {
    public string DisplayName;
    public string Address;
  }
}
