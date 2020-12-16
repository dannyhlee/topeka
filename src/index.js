import { createElement } from 'lwc';
import TopekaApp from 'topeka/app';

const app = createElement('topeka-app', { is: TopekaApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
