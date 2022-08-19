import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAsideComponent } from './more-aside.component';

describe('MoreAsideComponent', () => {
  let component: MoreAsideComponent;
  let fixture: ComponentFixture<MoreAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
