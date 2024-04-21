import { LitElement } from 'lit';
import './Table/table';
import { User } from '../Contexts/IUserInterface';
export declare class Main extends LitElement {
    static styles: import("lit").CSSResult;
    user: User;
    render(): import("lit-html").TemplateResult<1>;
    clearTable(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cc-main': Main;
    }
}
//# sourceMappingURL=app.d.ts.map