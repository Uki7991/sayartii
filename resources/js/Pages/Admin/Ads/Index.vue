<template>
    <div class="h-full">
        <index-or-no-data :collection-length="collection.length" :href="route('admin.announcements.create')" link-title="Create">
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
                                    Year
                                </vs-th>
                                <vs-th>
                                    Mileage
                                </vs-th>
                                <vs-th>
                                    Price
                                </vs-th>
                                <vs-th>
                                    Phone
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
                                    {{ tr.year }}
                                </vs-td>
                                <vs-td>
                                    {{ tr.mileage }}
                                </vs-td>
                                <vs-td>
                                    {{ tr.price }}
                                </vs-td>
                                <vs-td>
                                    {{ tr.phone }}
                                </vs-td>
                                <vs-td class="flex space-x-3">
                                    <inertia-link class="text-xs text-orange-500 py-1 px-2 hover:underline" :href="route('admin.announcements.edit', {ad: tr.id})">Edit</inertia-link>
                                    <button class="text-xs text-white bg-red-600 rounded-md py-1 px-2 hover:underline" @click="$inertia.delete(route('admin.announcements.destroy', {ad: tr.id}))">Delete</button>
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
    </div>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";
    import IndexOrNoData from "@/Components/IndexOrNoData";
    import Card from "@/Components/Card";

    export default {
        components: {
            IndexOrNoData,
            Card,
        },
        layout: (h, page) => h(AdminLayout, [page]),
        data() {
            return {
                page: 1,
                max: 10,
                collection: this.$page.props.ads,
            }
        },
    }
</script>

<style scoped>

</style>
