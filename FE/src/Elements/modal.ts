import {consume} from '@lit/context';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {userContext} from '../Contexts/UserContext';
import {SessionStorage} from '../Contexts/SessionStorage';

@customElement('cc-modal')
class Modal extends LitElement {
  static styles = css`
    .modal {
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: fit-content;
      max-width: 100%;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  `;

  @property({type: Boolean})
  showModal: boolean;

  @consume({context: userContext, subscribe: true})
  user!: {username: string; gameId: string};

  constructor() {
    super();
    this.showModal = false;
  }

  connectedCallback(): void {
    super.connectedCallback();
    addEventListener('open-modal', () => {
      this.openModal();
    });
    if (this.user.gameId && !this.user.username) {
      this.showModal = true;
    }
  }
  openModal() {
    this.showModal = true;
    this.requestUpdate();
  }

  closeModal() {
    this.showModal = false;
    this.requestUpdate();
  }

  setUsername(event: {target: {value: string}}) {
    const username = event.target.value;

    const event2 = new CustomEvent('set-username', {
      bubbles: true,
      composed: true,
      detail: {username},
    });
    this.dispatchEvent(event2);
  }
  copyURLToClipboard() {
    const url = `${window.location}?gameId=${this.user.gameId}`;

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);

    // Select and copy the URL
    textarea.focus();
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea
    document.body.removeChild(textarea);
  }

  render() {
    return html`
      ${this.user.username
        ? html`<div>Welcome, ${this.user.username}</div>
            <button @click="${this.copyURLToClipboard}">Share link</button>`
        : html`<button @click="${this.openModal}">Start</button>`}
      ${this.showModal
        ? html`
            <div class="modal">
              <div class="modal-content">
                <span class="close" @click="${this.closeModal}">&times;</span>
                <input
                  @blur=${this.setUsername}
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
            </div>
          `
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cc-modal': Modal;
  }
}
