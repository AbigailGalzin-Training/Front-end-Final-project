import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { Album } from 'src/app/model/album';
import { addAlbum } from 'src/app/ngrx/app.action';
import { AppState } from 'src/app/model/appstate.model';
import { Store } from '@ngrx/store';

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
        private store: Store<AppState>,
    ) {
        this.createForm = this.fb.group({
            artistName: ['', Validators.required],
            title: ['', Validators.required],
            genre: ['', Validators.required],
            releaseYear: ['', Validators.required],
            imagePath: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.createForm.valid) {
            const createdAlbum = this.createForm.value;
            const { artistName, title, genre, releaseYear, imagePath } =
                createdAlbum;
            const album: Album = {
                title,
                genre,
                releaseYear: new Date(releaseYear),
                imagePath,
                songs: [],
            };
            this.albumService.create(album);
            this.store.dispatch(addAlbum({ artistName, album }));
            this.dialogRef.close();
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}
