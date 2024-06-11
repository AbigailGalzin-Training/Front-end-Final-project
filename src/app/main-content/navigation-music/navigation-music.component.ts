import { Component } from '@angular/core';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-navigation-music',
    templateUrl: './navigation-music.component.html',
    styleUrls: ['./navigation-music.component.sass'],
})
export class NavigationMusicComponent {
    isCreateModalOpen = false;

    /* openCreateModal() {
        this.isCreateModalOpen = true;
    } */
    constructor(public dialog: MatDialog) {}

    openCreateModal(): void {
        const dialogRef = this.dialog.open(CreateModalComponent,
            {data: { name: 'User', favoriteAnimal: '' }}
        );

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            let data = result;
        });
    }

    closeCreateModal() {
        this.isCreateModalOpen = false;
    }

    onSave(data: any) {
        console.log('saved data:', data);
        this.closeCreateModal();
    }
}
