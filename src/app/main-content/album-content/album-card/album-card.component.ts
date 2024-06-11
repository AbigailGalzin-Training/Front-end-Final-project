import { Component, Input } from '@angular/core';
import { Song } from '../../../models/song.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.sass']
})
export class AlbumCardComponent {
  @Input() title: string | null;
  @Input() releaseDate: string | null;
  @Input() genre: string | null;
  @Input() photo: string | null;
}
