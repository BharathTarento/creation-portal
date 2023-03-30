import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBluePrintComponent } from './create-blue-print.component';

describe('CreateBluePrintComponent', () => {
  let component: CreateBluePrintComponent;
  let fixture: ComponentFixture<CreateBluePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBluePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBluePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
