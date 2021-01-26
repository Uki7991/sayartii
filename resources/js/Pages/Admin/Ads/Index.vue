<template>
    <div class="h-full">
        <inertia-link :href="route('admin.ads.create')" class="text-gray-100 bg-gray-700 px-6 py-3 rounded-md">Create</inertia-link>
        <div v-if="!collection.length" class="flex h-full items-center justify-center flex-col">
            <img src="/assets/icons/no-data.webp" alt="">
            <p class="text-5xl text-gray-900 font-bold mt-3 font-sans">There is no data</p>
        </div>
        <div v-else class="flex">
            Have
        </div>
    </div>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";

    export default {
        layout: (h, page) => h(AdminLayout, [page]),
        data() {
            return {
                collection: this.$page.props.ads,
            }
        },
    }
</script>

<style scoped>

</style>
