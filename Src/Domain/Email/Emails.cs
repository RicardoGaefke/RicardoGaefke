using System.Collections.Generic;

namespace MyApp.Domain
{
  public class Emails
  {
    public string Subject;
    public Address From;
    public IEnumerable<Address> To;
    public IEnumerable<Address> Cc;
    public IEnumerable<Address> Bc;
    public string Body;
  }

  public class Address
  {
    public string DisplayName;
    public string Email;
  }
}