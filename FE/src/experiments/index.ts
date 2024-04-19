import {consume, createContext, provide} from '@lit/context';
import {LitElement, html, css} from 'lit';
import {property} from 'lit/decorators.js';

const myContext = createContext<string>('context2');

class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      margin-top: 20px;
    }
  `;

  @provide({context: myContext})
  @property({attribute: false})
  public context2 = 'true';

  // Use the context provider to provide the boolean value
  override render() {
    return html`
      <div>
        <button @click="${this.toggleContext}">Toggle Context</button>
        <my-child-element></my-child-element>
      </div>
    `;
  }

  private toggleContext() {
    this.context2 = this.context2 === 'true' ? 'false' : 'true';
    console.log('Context Value:', this.context2);
  }
}

class MyChildElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      margin-top: 10px;
    }
  `;

  @consume({context: myContext, subscribe: true})
  @property({attribute: false})
  public context2?: string;

  private doThing() {
    this.context2
      ? console.log('Context Value:', this.context2)
      : console.log('wtf');
  }
  // Consume the context to access the boolean value
  override render() {
    return html`
      <div>
        <button @click="${this.doThing}">Do Thing</button>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);
customElements.define('my-child-element', MyChildElement);
