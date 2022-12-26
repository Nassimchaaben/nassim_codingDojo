using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PassCode.Models;
using Microsoft.AspNetCore.Http;

namespace PassCode.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index(Generator Newcode)
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
    [HttpPost("generate")]
    public IActionResult Generate (Passcode NewCode)
    {
        static int count(int code ){
            return code+=1;
        }
        NewCode.Code=RandomString(14);
        NewCode.Count=count(NewCode.count);
        HttpContext.Session.SetInt32("count",NewCode);
        return RedirectToAction("Index",NewCode);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
