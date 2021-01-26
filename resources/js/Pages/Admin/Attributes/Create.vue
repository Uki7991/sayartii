<template>
    <card class="w-3/10">
        <form class="flex flex-col space-y-4" @submit.prevent="form.post(route('admin.cars.store'))">
            <div class="py-2">
                <label class="text-sm text-gray-700" for="title">Title</label>
                <input type="text" id="title" v-model="form.title" class="rounded-md focus:ring-gray-600 focus:border-600 w-full">
            </div>
            <div class="py-2">
                <label class="text-sm text-gray-700">Models (Hit Enter to add)</label>
                <multiselect v-model="form.attributes" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="title" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag" class="rounded-md focus:ring-gray-600 focus:border-600 w-full"></multiselect>
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
                    attributes: [],
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
                this.form.attributes.push(tag);
            },
        }
    }
</script>

<style scoped>

</style>
