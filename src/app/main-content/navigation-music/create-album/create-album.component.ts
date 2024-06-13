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
            name: 'Radiohead',
            genre: ['Alternative', 'Rock', 'Experimental'],
            members: [
                'Thom Yorke',
                'Jonny Greenwood',
                'Colin Greenwood',
                "Ed O'Brien",
                'Philip Selway',
            ],
            webSite: 'https://www.radiohead.com',
            imagePath:
                'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1672929736271-Selena_Gomez.jpg',
        },
        {
            name: 'Beyoncé',
            genre: ['R&B', 'Pop', 'Hip-Hop'],
            members: ['Beyoncé Giselle Knowles-Carter'],
            webSite: 'https://www.beyonce.com',
            imagePath:
                'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1666955170588-Ariana-Grande-wa_59e11327.jpeg',
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
            const { artist, title, genre, releaseYear, imagePath } =
                createdAlbum;

            const artistName = createdAlbum.artistName.name.toString();
            const album: Album = {
                title,
                genre,
                releaseYear: new Date(releaseYear),
                imagePath,
                songs: [],
            };
            this.albumService.create(album); // SAVE IN THE STORAGE, BUT IN ANOTHER LIST
            this.store.dispatch(addAlbum({ artistName, album }));
            this.dialogRef.close();
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}
