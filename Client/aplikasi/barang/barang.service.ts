import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class BarangService {

    _serverUrl = '/barang';

    constructor(private http: Http) { }

    getDaftarBarang() {
        return this.http.get(this._serverUrl).map((res: Response) => res.json());
    }
}
