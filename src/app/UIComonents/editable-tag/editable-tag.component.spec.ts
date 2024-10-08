import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTagComponent } from './editable-tag.component';

describe('EditableTagComponent', () => {
  let component: EditableTagComponent;
  let fixture: ComponentFixture<EditableTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
