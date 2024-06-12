import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-create-album',
    templateUrl: './create-album.component.html',
    styleUrls: ['./create-album.component.sass']
})
export class CreateAlbumComponent {
    createForm: FormGroup;
    title!: string;

    @Output() close = new EventEmitter<void>();
    @Output() save = new EventEmitter<any>();
    
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
        this.createForm = this.fb.group({
            artistName: ['', Validators.required],
            musicGenres: ['', Validators.required],
            integrants: ['', Validators.required],
            website: ['', Validators.required],
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
