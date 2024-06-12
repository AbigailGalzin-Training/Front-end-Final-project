import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    
    @Output() close = new EventEmitter<void>();
    @Output() save = new EventEmitter<any>();

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
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
            this.save.emit(this.createForm.value);
        }
    }

    closeModal() {
        this.close.emit();
    }
}
