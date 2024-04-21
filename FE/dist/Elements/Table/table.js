var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../Cell/cell';
let Table = class Table extends LitElement {
    render() {
        return html `
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
};
Table.styles = css `
    :host {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 200px 200px 200px;
      height: 600px;
      width: 600px;
    }
  `;
Table = __decorate([
    customElement('cc-table')
], Table);
export { Table };
//# sourceMappingURL=table.js.map