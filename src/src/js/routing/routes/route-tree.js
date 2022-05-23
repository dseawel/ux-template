import RouteData from '@jack-henry/web-component-router/lib/route-data';
import RouteTreeNode from '@jack-henry/web-component-router/lib/route-tree-node';
import BannoNavigation from '../../../components/banno-navigation/banno-navigation.js';
import BannoDashboard from '../../../components/banno-dashboard/banno-dashboard.js';

// Common

const app = new RouteTreeNode(
  new RouteData('bannoEnterprise', 'BANNO-ENTERPRISE', '/', [], false));

const bannoNavigation = new RouteTreeNode(
  new RouteData('bannoNavigation', 'BANNO-NAVIGATION', '/a', [], false));

const bannoDashboard = new RouteTreeNode(
  new RouteData('bannoDashboard', 'BANNO-DASHBOARD', '/a/:institutionShortId([0-9]{1,6})', [], true));

bannoNavigation.addChild(bannoDashboard);
app.addChild(bannoNavigation);

export default app;