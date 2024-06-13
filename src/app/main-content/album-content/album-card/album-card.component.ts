import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-album-card',
    templateUrl: './album-card.component.html',
    styleUrls: ['./album-card.component.sass'],
})
export class AlbumCardComponent {
    @Input() title: string | null = null;
    @Input() releaseDate: string | null = null;
    @Input() genre: string | null = null;
    @Input() photo: string | null = null;
}
