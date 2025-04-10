import { createRootRoute, createRoute } from '@tanstack/react-router';
import App from '../App';
import Compiler from '../pages/Compiler';
import About from '../pages/About';
import Help from '../pages/Help';
import Documentation from '../pages/Documentation'; 
import Settings from '../pages/Settings'; 

const rootRoute = createRootRoute({
  component: App,
});

const compilerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Compiler,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const helpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/help',
  component: Help,
});

const documentationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/docs',
  component: Documentation,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
});

// Add all child routes
rootRoute.addChildren([
  compilerRoute,
  aboutRoute,
  helpRoute,
  documentationRoute, // 🆕
  settingsRoute,      // 🆕
]);

export const routeTree = rootRoute;
