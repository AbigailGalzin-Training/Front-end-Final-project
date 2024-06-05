import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMusicComponent } from './header-music/header-music.component';
import { NavigationMusicComponent } from './navigation-music/navigation-music.component';
import { SideArtistComponent } from './side-artist/side-artist.component';
import { AlbumContentComponent } from './album-content/album-content.component';

@NgModule({
    declarations: [
        HeaderMusicComponent,
        NavigationMusicComponent,
        SideArtistComponent,
        AlbumContentComponent,
    ],
    imports: [CommonModule],
})
export class MainContentModule {}
