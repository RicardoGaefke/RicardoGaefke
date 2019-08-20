using System.Collections.Generic;

namespace MyApp.Domain
{
  public class User
  {
    public int Id {get; set;}
    public string Name {get; set;}
    public string Email {get; set;}
    public string Password {get; set;}
    public bool KeepConnected {get; set;}
    public List<string> Roles {get; set;}

    public User(string email, string password, bool keepConnected)
    {
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");
      DomainException.When(!string.IsNullOrEmpty(password), "Password is required!");

      this.Email = email;
      this.Password = password;
      this.KeepConnected = keepConnected;
    }
  }
}