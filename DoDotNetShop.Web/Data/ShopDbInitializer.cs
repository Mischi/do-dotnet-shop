using System;
using System.Data.Entity;

using DoDotNetShop.Web.Models;

namespace DoDotNetShop.Web.Data
{
    public class ShopDbInitializer : DropCreateDatabaseAlways<ShopDbContext>
    {
        protected override void Seed(ShopDbContext context)
        {
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Pizza", Price = 6.45M, Description = "with tuna fish", Category = "Food" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Beer", Price = 1.50M, Description = "iced", Category = "Drinks" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Water", Price = 0.50M, Description = "still water", Category = "Drinks" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Lenovo T520", Price = 1500M, Description = "I5, 6GB RAM, SSD", Category = "Hardware" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Lenovo E330", Price = 0.50M, Description = "I5 third gen. , 4GB RAM", Category = "Hardware" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Visual Studio 2012 Ultimate", Price = 0M, Description = "From MSDNAA", Category = "Software" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "AngularJS", Price = 0M, Description = "HTML enhanced for web apps!", Category = "Software" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Grunt", Price = 0M, Description = "The JavaScript Task Runner", Category = "Software" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Karma", Price = 0M, Description = " Testrunner", Category = "Software" });
            context.Products.Add(new Product { Id = Guid.NewGuid(), Name = "Instanbul", Price = 0M, Description = "JS Test Coverage", Category = "Software" });

            base.Seed(context);
        }
    }
}