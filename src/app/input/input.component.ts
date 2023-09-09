import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() inputName: string = '';
  @Input() type: string = '';
  showLabel: boolean = false;

  changeLabelState(event: any) {
    if (event.target.value != '') {
      this.showLabel = true;
    } else {
      this.showLabel = false;
    }
  }
}
