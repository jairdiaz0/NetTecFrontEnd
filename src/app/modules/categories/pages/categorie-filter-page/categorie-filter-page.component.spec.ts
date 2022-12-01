import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFilterPageComponent } from './categorie-filter-page.component';

describe('CategorieFilterPageComponent', () => {
  let component: CategorieFilterPageComponent;
  let fixture: ComponentFixture<CategorieFilterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieFilterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
