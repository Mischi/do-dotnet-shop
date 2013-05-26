using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DoDotNetShop.Web.Controllers
{
    public class ShopBackendController : Controller
    {
        //
        // GET: /ShopBackend/

        public ActionResult Index()
        {
#if SCENARIO
            ViewBag.NgApp = "donetshop.backend.e2e";
#else
            ViewBag.NgApp = "donetshop.backend";
#endif
            return View();
        }

    }
}
