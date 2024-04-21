var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { consume, createContext, provide } from '@lit/context';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
const myContext = createContext('context2');
class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.context2 = 'true';
    }
    // Use the context provider to provide the boolean value
    render() {
        return html `
      <div>
        <button @click="${this.toggleContext}">Toggle Context</button>
        <my-child-element></my-child-element>
      </div>
    `;
    }
    toggleContext() {
        this.context2 = this.context2 === 'true' ? 'false' : 'true';
        console.log('Context Value:', this.context2);
    }
}
MyElement.styles = css `
    :host {
      display: block;
      margin-top: 20px;
    }
  `;
__decorate([
    provide({ context: myContext }),
    property({ attribute: false })
], MyElement.prototype, "context2", void 0);
class MyChildElement extends LitElement {
    doThing() {
        this.context2
            ? console.log('Context Value:', this.context2)
            : console.log('wtf');
    }
    // Consume the context to access the boolean value
    render() {
        return html `
      <div>
        <button @click="${this.doThing}">Do Thing</button>
      </div>
    `;
    }
}
MyChildElement.styles = css `
    :host {
      display: block;
      margin-top: 10px;
    }
  `;
__decorate([
    consume({ context: myContext, subscribe: true }),
    property({ attribute: false })
], MyChildElement.prototype, "context2", void 0);
customElements.define('my-element', MyElement);
customElements.define('my-child-element', MyChildElement);
//# sourceMappingURL=index.js.map