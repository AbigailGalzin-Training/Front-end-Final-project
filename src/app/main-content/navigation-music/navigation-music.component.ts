import { Component } from '@angular/core';
import { ArtistService } from '../../core/services/artist/artist.service';

@Component({
    selector: 'app-navigation-music',
    templateUrl: './navigation-music.component.html',
    styleUrls: ['./navigation-music.component.sass'],
})
export class NavigationMusicComponent {
    isCreateModalOpen = false;

    constructor(private artistService: ArtistService) {}

    openCreateModal() {
        this.isCreateModalOpen = true;
    }

    closeCreateModal() {
        this.isCreateModalOpen = false;
    }

    onSave(data: any) {
        this.artistService.create(data);
        this.closeCreateModal();
    }
}
