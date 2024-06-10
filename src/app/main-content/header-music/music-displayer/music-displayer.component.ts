import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Music } from 'src/app/model/music.model';
import { Observable } from 'rxjs';
import { music } from '../../../../selectors/music.selector'

@Component({
    selector: 'app-music-displayer',
    templateUrl: './music-displayer.component.html',
    styleUrls: ['./music-displayer.component.sass']
})
export class MusicDisplayerComponent {
    @Input() artistName?: string;
    @Input() songName?: string;
    @Input() genre?: string;

    displayerData: Observable<Music[]> = this.store.pipe(
        select(music)
    )

    constructor(private readonly store: Store<Music[]>) { }
    /*
        ngOnInit(): void {
            this.artistName = "here is the name";
            this.songName = "here is the songName";
            this.genre = "here is the genre";
        }
    */

}
