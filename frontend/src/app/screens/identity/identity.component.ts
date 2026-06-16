import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { IdentityCardComponent } from '../../components/identity-card/identity-card.component';
import { Identity } from '../../models';

@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [CommonModule, IdentityCardComponent],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent implements OnInit {
  identities: Identity[] = [];
  currentTab: 'main' | 'temp' = 'main';

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    const state = this.stateService.getCurrentState();
    this.identities = state.identities;
  }

  switchTab(tab: 'main' | 'temp'): void {
    this.currentTab = tab;
  }

  get mainIdentity(): Identity | undefined {
    return this.identities.find(i => i.id === 'id-main');
  }

  get tempIdentity(): Identity | undefined {
    return this.identities.find(i => i.id.includes('temp'));
  }
}
