<template>
    <div>
        <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40" v-show="show" @click="$emit('close')"></div>
        <div class="fixed flex flex-col md:min-w-1/5 min-w-full max-h-full overflow-hidden md:h-auto top-0 bg-white transition-all duration-300  transform shadow-lg" :class="[{'': show, 'translate-x-full': !show && !left, '-translate-x-full': !show && left, 'right-0' : !left, 'left-0': left}, classes]">
            <div class="flex justify-between items-center p-8">
                <p class="flex-grow text-center text-lg uppercase">{{ title }}</p>
                <button class="focus:outline-none flex-initial" @click="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class="fill-current text-black"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path></svg>
                </button>
            </div>
            <slot></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            left: {
                type: Boolean,
                default: false,
            },
            show: {
                type: Boolean,
                default: false,
            },
            classes: {
                type: String,
            },
            title: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>
