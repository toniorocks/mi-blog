// loading-overlay.component.ts

import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@app/_services/loading.service';

@Component({
  selector: 'app-loading-overlay',
  template: `
    <div *ngIf="isLoading" class="loading-overlay">
      <!-- Add your loading spinner or message here -->
      Loading...
    </div>
  `,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    // Subscribe to loading state changes
    this.loadingService.loading$.subscribe((state) => {
      this.isLoading = state;
    });
  }
}
