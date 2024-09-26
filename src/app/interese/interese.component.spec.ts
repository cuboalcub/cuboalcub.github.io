import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntereseComponent } from './interese.component';

describe('IntereseComponent', () => {
  let component: IntereseComponent;
  let fixture: ComponentFixture<IntereseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntereseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntereseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
