import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SongService {
    private storageKey = 'songData';

    constructor() { }

    create(data: any): void {
        const storedData = JSON.parse(
            localStorage.getItem(this.storageKey) || '[]',
        );
        storedData.push(data);
        localStorage.setItem(this.storageKey, JSON.stringify(storedData));
    }

    saveCurrentSong(data: any): void {
        const storedData = JSON.parse(
            localStorage.getItem(this.storageKey) || '[]',
        );
        storedData.push(data);
        localStorage.setItem('CurrentSong', JSON.stringify(storedData));
    }
}
