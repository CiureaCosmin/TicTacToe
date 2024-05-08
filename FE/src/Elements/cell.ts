import {consume} from '@lit/context';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {userContext} from '../Contexts/UserContext';
import {iconMap} from '../SVG/IconEnum';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {socket} from '../Contexts/WebSocketService';

@customElement('cc-cell')
export class Cell extends LitElement {
  constructor() {
    super();
    window.addEventListener('clear-cell', () => {
      this.clearProperties();
    });
  }
  @consume({context: userContext, subscribe: true})
  @property({attribute: false})
  user!: {username: string; symbol: string; gameId: string};
  static override styles = css`
    :host {
      background-color: #ccc;
      height: 100%;
      max-height: 100%;
      width: 100%;
      border: 1px solid black;
    }
    div {
      height: 100%;
      width: 100%;
    }
    svg {
      max-height: 100%;
      max-width: 100%;
    }
  `;

  @property({type: String})
  value = '';

  override render() {
    if (!this.value) {
      return html` <div @click=${this.handleClick}></div> `;
    }
    return html` <div>${unsafeHTML(this.value)}</div>`;
  }

  handleClick() {
    if (!this.user.username) {
      this.dispatchEvent(
        new CustomEvent('open-modal', {
          bubbles: true,
          composed: true,
        })
      );
      return;
    }
    this.value = iconMap[this.user.symbol];
    this.requestUpdate();
    socket.emit('playerMove', this.user.gameId, this.user.username, 2, 2);
  }
  clearProperties() {
    this.value = '';
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cc-cell': Cell;
  }
}
