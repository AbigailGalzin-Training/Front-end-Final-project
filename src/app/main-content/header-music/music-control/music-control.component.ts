import { Component } from '@angular/core';
import * as moment from 'moment';
import { Song } from 'src/app/model/song.model';
import { Moment } from 'moment';
import { AppState } from 'src/app/model/appstate.model';
import { Store } from '@ngrx/store';
import { selectAllAlbums,
	selectAllArtists,
	selectAllSongs
} from '../../../ngrx/app.selector';
import { Artist } from 'src/app/models/artist.model';
import { Album } from 'src/app/model/album';
import { CurrentSong } from 'src/app/model/current-song.model';


@Component({
    selector: 'app-music-control',
    templateUrl: './music-control.component.html',
    styleUrls: ['./music-control.component.sass'],
})
export class MusicControlComponent {
    audio = new Audio();
    duration: number = 1;

    currentSongCS!: CurrentSong;

    allArtist!: Artist[];
    albumsByArtist!: Album[];
    songsByAlbum!: Song[];

    currentSongIndex: number = 0;
    currentAlbumIndex: number = 0;
    currentArtistIndex: number = 0;

    currentSong!: Song;
    currentAlbum!: Album;
    currentArtist!: Artist;

    constructor(private readonly store: Store<AppState>) {
        this.audio.ondurationchange = () => {
            const totalSeconds = Math.floor(this.audio.duration),
                duration = moment.duration(totalSeconds, 'seconds');
            this.duration = totalSeconds;
        };        

        this.getAllArtist();
        this.getAlbumsByArtist(this.currentArtistIndex);
        this.getSongsByAlbum(this.currentAlbumIndex);
        this.updateCurrentSong();
    }

    playSong(): void {
        if (this.audio.paused) {
            if (this.audio.readyState == 0) {
                //this.currentSong = this.testSong;
                this.audio.src = this.currentSong.songPath;
            }
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    nextSong(): void {
        console.log('-- next song');
        this.currentSongIndex++;

        if (this.currentSongIndex == this.songsByAlbum.length) {
            this.currentSongIndex = 0;
            this.currentAlbumIndex++;

            if (this.currentAlbumIndex == this.albumsByArtist.length) {
                this.currentAlbumIndex = 0;
                this.currentArtistIndex++;

                if (this.currentArtistIndex == this.allArtist.length) {
                    this.currentArtistIndex = 0;
                }
            }
        }

        this.getAlbumsByArtist(this.currentArtistIndex);
        this.getSongsByAlbum(this.currentAlbumIndex);
        this.updateCurrentSong();
    }
    
    backSong(): void {
        console.log('-- back song');
        this.currentSongIndex--;

        if (this.currentSongIndex < 0) {
            this.currentAlbumIndex -- ;
            if (this.currentAlbumIndex < 0) {
                this.currentArtistIndex --;
                
                if (this.currentArtistIndex < 0){
                    this.currentArtistIndex = this.allArtist.length - 1;                    
                }
                this.getAlbumsByArtist(this.currentArtistIndex);
                this.currentAlbumIndex = this.albumsByArtist.length - 1;
                
            }
            this.getSongsByAlbum(this.currentAlbumIndex);
            this.currentSongIndex = this.albumsByArtist.length - 1;
        }
        this.updateCurrentSong();
    }

    private updateCurrentSong() {
        if (this.songsByAlbum.length > 0){
            this.currentSong = this.songsByAlbum[this.currentSongIndex];
        }        
    }   

    volumeSlider(event: any) {
        this.audio.volume = event.target.value / 100;
    }

    getAllArtist() {
        this.store.select(selectAllArtists).subscribe((artist: any) => {
            this.allArtist = artist;
        });
    }

    getAlbumsByArtist(indexArtist: number) {
        this.currentArtist = this.allArtist[indexArtist];
        
        this.store.select(selectAllAlbums(this.currentArtist.name))
            .subscribe((albums: any) => {
                this.albumsByArtist = albums;
            }
        );
    }

    getSongsByAlbum(indexAlbum: number) {
        this.currentAlbum = this.albumsByArtist[indexAlbum];        

        this.store
            .select(selectAllSongs(
                this.currentArtist.name,
                this.currentAlbum.title
            ))
            .subscribe((songs: any) => {
                this.songsByAlbum = songs;
            }
        );
    }
}
