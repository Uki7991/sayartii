require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import PortalVue from 'portal-vue';
import VModal from 'vue-js-modal'

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
Vue.use(VModal);

const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
