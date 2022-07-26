import { Directive, Input, HostListener, DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let linkDes: DebugElement[];
  let routerLinks: RouterLinkStubDirective[];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'task4'`, () => {
    expect(component.title).toEqual('task4');
  });
  it('should have router-outlet', () => {
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
  it('can get router links from template', () => {
    expect(routerLinks.length).toEqual(3);
    expect(routerLinks[0].linkParams).toEqual('home-page');
    expect(routerLinks[1].linkParams).toEqual('about-us');
    expect(routerLinks[2].linkParams).toEqual('users');
  });
  it('can click links in template "home-page"', () => {
    const linkDe = linkDes[0];
    const routerLink = routerLinks[0];
    expect(routerLink.navigatedTo).toBeNull();
    linkDe.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(routerLink.navigatedTo).toEqual('home-page');
  });
  it('can click links in template "about-us"', () => {
    const linkDe = linkDes[1];
    const routerLink = routerLinks[1];
    expect(routerLink.navigatedTo).toBeNull();
    linkDe.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(routerLink.navigatedTo).toEqual('about-us');
  });
  it('can click links in template "users"', () => {
    const linkDe = linkDes[2];
    const routerLink = routerLinks[2];
    expect(routerLink.navigatedTo).toBeNull();
    linkDe.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(routerLink.navigatedTo).toEqual('users');
  });

});
@Component({
  selector: 'router-outlet',
  template: '',
})
class RouterOutletStubComponent { }
@Directive({
  selector: '[routerLink]'
})
class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
