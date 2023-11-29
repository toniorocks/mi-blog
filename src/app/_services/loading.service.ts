// loading.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  // Observable to subscribe to loading state changes
  loading$ = this.loadingSubject.asObservable();

  // Method to update loading state
  setLoadingState(state: boolean) {
    this.loadingSubject.next(state);
  }
}
