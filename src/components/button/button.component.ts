import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  @Input()
  title: string = '';
  @Input()
  mode: 'default' | 'flat' | 'mix' = 'default'; //TODO: продумать варианты
  @Input()
  icon: 'none' = 'none'

}
