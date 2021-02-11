<template>
    <div>

        <div class="flex bg-warmGray-100 font-roboto">
            <div class="bg-blueGray-600 h-screen overflow-hidden flex-shrink-0 sticky top-0 transition-all text-gray-100 flex flex-col shadow-lg duration-500" :class="{'w-64': sidebarCollapsed, 'w-0': !sidebarCollapsed}">
                <div class="h-20 border-b mb-4"></div>
                <div>
                    <inertia-link :href="route('admin.index')" :class="{'border-l-4 border-orange-500': route().current('admin.index')}" class="px-4 h-10 flex space-x-3 items-center hover:bg-blueGray-700 cursor-pointer">
                        <img src="/assets/icons/home.svg" class="w-4 h-4" alt="">
                        <span>Dashboard</span>
                    </inertia-link>
                    <inertia-link :href="route('admin.announcements.index')" :class="{'border-l-4 border-orange-500': route().current('admin.announcements.*')}" class="px-4 h-10 flex space-x-3 items-center hover:bg-blueGray-700 cursor-pointer">
                        <img src="/assets/icons/news.svg" class="w-4 h-4" alt="">
                        <span>Announcements</span>
                    </inertia-link>
                    <inertia-link :href="route('admin.cars.index')" :class="{'border-l-4 border-orange-500': route().current('admin.cars.*')}" class="px-4 h-10 flex space-x-3 items-center hover:bg-blueGray-700 cursor-pointer">
                        <img src="/assets/icons/car-alt.svg" class="w-4 h-4" alt="">
                        <span>Cars</span>
                    </inertia-link>
                    <inertia-link :href="route('admin.attributes.index')" :class="{'border-l-4 border-orange-500': route().current('admin.attributes.*')}" class="px-4 h-10 flex space-x-3 items-center hover:bg-blueGray-700 cursor-pointer">
                        <img src="/assets/icons/list.svg" class="w-4 h-4" alt="">
                        <span>Attributes</span>
                    </inertia-link>
                    <inertia-link :href="route('admin.settings.edit', {setting: 1})" :class="{'border-l-4 border-orange-500': route().current('admin.settings.*')}" class="px-4 h-10 flex space-x-3 items-center hover:bg-blueGray-700 cursor-pointer">
                        <img src="/assets/icons/settings.svg" class="w-4 h-4" alt="">
                        <span>Settings</span>
                    </inertia-link>
                </div>
                <div class="mt-auto">
                    <div @click="$inertia.post('/logout')" class="px-4 h-10 flex space-x-3 items-center hover:bg-blueGray-700 cursor-pointer">
                        <img src="/assets/icons/exit.svg" class="w-4 h-4" alt="">
                        <span>Logout</span>
                    </div>
                </div>
            </div>
            <div class="flex-grow">
                <div class="flex items-center top-0 px-9 sticky py-3 bg-white z-10 w-full justify-between shadow-lg">
                    <img @click="sidebarCollapsed = !sidebarCollapsed" src="/assets/icons/stats.svg" class="w-8 h-8 cursor-pointer" alt="">
                    <div class="flex items-center space-x-5">
                        <p class="font-light text-sm">{{ time }}</p>
                        <img class="h-10 w-10 rounded-full" :src="$page.props.user.profile_photo_url" alt="">
                    </div>
                </div>
                <div class="p-9 h-9/10">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment";
    import Vuesax from 'vuesax'
    import 'vuesax/dist/vuesax.css';
    import Vue from 'vue';
    import Toasted from "vue-toasted";

    Vue.use(Vuesax);
    Vue.use(Toasted);

    export default {
        data() {
            return {
                sidebarCollapsed: true,
                time: null,
                interval: null,
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                this.time = moment().format('HH:mm');
            }, 1000);
        },
        destroyed() {
            clearInterval(this.interval);
        },
        updated() {
        }
    }
</script>

<style scoped>

</style>
