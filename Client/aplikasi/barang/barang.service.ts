import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class BarangService {

    _serverUrl = '/api/barang';

    constructor(private http: Http) { }

    getDaftarBarang() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(this._serverUrl, {
            headers: headers
        }).map((res: Response) => res.json());
    }

    simpanDaftarBarang(barang: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this._serverUrl,
            JSON.stringify({
                'namaBarang': barang.namaBarang,
                'jenisBarang': barang.jenisBarang,
                'tanggalKadaluarsa': barang.tanggalKadaluarsa
            }), {
                headers: headers
            });
    }

    editDaftarBarang(idBarang: string, barang: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this._serverUrl + '/' + idBarang,
            JSON.stringify({
                'namaBarang': barang.namaBarang,
                'jenisBarang': barang.jenisBarang,
                'tanggalKadaluarsa': barang.tanggalKadaluarsa
            }), {
                headers: headers
            });
    }

    hapusDaftarBarang(idBarang: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.delete(this._serverUrl + '/' + idBarang, {
            headers: headers
        });
    }
}
