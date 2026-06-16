import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthState, User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private initialAuthState: AuthState = {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: null,
  };

  private authStateSubject = new BehaviorSubject<AuthState>(this.initialAuthState);
  public authState$: Observable<AuthState> = this.authStateSubject.asObservable();

  constructor() {
    this.loadAuthStateFromStorage();
  }

  private loadAuthStateFromStorage(): void {
    const stored = sessionStorage.getItem('authState');
    if (stored) {
      try {
        const state = JSON.parse(stored);
        this.authStateSubject.next(state);
      } catch (e) {
        console.error('Failed to load auth state from storage', e);
      }
    }
  }

  private saveAuthStateToStorage(state: AuthState): void {
    sessionStorage.setItem('authState', JSON.stringify(state));
  }

  public login(email: string, password: string): Observable<AuthState> {
    return new Observable((observer) => {
      this.setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        try {
          if (!email || !password) {
            this.setError('Email and password are required');
            observer.error('Email and password are required');
            return;
          }

          const user: User = {
            id: 'user-' + Date.now(),
            email,
            name: 'Jan Kowalski',
            verified: true,
          };

          const newState: AuthState = {
            isLoggedIn: true,
            user,
            loading: false,
            error: null,
          };

          this.saveAuthStateToStorage(newState);
          this.authStateSubject.next(newState);
          observer.next(newState);
          observer.complete();
        } catch (error) {
          this.setError('Login failed');
          observer.error(error);
        }
      }, 500);
    });
  }

  public register(email: string, name: string, password: string): Observable<AuthState> {
    return new Observable((observer) => {
      this.setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        try {
          if (!email || !name || !password) {
            this.setError('All fields are required');
            observer.error('All fields are required');
            return;
          }

          const user: User = {
            id: 'user-' + Date.now(),
            email,
            name,
            verified: false,
          };

          const newState: AuthState = {
            isLoggedIn: true,
            user,
            loading: false,
            error: null,
          };

          this.saveAuthStateToStorage(newState);
          this.authStateSubject.next(newState);
          observer.next(newState);
          observer.complete();
        } catch (error) {
          this.setError('Registration failed');
          observer.error(error);
        }
      }, 500);
    });
  }

  public logout(): void {
    sessionStorage.removeItem('authState');
    this.authStateSubject.next(this.initialAuthState);
  }

  public getCurrentState(): AuthState {
    return this.authStateSubject.getValue();
  }

  private setLoading(loading: boolean): void {
    const current = this.authStateSubject.getValue();
    this.authStateSubject.next({ ...current, loading });
  }

  private setError(error: string | null): void {
    const current = this.authStateSubject.getValue();
    this.authStateSubject.next({ ...current, error, loading: false });
  }
}
