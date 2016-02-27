import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class BarangService {

    _serverUrl = '/api/barang';

    constructor(private http: Http) { }

    getDaftarBarang() {
        return this.http.get(this._serverUrl).map((res: Response) => res.json());
    }

    simpanDaftarBarang(barang: any) {
        return this.http.post(this._serverUrl, JSON.stringify(barang));
    }

    editDaftarBarang(idBarang: string, barang: any) {
        return this.http.put(this._serverUrl + '/' + idBarang, barang);
    }

    hapusDaftarBarang(idBarang: string) {
        return this.http.delete(this._serverUrl + '/' + idBarang);
    }
}
