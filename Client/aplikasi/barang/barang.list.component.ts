import {Component} from 'angular2/core';
import {Response} from 'angular2/http';

import {Observable} from 'rxjs';

import {BarangService} from './barang.service';

@Component({
    selector: 'barang-list',
    templateUrl: './aplikasi/barang/barang.list.component.html'
})
export class BarangListComponent {

    public _daftarBarang: any;
    public _inputDaftarBarang: any = {};
    public _enable: boolean;

    constructor(private _barangService: BarangService) {
        this.loadBarang();
    }

    loadBarang() {
        let hasil: Observable<Response> = this._barangService.getDaftarBarang();

        hasil.subscribe(
            (data) => { this._daftarBarang = data },
            (err) => { console.log(err) },
            () => { console.log("request selesai") }
        );
    }

    tambahDaftarBarang() {
        this._enable = false;
        this._inputDaftarBarang = {};
    }

    simpanDaftarBarang(_barang: Array<any>) {
        this._barangService.simpanDaftarBarang(_barang).subscribe(
            (data) => { console.log(data.json) },
            (err) => { console.log(err) },
            () => {
                this.loadBarang();
                this._inputDaftarBarang = {};
            }
        );
    }

    editDaftarBarang(_barang: any) {
        this._enable = true;
        this._inputDaftarBarang.idBarang = _barang.idBarang;
        this._inputDaftarBarang.namaBarang = _barang.namaBarang;
        this._inputDaftarBarang.jenisBarang = _barang.jenisBarang;
        this._inputDaftarBarang.tanggalKadaluarsa = _barang.tanggalKadaluarsa;
    }

    updateDaftarBarang(_barang: Array<any>) {
        this._barangService.updateDaftarBarang(_barang).subscribe(
            (data) => { console.log(data.json) },
            (err) => { console.log(err) },
            () => {
                this.loadBarang();
                this._inputDaftarBarang = {};
            }
        );
    }

    hapusDaftarBarang(idBarang: string) {
        this._barangService.hapusDaftarBarang(idBarang).subscribe(
            (data) => { console.log(data.json) },
            (err) => { console.log(err) },
            () => {
                this.loadBarang();
            }
        );
    }

}
