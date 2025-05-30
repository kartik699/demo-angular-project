import {
  AfterViewInit,
  Component,
  effect,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.intervalId = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 3000);
  }

  ngAfterViewInit(): void {
    console.log('After view init called');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
