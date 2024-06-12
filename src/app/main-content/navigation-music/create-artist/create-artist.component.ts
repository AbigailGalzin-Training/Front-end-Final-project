import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArtistService } from 'src/app/core/services/artist/artist.service';
import { CreateModalComponent } from '../create-modal/create-modal.component';

@Component({
    selector: 'app-create-artist',
    templateUrl: './create-artist.component.html',
    styleUrls: ['./create-artist.component.sass'],
})
export class CreateArtistComponent {
    createForm: FormGroup;
    title!: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<CreateModalComponent>,
        private artistService: ArtistService
    ) {
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
            const createdartist = this.createForm.value;
            this.artistService.create(createdartist)
            this.dialogRef.close();
        }
    }
}
