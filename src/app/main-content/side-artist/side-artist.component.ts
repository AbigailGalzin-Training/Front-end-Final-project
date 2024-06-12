import { Component } from '@angular/core';
import { Artist } from '../../model/artist.model';
import { ArtistService } from '../../core/services/artist/artist.service';
import { Observable } from 'rxjs';
import { selectAllArtists } from 'src/app/ngrx/app.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';

@Component({
    selector: 'app-side-artist',
    templateUrl: './side-artist.component.html',
    styleUrls: ['./side-artist.component.sass'],
})
export class SideArtistComponent {
    artists: Observable<Artist[]>;
    constructor(
        private artistService: ArtistService,
        private readonly store: Store<AppState>,
    ) {
        this.artists = this.store.select(selectAllArtists);
    }
    ngOnInit(): void {
        // this.artists = this.artistService.getArtists();
    }
}
