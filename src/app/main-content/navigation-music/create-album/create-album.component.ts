import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { CreateModalComponent } from '../create-modal/create-modal.component';

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

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<CreateModalComponent>,
        private albumService: AlbumService,
    ) {
        this.createForm = this.fb.group({
            artistName: ['', Validators.required],
            albumTitle: ['', Validators.required],
            albumGenre: ['', Validators.required],
            yearAlbum: ['', Validators.required],
            albumImage: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.createForm.valid) {
            const createdAlbum = this.createForm.value;
            this.albumService.create(createdAlbum);
            this.dialogRef.close();
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}
