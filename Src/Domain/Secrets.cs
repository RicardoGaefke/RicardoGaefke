namespace MyApp.Domain
{
  public class Secrets
  {
    public class ConnectionStrings
    {
      public string SqlServer {get; set;}
      public string Storage {get; set;}
      public string SendGrid {get; set;}
    }
  }
}