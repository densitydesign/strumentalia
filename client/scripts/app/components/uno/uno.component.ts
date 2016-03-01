/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */

@Component({
    selector: 'uno',
    styles: [require('./uno.component.scss').toString()],
    template: require('./uno.component.html')
})
export class UnoComponent {

}