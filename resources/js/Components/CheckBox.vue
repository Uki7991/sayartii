<template>
    <div>
        <input class="hidden" :id="type.id + 'check' + name" type="checkbox" :name="name" :checked="checked" @change="$emit('change', $event.target.checked)">
        <label :for="type.id + 'check' + name" class="flex cursor-pointer rounded-md hover:text-pink-600 px-2 py-1 ring-1 ring-gray-600">
            <img v-if="type.image" class="w-10" :src="'/storage/files/'+type.image" alt="">
            <p v-if="type.title" class="p-1">{{type.title}}</p>
        </label>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'checked',
            event: 'change',
        },
        props: {
            name: {
                required: true,
                type: String,
            },
            checked: {
                type: Boolean,
                required: true,
            },
            type: {
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>
