using System.Data.Entity;

using DoDotNetShop.Web.Models;

namespace DoDotNetShop.Web.Data
{
    public class ShopDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
    }
}