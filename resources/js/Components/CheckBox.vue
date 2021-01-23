<template>
    <div>
        <input class="hidden" :id="type + 'check' + name" type="checkbox" :name="name" :checked="checked" @change="$emit('change', $event.target.checked)">
        <label :for="type + 'check' + name" class="flex cursor-pointer rounded-md hover:text-pink-600 px-2 py-1 ring-1 ring-gray-600">
            <img class="w-10" src="https://sayartii.com/static/img/car_types/coupe.svg" alt="">
            <p class=" p-1">{{type}}</p>
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
