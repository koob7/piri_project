import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type StackCardKind = 'identity' | 'payment';
type StackCardTheme = 'blue' | 'orange' | 'dark';

interface WalletStackCard {
  id: string;
  kind: StackCardKind;
  theme: StackCardTheme;
  background: string;
  title?: string;
  mask?: string;
  name?: string;
  birthDate?: string;
  pesel?: string;
  holder?: string;
  expiry?: string;
  issuer?: string;
}

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  paymentCards: WalletStackCard[] = [
    {
      id: 'identity',
      kind: 'identity',
      theme: 'blue',
      background: 'linear-gradient(180deg, #1767eb 0%, #0f59da 100%)',
      title: 'Dokument tożsamości',
      name: 'Jan Kowalski',
      birthDate: '15.06.2000',
      pesel: '13548625498'
    },
    {
      id: 'payment-4658',
      kind: 'payment',
      theme: 'orange',
      background: 'linear-gradient(180deg, #d9842a 0%, #cf7a1f 100%)',
      mask: '•••• 4658',
      title: 'Karta płatnicza',
      holder: 'Jan Kowalski',
      expiry: '12/25',
      issuer: 'Visa'
    },
    {
      id: 'payment-3545',
      kind: 'payment',
      theme: 'dark',
      background: 'linear-gradient(180deg, #23324a 0%, #1d2840 100%)',
      mask: '•••• 3545',
      title: 'Karta płatnicza',
      holder: 'Jan Kowalski',
      expiry: '08/26',
      issuer: 'MasterCard'
    }
  ];

  lastTransaction = {
    merchant: 'Orlen',
    amount: '235,68 zł'
  };

  nfcModule = {
    isActive: true,
    isSecure: true,
    monthlySpent: '2357,33 zł'
  };

  bringCardToFront(cardIndex: number): void {
    if (cardIndex <= 0) {
      return;
    }

    const [selectedCard] = this.paymentCards.splice(cardIndex, 1);
    this.paymentCards.unshift(selectedCard);
  }

  getCardStyle(index: number): Record<string, string> {
    return {
      'z-index': String(100 - index),
      'transform': 'translateY(' + (index * 96) + 'px)'
    };
  }

  showMoreDetails(cardId: string): void {
    console.log('Show details for', cardId);
  }

  addNewCard(): void {
    console.log('Add new card');
  }
}
