import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentCard } from '../../models';

@Component({
  selector: 'app-payment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.scss'
})
export class PaymentCardComponent {
  @Input() card!: PaymentCard;
}
