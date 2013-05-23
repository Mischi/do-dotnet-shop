using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DoDotNetShop.Web.Models
{
    public class ShopDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
    }
}