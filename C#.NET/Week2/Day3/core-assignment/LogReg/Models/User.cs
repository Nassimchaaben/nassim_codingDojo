using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LogReg.Models;

public class User 
{
    [Key]
    public int UserId {get;set;}
    [Required]
    [MinLength(2)]
    public string FirstName {get;set;}
    [Required]
    [MinLength(2)]
    public string LastName {get;set;}
    [Required]
    [EmailAddress]
    public string Email {get;set;} 
    [Required]
    [MinLength(8)]
    [DataType("Password")]
    public string Password {get;set;}

    [Required]
    [MinLength(8)]
    [DataType("Password")]
    [NotMapped]
    [Compare("Password")]
    public string ComfirmPassword {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;



}