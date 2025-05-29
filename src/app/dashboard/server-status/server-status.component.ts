import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit called');
    this.intervalId = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit(): void {
    console.log('After view init called');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
