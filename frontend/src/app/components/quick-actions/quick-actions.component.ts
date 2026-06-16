import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAction } from '../../models';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss'
})
export class QuickActionsComponent {
  @Input() actions: QuickAction[] = [];

  onAction(action: QuickAction): void {
    console.log('Quick action clicked:', action);
    alert(action.label);
  }
}
