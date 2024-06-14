import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModalComponent } from './main-content/navigation-music/create-modal/create-modal.component';
import { CreateArtistComponent } from './main-content/navigation-music/create-artist/create-artist.component';
import { CreateAlbumComponent } from './main-content/navigation-music/create-album/create-album.component';
import { CreateSongComponent } from './main-content/navigation-music/create-song/create-song.component';

const routes: Routes = [
    { path: 'artist', component: CreateArtistComponent },
    { path: 'song', component: CreateSongComponent },
    { path: 'album', component: CreateAlbumComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
