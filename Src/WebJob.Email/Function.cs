using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Collections.Generic;
using SendGrid;
using SendGrid.Helpers.Mail;
using Newtonsoft.Json;
using MyApp.Domain;

namespace MyApp.WebJob.Email
{ 
  public class Functions
  {
    private static Secrets.ConnectionStrings _connectionStrings;
    public Functions(Secrets.ConnectionStrings ConnectionStrings)
    {
      Console.WriteLine("Functions constructor");
      _connectionStrings = ConnectionStrings;
    }
    public static async void ProcessQueueMessage([QueueTrigger("email")] string message, ILogger logger)
    {
      var apiKey = _connectionStrings.SendGrid;
      var client = new SendGridClient(apiKey);

      MyEmails email = JsonConvert.DeserializeObject<MyEmails>(message);

      var msg = new SendGridMessage();
      msg.SetFrom(new EmailAddress("suporte@mi3dplus.com", "Suporte MI3D Plus"));
      msg.SetSubject(email.Subject);
      msg.AddContent(MimeType.Html, email.Body);
      msg.AddTo(new EmailAddress(email.To.First().Address, email.To.First().DisplayName));
      msg.AddCc(new EmailAddress("coachcarlosdesouza@hotmail.com", "Carlos de Souza"));

      var response = await client.SendEmailAsync(msg);

      string mId = response.Headers.GetValues("x-message-id").FirstOrDefault();

      logger.LogInformation(mId);
    }
  }

  public class MyEmails
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
