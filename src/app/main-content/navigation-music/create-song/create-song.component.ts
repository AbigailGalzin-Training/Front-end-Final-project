import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-create-song',
    templateUrl: './create-song.component.html',
    styleUrls: ['./create-song.component.sass']
})
export class CreateSongComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
