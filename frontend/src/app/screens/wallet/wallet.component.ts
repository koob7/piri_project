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

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    // Mock data loaded from component
  }

  addNewCard(): void {
    console.log('Add new card');
  }
}
