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
        const storedData = JSON.parse(
            localStorage.getItem('musicData') || '[]',
        );
        storedData.push(data);
        localStorage.setItem('musicData', JSON.stringify(storedData));

        console.log('Datos guardados:', storedData);
        this.closeCreateModal();
    }
}
