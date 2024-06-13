import { Injectable } from '@angular/core';
import { Artist } from '../../../model/artist.model';

@Injectable({
    providedIn: 'root'
})
export class ArtistService {
    // TODO: until local storage is set
    private artists: Artist[] = [];
    private storageKey = 'artistData';

    constructor() { }

    public getArtists(): Artist[] {
        return this.artists;
    }

    create(data: any): void {
        const storedData = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        storedData.push(data);
        localStorage.setItem(this.storageKey, JSON.stringify(storedData));
    }

}
