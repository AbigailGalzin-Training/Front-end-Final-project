import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { SongService } from 'src/app/core/services/song/song.service';
import { Song } from 'src/app/model/song.model';
import { addSong } from 'src/app/ngrx/app.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';

@Component({
    selector: 'app-create-song',
    templateUrl: './create-song.component.html',
    styleUrls: ['./create-song.component.sass'],
})
export class CreateSongComponent {
    createForm: FormGroup;
    title!: string;
    albums: any[] = [
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
        private songService: SongService,
        private store: Store<AppState>,
    ) {
        this.createForm = this.fb.group({
            album: ['', Validators.required],
            nameArtist: ['', Validators.required],
            title: ['', Validators.required],
            genre: ['', Validators.required],
            releaseDate: ['', Validators.required],
            duration: ['', Validators.required],
            songPath: ['', Validators.required],
        });
    }

    onSubmit() {
        /*
        if (this.createForm.valid) {
            const createdSong = this.createForm.value;
            this.songService.create(createdSong);
            this.dialogRef.close();
        }*/
        if (this.createForm.valid) {
            const createdSong = this.createForm.value;
            const {
                artistName,
                albumTitle,
                title,
                genre,
                releaseDate,
                duration,
                songPath,
            } = this.createForm.value;
            const song: Song = {
                title,
                genre,
                releaseDate,
                duration,
                songPath,
            };
            this.songService.create(createdSong);
            this.store.dispatch(addSong({ artistName, albumTitle, song }));
            this.dialogRef.close();
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}
