import {defineCustomElement} from 'vue';
import * as header from './components/header-element.js';

const header_element = defineCustomElement(header);

customElements.define('header-element',header_element);
