import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectedTab: string = 'home'; // Default tab

  // Function to switch between tabs
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  selectedValue: string = 'TBDP'; 

}
