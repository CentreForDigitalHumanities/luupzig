import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'luu-translation',
    templateUrl: './translation.component.html',
    styleUrls: ['./translation.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TranslationComponent {

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  toString() {
    return this.elementRef.nativeElement.innerText || '';
  }
}
