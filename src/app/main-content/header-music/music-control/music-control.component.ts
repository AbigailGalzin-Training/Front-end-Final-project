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
import { CurrentSong } from 'src/app/model/currentsong.model';


@Component({
	selector: 'app-music-control',
	templateUrl: './music-control.component.html',
	styleUrls: ['./music-control.component.sass']
})
export class MusicControlComponent {
	audio = new Audio();
	duration: number = 1;

	testSong: Song = {
		title: "Bohemian Rhapsody",
		genre: "Rock",
		releaseDate: "1975-10-31",
		duration: 354, // Duration in seconds
		songPath: "../../../../assets/bohemian_rhapsody.mp3"
	};

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
		}
		this.chargeData(0,0,0);
		console.log('currentSongIndex'+ this.currentSongIndex);
		console.log('currentAlbumIndex' + this.currentAlbumIndex);
		console.log('currentArtistIndex' + this.currentArtistIndex);
		console.log(this.allArtist);
		console.log(this.albumsByArtist);
		console.log(this.songsByAlbum);
		console.log('currentSONG');
		console.log(this.currentSong);
	}

	chargeData(indexArtist: number, indexAlbum: number, indexSong: number) {
		this.getAllArtist();

		if (!this.allArtist) {
			return;
		}

		if (this.allArtist.length > 0) {
			this.currentArtist = this.allArtist[indexArtist];

			this.getAlbumsByArtist(this.currentArtist.name);

			if (!this.albumsByArtist) {
				return;
			}
			if (this.albumsByArtist.length > 0) {
				this.currentAlbum = this.albumsByArtist[indexAlbum];
				this.getSongsByAlbum(this.currentArtist.name, this.currentAlbum.title);

				if (this.songsByAlbum.length > 0){
					this.currentSong = this.songsByAlbum[indexSong];
				}
			}
		}/* 
		console.log(this.allArtist);
		console.log(this.albumsByArtist);
		console.log(this.songsByAlbum);
		console.log(this.currentArtist);
		console.log(this.currentAlbum);
		console.log(this.currentSong); */
	}

	playSong(): void {
		if (this.audio.paused) {
			if (this.audio.readyState == 0) {
				this.currentSong = this.testSong;
				this.audio.src = this.currentSong.songPath;
			}
			this.audio.play();
		} else {
			this.audio.pause();
		}
	}

	nextSong(): void {
		console.log("-- next song");
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
		this.chargeSong();/* 

		console.log('currentSongIndex'+ this.currentSongIndex);
		console.log('currentAlbumIndex' + this.currentAlbumIndex);
		console.log('currentArtistIndex' + this.currentArtistIndex);
		console.log(this.allArtist);
		console.log(this.albumsByArtist);
		console.log(this.songsByAlbum);
		console.log('currentSONG');
		console.log(this.currentSong); */
	}

	previousSong(): void {
		console.log("-- prev song");
		let index = this.currentSongIndex--;

		
		if (index < 0) {
			index = this.currentAlbumIndex--;
			
			if(index < 0){
				index = this.currentArtistIndex--;

				if (index < 0){
					this.currentArtistIndex = this.allArtist.length - 1;					
				} else {
					this.currentArtistIndex--;
				}

			} else {
				this.currentAlbumIndex --;
			}
		} else {
			this.currentSongIndex--;
		}

		this.chargeSong();/* 

		console.log('currentSongIndex'+ this.currentSongIndex);
		console.log('currentAlbumIndex' + this.currentAlbumIndex);
		console.log('currentArtistIndex' + this.currentArtistIndex);
		console.log(this.allArtist);
		console.log(this.albumsByArtist);
		console.log(this.songsByAlbum);
		console.log('currentSONG');
		console.log(this.currentSong); */
	}


	chargeSong() {
		this.chargeData(
			this.currentArtistIndex,
			this.currentAlbumIndex,
			this.currentSongIndex
		)/* 
		this.getAllArtist();
		this.currentArtist = this.allArtist[this.currentArtistIndex];
		this.getAlbumsByArtist(this.currentArtist.name);
		this.currentAlbum = this.albumsByArtist[this.currentAlbumIndex];
		this.getAlbumsByArtist(this.currentAlbum.title);
		this.currentSong = this.songsByAlbum[this.currentSongIndex]; */
		console.log('currentSongIndex'+ this.currentSongIndex);
		console.log('currentAlbumIndex' + this.currentAlbumIndex);
		console.log('currentArtistIndex' + this.currentArtistIndex);
		console.log(this.allArtist);
		console.log(this.albumsByArtist);
		console.log(this.songsByAlbum);
		console.log('currentSONG');
		console.log(this.currentSong);
	}

	volumeSlider(event: any) {
		this.audio.volume = event.target.value / 100
	}

	getAllArtist() {
		this.store.select(selectAllArtists)
			.subscribe((artist: any) => {
				this.allArtist = artist;
			}
		);
	}

	getAlbumsByArtist(artist: string) {
		this.store.select(selectAllAlbums(artist))
			.subscribe((albums: any) => {
				this.albumsByArtist = albums;
			}
		);
	}

	getSongsByAlbum(artist: string, album: string) {
		this.store.select(selectAllSongs(artist, album))
			.subscribe((songs: any) => {
				this.songsByAlbum = songs;
			}
		);
	}
}
