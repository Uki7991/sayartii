require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import PortalVue from 'portal-vue';
import VueMeta from 'vue-meta';

Vue.mixin({ methods: { route } });
Vue.mixin({
    methods: {
        hideBody() {
            const body = document.querySelector('body');
            if (!body.classList.contains('overflow-hidden')) {
                body.classList.add('overflow-hidden');
            }
        },
        showBody() {
            const body = document.querySelector('body');
            if (body.classList.contains('overflow-hidden')) {
                body.classList.remove('overflow-hidden');
            }
        }
    }
});

Vue.use(InertiaPlugin);
Vue.use(PortalVue);
Vue.use(VueMeta);

const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => import(`./Pages/${name}`).then(module => module.default),
            },
        }),
}).$mount(app);
