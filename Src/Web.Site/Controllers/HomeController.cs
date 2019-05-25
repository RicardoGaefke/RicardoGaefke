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
            ViewData["Message"] = "MI3D Plus";
            
            Request.HttpContext.Response.Headers.Add("Title", "MI3D Plus");
            Request.HttpContext.Response.Headers.Add("Description", "O MI3D &eacute; um m&eacute;todo para desenvolver pessoas, que une tecnologia e ci&ecirc;ncias comportamentais para potencializar a performance profissional");

            ViewBag.Page = JsonConvert.SerializeObject(new {
                Title = "MI3D Plus",
                Description = "O MI3D &eacute; um m&eacute;todo para desenvolver pessoas, que une tecnologia e ci&ecirc;ncias comportamentais para potencializar a performance profissional"
            });
            
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
