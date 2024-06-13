import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';
import { addInitialData } from 'src/app/ngrx/app.action';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageSyncService {
    constructor(
        private store: Store<AppState>,
        private ngZone: NgZone,
    ) {
        window.addEventListener(
            'storage',
            this.syncStoreWithLocalStorage.bind(this),
        );
    }

    private syncStoreWithLocalStorage(event: StorageEvent) {
        if (event.key === 'appState') {
            const appState = JSON.parse(event.newValue!);
            this.ngZone.run(() => {
                this.store.dispatch(addInitialData({ data: appState }));
            });
        }
    }
}
