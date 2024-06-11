import { Component } from '@angular/core';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation-music',
    templateUrl: './navigation-music.component.html',
    styleUrls: ['./navigation-music.component.sass'],
})
export class NavigationMusicComponent {
    constructor(public dialog: MatDialog, private router: Router) { }

    openCreateModal(type: string): void {
        const dialogRef = this.dialog.open(CreateModalComponent);

        dialogRef.afterOpened().subscribe(() => {
            this.router.navigate([type]);
        });

        dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['']);
        });
    }
}
