import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { SongService } from 'src/app/core/services/song/song.service';

@Component({
    selector: 'app-create-song',
    templateUrl: './create-song.component.html',
    styleUrls: ['./create-song.component.sass']
})
export class CreateSongComponent {
    createForm: FormGroup;
    title!: string;
    albums: any [] = [
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
        private songService: SongService
    ) {
        this.createForm = this.fb.group({
            album: ['', Validators.required],
            nameArtist: ['', Validators.required],
            songTitle: ['', Validators.required],
            songGenre: ['', Validators.required],
            songYear: ['', Validators.required],
            songDuration: ['', Validators.required],
            link: ['', Validators.required],            
        });
    }

    onSubmit() {
        if (this.createForm.valid) {
            const createdSong = this.createForm.value
            this.songService.create(createdSong);
            this.dialogRef.close();
        }
    }
}
