import { LitElement, html, css } from 'lit-element';
import appRouteTree from './js/routing/routes/route-tree.js';
import Router from '@jack-henry/web-component-router';
import routeMixin from '@jack-henry/web-component-router/routing-mixin';

class BannoEnterprise extends routeMixin(LitElement) {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--banno-enterprise-background-color);
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  constructor() {
    super();
    this.router = new Router();
  }

  connectedCallback() {
    super.connectedCallback();

    this.router.routeTree = appRouteTree;
    // Define this instance as the root element
    this.router.routeTree.getValue().element = this;
    
    
    this.router.start();
  }

  async routeEnter(currentNode, nextNodeIfExists, routeId, context) {
    return super.routeEnter(currentNode, nextNodeIfExists, routeId, context);
  }

  render() {
    return html`
      <main>
        Welcome to BannoEnterprise
        <slot></slot>
      </main>
    `;
  }
}

export default BannoEnterprise;
customElements.define('banno-enterprise', BannoEnterprise);
