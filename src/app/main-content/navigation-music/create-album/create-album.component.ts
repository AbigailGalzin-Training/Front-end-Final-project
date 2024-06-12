import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-create-album',
    templateUrl: './create-album.component.html',
    styleUrls: ['./create-album.component.sass'],
})
export class CreateAlbumComponent {
    createForm: FormGroup;
    title!: string;
    /*TODO typeArtist*/
    artistList: any[] = [
        {
            title: 'Yellow',
            genre: 'Rock',
            releaseDate: '2000-06-26',
            duration: 269,
            songPath: 'https://example.com/music/yellow.mp3',
        },
        {
            title: 'Shiver',
            genre: 'Rock',
            releaseDate: '2000-07-10',
            duration: 299,
            songPath: 'https://example.com/music/shiver.mp3',
        },
    ];

    @Output() close = new EventEmitter<void>();
    @Output() save = new EventEmitter<any>();

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
    ) {
        this.createForm = this.fb.group({
            artistName: ['', Validators.required],
            albumTitle: ['', Validators.required],
            albumGenre: ['', Validators.required],
            yearAlbum: ['', Validators.required],
            image: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.createForm.valid) {
            this.save.emit(this.createForm.value);
        }
    }

    closeModal() {
        this.close.emit();
    }
}
