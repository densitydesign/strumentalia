/* beautify ignore:start */
import {Component} from 'angular2/core';

/* beautify ignore:end */

@Component({
  selector: 'strumentalia-header',
  inputs: ['prjName'],
  styles: [require('./strumentalia-header.component.scss').toString()],
  template: require('./strumentalia-header.component.html')
})

export class StrumentaliaHeader {

}
