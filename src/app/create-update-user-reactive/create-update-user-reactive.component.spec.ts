import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateUserReactiveComponent } from './create-update-user-reactive.component';

describe('CreateUpdateUserReactiveComponent', () => {
  let component: CreateUpdateUserReactiveComponent;
  let fixture: ComponentFixture<CreateUpdateUserReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateUserReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateUserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
