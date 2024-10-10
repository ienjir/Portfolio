import {AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'EditableTag',
  styleUrl: './editable-tag.component.scss',
  templateUrl: './editable-tag.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
})
export class EditableTag {
  selectedString: string = "h1"

  @ViewChild('autoResizeInput') inputElement!: ElementRef;
  @ViewChild('text') text!: ElementRef;
  @ViewChild('textContainer') textContainer!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  resizeInput(event: Event) {
    const input = this.inputElement.nativeElement;
    input.style.width = input.value.length ? `${input.value.length}ch` : '1ch';
    this.changeTag(this.selectedString)
  }

  changeTag(newTag: string) {
    const nativeElement = this.text.nativeElement;

    const newElement = this.renderer.createElement(newTag);

    this.renderer.appendChild(newElement, this.renderer.createText(nativeElement.innerHTML));
    // Replace the old element with the new one
    this.renderer.replaceChild(nativeElement.parentNode, newElement, nativeElement);

    this.dynamicElement.nativeElement = newElement;
  }
}
