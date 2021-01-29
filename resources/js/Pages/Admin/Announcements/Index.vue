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
                                    Active
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
                                <vs-td>
                                    <div class="flex items-center justify-center">

                                        <!-- Toggle Button -->
                                        <label
                                            :for="'toogle'+tr.id"
                                            class="flex items-center cursor-pointer"
                                        >
                                            <!-- toggle -->
                                            <div class="relative">
                                                <!-- input -->
                                                <input :id="'toogle'+tr.id" @change="toggleActive($event, tr.id)" type="checkbox" :value="true" :checked="tr.active" class="hidden" />
                                                <!-- line -->
                                                <div
                                                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                                                ></div>
                                                <!-- dot -->
                                                <div
                                                    class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                                                ></div>
                                            </div>
                                        </label>

                                    </div>
                                </vs-td>
                                <vs-td class="flex space-x-3">
                                    <inertia-link class="text-xs text-orange-500 py-1 px-2 hover:underline" :href="route('admin.announcements.edit', {ad: tr.id})">Edit</inertia-link>
                                    <button class="text-xs text-white bg-red-600 rounded-md py-1 px-2 hover:underline" @click="deleteAd(tr.id)">Delete</button>
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
            toggleActive($e, car) {
                window.axios.post(this.route('admin.announcements.active', {ad: car, active: $e.target.checked}))
                    .then(data => {
                        if (data.data.status) {
                            console.log(data.data.message);
                        } else {
                            console.log('error');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            deleteAd($adId) {
                confirm('Are you sure to delete?') ? this.$inertia.delete(this.route('admin.announcements.destroy', {ad: $adId})) : '';
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
