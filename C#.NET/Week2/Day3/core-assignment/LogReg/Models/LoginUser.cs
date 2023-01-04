using System.ComponentModel.DataAnnotations;
namespace LogReg.Models;

public class LoginUser 
{
  
    [Required]
    [EmailAddress]
    public string LoginEmail {get;set;} 
    [Required]
    [MinLength(8)]
    [DataType("Password")]
    public string LoginPassword {get;set;}

}