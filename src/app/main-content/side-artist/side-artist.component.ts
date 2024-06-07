import { Component } from '@angular/core';
import { Artist } from 'src/app/core/models/artist.model';
import { ArtistService } from 'src/app/core/services/artist/artist.service';

@Component({
    selector: 'app-side-artist',
    templateUrl: './side-artist.component.html',
    styleUrls: ['./side-artist.component.sass'],
})
export class SideArtistComponent {
    constructor(private artistService: ArtistService) {}
    public artists: Artist[] = [];
    ngOnInit(): void {
        this.artists = this.artistService.getArtists();
      }
}
