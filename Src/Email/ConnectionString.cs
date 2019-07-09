using Microsoft.Extensions.Options;
using MyApp.Domain;

namespace MyApp.Email
{
    public class ConnectionStrings
    {
        private readonly IOptions<Secrets.ConnectionStrings> _connectionStrings;

        public ConnectionStrings(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
        {
            _connectionStrings = ConnectionStrings;
        }

        public string SendGrid()
        {
            return _connectionStrings.Value.SendGrid;
        }
    }
}