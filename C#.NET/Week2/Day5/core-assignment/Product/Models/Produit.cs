#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
namespace Product.Models;

public class Produit 
{
     [Key]
    public int ProductId {get;set;}
    [Required]
    [MinLength(2)]
    [MaxLength(45)]
    public string Name {get;set;}
    [Required]
    [MinLength(2)]
    [MaxLength(255)]
    public string Description {get;set;}
    [Required]
    public double Price {get;set;} 

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    public List<Association> CategorieLinked {get;set;} = new List<Association>();
    
}