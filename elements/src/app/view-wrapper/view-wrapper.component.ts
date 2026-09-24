import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-view-wrapper',
    templateUrl: './view-wrapper.component.html',
    styleUrls: ['./view-wrapper.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ViewWrapperComponent {
  @Input()
  source?: string;

  @Input()
  example?: string;

  @Input()
  gloss?: string;

  @Input()
  translation?: string;
}
