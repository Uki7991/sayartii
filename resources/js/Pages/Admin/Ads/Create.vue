<template>
        <form @submit.prevent="" class="flex flex-wrap">
            <div class="w-4/12 mr-4 mb-4 flex-shrink-0">
                <p class="capitalize text-center mb-4">Add images</p>
                <file-pond
                    :imagePreviewHeight="100"
                    allow-multiple="true"
                ></file-pond>
                <div v-for="(item, index) in attributes" :key="index+'Create'" class="py-1" :class="[index, attributes]">
                    <p class="mb-2">{{item.title}}</p>
                    <div class="flex flex-wrap">
                        <check-box v-if="item.type === 'checkbox'" class="flex-initial mr-2 mb-3" :class="indexAttr" v-for="(value, indexAttr) in item.attributesArr" :key="indexAttr+'checkbox'" :name="index" v-model="form[index][indexAttr]" :type="value"></check-box>
                        <radio-box v-if="item.type === 'radio'" class="flex-initial mr-2 mb-3" v-for="(value, indexAttr) in item.attributesArr" :key="indexAttr+'radio'" :name="index" v-model="form[index]" :type="value"></radio-box>
                    </div>
                </div>
            </div>
            <div class="flex-grow w-7/12 mb-4">
                <p class="capitalize text-center my-4">Car information</p>
                <div class="py-1">
                    <label for="model">Make / Model</label>
                    <input type="text" id="model" class="w-full rounded-md focus:ring-black focus:border-black">
                    <select name="" id="">
                        <optgroup v-for="car in cars" :key="car.id" :label="car.title">
                            <option v-for="model in car.models" :key="model.id" :value="model.id">{{model.title}}</option>
                        </optgroup>
                    </select>
                </div>
                <div class="py-1">
                    <label for="year">Year</label>
                    <input type="number" id="year" class="w-full rounded-md focus:ring-black focus:border-black">
                </div>
                <div class="py-1">
                    <label for="location">Location</label>
                    <select id="location" class="w-full rounded-md focus:ring-black focus:border-black">
                        <option>dawdawd</option>
                        <option>dawdawd</option>
                        <option>dawdawd</option>
                        <option>dawdawd</option>
                        <option>dawdawd</option>
                        <option>dawdawd</option>
                        <option>dawdawd</option>
                    </select>
                </div>
                <div class="py-1">
                    <label for="price">Price</label>
                    <input type="number" id="price" class="w-full rounded-md focus:ring-black focus:border-black">
                </div>
                <div class="py-1">
                    <label for="mileage">Mileage</label>
                    <input type="number" id="mileage" class="w-full rounded-md focus:ring-black focus:border-black">
                </div>
                <div class="py-1">
                    <label for="phone">Phone</label>
                    <input type="number" id="phone" class="w-full rounded-md focus:ring-black focus:border-black">
                </div>
                <div class="py-1">
                    <label for="whatsapp">Whatsapp</label>
                    <input type="number" id="whatsapp" class="w-full rounded-md focus:ring-black focus:border-black">
                </div>
                <div class="py-1">
                    <label for="title">Title</label>
                    <input type="number" id="title" class="w-full rounded-md focus:ring-black focus:border-black">
                </div>
                <div class="py-1">
                    <label for="description">Description</label>
                    <textarea id="description" rows="4" class="w-full rounded-md focus:ring-black focus:border-black"></textarea>
                </div>
            </div>

            <div class="w-full py-4">
                <button type="submit" class="bg-green-700 text-gray-100 py-3 px-6 rounded-md">Create</button>
            </div>
        </form>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";
    import CheckBox from "@/Components/CheckBox";
    import RadioBox from "@/Components/RadioBox";

    // Import Vue FilePond
    import vueFilePond from 'vue-filepond';

    // Import FilePond styles
    import 'filepond/dist/filepond.min.css';

    // Import image preview plugin styles
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

    // Import image preview and file type validation plugins
    import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

    export default {
        layout: (h, page) => h(AdminLayout, [page]),
        components: {
            CheckBox,
            RadioBox,
            FilePond,
        },
        data() {
            return {
                attributes: [],
                cars: this.$page.props.cars,
                form: this.$inertia.form({
                    title: null,
                    description: null,
                    make: null,
                }),
            }
        },
        mounted() {
            this.attributes = this.$page.props.categories;
            window._.forEach(this.$page.props.categories, (value, index) => {
                if (value.type === 'radio') {
                    this.$set(this.form, index, '');
                }
                if (value.type === 'checkbox') {
                    this.$set(this.form, index, {});
                    window._.forEach(value.attributesArr, (item, key) => {
                        this.$set(this.form[index], key, item.status);
                    })
                }
            })
        }
    }
</script>

<style scoped>

</style>
