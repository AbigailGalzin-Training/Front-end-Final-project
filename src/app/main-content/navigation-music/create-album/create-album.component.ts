import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-create-album',
    templateUrl: './create-album.component.html',
    styleUrls: ['./create-album.component.sass']
})
export class CreateAlbumComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
