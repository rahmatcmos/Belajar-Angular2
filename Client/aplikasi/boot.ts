import 'reflect-metadata';
import 'zone.js';

import 'bootstrap/css/bootstrap.min.css!';
import 'font-awesome/css/font-awesome.min.css!';

import 'bootstrap-less';

import {bootstrap} from 'angular2/platform/browser';

import {HTTP_PROVIDERS} from 'angular2/http';

import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide}           from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {AplikasiComponent} from './aplikasi';
import {BarangService} from './barang/barang.service';

bootstrap(AplikasiComponent, [
    BarangService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
