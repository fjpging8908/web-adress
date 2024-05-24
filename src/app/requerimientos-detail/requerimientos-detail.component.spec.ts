import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimientosDetailComponent } from './requerimientos-detail.component';

describe('RequerimientosDetailComponent', () => {
  let component: RequerimientosDetailComponent;
  let fixture: ComponentFixture<RequerimientosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequerimientosDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimientosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
