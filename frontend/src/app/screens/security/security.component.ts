import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  securityData = {
    scanCompleted: {
      title: 'Skanowanie internetu zakończone',
      lastScan: 'Ostatni skan: 2 godziny temu',
      passwords: {
        label: 'Wykryte wyjątki haseł',
        count: '0 znalezionych'
      }
    },
    suspiciousLogin: {
      title: 'Wykryto podejrzane logowanie',
      location: 'mBank - Moskwa, Rosja',
      details: {
        ip: '185.143.223.47',
        time: 'Dzisiaj o 14:34',
        device: 'Nieznany komputer PC'
      }
    },
    stats: [
      { icon: '🔑', value: '45', label: 'Chronionymi hasłami' },
      { icon: '👆', value: '12/12', label: 'Aktywne 2FA' },
      { icon: '🌐', value: '127', label: 'Sesji VPN' }
    ],
    premium: {
      title: 'Wsparcie Premium',
      description: 'Uzyskaj natychmiast pomoc ekspertów ds. bezpieczeństwa 24/7'
    },
    nextScan: 'Jutro o 03:00',
    activeAlerts: 1
  };

  verifyLogin(): void {
    console.log('Verify login');
  }

  blockLogin(): void {
    console.log('Block login');
  }

  chatWithExpert(): void {
    console.log('Chat with expert');
  }
}
