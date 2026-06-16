import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-card.component.html',
  styleUrl: './security-card.component.scss'
})
export class SecurityCardComponent {
  @Input() title = 'Wskaźnik bezpieczeństwa';
  @Input() subtitle = 'Stan bezpieczeństwa konta';
  @Input() value = 98;
}
