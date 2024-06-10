import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.sass']
})
export class CreateModalComponent {
  createForm: FormGroup;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      artistName: ['', Validators.required],
      musicGenres: ['', Validators.required],
      integrants: ['', Validators.required],
      website: ['', Validators.required],
      image: ['', Validators.required]

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
