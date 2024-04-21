import { LitElement } from 'lit';
import './icon';
export declare class Cell extends LitElement {
    constructor();
    user: {
        name: string;
        symbol: string;
    };
    static styles: import("lit").CSSResult;
    value: string;
    render(): import("lit-html").TemplateResult<1>;
    handleClick(): void;
    clearProperties(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cc-cell': Cell;
    }
}
//# sourceMappingURL=cell.d.ts.map