using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;
using Newtonsoft.Json;
using MyApp.Domain;
using MyApp.Email;

namespace MyApp.WebJob.Email
{
  public class Functions
  {
    // private readonly IServiceProvider _serviceProvider;
    private readonly IOptions<Secrets.ConnectionStrings> _connectionStrings;

    public Functions(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connectionStrings = ConnectionStrings;

      Console.WriteLine("Simple line");
      Console.WriteLine($"Functions constructor: ${_connectionStrings.Value.SendGrid}");
    }

    public async void ProcessQueueMessage([QueueTrigger("email")] string message, ILogger logger)
    {
      try
      {
        MI3DEmail email = JsonConvert.DeserializeObject<MI3DEmail>(message);
        string dn = email.To.First().DisplayName;

        if (string.IsNullOrEmpty(dn))
          dn = email.To.First().User;

        Address myAddress = new Address(dn, email.To.First().Address);
        List<Address> myTo = new List<Address>();
        myTo.Add(myAddress);

        Emails myMessage = new Emails(email.Subject, myTo, email.Body);

        // RegisterServices();

        Console.WriteLine($"SG ConnStr: {_connectionStrings.Value.SendGrid};");
      }
      catch (System.Exception ex)
      {
          Console.WriteLine(ex.Message);
          Console.WriteLine(ex.StackTrace);
      }
      
      

      // var myEmail = _serviceProvider.GetService<IMyEmail>();
      // string mId = await myEmail.SendMailMI3D(myMessage);

      // logger.LogInformation(mId);
      // Console.WriteLine(mId);

      // DisposeServices();

      // logger.LogInformation(mId);
      // string mId = await _myEmail.SendMail(email.Subject, myAddress, email.Body);
      
      // var apiKey = "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";
      // var client = new SendGridClient(apiKey);

      // var msg = new SendGridMessage();
      // msg.SetFrom(new EmailAddress("atendimento@mi3dplus.com", "Atendimento MI3D Plus"));
      // msg.SetSubject(email.Subject);
      // msg.AddContent(MimeType.Html, email.Body);
      // msg.AddTo(new EmailAddress(email.To.First().Address, email.To.First().DisplayName));
      // msg.AddCc(new EmailAddress("coachcarlosdesouza@hotmail.com", "Carlos de Souza"));

      // var response = await client.SendEmailAsync(msg);

      // string mId = response.Headers.GetValues("x-message-id").FirstOrDefault();
      
    }

    // private static void RegisterServices()
    // {
    //   var collection = new ServiceCollection();
    //   collection.AddScoped<IMyEmail, MyEmail>();
    //   _serviceProvider = collection.BuildServiceProvider();
    // }

    // private static void DisposeServices()
    // {
    //   if (_serviceProvider == null)
    //   {
    //     Console.WriteLine("nothing to dispose");
    //     return;
    //   }
    //   if (_serviceProvider is IDisposable)
    //   {
    //     Console.WriteLine("dispose services");
    //     ((IDisposable)_serviceProvider).Dispose();
    //   }
    // }
  }

  public class MI3DEmail
  {
    public string Subject;
    public IEnumerable<MI3DAddress> To;
    public string Body;
  }

  public class MI3DAddress
  {
    public string DisplayName;
    public string User;
    public string Address;
  }
}
