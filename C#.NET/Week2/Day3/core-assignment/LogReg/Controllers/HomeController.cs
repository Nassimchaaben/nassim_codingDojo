using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using LogReg.Models;

namespace LogReg.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger,MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult CreateUser(User newUser)
    {
        if(ModelState.IsValid)
        {
            User ? UserFromDb = _context.Users.FirstOrDefault(u=>u.Email == newUser.Email);
            if(UserFromDb == null)
            {
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                _context.Add(newUser);
                _context.SaveChanges();
                return RedirectToAction ("Index");
            }
            ModelState.AddModelError("Email","Email already exist");
            return View("Index");
        }
        return View("Index");

    }
    public IActionResult LoginUser(LoginUser LoggedUser)
    {
        if (ModelState.IsValid)
        {
            User ? UserFromDb = _context.Users.FirstOrDefault(u=>u.Email == LoggedUser.LoginEmail);
            if (UserFromDb == null)
            { 
            ModelState.AddModelError("LoginEmail","Email already Not exist");
            return View("Index");
            }
            var hasher = new PasswordHasher<LoginUser>();
            var result = hasher.VerifyHashedPassword(LoggedUser, UserFromDb.Password, LoggedUser.LoginPassword);
            if(result == 0)
            {
                ModelState.AddModelError("LoginPassword","Password  Not Mutch");
                return View("Index");
            }
            return RedirectToAction("Index");
        }
        return View("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
