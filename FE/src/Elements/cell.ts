import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cc-cell')
export class Cell extends LitElement {
  static override styles = css`
    :host {
      background-color: #ccc;
      height: 100%;
      max-height: 100%;
      width: 100%;
    }
    div {
      height: 100%;
      width: 100%;
    }
    img {
      height: 100%;
      width: 100%;
    }
  `;

  @property({type: String})
  value = '';

  override render() {
    return html`
      <div @click=${this.handleClick}>
        <img src="./src/Elements/img.png" />
      </div>
    `;
  }

  handleClick() {
    this.value = 'x';
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cc-cell': Cell;
  }
}
