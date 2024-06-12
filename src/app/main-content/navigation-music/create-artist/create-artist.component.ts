import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    selector: 'app-create-artist',
    templateUrl: './create-artist.component.html',
    styleUrls: ['./create-artist.component.sass']
})
export class CreateArtistComponent {
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
            const form = this.createForm.value;
            console.log(form);
            this.save.emit(this.createForm.value);
        }
    }

    closeModal() {
        this.close.emit();
    }
}
