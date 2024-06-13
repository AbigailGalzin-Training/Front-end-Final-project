import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentSong } from '../../model/current-song.model'
import { AppState } from 'src/app/model/appstate.model';
import { selectCurrentSongs } from 'src/app/ngrx/app.selector';
import { Subject } from 'rxjs';
import { SongService } from '../../core/services/song/song.service'
@Component({
    selector: 'app-header-music',
    templateUrl: './header-music.component.html',
    styleUrls: ['./header-music.component.sass'],
})
export class HeaderMusicComponent {
    songService: SongService = new SongService;
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
        this.audio.src = this.currentSong.song.songPath;
        this.audio.currentTime = 0;

    }
    ngOnInit() {
        this.audio.addEventListener('timeupdate', () => {
            this.songService.saveCurrentTimeSong(this.audio.currentTime);
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
    }

    durationSlider(event: any) {
        this.audio.currentTime = event.target.value;
    }
}
