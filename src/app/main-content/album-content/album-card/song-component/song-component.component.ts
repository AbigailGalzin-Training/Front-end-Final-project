import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-component',
  templateUrl: './song-component.component.html',
  styleUrls: ['./song-component.component.sass']
})
export class SongComponentComponent {
  @Input() songName: string | null = null;
}
