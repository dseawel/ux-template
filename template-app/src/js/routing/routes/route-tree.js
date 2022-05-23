import RouteData from '@jack-henry/web-component-router/lib/route-data';
import RouteTreeNode from '@jack-henry/web-component-router/lib/route-tree-node';
import AppNavigation from '../../../components/app-navigation';
import BannoDashboard from '../../../components/banno-dashboard/banno-dashboard.js';

const app = new RouteTreeNode(
  new RouteData('template-app', 'TEMPLATE-APP', '/', [], false));

const appNavigation = new RouteTreeNode(
  new RouteData('appNavigation', 'APP-NAVIGATION', '/a', [], false));

const bannoDashboard = new RouteTreeNode(
  new RouteData('bannoDashboard', 'BANNO-DASHBOARD', '/a/:institutionShortId([0-9]{1,6})', [], true));

appNavigation.addChild(bannoDashboard);
app.addChild(appNavigation);

export default app;