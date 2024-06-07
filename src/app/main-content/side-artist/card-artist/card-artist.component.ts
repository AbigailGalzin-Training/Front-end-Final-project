import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.sass']
})
export class CardArtistComponent {
  @Input() nameArtist?: string = 'name artist';
  @Input() linkPhoto: string = '../../../../assets/music.png';  

}
