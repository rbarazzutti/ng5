import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  host: {'class':'col-4'}
})
export class NewCardInputComponent implements OnInit {

  @Output() onCardAdd = new EventEmitter<String>();

  public newCard: any = {text: ''}

  constructor() { }

  ngOnInit() {
  }

}
