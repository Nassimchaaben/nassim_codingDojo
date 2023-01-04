#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
namespace Product.Models;

public class Association
{
     [Key]
    public int AssociationId {get;set;}
    
    public int ProductId {get;set;}
    public Produit ? Product{get;set;}
    public int CategorieId {get;set;}
    public Categorie ? Categorie {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}
