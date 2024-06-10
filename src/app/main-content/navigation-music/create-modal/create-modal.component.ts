import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  } from '@angular/material/dialog';

@Component({
    selector: 'app-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.sass'],
})
export class CreateModalComponent {
    createForm: FormGroup;

    @Output() close = new EventEmitter<void>();
    @Output() save = new EventEmitter<any>();

    constructor(private fb: FormBuilder) {
        this.createForm = this.fb.group({
            field1: ['', Validators.required],
            field2: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.createForm.valid) {
            this.save.emit(this.createForm.value);
        }
    }

    onCancel() {
        this.close.emit();
    }
}
