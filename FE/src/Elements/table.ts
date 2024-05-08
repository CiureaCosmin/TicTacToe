import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './cell';

@customElement('cc-table')
export class Table extends LitElement {
  static override styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 200px 200px 200px;
      height: 600px;
      width: 600px;
    }
  `;

  override render() {
    return html`
      <cc-cell> </cc-cell>
      <cc-cell> </cc-cell>
      <cc-cell> </cc-cell>
      <cc-cell> </cc-cell>
      <cc-cell> </cc-cell>
      <cc-cell> </cc-cell>
      <cc-cell> </cc-cell>
      <cc-cell> </cc-cell>
      <cc-cell> </cc-cell>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cc-table': Table;
  }
}
