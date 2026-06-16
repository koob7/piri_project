import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-btn.component.html',
  styleUrl: './action-btn.component.scss'
})
export class ActionBtnComponent {
  @Input() icon = '⚙️';
  @Output() clicked = new EventEmitter<void>();
}
