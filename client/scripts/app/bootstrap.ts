/* beautify ignore:start */
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
// import {MainComponent} from './components/main/main.component';
import {StrumentaliaContainerComponent} from './components/strumentalia-container/strumentalia-container.component';
/* beautify ignore:end */

// import {enableProdMode} from 'angular2/core';
// enableProdMode();

bootstrap(StrumentaliaContainerComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, {
    useClass: HashLocationStrategy
})]);
