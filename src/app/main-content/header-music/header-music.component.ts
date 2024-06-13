import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentSong } from '../../model/current-song.model'
import { AppState } from 'src/app/model/appstate.model';
import { Subject } from 'rxjs';
import { SongService } from '../../core/services/song/song.service'
import { Song } from 'src/app/model/song.model';
import { DataService } from 'src/app/core/services/data/data.service';
import { selectCurrentSongs } from 'src/app/ngrx/app.selector';

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
        private dataService: DataService

    ) {
        this.store.select(selectCurrentSongs)
            .subscribe((currentSong) => {
                this.currentSong = currentSong;
                this.currentSongSubject.next(currentSong);
            });

        this.currentSongSubject.subscribe(() => {
            this.onCurrentSongChange();
        });

        this.chargeAllData();
    }

    chargeAllData() {
        this.currentSongOut = this.dataService.chargeAllData();
        this.updateLocalSong();
    }

    private onCurrentSongChange() {
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
            this.currentSongOut = this.dataService.nextSong();
        } else {
            this.currentSongOut = this.dataService.randomSong();
        }
        
        this.updateLocalSong();
    }

    previousSong(): void {
        if(this.shuffleActive) {            
            this.currentSongOut = this.dataService.previousSong();
        } else {
            this.currentSongOut = this.dataService.randomSong();
        }
        this.updateLocalSong();
    }

    volumeSlider(event: any) {
        this.audio.volume = event.target.value / 100
    }

    randomSong() {
        this.shuffleActive = !this.shuffleActive;
        this.currentSongOut = this.dataService.randomSong();
        this.updateLocalSong();
    }

    private updateLocalSong() {
        const currentAlbum = this.dataService.getCurrentAlbum();
        const artistName = this.dataService.getCurrentArtist();
        this.currentSong = {
            song: this.currentSongOut,
            albumName: currentAlbum.title,
            artistName: artistName.name
        }
    }

    durationSlider(event: any) {
        this.audio.currentTime = event.target.value;
    }
}
