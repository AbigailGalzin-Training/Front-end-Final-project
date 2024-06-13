import { Component } from '@angular/core';
import * as moment from 'moment';
import { Song } from 'src/app/model/song.model';
import { Moment } from 'moment';
import { AppState } from 'src/app/model/appstate.model';
import { Store } from '@ngrx/store';
import {
    selectAllAlbums,
    selectAllArtists,
    selectAllSongs,
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

    allArtist: Artist[] = [];
    albumsByArtist: Album[] = [];
    songsByAlbum: Song[] = [];

    currentSongIndex: number = 0;
    currentAlbumIndex: number = 0;
    currentArtistIndex: number = 0;

    currentSong!: Song;
    currentAlbum!: Album;
    currentArtist!: Artist;

    shuffleActive: boolean = false;

    constructor(private readonly store: Store<AppState>) {
        this.audio.ondurationchange = () => {
            const totalSeconds = Math.floor(this.audio.duration),
                duration = moment.duration(totalSeconds, 'seconds');
            this.duration = totalSeconds;
        };
        this.chargeAllData();
    }

    chargeAllData() {
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

        this.chargeAllData();
    }

    previousSong(): void {
        this.currentSongIndex--;

        if (this.currentSongIndex < 0) {
            this.currentAlbumIndex--;
            if (this.currentAlbumIndex < 0) {
                this.currentArtistIndex--;

                if (this.currentArtistIndex < 0) {
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

    volumeSlider(event: any) {
        this.audio.volume = event.target.value / 100;
    }

    getAllArtist() {
        this.store.select(selectAllArtists).subscribe((artist: any) => {
            this.allArtist = artist;
        });
    }

    getAlbumsByArtist(indexArtist: number) {
        if (
            this.allArtist.length > 0 &&
            (indexArtist >= 0 &&
            indexArtist < this.allArtist.length)
        ) {
            this.currentArtist = this.allArtist[indexArtist];
        } else {
            return;
        }

        this.store
            .select(selectAllAlbums(this.currentArtist.name))
            .subscribe((albums: any) => {
                this.albumsByArtist = albums;
            });
    }

    getSongsByAlbum(indexAlbum: number) {
        if (
            this.albumsByArtist.length > 0 &&
            (indexAlbum >= 0 &&
            indexAlbum < this.allArtist.length)
        ) {
            this.currentAlbum = this.albumsByArtist[indexAlbum];
        } else {
            return;
        }

        this.store
            .select(
                selectAllSongs(
                    this.currentArtist.name,
                    this.currentAlbum.title,
                ),
            )
            .subscribe((songs: any) => {
                this.songsByAlbum = songs;
            });
    }

    randomSong() {
        const currentSongIndex = this.currentSongIndex;

        let maxIndex = this.allArtist.length - 1;
        this.currentArtistIndex = Math.floor(Math.random() * maxIndex);

        this.getAlbumsByArtist(this.currentArtistIndex);
        maxIndex = this.albumsByArtist.length - 1;
        this.currentAlbumIndex = Math.floor(Math.random() * maxIndex);

        this.getSongsByAlbum(this.currentAlbumIndex);
        maxIndex = this.songsByAlbum.length - 1;
        this.currentSongIndex = Math.floor(Math.random() * maxIndex);

        if (this.currentSongIndex == currentSongIndex) {
            this.nextSong();
        } else {
            this.updateCurrentSong();
        }
    }

    private updateCurrentSong() {
        if (
            this.songsByAlbum.length > 0 &&
            (this.currentSongIndex >= 0 &&
            this.currentSongIndex < this.songsByAlbum.length)
        ) {
            this.currentSong = this.songsByAlbum[this.currentSongIndex];
        }
        console.log(this.currentSong);
    }
}
