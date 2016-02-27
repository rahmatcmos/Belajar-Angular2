import {Component} from 'angular2/core';

@Component({
    selector: 'halo',
    templateUrl: './aplikasi/halo/halo.component.html'
})
export class HaloComponent {

    public nama: string;

    updateInputNama(nama: string) {
        this.nama = nama;
    }

}
