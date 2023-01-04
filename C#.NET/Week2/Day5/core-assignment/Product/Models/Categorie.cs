#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
namespace Product.Models;

public class Categorie
{
     [Key]
    public int CategorieId {get;set;}
    [Required]
    [MinLength(2)]
    [MaxLength(45)]
    public string Name {get;set;}
    
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    public List<Association> ProductLinked {get;set;} = new List<Association>();
}
