import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { setMusicDisplayer } from '../../../../actions/music.actions';
import { Music } from 'src/app/model/music.model';
import { music } from 'src/selectors/music.selector';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.sass']
})
export class CardArtistComponent {
  @Input() nameArtist: string = 'name artist';
  @Input() linkPhoto: string = '../../../../assets/music.png';

  constructor(private readonly store: Store) { }

  setDisplayer(): void {
    console.log("--entraste")
    console.log("--this.nameArtist: ", this.nameArtist)
    const displayerData: Music = {
      id: 1,
      title: "Someone Like You",
      genre: this.nameArtist,
      releaseDate: "2011-01-24",
      artist: 1,
      album: 2,
      duration: 285,
      songPath: this.linkPhoto
    };
    this.store.dispatch(setMusicDisplayer({ music: displayerData }))
  }
}
