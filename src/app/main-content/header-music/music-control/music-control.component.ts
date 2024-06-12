import { Component } from '@angular/core';
import * as moment from 'moment';
import { Song } from 'src/app/model/song.model';
import { Moment } from 'moment';


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

	currentSong: Song = this.testSong;

	constructor() {
		this.audio.ondurationchange = () => {
			const totalSeconds = Math.floor(this.audio.duration),
				duration = moment.duration(totalSeconds, 'seconds');
			this.duration = totalSeconds;
		}
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
		console.log("-- next song")
	}

	prevSong(): void {
		console.log("-- prev song")
	}

	volumeSlider(event: any) {
		this.audio.volume = event.target.value / 100
	}
}
