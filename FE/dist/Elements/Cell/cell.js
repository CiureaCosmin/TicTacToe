var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { consume } from '@lit/context';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { userContext } from '../../Contexts/UserContext';
import { iconMap } from '../../SVG/IconEnum';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './icon';
let Cell = class Cell extends LitElement {
    constructor() {
        super();
        this.value = '';
        window.addEventListener('clear-cell', () => {
            this.clearProperties();
        });
    }
    render() {
        if (!this.value) {
            return html ` <div @click=${this.handleClick}></div> `;
        }
        return html ` <div>${unsafeHTML(this.value)}</div>`;
    }
    handleClick() {
        this.value = iconMap[this.user.symbol];
        this.requestUpdate();
    }
    clearProperties() {
        this.value = '';
        this.requestUpdate();
    }
};
Cell.styles = css `
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
__decorate([
    consume({ context: userContext, subscribe: true }),
    property({ attribute: false })
], Cell.prototype, "user", void 0);
__decorate([
    property({ type: String })
], Cell.prototype, "value", void 0);
Cell = __decorate([
    customElement('cc-cell')
], Cell);
export { Cell };
//# sourceMappingURL=cell.js.map