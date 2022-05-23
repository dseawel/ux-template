import { LitElement, html, css } from 'lit-element';
import routeMixin from '@jack-henry/web-component-router/routing-mixin';

const styles = css`
  :host {
    display: block;
  }
  jha-card {
    padding: 8px;
  }
`;

class BannoDashboard extends routeMixin(LitElement) {

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
  }

  async routeEnter(currentNode, nextNodeIfExists, routeId, context) {
    return super.routeEnter(currentNode, nextNodeIfExists, routeId, context);
  }


  render() {
    return html`
      <div>
        Welcome to the Banno dashboard
      </div>
    `;
  }
}

customElements.define('banno-dashboard', BannoDashboard);
export default BannoDashboard;
