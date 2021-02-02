<template>
    <inertia-link :href="route('announcements.show', {ad: car.id})" class="shadow-lg rounded-lg relative" :class="{'border-pink-600 border-4': active}">
        <div class="relative">
            <img class="rounded-t-md object-cover object-center md:h-52 h-40 w-full" :src="'/storage/small/'+car.images[0].path" alt="">
            <div class="absolute w-full h-4 bottom-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <div class="p-4 text-gray-700">
            <p class="font-medium mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap">{{car.title}}</p>
            <div class="border-l-4 pl-1 border-pink-600">
                <div class="flex items-center space-x-1">
                    <p class="flex items-center space-x-1 text-xs"><span class="font-black text-sm">{{car.mileage | mileageK}}k</span>&nbsp;km</p>
                    <p class="text-xs overflow-hidden overflow-ellipsis whitespace-nowrap">• Gcc Pajero 3D full service history single owner</p>
                </div>
                <p class="text-pink-600">
                    <span class="text-lg font-medium ">{{car.price}}</span><span class="text-xs uppercase">aed</span>
                </p>
            </div>
        </div>
        <svg v-if="active" class="absolute h-6 w-auto right-2 bottom-2" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="fire-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
            <g class="fa-group">
                <path class="fill-current text-pink-300" fill="currentColor" d="M323.56 51.2a597.38 597.38 0 0 0-56.22 60C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 210 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-52-163.14-124.44-230.4zm-1.12 366.87A165.81 165.81 0 0 1 226.86 448c-43.93 0-84.43-14.89-114.06-41.92a146.18 146.18 0 0 1-35.88-50.39C68.35 335.82 64 314 64 290.75c0-59.43 42.8-106.39 104.3-180.12 30 34.59 18.49 19.78 100.7 124.59l62-70.74c24.32 40.25 27.78 45.59 34.84 59.1a157.93 157.93 0 0 1 15 104.62c-7.49 36.85-28.24 68.8-58.4 89.87z" ></path>
                <path class="fill-current text-pink-600" fill="currentColor" d="M304.09 391.85A134.39 134.39 0 0 1 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 8 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 20 27.35 52.19 15.81 119-33.43 153.42z" ></path>
            </g>
        </svg>
    </inertia-link>
</template>

<script>
    export default {
        props: {
            active: Boolean,
            car: {
                required: true,
                type: Object,
            }
        },
        data() {
            return {

            }
        },
        filters: {
            mileageK (val) {
                return val / 1000 ? Math.floor(val / 1000) : val;
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
