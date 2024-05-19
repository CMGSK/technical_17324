import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoanimeComponent } from './infoanime.component';

describe('InfoanimeComponent', () => {
  let component: InfoanimeComponent;
  let fixture: ComponentFixture<InfoanimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoanimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
