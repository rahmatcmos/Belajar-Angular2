import {Component} from 'angular2/core';

import {BarangListComponent} from './barang.list.component';

@Component({
    templateUrl: './aplikasi/barang/barang.component.html',
    directives: [BarangListComponent]
})
export class BarangComponent { }
