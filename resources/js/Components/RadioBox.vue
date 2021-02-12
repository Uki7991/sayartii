<template>
    <div>
        <input class="hidden" :id="type.id + 'radio' + name" :value="type.id" type="radio" :checked="radio === type.id" :name="name" @change="$emit('change', $event.target.value)">
        <label :for="type.id + 'radio' + name" class="flex cursor-pointer rounded-md hover:text-pink-600 px-2 py-1 ring-1 ring-gray-600">
            <img v-if="type.image" class="w-10" :src="'/storage/files/'+type.image" alt="">
            <p v-if="type.title" class="p-1">{{type.title}}</p>
        </label>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'radio',
            event: 'change',
        },
        props: {
            name: {
                required: true,
                type: String,
            },
            type: {
                required: true,
            },
            radio: {
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>
