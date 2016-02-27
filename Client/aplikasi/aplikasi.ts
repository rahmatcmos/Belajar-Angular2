import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HaloComponent} from './halo/halo.component';
import {HomeComponent} from './home/home.component';
import {BarangComponent} from './barang/barang.component';
import {AboutComponent} from './about/about.component';

@Component({
    selector: 'aplikasi',
    templateUrl: './aplikasi/aplikasi.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/barang', name: 'Barang', component: BarangComponent },
    { path: '/halo', name: 'Halo', component: HaloComponent },
    { path: '/about', name: 'About', component: AboutComponent }
])
export class AplikasiComponent { }
