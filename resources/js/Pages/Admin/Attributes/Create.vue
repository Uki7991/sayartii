<template>
    <card class="w-3/10">
        <form class="flex flex-col space-y-4" @submit.prevent="form.post(route('admin.attributes.store'))">
            <div class="py-2">
                <label class="text-sm text-gray-700" for="title">Title (Only English letters) <span class="text-red-600 text-sm">*</span></label>
                <input type="text" id="title" v-model="form.title" class="rounded-md focus:ring-gray-600 focus:border-600 w-full">
                <p class="text-xs text-red-600 mb-2" v-if="form.errors.title">{{form.errors.title}}</p>
            </div>
            <div class="py-2">
                <div class="flex space-x-3">
                    <p class="text-gray-700">Type of ad attributes <span class="text-red-600 text-sm">*</span></p>
                    <div>
                        <label class="text-sm text-gray-700" for="radio">Radio buttons</label>
                        <input type="radio" name="type" value="radio" id="radio" v-model="form.type" class="">
                    </div>
                    <div>
                        <label class="text-sm text-gray-700" for="checkbox">Checkboxes</label>
                        <input type="radio" name="type" value="checkbox" id="checkbox" v-model="form.type" class="">
                    </div>
                </div>
                <p class="text-xs text-red-600 mb-2" v-if="form.errors.type">{{form.errors.type}}</p>
            </div>
            <div class="py-2">
                <label class="text-sm text-gray-700">Attributes (Hit Enter to add) <span class="text-red-600 text-sm">*</span></label>
                <multiselect v-model="form.attributesarr" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="title" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag" class="rounded-md focus:ring-gray-600 focus:border-600 w-full"></multiselect>
                <p class="text-xs text-red-600 mb-2" v-if="form.errors.attributesarr">{{form.errors.attributesarr}}</p>
            </div>
            <button class="bg-green-600 text-gray-100 text-lg font-medium py-3 rounded-md" type="submit" :disabled="form.processing">Create</button>
        </form>
    </card>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";
    import Card from "@/Components/Card";
    import Multiselect from "vue-multiselect";
    import 'vue-multiselect/dist/vue-multiselect.min.css';

    export default {
        components: {
            Multiselect,
            Card,
        },
        layout: (h, page) => h(AdminLayout, [page]),
        data() {
            return {
                options: [],
                form: this.$inertia.form({
                    title: null,
                    type: null,
                    attributesarr: [],
                }),
            }
        },
        methods: {
            addTag(newTag) {
                const tag = {
                    title: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                };
                this.options.push(tag);
                this.form.attributesarr.push(tag);
            },
        }
    }
</script>

<style scoped>

</style>
