import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMusicComponent } from './header-music/header-music.component';
import { NavigationMusicComponent } from './navigation-music/navigation-music.component';
import { SideArtistComponent } from './side-artist/side-artist.component';
import { AlbumContentComponent } from './album-content/album-content.component';
import { MainContentComponent } from './main-content.component';
import { CardArtistComponent } from './side-artist/card-artist/card-artist.component';

@NgModule({
    declarations: [
        MainContentComponent,
        HeaderMusicComponent,
        NavigationMusicComponent,
        SideArtistComponent,
        AlbumContentComponent,
        CardArtistComponent
    ],
    imports: [CommonModule],
    exports: [
        MainContentComponent
    ]
})
export class MainContentModule {
    static forChild: any;
}
