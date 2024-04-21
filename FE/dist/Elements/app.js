var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './Table/table';
import { userContext } from '../Contexts/UserContext';
import { provide } from '@lit/context';
import { User } from '../Contexts/IUserInterface';
let Main = class Main extends LitElement {
    constructor() {
        super(...arguments);
        this.user = new User();
    }
    render() {
        console.log(this.user);
        return html `
      <cc-table></cc-table>
      <button @click=${this.clearTable}>Clear</button>
    `;
    }
    async clearTable() {
        window.dispatchEvent(new CustomEvent('clear-cell'));
    }
};
Main.styles = css `
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
__decorate([
    provide({ context: userContext })
], Main.prototype, "user", void 0);
Main = __decorate([
    customElement('cc-main')
], Main);
export { Main };
//# sourceMappingURL=app.js.map