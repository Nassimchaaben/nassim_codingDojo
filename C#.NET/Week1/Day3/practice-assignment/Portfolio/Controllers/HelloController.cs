using Microsoft.AspNetCore.Mvc;
namespace PORTFOLIO.Controllers;     //be sure to use your own project's namespace!
    public class HelloController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("/index")]     //associated route string (exclude the leading /)
        public string Index()
        {
            return "This is my Index !";
        }

         [HttpGet]       //type of request
        [Route("/projects")]     //associated route string (exclude the leading /)
        public string Second()
        {
            return "These are my project";
        }

         [HttpGet]       //type of request
        [Route("/contact")]     //associated route string (exclude the leading /)
        public string Third()
        {
            return "This is my contact";
        }
    }