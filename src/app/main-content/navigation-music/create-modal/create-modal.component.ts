import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtistService } from 'src/app/core/services/artist/artist.service';

@Component({
    selector: 'app-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.sass'],
})
export class CreateModalComponent {
    title?: string;

    constructor(
        public dialogRef: MatDialogRef<CreateModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private artistService: ArtistService
    ) {
        this.title = this.data.title;
    }

    closeModal(): void {
        this.dialogRef.close();
    }

    onSave(data: any) : void {
        this.artistService.create(data);
        this.closeModal();
    }
}
