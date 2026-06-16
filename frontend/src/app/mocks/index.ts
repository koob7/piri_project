import { Activity, QuickAction, Identity, PaymentCard } from '../models';

export const MOCK_ACTIVITIES: Activity[] = [
  { id: 'a1', icon: '✅', title: 'Bezpieczne logowanie: mBank', time: '5 minut temu' },
  { id: 'a2', icon: '✅', title: 'Włączono SSO: Netflix', time: '1 godzina temu' },
  { id: 'a3', icon: '✅', title: 'Utworzono tożsamość tymczasową', time: '3 godziny temu' },
  { id: 'a4', icon: '✅', title: 'Płatność NFC: Starbucks', time: '5 godzin temu' },
];

export const MOCK_QUICK_ACTIONS: QuickAction[] = [
  { id: 'q1', icon: '👤', label: 'Dodaj konto', action: 'addAccount' },
  { id: 'q2', icon: '🛡️', label: 'Zarządzaj zgodami', action: 'manageConsents' },
  { id: 'q3', icon: '💳', label: 'Portfel NFC', action: 'openWallet' },
];

export const MOCK_IDENTITIES: Identity[] = [
  {
    id: 'id-main',
    name: 'Jan Kowalski',
    verified: true,
    email: 'Jan.Kowalski@gmail.com',
    birthDate: '2000-06-15',
    stats: [
      { label: 'Pełnomocnictwa udzielone', value: 24 },
      { label: 'Bezpieczne logowania', value: 48 },
    ],
  },
  {
    id: 'id-temp-2847',
    name: 'Tymczasowa ID #2847',
    verified: false,
    stats: [
      { label: 'Aktywne sesje', value: 3 },
      { label: 'Transakcji', value: 12 },
    ],
  },
];

export const MOCK_PAYMENT_CARDS: PaymentCard[] = [
  {
    id: 'c1',
    mask: '•••• 4658',
    bg: 'linear-gradient(135deg, #ff9800, #f57c00)',
    title: 'Karta 1',
  },
  {
    id: 'c2',
    mask: '•••• 3545',
    bg: 'linear-gradient(135deg, #666, #444)',
    title: 'Karta 2',
  },
];
