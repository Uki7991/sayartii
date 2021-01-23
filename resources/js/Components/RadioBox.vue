<template>
    <div>
        <input class="hidden" :id="type + 'radio' + name" :value="type" type="radio" :name="name" @change="$emit('change', $event.target.value)">
        <label :for="type + 'radio' + name" class="flex cursor-pointer rounded-md hover:text-pink-600 px-2 py-1 ring-1 ring-gray-600">
            <img class="w-10" src="https://sayartii.com/static/img/car_types/coupe.svg" alt="">
            <p class=" p-1">{{type}}</p>
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
