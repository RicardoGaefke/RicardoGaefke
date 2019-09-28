using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json;
using Web.Site.Models;

namespace MyApp.Web.CI.Controllers
{
    //[EnableCors]
    [Authorize]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {   
            ViewData["Title"] = "Ricardo Gaefke";
            
            Request.HttpContext.Response.Headers.Add("Title", "Ricardo Gaefke Login");
            Request.HttpContext.Response.Headers.Add("Description", "ASP.NET Core SSR React login");
            
            ViewBag.Page = JsonConvert.SerializeObject(new {
                Title = "Ricardo Gaefke",
                Description = "Ricardo Gaefke's boilerplate login",
                IsAuthenticated = false,
                Name = "",
                Email = "",
                language = "ENG",
                theme = "dark"
            });
            
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
