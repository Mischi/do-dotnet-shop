using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace DoDotNetShop.Web
{
    public static class BundleConfig
    {
        private const string ANGULARJS_VERSION = "~/Scripts/angular-1.1.6-b8ea7f6/";

        public static void RegisterBundles(BundleCollection bundles)
        {
            RegisterBackendBundles(bundles);

            //BundleTable.EnableOptimizations = true;
        }

        private static void RegisterBackendBundles(BundleCollection bundles)
        {
            ScriptBundle scripts = new ScriptBundle("~/js/backend");

            scripts.Include("~/Scripts/jquery-{version}.js",
                            ANGULARJS_VERSION + "angular.js",
                            ANGULARJS_VERSION + "angular-resource.js",
                            ANGULARJS_VERSION + "i18n/angular-locale_de-de.js",
                            "~/Scripts/bootstrap.js",
                            "~/Scripts/bootstrap-select.js",
                            "~/Scripts/angular-strap-0.7.3.js");

#if SCENARIO
            scripts.Include(ANGULARJS_VERSION + "angular-mocks.js",
                            "~/App/ShopBackend/Scenarios/shopBackend.e2e.js");
#endif

            scripts.Include("~/App/ShopBackend/shopBackend.js",
                            "~/App/ShopBackend/controllers.js",
                            "~/App/resources.js");


            StyleBundle styles = new StyleBundle("~/Content/backend");

            styles.Include("~/Content/bootstrap.css",
                           "~/Content/bootstrap-responsive.css",
                           "~/Content/bootstrap-select.css",
                           "~/Content/animations.css",
                           "~/Content/screen.css");

            bundles.Add(scripts);
            bundles.Add(styles);

        }
    }
}