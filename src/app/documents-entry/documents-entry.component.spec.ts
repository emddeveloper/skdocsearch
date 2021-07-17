import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsEntryComponent } from './documents-entry.component';

describe('DocumentsEntryComponent', () => {
  let component: DocumentsEntryComponent;
  let fixture: ComponentFixture<DocumentsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
