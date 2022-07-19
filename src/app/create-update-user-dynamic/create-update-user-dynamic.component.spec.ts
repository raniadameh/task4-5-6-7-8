import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateUserDynamicComponent } from './create-update-user-dynamic.component';

describe('CreateUpdateUserDynamicComponent', () => {
  let component: CreateUpdateUserDynamicComponent;
  let fixture: ComponentFixture<CreateUpdateUserDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateUserDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateUserDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
