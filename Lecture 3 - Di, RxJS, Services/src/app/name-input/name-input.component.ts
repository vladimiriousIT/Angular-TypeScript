// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameInputComponent implements OnDestroy, OnInit, OnChanges {

  @Input() inputValue = 'Dummy value';
  @Output() btnClick = new EventEmitter();
  
  constructor() {console.log('name-input ctor'); }

  ngOnInit(): void{

  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges);
  }
  // inputKeyUpHandler(target: HTMLInputElement): void {
  //   this.inputValue = (target.value);
  //   // (event.target as HTMLInputElement).value; WRONG!!!!!!
  // }

  btnClickHandler(value: KeyboardEvent, inputEl: HTMLInputElement): void{
    console.log('btn was clicked!', value);
    console.log('input value is:', inputEl.value);
    this.btnClick.emit({ inputEl });
  }
  ngOnDestroy(){
    console.log('name input component was destroyed');
  }
}
