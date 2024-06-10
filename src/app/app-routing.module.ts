import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumContentComponent } from './main-content/album-content/album-content.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
    {
        path: 'albums', component: AlbumContentComponent
    },
    {
        path: 'songs', component: AlbumContentComponent
    },
    {
        path: '', component: MainContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
