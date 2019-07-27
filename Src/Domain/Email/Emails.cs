using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace MyApp.Domain
{
  public class Emails
  {
    public string Subject { get; private set; }
    public Address From { get; private set; }
    public IEnumerable<Address> To { get; private set; }
    public IEnumerable<Address> Cc { get; private set; }
    public IEnumerable<Address> Bc { get; private set; }
    public string Body { get; private set; }

    public Emails(string subject, IEnumerable<Address> to, string body)
    {
      DomainException.When(!string.IsNullOrEmpty(subject), "Subject is required!");
      DomainException.When(to.Count() > 0, "Email receiver is required!");
      DomainException.When(!string.IsNullOrEmpty(body), "Body is required!");

      Subject = subject;
      To = to;
      Body = body;
    }

    public Emails(string subject, IEnumerable<Address> to, IEnumerable<Address> cc, string body)
    {
      DomainException.When(!string.IsNullOrEmpty(subject), "Subject is required!");
      DomainException.When(to.Count() == 0, "Email receiver is required!");
      DomainException.When(cc.Count() == 0, "Email copied receiver is required!");
      DomainException.When(!string.IsNullOrEmpty(body), "Body is required!");

      Subject = subject;
      To = to;
      Cc = cc;
      Body = body;
    }
  }

  public class Address
  {
    public string DisplayName { get; private set; }
    public string Email { get; private set; }

    public Address (string displayName, string email)
    {
      DomainException.When(!string.IsNullOrEmpty(displayName), "DisplayName is required!");
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");

      DisplayName = displayName;
      Email = email;
    }
  }
}