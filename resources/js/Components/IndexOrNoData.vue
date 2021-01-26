<template>
    <div class="h-full">
        <inertia-link :href="href" class="text-gray-100 bg-gray-700 px-6 py-3 rounded-md">{{linkTitle}}</inertia-link>
        <div v-if="!collectionLength" class="flex h-full items-center justify-center flex-col">
            <img src="/assets/icons/no-data.webp" alt="">
            <p class="text-5xl text-gray-900 font-bold mt-3 font-sans">There is no data</p>
        </div>
        <div v-else class="flex">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            href: {
                required: true,
                type: String,
            },
            linkTitle: {
                required: true,
                type: String,
            },
            collectionLength: {
                required: true,
                type: Number,
            }
        }
    }
</script>

<style scoped>

</style>
