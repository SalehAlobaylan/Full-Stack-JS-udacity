import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTREADERComponent } from './post-reader.component';

describe('POSTREADERComponent', () => {
  let component: POSTREADERComponent;
  let fixture: ComponentFixture<POSTREADERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [POSTREADERComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POSTREADERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
