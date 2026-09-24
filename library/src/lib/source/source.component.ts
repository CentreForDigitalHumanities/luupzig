import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'luu-source',
    templateUrl: './source.component.html',
    styleUrls: ['./source.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SourceComponent {

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  toString() {
    return this.elementRef.nativeElement.innerText || '';
  }
}
