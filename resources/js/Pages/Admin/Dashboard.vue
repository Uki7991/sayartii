<template>
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
                <p class="text-2xl text-gray-900 mb-8 truncate">Overview of last month</p>
                <div class="flex space-x-4 justify-around">
                    <div>
                        <p class="text-6xl text-gray-900 font-medium text-center">{{usersCurrentCount}}</p>
                        <p class="text-xs font-light">current users</p>
                    </div>
                    <div>
                        <p class="text-6xl text-gray-900 font-medium text-center">{{registrationsCount}}</p>
                        <p class="text-xs font-light">registrations</p>
                    </div>
                </div>
            </card>
            <card class=" col-span-3">
                <p class="text-2xl text-gray-900 mb-8 truncate">Announcements of last month</p>
                <div class="flex space-x-4 justify-around">
                    <div>
                        <p class="text-6xl text-gray-900 font-medium text-center">{{allAnnouncementsCount}}</p>
                        <p class="text-xs font-light">current announcements</p>
                    </div>
                    <div>
                        <p class="text-6xl text-gray-900 font-medium text-center">{{newAnnouncementsCount}}</p>
                        <p class="text-xs font-light">new announcements</p>
                    </div>
                </div>
            </card>
        </div>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";
    import Card from "@/Components/Card";
    import moment from "moment";

    export default {
        layout: (h, page) => h(AdminLayout, [page]),
        props: {
            usersCurrentCount: Number,
            registrationsCount: Number,
            allAnnouncementsCount: Number,
            newAnnouncementsCount: Number,
        },
        components: {
            Card,
        },
        computed: {
            monthAndYear() {
                return moment().format('MMMM YYYY');
            },
        },
        data() {
            return {
                weekday: moment().format('dddd'),
                day: moment().format('D'),
                interval: null,
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                this.day = moment().format('D');
                this.weekday = moment().format('dddd');
            }, 1000 * 60 * 60)
        },
        destroyed() {
            clearInterval(this.interval);
        }
    }
</script>

<style scoped>

</style>
