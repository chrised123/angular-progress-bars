import { Component, OnInit, Input } from '@angular/core';
import { BarsViewState } from '../../store/view-states/bars.view-state';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() bar: number;
  @Input() selectedBar: number;
  @Input() limit: number;
  @Input() index: number;
  @Input() barView: boolean;
  constructor(public viewState: BarsViewState) { }

  ngOnInit() {
    console.log(this.selectedBar);
  }

}
