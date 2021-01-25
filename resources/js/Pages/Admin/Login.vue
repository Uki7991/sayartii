<template>
    <div class="flex bg-cover bg-no-repeat" style="background-image: url(/assets/wall/back.jpg)">
        <div class="w-4/12 ml-auto bg-white bg-opacity-40 h-screen flex flex-col items-center justify-center">
            <form @submit.prevent="form.post('/login')" class="w-1/2 flex flex-col space-y-3">
                <div>
                    <input type="email" v-model="form.email" name="email" placeholder="E-mail" class="rounded-md focus:ring-gray-400 focus:border-gray-400 w-full">
                    <p v-if="form.errors.email" class="text-red-600 text-xs">{{ form.errors.email }}</p>
                </div>
                <div>
                    <input type="password" v-model="form.password" name="password" placeholder="Password" class="rounded-md focus:ring-gray-400 focus:border-gray-400 w-full">
                </div>
                <button type="submit" :disabled="form.proccessing" class="rounded-md bg-gray-800 text-white flex justify-center w-full py-3">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: this.$inertia.form({
                    email: null,
                    password: null,
                }),
            }
        }
    }
</script>

<style scoped>

</style>
