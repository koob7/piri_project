import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type StackCardKind = 'identity' | 'payment';

interface WalletStackCard {
  id: string;
  kind: StackCardKind;
  title?: string;
  mask?: string;
  background: string;
  accent?: string;
  name?: string;
  birthDate?: string;
  pesel?: string;
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
      title: 'Dokument tożsamości',
      background: 'linear-gradient(180deg, #1767eb 0%, #0f59da 100%)',
      accent: '#ffffff',
      name: 'Jan Kowalski',
      birthDate: '15.06.2000',
      pesel: '13548625498'
    },
    {
      id: 'payment-4658',
      kind: 'payment',
      mask: '•••• 4658',
      background: 'linear-gradient(180deg, #d9842a 0%, #cf7a1f 100%)',
      title: 'Karta płatnicza'
    },
    {
      id: 'payment-3545',
      kind: 'payment',
      mask: '•••• 3545',
      background: 'linear-gradient(180deg, #23324a 0%, #1d2840 100%)',
      title: 'Karta płatnicza'
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

  cardTransform = { x: 0, y: 0, rotation: 0 };
  isDragging = false;
  startX = 0;
  startY = 0;

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;

    const diffX = event.clientX - this.startX;
    const diffY = event.clientY - this.startY;
    const rotation = (diffX / 100) * 10;

    this.cardTransform = {
      x: diffX,
      y: diffY,
      rotation: rotation
    };
  }

  onMouseUp(event: MouseEvent): void {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.cardTransform = { x: 0, y: 0, rotation: 0 };
  }

  addNewCard(): void {
    console.log('Add new card');
  }
}
