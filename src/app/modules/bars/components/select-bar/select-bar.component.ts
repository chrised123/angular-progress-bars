import { Component, OnInit, Input } from '@angular/core';
import { Bars } from '../../store/view-models/bars.view-model';
import { BarsViewState } from '../../store/view-states/bars.view-state';

@Component({
  selector: 'app-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.scss']
})
export class SelectBarComponent implements OnInit {
  @Input() bars: Bars;
  constructor(public viewState: BarsViewState) { }

  ngOnInit() {
  }

}
