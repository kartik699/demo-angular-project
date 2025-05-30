import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<Pick<Ticket, 'request' | 'title'>>();

  ngAfterViewInit(): void {
    console.log('after view init called');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.form?.nativeElement.reset();

    this.add.emit({ title, request: ticketText });
  }
}
