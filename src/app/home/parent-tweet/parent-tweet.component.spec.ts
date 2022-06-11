import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTweetComponent } from './parent-tweet.component';

describe('ParentTweetComponent', () => {
  let component: ParentTweetComponent;
  let fixture: ComponentFixture<ParentTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
