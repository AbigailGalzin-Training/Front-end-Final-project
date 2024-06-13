import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxComponent } from './ngrx/ngrx/ngrx.component';
import { MainContentModule } from './main-content/main-content.module';
import { localStorageSync } from 'ngrx-store-localstorage';
import { appReducer } from './ngrx/app.reducer';

export function localStorageSyncReducer(reducer: any): any {
    return localStorageSync({ keys: ['appState'], rehydrate: true })(reducer);
}

@NgModule({
    declarations: [AppComponent, NgrxComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MainContentModule,
        StoreModule.forRoot(
            {
                appState: appReducer,
            },
            {
                metaReducers: [localStorageSyncReducer],
            },
        ),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
