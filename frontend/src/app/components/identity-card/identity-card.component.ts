import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Identity } from '../../models';

@Component({
  selector: 'app-identity-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './identity-card.component.html',
  styleUrl: './identity-card.component.scss'
})
export class IdentityCardComponent {
  @Input() identity!: Identity;
}
