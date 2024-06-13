import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArtistService } from 'src/app/core/services/artist/artist.service';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { AppState } from 'src/app/model/appstate.model';
import { Store } from '@ngrx/store';
import { Artist } from 'src/app/model/artist.model';
import { addArtist } from 'src/app/ngrx/app.action';

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
        private artistService: ArtistService,
        private store: Store<AppState>,
    ) {
        this.createForm = this.fb.group({
            name: ['', Validators.required],
            genre: ['', Validators.required],
            members: ['', Validators.required],
            webSite: ['', Validators.required],
            imagePath: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.createForm.valid) {
            const createdartist = this.createForm.value;
            const { name, genre, members, webSite, imagePath } = createdartist;
            const artist: Artist = {
                name,
                genre,
                members,
                webSite,
                imagePath,
                albums: [],
            };
            this.store.dispatch(addArtist({ artist }));
            alert(`Artist ${createdartist.name} was successfully created.`);
            this.artistService.create(artist);
            this.dialogRef.close();
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}
