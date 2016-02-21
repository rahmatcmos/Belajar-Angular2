System.register(['reflect-metadata', 'zone.js', 'bootstrap/css/bootstrap.min.css!', 'font-awesome/css/font-awesome.min.css!', 'angular2/platform/browser', 'angular2/http', 'angular2/router', 'angular2/core', './aplikasi', './barang/barang.service'], function(exports_1) {
    var browser_1, http_1, router_1, core_1, router_2, aplikasi_1, barang_service_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aplikasi_1_1) {
                aplikasi_1 = aplikasi_1_1;
            },
            function (barang_service_1_1) {
                barang_service_1 = barang_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(aplikasi_1.AplikasiComponent, [
                barang_service_1.BarangService,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map