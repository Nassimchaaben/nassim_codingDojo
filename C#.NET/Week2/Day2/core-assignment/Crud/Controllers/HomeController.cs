#pragma warning disable CS8618
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Crud.Models;

namespace Crud.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
        
    }
    [HttpGet("")]
    public IActionResult Index()
    {
         return View(_context.Dishes.OrderByDescending(d => d.CreatedAt));
    }
   [HttpGet("dishes/New")]
    public IActionResult AddDisch() => View();

    public IActionResult PrivaAcy()
    {
        return View();
    }
        
   [HttpPost("create")]
        public IActionResult Create(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                _context.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("AddDisch");
        }

    [HttpGet ("Dishes/{DishId}")]
    public IActionResult Show(int DishId)
    {
         Dish? model = _context.Dishes.FirstOrDefault(d => d.DishId == DishId);
            if(model == null)
                return RedirectToAction("Index");
            return View(model);
    }

     [HttpGet("Home/delete/{DishId}")]
    public IActionResult DeleteDish(int DishId)
    {
       

        Dish? DishToDelete = _context.Dishes.SingleOrDefault(s=> s.DishId == DishId);
        _context.Dishes.Remove(DishToDelete);
        _context.SaveChanges();
        
        return RedirectToAction("Index");
        
        
    }

     [HttpGet("Home/edit/{dishId}")]
        public IActionResult Edit(int dishId)
        {
            Dish? model = _context.Dishes.FirstOrDefault(d => d.DishId == dishId);
            if(model == null)
                return RedirectToAction("Index");
            return View(model);
        }
     [HttpPost("Home/update/{dishId}")]
        public IActionResult Update(Dish dish, int dishId)
        {
            Dish? toUpdate = _context.Dishes.FirstOrDefault(d => d.DishId == dishId);
            if(ModelState.IsValid)
            {
                toUpdate.Name = dish.Name;
                toUpdate.Chef = dish.Chef;
                toUpdate.Tastiness = dish.Tastiness;
                toUpdate.Calories = dish.Calories;
                toUpdate.Description = dish.Description;
                toUpdate.UpdatedAt = DateTime.Now;
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("Edit", dish);
        }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
