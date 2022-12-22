namespace DOJOSURVEY.Controllers;
using Microsoft.AspNetCore.Mvc;
public class DojoContoller : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        return View("Index");
    }

    [HttpGet]
    [Route("Second/user")]
    public ViewResult Second()
    {
        return View("SecondView");
    }
 

    [HttpPost]
    [Route("process")]
    public IActionResult Process(string Name, string location, string language, string comment)
    {
        if (Name == null){
            return View("Index");
        }
        ViewBag.Name = Name;
        ViewBag.location  =location;
        ViewBag.language = language;
        ViewBag.comment = comment;
        
        return RedirectToAction("Second");
    }
}