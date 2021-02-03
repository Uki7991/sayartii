<template>
    <inertia-link v-if="inertia" href="" class="flex items-center py-4 hover:text-pink-600 text-lg group relative">
        <div class="absolute w-0.5 h-full top-0 left-0 bg-pink-600 group-hover:opacity-100 opacity-0"></div>
        <slot></slot>
    </inertia-link>
    <div v-else class="flex items-center py-4 hover:text-pink-600 text-lg group relative cursor-pointer">
        <div class="absolute w-0.5 h-full top-0 left-0 bg-pink-600 group-hover:opacity-100 opacity-0"></div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            inertia: {
                type: Boolean,
            }
        }
    }
</script>

<style scoped>

</style>
