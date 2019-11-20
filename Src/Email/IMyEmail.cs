using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using MyApp.Domain;

public interface IMyEmail
{
  Task<string> SendMail(Emails emails);
  Task<object> SendMailMI3D(Emails emails);
}