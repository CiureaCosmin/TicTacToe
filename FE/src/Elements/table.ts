import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './cell';
import {socket} from '../Contexts/WebSocketService';

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

  connectedCallback(): void {
    super.connectedCallback();
    socket.on(
      'playerMoved',
      (gameId: string, username: string, row: number, col: number) => {
        window.console.log(
          `Player moved to row: ${row}, col: ${col}, by ${username} in game ${gameId}`
        );
      }
    );
  }
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
