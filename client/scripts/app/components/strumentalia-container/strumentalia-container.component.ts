/* beautify ignore:start */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StrumentaliaFooterComponent} from '../strumentalia-footer/strumentalia-footer.component';


import {UnoComponent} from '../uno/uno.component';
import {AboutComponent} from '../about/about.component';
/* beautify ignore:end */

@Component({
    selector: 'strumentalia-container',
    directives: [ROUTER_DIRECTIVES, StrumentaliaFooterComponent],
    styles: [require('./strumentalia-container.component.scss').toString()],
    template: require('./strumentalia-container.component.html')
})
@RouteConfig([
  {path: '/uno', name: 'Uno', component: UnoComponent, useAsDefault: true},
  {path: '/about', name: 'About', component: AboutComponent}
])
export class StrumentaliaContainerComponent {
  public prjName = 'Strumentalia';
}
