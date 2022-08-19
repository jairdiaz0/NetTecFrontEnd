import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCategoriesComponent } from './cards-categories.component';

describe('CardsCategoriesComponent', () => {
  let component: CardsCategoriesComponent;
  let fixture: ComponentFixture<CardsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
