/* eslint-disable no-console */
import { Component, AfterContentInit, ContentChild, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'jhi-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements AfterContentInit, AfterViewInit {
  @ViewChild('intheview') viewcontent!: ElementRef;

  @ContentChild('findmenow') projectedcontent!: ElementRef;

  ngAfterContentInit(): void {
    console.log('This content', this.projectedcontent);
    this.projectedcontent.nativeElement.setAttribute('style', 'color:purple;');
  }

  ngAfterViewInit(): void {
    console.log('This viewcontent', this.viewcontent);
    this.viewcontent.nativeElement.setAttribute('style', 'color:green;');
  }
}
