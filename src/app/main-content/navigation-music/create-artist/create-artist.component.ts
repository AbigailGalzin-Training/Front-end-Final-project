import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-create-artist',
    templateUrl: './create-artist.component.html',
    styleUrls: ['./create-artist.component.sass']
})
export class CreateArtistComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
