import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from '../../models';
import { ActivityItemComponent } from '../../shared/activity-item/activity-item.component';

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [CommonModule, ActivityItemComponent],
  templateUrl: './recent-activity.component.html',
  styleUrl: './recent-activity.component.scss'
})
export class RecentActivityComponent {
  @Input() activities: Activity[] = [];
}
