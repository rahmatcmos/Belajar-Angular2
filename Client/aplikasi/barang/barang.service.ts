import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class BarangService {

    _serverUrl: string = '/api/barang';

    constructor(private _http: Http) { }

    getDaftarBarang() {
        let _headers = new Headers();
        _headers.append('Content-Type', 'application/json');

        return this._http.get(this._serverUrl, {
            headers: _headers
        }).map((res: Response) => res.json());
    }

    simpanDaftarBarang(barang: any) {
        let _headers = new Headers();
        _headers.append('Content-Type', 'application/json');

        return this._http.post(this._serverUrl,
            JSON.stringify({
                'namaBarang': barang.namaBarang,
                'jenisBarang': barang.jenisBarang,
                'tanggalKadaluarsa': barang.tanggalKadaluarsa
            }), {
                headers: _headers
            });
    }

    updateDaftarBarang(barang: any) {
        let _headers = new Headers();
        _headers.append('Content-Type', 'application/json');

        return this._http.put(this._serverUrl + '/' + barang.idBarang,
            JSON.stringify({
                'namaBarang': barang.namaBarang,
                'jenisBarang': barang.jenisBarang,
                'tanggalKadaluarsa': barang.tanggalKadaluarsa
            }), {
                headers: _headers
            });
    }

    hapusDaftarBarang(idBarang: string) {
        let _headers = new Headers();
        _headers.append('Content-Type', 'application/json');

        return this._http.delete(this._serverUrl + '/' + idBarang, {
            headers: _headers
        });
    }
}
