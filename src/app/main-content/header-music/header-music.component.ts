import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentSong } from '../../model/current-song.model'
import { AppState } from 'src/app/model/appstate.model';
import { Subject } from 'rxjs';
import { SongService } from '../../core/services/song/song.service'
import { Song } from 'src/app/model/song.model';
import { selectCurrentSongs } from 'src/app/ngrx/app.selector';
import { ActionButtonService } from '../../core/services/actions-buttons/action-buttons.service';
import { addCurrentSong } from 'src/app/ngrx/app.action';

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

    currentSongOut!: Song;

    constructor(
        private readonly store: Store<AppState>,
        private actionButtonService: ActionButtonService

    ) {
        this.store.select(selectCurrentSongs)
            .subscribe((currentSong) => {
                this.currentSong = currentSong;
                this.currentSongSubject.next(currentSong);
            });

        this.currentSongSubject.subscribe(() => {
            this.onCurrentSongChange();
        });
        
        const song = this.songService.getCurrentSong();
        console.log(song);
        if (song) {
            this.currentSongOut = song;
            this.updateLocalSong();
        } else {
            this.chargeAllData();
        }
        //this.chargeAllData();
    }

    chargeAllData() {
        this.currentSongOut = this.actionButtonService.chargeAllData();
        this.updateLocalSong();
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
        if(this.shuffleActive) {
            this.currentSongOut = this.actionButtonService.nextSong();
        } else {
            this.currentSongOut = this.actionButtonService.randomSong();
        }
        
        this.updateLocalSong();
    }

    previousSong(): void {
        const time = this.songService.getCurrenTime();
        
        if (!(time <= 10)) {            
            if(this.shuffleActive) {
                this.currentSongOut = this.actionButtonService.previousSong();
            } else {
                this.currentSongOut = this.actionButtonService.randomSong();
            }
        }

        this.updateLocalSong();
    }

    volumeSlider(event: any) {
        this.audio.volume = event.target.value / 100
    }

    randomSong() {
        this.shuffleActive = !this.shuffleActive;
        this.currentSongOut = this.actionButtonService.randomSong();
        this.updateLocalSong();
    }

    private updateLocalSong() {
        const currentAlbum = this.actionButtonService.getCurrentAlbum();
        const artistName = this.actionButtonService.getCurrentArtist();
        this.currentSong = {
            song: this.currentSongOut,
            albumName: currentAlbum.title,
            artistName: artistName.name
        };
        this.audio.src = this.currentSong.song.songPath;
        this.store.dispatch(
            addCurrentSong({
                artistName: artistName.name,
                albumTitle: currentAlbum.title,
                song: this.currentSongOut,
            }),
        );
        this.songService.saveCurrentSong(this.currentSongOut);
    }

    durationSlider(event: any) {
        this.audio.currentTime = event.target.value;
    }
}
