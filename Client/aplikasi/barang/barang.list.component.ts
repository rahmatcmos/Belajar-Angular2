import {Component} from 'angular2/core';
import {Response} from 'angular2/http';

import {Observable} from 'rxjs';

import {BarangService} from './barang.service';

@Component({
    selector: 'barang-list',
    templateUrl: './aplikasi/barang/barang.list.component.html'
})
export class BarangListComponent {
    daftarBarang: any;

    constructor(private bs: BarangService) {
        this.loadBarang();
    }

    loadBarang() {
        let hasil: Observable<Response> = this.bs.getDaftarBarang();

        hasil.subscribe(
            (data) => { this.daftarBarang = data },
            (err) => { console.log(err) },
            () => { console.log("request selesai") }
        );
    }
}
