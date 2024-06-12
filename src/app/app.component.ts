import { Component, OnInit } from '@angular/core';
import { LocalStorageSyncService } from './core/services/artist/local-storage-sync.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
    constructor(private localStorageSyncService: LocalStorageSyncService) {}
  
    ngOnInit(): void {
      // Service is initialized and will start listening to localStorage changes
    }
  }
