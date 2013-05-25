using System;
using System.ComponentModel.DataAnnotations;

namespace DoDotNetShop.Web.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        
        [Required]
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual decimal Price { get; set; }
        public virtual string Category { get; set; }
    }
}