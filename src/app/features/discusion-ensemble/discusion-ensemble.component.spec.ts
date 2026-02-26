import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscusionEnsembleComponent } from './discusion-ensemble.component';

describe('DiscusionEnsembleComponent', () => {
  let component: DiscusionEnsembleComponent;
  let fixture: ComponentFixture<DiscusionEnsembleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscusionEnsembleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscusionEnsembleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
