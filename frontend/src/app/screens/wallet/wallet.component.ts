import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { PaymentCard } from '../../models';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent implements OnInit {
  paymentCards = [
    {
      id: '1',
      type: 'ID',
      lastDigits: '4658',
      expiryDate: '12/25',
      gradient: 'linear-gradient(135deg, #1e90ff 0%, #00bfff 100%)',
      name: 'Jan Kowalski',
      birthDate: '15.06.2000',
      pesel: '13548625498'
    },
    {
      id: '2',
      type: 'Credit Card',
      lastDigits: '3545',
      expiryDate: '08/26',
      gradient: 'linear-gradient(135deg, #2a3a52 0%, #1a2a42 100%)',
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

  currentCardIndex = 0;
  cardTransform = { x: 0, y: 0, rotation: 0 };
  isDragging = false;
  startX = 0;
  startY = 0;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    // Mock data loaded from component
  }

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

    const diffX = event.clientX - this.startX;

    // If swiped more than 50px, remove card
    if (Math.abs(diffX) > 50) {
      this.swipeCard(diffX > 0 ? 'right' : 'left');
    } else {
      // Reset position
      this.cardTransform = { x: 0, y: 0, rotation: 0 };
    }
  }

  swipeCard(direction: 'left' | 'right'): void {
    const exitX = direction === 'right' ? 500 : -500;
    this.cardTransform = { x: exitX, y: 100, rotation: direction === 'right' ? 20 : -20 };

    setTimeout(() => {
      if (this.currentCardIndex < this.paymentCards.length - 1) {
        this.currentCardIndex++;
        this.cardTransform = { x: 0, y: 0, rotation: 0 };
      }
    }, 300);
  }

  addNewCard(): void {
    console.log('Add new card');
  }
}
