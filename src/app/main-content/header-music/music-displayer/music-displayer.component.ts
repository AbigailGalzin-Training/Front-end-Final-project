import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-music-displayer',
    templateUrl: './music-displayer.component.html',
    styleUrls: ['./music-displayer.component.sass']
})
export class MusicDisplayerComponent {
    @Input() artistName?: string;
    @Input() songName?: string;
    @Input() genre?: string;

    ngOnInit(): void {
        this.artistName = "here is the name";
        this.songName = "here is the songName";
        this.genre = "here is the genre";
    }
}
