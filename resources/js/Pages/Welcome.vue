<template>
    <app-layout>
        <section class="py-24">
            <div class="container px-3 mx-auto md:px-0">
                <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5">

                    <car-card :active="car.featured" v-for="car in announcements" :car="car" :key="car.id"></car-card>

                </div>
            </div>
        </section>
    </app-layout>
</template>

<style scoped>

</style>

<script>
    export default {
        metaInfo() {
            return {
                title: this.$page.props.metaTitle,
                meta: [
                    {vmid: 'description', name: 'description', content: this.$page.props.metaDescription}
                ],
            }
        },
        components: {
            CarCard: () => import("@/Components/CarCard"),
            AppLayout: () => import("@/Layouts/AppLayout"),
        },
        props: {
            announcements: {
                type: Array,
            }
        },
    }
</script>
