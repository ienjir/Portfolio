import { Component } from '@angular/core';

@Component({
  selector: 'EditableTag',
  templateUrl: './Editable-tag.component.html',
  standalone: true,
  styleUrl: './Editable-tag.component.scss'
})
export class EditableTag {
  selectedTag: string = 'h1';
  content: string = 'Edit this content';

  getFormattedContent() {
    return `<${this.selectedTag}>${this.content}</${this.selectedTag}>`;
  }

  onTagChange() {
    const editableElement = document.querySelector('.editable-html');
    if (editableElement) {
      this.content = editableElement.textContent || '';
    }
  }
}
