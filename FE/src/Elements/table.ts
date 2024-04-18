import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './cell';

// Define a context to store the boolean value

@customElement('cc-table')
export class Table extends LitElement {
  static override styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      height: 600px;
      width: 600px;
      box-sizing: border-box;
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
