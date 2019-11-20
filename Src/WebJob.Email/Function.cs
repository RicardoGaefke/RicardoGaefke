using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
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

    private readonly MyEmail _myEmail;
    public Functions(Secrets.ConnectionStrings ConnectionStrings, MyEmail MyEmail)
    {
      Console.WriteLine("Functions constructor");
      // _connectionStrings = ConnectionStrings;
      _connectionStrings = ConnectionStrings;

      _myEmail = MyEmail;

      Console.WriteLine("SG:" + _myEmail.SendGridConnStr());
    }
    public static async void ProcessQueueMessage([QueueTrigger("email")] string message, ILogger logger)
    {
      try
      {
        var configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddEnvironmentVariables()
        .Build()
      ;

        Secrets.ConnectionStrings myConnStr = new Secrets.ConnectionStrings();
        configuration.GetSection("ConnectionStrings").Bind(myConnStr);

        var apiKey = myConnStr.SendGrid;
        var client = new SendGridClient(apiKey);
        // ok

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
      catch (System.Exception ex)
      {
          logger.LogError(ex.Message);
      }

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
