using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using MyApp.Domain;

public interface IMyEmail
{
  Task<string> SendMail(Emails emails);
  Task<string> SendMailMI3D(Emails emails);
}