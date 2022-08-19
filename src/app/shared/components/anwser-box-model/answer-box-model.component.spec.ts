import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnserBoxModelComponent } from './answer-box-model.component';

describe('AnserBoxModelComponent', () => {
  let component: AnserBoxModelComponent;
  let fixture: ComponentFixture<AnserBoxModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnserBoxModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnserBoxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
