<template>
    <index-or-no-data :href="route('admin.attributes.create')" link-title="Create" :collection-length="collection.length">
        <card class="mt-8 w-full">
            <div class="w-full">
                <vs-table>
                    <template #thead>
                        <vs-tr>
                            <vs-th>
                                Id
                            </vs-th>
                            <vs-th>
                                Title
                            </vs-th>
                            <vs-th>
                                Attributes
                            </vs-th>
                            <vs-th>
                                Actions
                            </vs-th>
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr
                            :key="tr.id"
                            v-for="(tr, i) in $vs.getPage(collection, page, max)"
                            :data="tr"
                        >
                            <vs-td>
                                {{ tr.id }}
                            </vs-td>
                            <vs-td>
                                {{ tr.title }}
                            </vs-td>
                            <vs-td>
                                {{ tr.attributes.length }}
                            </vs-td>
                            <vs-td class="flex space-x-3">
                                <inertia-link class="text-xs text-orange-500 py-1 px-2 hover:underline" :href="route('admin.attributes.edit', {category: tr.id})">Edit</inertia-link>
                                <button class="text-xs text-white bg-red-600 rounded-md py-1 px-2 hover:underline" @click="deleteAttributes(tr.id)">Delete</button>
                            </vs-td>
                        </vs-tr>
                    </template>
                    <template #footer>
                        <vs-pagination v-model="page" :length="$vs.getLength(collection, max)"></vs-pagination>
                    </template>
                </vs-table>
            </div>
        </card>
    </index-or-no-data>
</template>

<script>
    import IndexOrNoData from "@/Components/IndexOrNoData";
    import AdminLayout from "@/Layouts/AdminLayout";
    import Card from "@/Components/Card";
    import Button from "@/Jetstream/Button";

    export default {
        layout: (h, page) => h(AdminLayout, [page]),
        components: {
            Button,
            IndexOrNoData,
            Card,
        },
        props: {
            collection: Array,
            flash: Object,
        },
        data() {
            return {
                page: 1,
                max: 10,
            }
        },
        methods: {
            deleteAttributes(catId) {
                confirm('Are you sure to delete?') ? this.$inertia.delete(route('admin.attributes.destroy', {category: catId})) : '';
            }
        },
        updated() {
            if (this.flash.message) {
                this.$toasted.success(this.flash.message, {
                    duration: 5000,
                });
            }
        }
    }
</script>

<style scoped>

</style>
