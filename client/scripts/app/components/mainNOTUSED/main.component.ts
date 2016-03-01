/* beautify ignore:start */
import {Component} from 'angular2/core';
import {StrumentaliaHeader} from '../strumentalia-header/strumentalia-header.component';
import {StrumentaliaFooterComponent} from '../strumentalia-footer/strumentalia-footer.component';
/* beautify ignore:end */

@Component({
    selector: 'main',
    directives: [StrumentaliaHeader, StrumentaliaFooterComponent],
    styles: [require('./main.component.scss').toString()],
    template: require('./main.component.html')
})
export class MainComponent {
    public prjName = 'Strumentalia';
}
