<template>
    <card class="w-1/2">
        <form class="flex flex-col space-y-4" @submit.prevent="submitSettings()">
            <div class="flex flex-col">
                <label for="">Logo</label>
                <input class="rounded-md border-gray-400" type="text" v-model="form.logo">
                <p v-if="form.errors.logo" class="text-xs text-red-600">{{ form.errors.logo }}</p>
            </div>
            <div class="flex flex-col">
                <label for="">Title</label>
                <input class="rounded-md border-gray-400" type="text" v-model="form.title">
                <p v-if="form.errors.title" class="text-xs text-red-600">{{ form.errors.title }}</p>
            </div>
            <div class="flex flex-col">
                <label for="">Description</label>
                <textarea class="rounded-md border-gray-400" rows="4" v-model="form.description"></textarea>
                <p v-if="form.errors.description" class="text-xs text-red-600">{{ form.errors.description }}</p>
            </div>
            <div class="flex flex-col">
                <label for="">Scripts</label>
                <textarea class="rounded-md border-gray-400" rows="4" v-model="form.scripts"></textarea>
                <p v-if="form.errors.scripts" class="text-xs text-red-600">{{ form.errors.scripts }}</p>
            </div>
            <button type="submit" :disabled="form.processing" class="py-2 rounded-md bg-gray-900 text-white">Save</button>
        </form>
    </card>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";
    import Card from "@/Components/Card";

    export default {
        components: {
            Card,
        },
        layout: (h, page) => h(AdminLayout, [page]),
        props: {
            setting: {
                type: Object,
            }
        },
        data() {
            return {
                form: this.$inertia.form({
                    title: this.setting.title,
                    description: this.setting.description,
                    logo: this.setting.logo,
                    scripts: this.setting.scripts,
                }),
            }
        },
        methods: {
            submitSettings() {
                self = this;
                this.form.put(this.route('admin.settings.update', {setting: this.setting.id}), {
                    onSuccess: (data) => {
                        self.$toasted.success(data.props.flash.message, {
                            duration: 5000,
                        });
                    },
                    onError: (data) => {
                        console.log(data);
                    }
                });
            }
        },
    }
</script>

<style scoped>

</style>
