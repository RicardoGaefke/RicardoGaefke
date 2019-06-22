using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Web.Site.Models;

namespace Web.Site.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Ricardo Gaefke";
            
            Request.HttpContext.Response.Headers.Add("Title", "Ricardo Gaefke");
            Request.HttpContext.Response.Headers.Add("Description", "ASP.NET Core SSR React boilerplate");
            
            ViewBag.Page = JsonConvert.SerializeObject(new {
                Title = "Ricardo Gaefke",
                Description = "Ricardo Gaefke's boilerplate"
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
