import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentSong } from '../../model/current-song.model'
import { AppState } from 'src/app/model/appstate.model';
import { selectCurrentSongs } from 'src/app/ngrx/app.selector';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-header-music',
    templateUrl: './header-music.component.html',
    styleUrls: ['./header-music.component.sass'],
})
export class HeaderMusicComponent {
    shuffleActive: boolean = false;
    audio = new Audio;

    currentSong!: CurrentSong;
    private currentSongSubject = new Subject<CurrentSong>();

    constructor(private readonly store: Store<AppState>) {
        this.store.select(selectCurrentSongs)
            .subscribe((currentSong) => {
                this.currentSong = currentSong;
                this.currentSongSubject.next(currentSong);
            });

        this.currentSongSubject.subscribe(() => {
            this.onCurrentSongChange();
        });
    }

    private onCurrentSongChange() {
        this.audio.currentTime = 0;
    }

    ngOnInit() {
        this.audio.addEventListener('timeupdate', () => {
            this.audio.currentTime;
        })

        this.audio.ondurationchange = () => {
            this.audio.duration
        }

    }

    playSong(): void {
        if (this.audio.paused) {
            if (this.audio.readyState == 0) {
                this.audio.src = this.currentSong.song.songPath;
            }
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    nextSong(): void {
        console.log("-- next song")
    }

    prevSong(): void {
        console.log("-- prev song")
    }

    volumeSlider(event: any) {
        this.audio.volume = event.target.value / 100
    }

    randomSong() {
        this.shuffleActive = !this.shuffleActive;
        console.log(" audio.readyState : ", this.audio.readyState)
    }

    durationSlider(event: any) {
        console.log("--- event.target.value: ", event.target.value)
        this.audio.currentTime = event.target.value;
    }
}
