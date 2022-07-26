import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageComponent } from './about-us-page.component';

describe('AboutUsPageComponent', () => {
  let component: AboutUsPageComponent;
  let fixture: ComponentFixture<AboutUsPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a paragraph element with content `about-us-page works!`', () => {
    const Element: HTMLElement = fixture.nativeElement;
    const paragraphElement = Element.querySelector('p');
    expect(paragraphElement?.textContent).toContain('about-us-page works!');
  });
});
