import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdatePostDynamicComponent } from './create-update-post-dynamic.component';

describe('CreateUpdatePostDynamicComponent', () => {
  let component: CreateUpdatePostDynamicComponent;
  let fixture: ComponentFixture<CreateUpdatePostDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdatePostDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdatePostDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
