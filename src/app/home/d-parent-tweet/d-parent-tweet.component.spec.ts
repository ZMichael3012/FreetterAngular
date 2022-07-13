import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DParentTweetComponent } from './d-parent-tweet.component';

describe('DParentTweetComponent', () => {
  let component: DParentTweetComponent;
  let fixture: ComponentFixture<DParentTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DParentTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DParentTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
