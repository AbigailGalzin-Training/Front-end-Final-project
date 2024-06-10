import { Component } from '@angular/core';

@Component({
    selector: 'app-navigation-music',
    templateUrl: './navigation-music.component.html',
    styleUrls: ['./navigation-music.component.sass'],
})
export class NavigationMusicComponent {
    isCreateModalOpen = false;

    openCreateModal() {
        this.isCreateModalOpen = true;
    }

    closeCreateModal() {
        this.isCreateModalOpen = false;
    }

    onSave(data: any) {
        console.log('saved data:', data);
        this.closeCreateModal();
    }
}
