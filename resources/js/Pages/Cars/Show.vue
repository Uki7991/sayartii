<template>
    <app-layout>

        <div class="container mx-auto px-4">
            <section class="md:w-10/12 w-full mx-auto md:py-24 py-20 flex flex-wrap justify-between">

                <div class="md:w-7/12">
                    <div class="grid grid-cols-3 gap-0.5 shadow-md">
                        <inertia-link href="" v-for="image in car.images" :key="image.id">
                            <img class="object-cover w-full md:h-40" :src="'/storage/small/'+image.path" :alt="car.model">
                        </inertia-link>
                    </div>

                    <div class="bg-white shadow-lg p-8 my-10 flex flex-col space-y-6">
<!--                        <div class="flex space-x-4 items-center border-b border-gray-500 pb-2">-->
<!--                            <img class="h-20 w-auto" src="https://sayartii.com/uploads/dealers/17592209246733/profile/202abde794a5117a96141cadf45ffb9ab3b720b5.jpg" alt="">-->
<!--                            <div>-->
<!--                                <inertia-link href="" class="text-lg text-blue-600">Royal Motors</inertia-link>-->
<!--                                <p class="">United Arab Emirates, Dubai</p>-->
<!--                            </div>-->
<!--                        </div>-->
                        <div class="flex flex-col space-y-4">
                            <p class="text-4xl">{{car.car_model.car.title}} {{car.car_model.title}}</p>
<!--                            <p class="text-xl">{{car.car_model.car.title}} {{car.car_model.title}} / GCC Spec / With Warranty</p>-->
                            <pre>{{car.description}}</pre>
                        </div>
                    </div>
                </div>

                <div class="md:w-2/6 w-full">
                    <div class="flex flex-col space-y-5">
                        <p class="uppercase text-center text-xl text-pink-600">aed <span class="text-5xl">{{car.price}}</span></p>
                        <a target="_blank" href="https://wa.me/971403391555?text=Hi%2C%20I%27m%20interested%20in%20your%20advertisement.%0A%0Ahttps%3A%2F%2Fsayartii.com%2FAE%2Fl%2Femo-734%2F2019-BMW-X7-50i-pure-excellence-ref-no-114531" class="bg-green-500 block flex items-center justify-center h-14 rounded-md text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current text-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403,5.633C16.708,3.936,14.454,3.001,12.053,3 c-4.948,0-8.976,4.027-8.978,8.977c0,1.582,0.413,3.126,1.198,4.488L3,21.116l4.759-1.249c1.312,0.715,2.788,1.092,4.29,1.093h0.004 l0,0c4.947,0,8.975-4.027,8.977-8.977C21.03,9.585,20.098,7.33,18.403,5.633 M12.053,19.445H12.05 c-1.339-0.001-2.652-0.36-3.798-1.041l-0.272-0.162l-2.824,0.741l0.753-2.753l-0.177-0.282c-0.747-1.188-1.141-2.561-1.141-3.971 c0.002-4.114,3.349-7.461,7.465-7.461c1.993,0.001,3.866,0.778,5.275,2.188c1.408,1.411,2.184,3.285,2.183,5.279 C19.512,16.097,16.165,19.445,12.053,19.445 M16.146,13.856c-0.225-0.113-1.327-0.655-1.533-0.73 c-0.205-0.075-0.354-0.112-0.504,0.112s-0.58,0.729-0.711,0.879s-0.262,0.168-0.486,0.056s-0.947-0.349-1.804-1.113 c-0.667-0.595-1.117-1.329-1.248-1.554s-0.014-0.346,0.099-0.458c0.101-0.1,0.224-0.262,0.336-0.393 c0.112-0.131,0.149-0.224,0.224-0.374s0.038-0.281-0.019-0.393c-0.056-0.113-0.505-1.217-0.692-1.666 C9.627,7.787,9.442,7.845,9.304,7.839c-0.13-0.006-0.28-0.008-0.429-0.008c-0.15,0-0.393,0.056-0.599,0.28 C8.07,8.336,7.491,8.878,7.491,9.982c0,1.104,0.804,2.171,0.916,2.321c0.112,0.15,1.582,2.415,3.832,3.387 c0.536,0.231,0.954,0.369,1.279,0.473c0.537,0.171,1.026,0.146,1.413,0.089c0.431-0.064,1.327-0.542,1.514-1.066 c0.187-0.524,0.187-0.973,0.131-1.067C16.52,14.025,16.369,13.968,16.146,13.856"></path></svg>
                            Whatsapp
                        </a>
                        <a target="_blank" :href="'tel:'+car.phone" class="bg-pink-600 block flex items-center justify-center h-14 rounded-md text-white">
                            Show number
                        </a>
                    </div>
                    <ul class="mt-8 mb-4">
                        <li class="flex justify-between text-lg my-2">
                            <p>Year</p><p class="max-w-3/5">{{car.year}}</p>
                        </li>
                        <li class="flex justify-between text-lg my-2">
                            <p>Make</p><p class="max-w-3/5">{{car.car_model.car.title}}</p>
                        </li>
                        <li class="flex justify-between text-lg my-2">
                            <p>Model</p><p class="max-w-3/5">{{car.car_model.title}}</p>
                        </li>
                        <li class="flex justify-between text-lg my-2">
                            <p>Mileage</p><p class="max-w-3/5">{{car.mileage}}</p>
                        </li>
                        <li v-for="attr in car.specs" :key="attr.id" class="flex justify-between text-lg my-2">
                            <p>{{attr.category.title}}</p><p class="max-w-3/5">{{attr.title}}</p>
                        </li>
                    </ul>
                    <div class="flex flex-wrap">
                        <div class="border-gray-600 mr-3 mb-3 border shadow rounded-md py-2 px-3" v-for="tag in car.tags" :key="tag.id">
                            {{tag.title}}
                        </div>
                    </div>
                </div>

            </section>

            <section v-if="suggestions.length" class="md:w-10/12 px-2 mx-auto py-8">
                <div class="text-center">
                    <h2 class="font-medium tracking-widest text-xl">
                        Suggested
                    </h2>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 my-6">

                    <car-card :car="suggestion" v-for="suggestion in suggestions" :key="suggestion.id" :active="suggestion.featured"></car-card>

                </div>
            </section>
        </div>

    </app-layout>
</template>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import CarCard from "@/Components/CarCard";

    export default {
        components: {
            CarCard,
            AppLayout,
        },
        data() {
            return {
                car: this.$page.props.car,
                suggestions: this.$page.props.suggestions || [],
            }
        }
    }
</script>

<style scoped>

</style>
