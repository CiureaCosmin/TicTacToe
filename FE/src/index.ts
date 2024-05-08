import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import './Elements/table';
import './Elements/modal';
import {userContext} from './Contexts/UserContext';
import {provide} from '@lit/context';
import {User} from './Contexts/UserManager';

@customElement('cc-main')
export class Main extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    button,
    input {
      margin-top: 10px;
    }
  `;
  connectedCallback() {
    super.connectedCallback();

    addEventListener('set-username', (e) => {
      let myEvent = e as CustomEvent;
      this.user.setUsername(myEvent.detail.username);
      this.user.startSession();
    });
  }
  @provide({context: userContext})
  user = new User();
  override render() {
    return html`
      <cc-table></cc-table>
      <cc-modal></cc-modal>
      <button @click=${this.clearTable}>Clear</button>
    `;
  }
  async clearTable() {
    window.dispatchEvent(new CustomEvent('clear-cell'));
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cc-main': Main;
  }
}
