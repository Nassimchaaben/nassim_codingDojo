#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Crud.Models;
public class Dish
{
    [Key]
    public int DishId { get; set; }
    [Required]
    [Display(Name="Name of Dish ")]
    [MaxLength(45)]
    public string Name { get; set; } 
    [Required]
    [Display(Name="Chef's Name")]
    [MaxLength(45)]
    public string Chef { get; set; }
    [Required]
    [Display(Name="Tastiness")]
    [Range(1,6)]
    
    public int Tastiness { get; set; }
    [Required]
    [Range(1,Int32.MaxValue)]
    [Display(Name="# of Calories")]
    
    public int Calories { get; set; }
    [Required]
    [MaxLength(255)]
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}