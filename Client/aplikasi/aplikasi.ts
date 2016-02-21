import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HaloComponent} from './halo/halo.component';
import {BarangComponent} from './barang/barang.component';

@Component({
    selector: 'aplikasi',
    templateUrl: './aplikasi/aplikasi.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/', name: 'BarangComponent', component: BarangComponent, useAsDefault: true
    }
])
export class AplikasiComponent { }
