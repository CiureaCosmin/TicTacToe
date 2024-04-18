import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import './table';

@customElement('cc-main')
export class Main extends LitElement {
  override render() {
    return html` <cc-table></cc-table> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cc-main': Main;
  }
}
