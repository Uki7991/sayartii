<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-5">
            <card class="flex flex-col col-span-2">
                <p class="text-2xl text-gray-900">Calendar</p>
                <div class="flex space-x-1 mt-auto">
                    <p class="text-6xl text-orange-500 font-medium">{{ day }}</p>
                    <div>
                        <p class="text-lg text-gray-500 font-light">{{ monthAndYear }}</p>
                        <p class="text-2xl text-gray-500">{{ weekday }}</p>
                    </div>
                </div>
            </card>
            <card class=" col-span-3">
                <p class="text-2xl text-gray-900 mb-8">Overview of last month</p>
                <div class="flex space-x-4 justify-around">
                    <div>
                        <p class="text-6xl text-gray-900 font-medium">15</p>
                        <p class="text-xs font-light">current users</p>
                    </div>
                    <div>
                        <p class="text-6xl text-gray-900 font-medium">24</p>
                        <p class="text-xs font-light">registrations</p>
                    </div>
                </div>
            </card>
        </div>
    </admin-layout>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";
    import Card from "@/Components/Card";

    export default {
        components: {
            AdminLayout,
            Card,
        },
        computed: {
            monthAndYear() {
                return window.momentjs().format('MMMM YYYY');
            },
        },
        data() {
            return {
                weekday: window.momentjs().format('dddd'),
                day: window.momentjs().format('D'),
                interval: null,
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                this.day = window.momentjs().format('D');
                this.weekday = window.momentjs().format('dddd');
            }, 1000 * 60 * 60)
        },
        destroyed() {
            clearInterval(this.interval);
        }
    }
</script>

<style scoped>

</style>
