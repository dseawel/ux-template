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

class BannoNavigation extends routeMixin(LitElement) {

  static get styles() {
    return [styles];
  }

  async routeEnter(currentNode, nextNodeIfExists, routeId, context) {
    return super.routeEnter(currentNode, nextNodeIfExists, routeId, context);
  }


  render() {
    return html`
      <div>
        Welcome to the Banno navigation
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('banno-navigation', BannoNavigation);
export default BannoNavigation;
