using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Collections.Generic;
using SendGrid;
using SendGrid.Helpers.Mail;
using Newtonsoft.Json;
using MyApp.Domain;
using MyApp.Email;

namespace MyApp.WebJob.Email
{ 
  public class Functions
  {
    // private static IOptions<Secrets.ConnectionStrings> _connectionStrings;
    private static Secrets.ConnectionStrings _connectionStrings;
    private static IServiceProvider _serviceProvider;
    public Functions(Secrets.ConnectionStrings ConnectionStrings)
    {
      Console.WriteLine("Functions constructor");
      // _connectionStrings = ConnectionStrings;
      _connectionStrings = ConnectionStrings;
    }
    public static async void ProcessQueueMessage([QueueTrigger("email")] string message, ILogger logger)
    {
      // var apiKey = "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";
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

      // RegisterServices();

      // List<MyApp.Domain.Address> myAdd = new List<MyApp.Domain.Address>();
      // MyApp.Domain.Address MyNewAdd = new MyApp.Domain.Address("Ricardo Teste Gaefke", "ricardogaefke@gmail.com");
      // myAdd.Add(MyNewAdd);

      // MyApp.Domain.Emails myEm = new MyApp.Domain.Emails(email.Subject, myAdd, email.Body);

      // var myEmail = _serviceProvider.GetService<IMyEmail>();
      // string mymId = await myEmail.SendMailMI3D(myEm);

      // logger.LogInformation(mymId);

      // DisposeServices();
    }

    private static void RegisterServices()
    {
      Console.WriteLine("Register services");
      var collection = new ServiceCollection();
      collection.AddScoped<IMyEmail, MyEmail>();
      _serviceProvider = collection.BuildServiceProvider();
    }

    private static void DisposeServices()
    {
      if (_serviceProvider == null)
      {
        Console.WriteLine("nothing to dispose");
        return;
      }
      if (_serviceProvider is IDisposable)
      {
        Console.WriteLine("dispose services");
        ((IDisposable)_serviceProvider).Dispose();
      }
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
