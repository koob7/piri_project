// User & Authentication
export interface User {
  id: string;
  email: string;
  name: string;
  verified: boolean;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Activity
export interface Activity {
  id: string;
  icon?: string;
  title: string;
  time: string;
  meta?: string;
}

// Quick Actions
export interface QuickAction {
  id: string;
  icon: string;
  label: string;
  action?: string;
}

// Identity
export interface Identity {
  id: string;
  name: string;
  verified: boolean;
  email?: string;
  birthDate?: string;
  stats?: { label: string; value: number }[];
}

// Payment Card
export interface PaymentCard {
  id: string;
  mask: string;
  bg?: string;
  title?: string;
}

// Security Alert
export interface SecurityAlert {
  id: string;
  type: 'safe' | 'warning' | 'danger';
  icon: string;
  title: string;
  subtitle?: string;
  details?: Record<string, string>;
}
