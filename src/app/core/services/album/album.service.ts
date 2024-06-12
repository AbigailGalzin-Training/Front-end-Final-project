import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    private storageKey = 'albumData';

    constructor() {}

    create(data: any): void {
        console.log(data);
        const storedData = JSON.parse(
            localStorage.getItem(this.storageKey) || '[]',
        );
        storedData.push(data);
        localStorage.setItem(this.storageKey, JSON.stringify(storedData));
    }
}
