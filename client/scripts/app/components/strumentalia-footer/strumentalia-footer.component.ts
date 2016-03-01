/* beautify ignore:start */
import {Component} from 'angular2/core';
/* beautify ignore:end */

@Component({
    selector: 'strumentalia-footer',
    inputs: ['prjName'],
    styles: [require('./strumentalia-footer.component.scss').toString()],
    template: require('./strumentalia-footer.component.html')
})
export class StrumentaliaFooterComponent {

}
