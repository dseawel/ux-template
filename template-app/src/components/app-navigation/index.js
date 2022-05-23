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

class AppNavigation extends routeMixin(LitElement) {

  static get styles() {
    return [styles];
  }

  async routeEnter(currentNode, nextNodeIfExists, routeId, context) {
    return super.routeEnter(currentNode, nextNodeIfExists, routeId, context);
  }


  render() {
    return html`
      <div>
        App Navigation
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('app-navigation', AppNavigation);
export default AppNavigation;
