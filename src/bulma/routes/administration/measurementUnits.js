import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter.fromGlob(import.meta.glob('./measurementUnits/*.js', { eager: true }));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'measurementUnits',
    component: Router,
    meta: {
        breadcrumb: 'measurement units',
        route: 'administration.measurementUnits.index',
    },
    children: routes,
};
