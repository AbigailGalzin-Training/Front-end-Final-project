import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrentSong } from 'src/app/model/current-song.model';

@Component({
    selector: 'app-song-component',
    templateUrl: './song-component.component.html',
    styleUrls: ['./song-component.component.sass'],
})
export class SongComponentComponent implements OnChanges {
    @Input() songName: string | null = null;
    @Input() isCurrentSong: CurrentSong | null = null;
    isHidden = true;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isCurrentSong']) {
            this.isHidden = this.isCurrentSong?.song.title !== this.songName;
        }
    }

    toggleImage(): void {
        this.isHidden = !this.isHidden;
    }
}
