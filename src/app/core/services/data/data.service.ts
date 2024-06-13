import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Album } from 'src/app/model/album';
import { AppState } from 'src/app/model/appstate.model';
import { Artist } from 'src/app/model/artist.model';
import { Song } from 'src/app/model/song.model';
import {
    selectAllArtists,
    selectAllAlbums,
    selectAllSongs,
} from 'src/app/ngrx/app.selector';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    allArtist: Artist[] = [];
    albumsByArtist: Album[] = [];
    songsByAlbum: Song[] = [];

    currentSongIndex: number = 0;
    currentAlbumIndex: number = 0;
    currentArtistIndex: number = 0;

    currentSongOut!: Song;
    currentAlbum!: Album;
    currentArtist!: Artist;

    constructor(private readonly store: Store<AppState>) {
        this.chargeAllData();
    }

    chargeAllData(): Song {
        this.getAllArtist();
        this.getAlbumsByArtist(this.currentArtistIndex);
        this.getSongsByAlbum(this.currentAlbumIndex);
        this.updateCurrentSong();
        return this.currentSongOut;
    }

    nextSong(): Song {
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
        return this.currentSongOut;
    }

    previousSong(): Song {
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

        return this.currentSongOut;
    }

    getAllArtist(): Artist[] {
        this.store.select(selectAllArtists).subscribe((artists: any) => {
            this.allArtist = artists;
        });
        return this.allArtist;
    }

    getAlbumsByArtist(indexArtist: number): Album[] {
        if (
            this.allArtist.length > 0 &&
            indexArtist >= 0 &&
            indexArtist < this.allArtist.length
        ) {
            this.currentArtist = this.allArtist[indexArtist];
            this.store
                .select(selectAllAlbums(this.currentArtist.name))
                .subscribe((albums: any) => {
                    this.albumsByArtist = albums;
                }
            );
        }

        return this.albumsByArtist;
    }

    getSongsByAlbum(indexAlbum: number): Song [] {
        if (
            this.albumsByArtist.length > 0 &&
            indexAlbum >= 0 &&
            indexAlbum < this.allArtist.length
        ) {
            this.currentAlbum = this.albumsByArtist[indexAlbum];
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
        
        return this.songsByAlbum;
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

        return this.currentSongOut;
    }

    private updateCurrentSong() {
        if (
            this.songsByAlbum.length > 0 &&
            this.currentSongIndex >= 0 &&
            this.currentSongIndex < this.songsByAlbum.length
        ) {
            this.currentSongOut = this.songsByAlbum[this.currentSongIndex];
        }

        return this.currentSongOut;
    }

    getCurrentAlbum(){
        return this.currentAlbum;
    }
    getCurrentArtist(){
        return this.currentArtist;
    }
}
