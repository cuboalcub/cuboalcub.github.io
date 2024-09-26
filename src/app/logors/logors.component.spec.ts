import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogorsComponent } from './logors.component';

describe('LogorsComponent', () => {
  let component: LogorsComponent;
  let fixture: ComponentFixture<LogorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
