import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import './Table/table';
import {userContext} from '../Contexts/UserContext';
import {provide} from '@lit/context';
import {User} from '../Contexts/IUserInterface';

@customElement('cc-main')
export class Main extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    button {
      margin-top: 10px;
    }
  `;
  @provide({context: userContext})
  user = new User();
  override render() {
    console.log(this.user);
    return html`
      <cc-table></cc-table>
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
