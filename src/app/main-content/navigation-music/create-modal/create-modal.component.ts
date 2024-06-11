import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.sass'],
})
export class CreateModalComponent {
    
    constructor(
        public dialogRef: MatDialogRef<CreateModalComponent>
    ) {}

    closeModal(): void {
        this.dialogRef.close();
    }
}
