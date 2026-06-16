import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { SecurityCardComponent } from '../../components/security-card/security-card.component';
import { QuickActionsComponent } from '../../components/quick-actions/quick-actions.component';
import { RecentActivityComponent } from '../../components/recent-activity/recent-activity.component';
import { Activity, QuickAction } from '../../models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SecurityCardComponent, QuickActionsComponent, RecentActivityComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  activities: Activity[] = [];
  quickActions: QuickAction[] = [];
  securityScore = 98;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    const state = this.stateService.getCurrentState();
    this.activities = state.activities;
    this.quickActions = state.quickActions;
    this.securityScore = state.securityScore;
  }
}
