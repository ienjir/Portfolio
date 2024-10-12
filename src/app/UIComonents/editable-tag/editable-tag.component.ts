import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
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
export class EditableTag implements OnInit{
  @ViewChild('dynamicContainer', { static: true }) dynamicContainer!: ElementRef;
  @ViewChild('input') input!: ElementRef;

  currentTag = 'p';
  dynamicElement!: HTMLElement;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.adjustWidth()
    this.createDynamicElement();
  }

  protected adjustWidth() {
    const input = this.input.nativeElement;
    this.renderer.setStyle(input, 'width', 'auto');
    this.renderer.setStyle(input, 'width', `${input.scrollWidth}px`);
  }

  createDynamicElement() {
    this.dynamicElement = this.renderer.createElement(this.currentTag);
    const text = this.renderer.createText('Sample text that will change dynamically');
    const firstChild = this.dynamicContainer.nativeElement.firstChild
    this.renderer.appendChild(this.dynamicElement, text);
    this.renderer.appendChild(this.dynamicContainer.nativeElement, this.dynamicElement);
    this.renderer.removeChild(this.dynamicContainer, firstChild)
  }

  onTagChange() {
    if (this.currentTag.trim()) {
      if (this.dynamicElement) {
        this.renderer.removeChild(this.dynamicContainer.nativeElement, this.dynamicElement);
      }

      this.dynamicElement = this.renderer.createElement(this.currentTag);
      const text = this.renderer.createText('Sample text that will change dynamically');
      this.renderer.appendChild(this.dynamicElement, text);
      this.renderer.appendChild(this.dynamicContainer.nativeElement, this.dynamicElement);
    }
  }
}
