/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */

@Component({
    selector: 'about',
    styles: [require('./about.component.scss').toString()],
    template: require('./about.component.html')
})
export class AboutComponent {

}