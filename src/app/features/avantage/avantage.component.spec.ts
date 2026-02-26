import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvantageComponent } from './avantage.component';


describe('avantageComponent', () => {
  let component: AvantageComponent;
  let fixture: ComponentFixture<AvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvantageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
