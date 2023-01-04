using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Product.Models;
using Microsoft.EntityFrameworkCore;

namespace Product.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger , MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        ViewBag.AllProduct = _context.Products.ToList();
        return View();
    }

    public IActionResult Privacy()
    {
        ViewBag.AllCategory = _context.Categories.ToList();
        return View();
    }

    //  public IActionResult Show()
    // {
    //     ViewBag.AllCategory = _context.Categories.ToList();
    //     ViewBag.AllProduct = _context.Products.ToList();
    //     return View();
    // }
    [HttpPost("product/add")]
     public IActionResult CreateProduct(Produit newProduit)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newProduit);
            _context.SaveChanges();
            ViewBag.AllProduct = _context.Products.ToList();
            return RedirectToAction("Index");
        }
        return View("Index");

    }
    [HttpPost("category/add")]
     public IActionResult CreateCategory(Categorie newCategory)
    {
        if(ModelState.IsValid)
        {
        Categorie ? CatFromDb = _context.Categories.FirstOrDefault(u=>u.Name == newCategory.Name);
        if(CatFromDb==null)
        {
            _context.Add(newCategory);
            _context.SaveChanges();
            ViewBag.AllCategory = _context.Categories.ToList();
            return RedirectToAction("Privacy");
        }
        ModelState.AddModelError("Name","Category already exist");
        ViewBag.AllCategory = _context.Categories.ToList();
        return View("Privacy");
        }
      
        return View("Privacy");

    }
    [HttpGet ("Home/product/{ProductId}")]
      
    public IActionResult Show(int ProductId)
    {
        ViewBag.OneProdWithCategories = _context.Products.Include(p=>p.CategorieLinked).ThenInclude(a=>a.Categorie).FirstOrDefault(p => p.ProductId == ProductId);
        ViewBag.AllCategory = _context.Categories.ToList();
        return View();
    }
      public void addCattoProd(int ProductId , Association newone)
    {
        newone.ProductId=ProductId;
        _context.Add(newone);
        _context.SaveChanges();

        Response.Redirect($"product/{ProductId}");
        
    }
       [HttpGet("Home/categories/{CategorieId}")]
    public IActionResult ShowCat(int CategorieId)
    {
        ViewBag.OneCat=_context.Categories.Include(c=>c.ProductLinked).ThenInclude(c=>c.Product).FirstOrDefault(c=>c.CategorieId==CategorieId);
        ViewBag.AllProduct = _context.Products.ToList();
        return View();
    }
      [HttpPost("{CategorieId}")]
    public void Create(int CategorieId , Association newone)
    {
        newone.CategorieId=CategorieId;
        _context.Add(newone);
        _context.SaveChanges();
        Response.Redirect($"Home/categories/{CategorieId}");
    }



    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
