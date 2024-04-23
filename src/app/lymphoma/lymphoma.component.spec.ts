import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LymphomaComponent } from './lymphoma.component';

describe('LymphomaComponent', () => {
  let component: LymphomaComponent;
  let fixture: ComponentFixture<LymphomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LymphomaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LymphomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
