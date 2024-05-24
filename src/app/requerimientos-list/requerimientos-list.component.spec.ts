import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimientosListComponent } from './requerimientos-list.component';

describe('RequerimientosListComponent', () => {
  let component: RequerimientosListComponent;
  let fixture: ComponentFixture<RequerimientosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequerimientosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimientosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
