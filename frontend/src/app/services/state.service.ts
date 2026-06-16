import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activity, Identity, PaymentCard, QuickAction } from '../models';
import {
  MOCK_ACTIVITIES,
  MOCK_QUICK_ACTIONS,
  MOCK_IDENTITIES,
  MOCK_PAYMENT_CARDS,
} from '../mocks';

export interface AppState {
  activities: Activity[];
  quickActions: QuickAction[];
  identities: Identity[];
  paymentCards: PaymentCard[];
  currentScreen: string;
  securityScore: number;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private initialState: AppState = {
    activities: MOCK_ACTIVITIES,
    quickActions: MOCK_QUICK_ACTIONS,
    identities: MOCK_IDENTITIES,
    paymentCards: MOCK_PAYMENT_CARDS,
    currentScreen: 'dashboard',
    securityScore: 98,
  };

  private stateSubject = new BehaviorSubject<AppState>(this.initialState);
  public state$: Observable<AppState> = this.stateSubject.asObservable();

  constructor() {}

  public getCurrentState(): AppState {
    return this.stateSubject.getValue();
  }

  public setCurrentScreen(screenName: string): void {
    const current = this.stateSubject.getValue();
    this.stateSubject.next({ ...current, currentScreen: screenName });
  }

  public addActivity(activity: Activity): void {
    const current = this.stateSubject.getValue();
    this.stateSubject.next({
      ...current,
      activities: [activity, ...current.activities],
    });
  }

  public updateSecurityScore(score: number): void {
    const current = this.stateSubject.getValue();
    this.stateSubject.next({ ...current, securityScore: score });
  }
}
