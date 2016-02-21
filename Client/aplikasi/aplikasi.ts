import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HaloComponent} from './halo/halo.component';

@Component({
    selector: 'aplikasi',
    templateUrl: './aplikasi/aplikasi.html',
    directives: [ROUTER_DIRECTIVES, HaloComponent]
})
@RouteConfig([

])
export class AplikasiComponent { }
