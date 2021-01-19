<template>
    <app-layout>
        <section class="py-24">
            <div class="container px-3 mx-auto md:px-0">
                <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5">

                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>
                    <car-card :active="true"></car-card>
                    <car-card></car-card>

                </div>
            </div>
        </section>
    </app-layout>
</template>

<style scoped>

</style>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import CarCard from "@/Components/CarCard";
    export default {
        components: {
            CarCard,
            AppLayout
        },
        props: {},
    }
</script>
