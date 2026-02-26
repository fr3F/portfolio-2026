import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteTickerComponent } from './infinite-ticker.component';

describe('InfiniteTickerComponent', () => {
  let component: InfiniteTickerComponent;
  let fixture: ComponentFixture<InfiniteTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteTickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
