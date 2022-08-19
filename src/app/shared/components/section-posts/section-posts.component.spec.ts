import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPostsComponent } from './section-posts.component';

describe('SectionPostsComponent', () => {
  let component: SectionPostsComponent;
  let fixture: ComponentFixture<SectionPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
