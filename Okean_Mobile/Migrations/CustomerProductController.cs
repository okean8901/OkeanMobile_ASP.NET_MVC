using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Okean_Mobile.Data;
using Okean_Mobile.Models;
using System.Threading.Tasks;
using System.Linq;

namespace Okean_Mobile.Migrations
{
    [Authorize(Roles = "Customer")]
    public class CustomerProductController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CustomerProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: CustomerProduct
        public async Task<IActionResult> Index(int? categoryId, string searchString, string sortOrder)
        {
            var products = _context.Products
                .Include(p => p.Category)
                .Where(p => p.IsActive);

            if (categoryId.HasValue)
            {
                products = products.Where(p => p.CategoryId == categoryId);
            }

            if (!string.IsNullOrEmpty(searchString))
            {
                products = products.Where(p => p.Name.Contains(searchString));
            }

            // Sorting
            ViewBag.PriceSortParam = string.IsNullOrEmpty(sortOrder) ? "price_desc" : "";
            ViewBag.CurrentSort = sortOrder;

            switch (sortOrder)
            {
                case "price_desc":
                    products = products.OrderByDescending(p => p.Price);
                    break;
                case "price_asc":
                    products = products.OrderBy(p => p.Price);
                    break;
                default:
                    products = products.OrderBy(p => p.Name);
                    break;
            }

            ViewBag.Categories = await _context.Categories.ToListAsync();
            ViewBag.SearchString = searchString;
            return View(await products.ToListAsync());
        }

        // GET: CustomerProduct/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products
                .Include(p => p.Category)
                .FirstOrDefaultAsync(m => m.Id == id && m.IsActive);

            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }
    }
} 