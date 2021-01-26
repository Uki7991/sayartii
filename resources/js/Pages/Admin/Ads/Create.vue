<template>
    <form @submit.prevent="form.post(route('admin.announcements.store'))" class="flex flex-wrap">
        <div class="w-4/12 mr-4 mb-4 flex-shrink-0">
            <p class="capitalize text-center mb-4">Add images</p>
            <file-pond
                max-files="12"
                :imagePreviewHeight="100"
                allow-multiple="true"
                name="test"
                ref="pond"
                :server="server"
            ></file-pond>
            <div v-for="(item, index) in attributes" :key="index+'Create'" class="py-1" :class="[index, attributes]">
                <p class="mb-2">{{item.title}}</p>
                <div class="flex flex-wrap">
                    <check-box v-if="item.type === 'checkbox'" class="flex-initial mr-2 mb-3" :class="indexAttr"
                               v-for="(value, indexAttr) in item.attributesArr" :key="indexAttr+'checkbox'"
                               :name="index" v-model="form[index][indexAttr]" :type="value"></check-box>
                    <radio-box v-if="item.type === 'radio'" class="flex-initial mr-2 mb-3"
                               v-for="(value, indexAttr) in item.attributesArr" :key="indexAttr+'radio'" :name="index"
                               v-model="form[index]" :type="value"></radio-box>
                </div>
            </div>
        </div>
        <div class="flex-grow w-7/12 mb-4">
            <p class="capitalize text-center my-4">Car information</p>
            <div class="py-1">
                <label for="model">Make / Model</label>
                <input type="text" v-model="form.model" id="model" class="w-full rounded-md focus:ring-black focus:border-black">
                <multiselect track-by="title" label="title" group-values="models" group-label="title"
                             placeholder="Select one" v-model="form.make" :options="cars" class="w-full">
                    <template slot="singleLabel" slot-scope="props"><span class="option__desc"><span
                        class="option__title">{{ props.option.title }}</span></span></template>
                    <template slot="option" slot-scope="props">
                        <div v-if="props.option.$isLabel">
                            {{props.option.$groupLabel}}
                        </div>
                        <div v-else class="option__desc"><span
                            class="option__title">{{ props.option.title }}</span><span class="option__small">{{ props.option.created_at }}</span>
                        </div>
                    </template>
                </multiselect>
            </div>
            <div class="py-1">
                <label for="year">Year</label>
                <input v-model="form.year" type="number" id="year" class="w-full rounded-md focus:ring-black focus:border-black">
            </div>
            <div class="py-1">
                <label for="location">Location</label>
                <select id="location" v-model="form.location" class="w-full rounded-md focus:ring-black focus:border-black">
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
                <input type="number" v-model="form.price" id="price" class="w-full rounded-md focus:ring-black focus:border-black">
            </div>
            <div class="py-1">
                <label for="mileage">Mileage</label>
                <input type="number" v-model="form.mileage" id="mileage" class="w-full rounded-md focus:ring-black focus:border-black">
            </div>
            <div class="py-1">
                <label for="phone">Phone</label>
                <input type="number" v-model="form.phone" id="phone" class="w-full rounded-md focus:ring-black focus:border-black">
            </div>
            <div class="py-1">
                <label for="whatsapp">Whatsapp</label>
                <input type="number" v-model="form.whatsapp" id="whatsapp" class="w-full rounded-md focus:ring-black focus:border-black">
            </div>
            <div class="py-1">
                <label for="title">Title</label>
                <input type="text" v-model="form.title" id="title" class="w-full rounded-md focus:ring-black focus:border-black">
            </div>
            <div class="py-1">
                <label for="description">Description</label>
                <textarea id="description" v-model="form.description" rows="4"
                          class="w-full rounded-md focus:ring-black focus:border-black"></textarea>
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
    import Multiselect from "vue-multiselect";
    import 'vue-multiselect/dist/vue-multiselect.min.css';
    import _ from "lodash";

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
            Multiselect,
        },
        data() {
            return {
                server: {
                    process:(fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                        let self = this;
                        // fieldName is the name of the input field
                        // file is the actual file object to send
                        const formData = new FormData();
                        formData.append(fieldName, file, file.name);

                        const request = new XMLHttpRequest();
                        request.open('POST', route('images.post-image', {dir: 'announcements', prefix: 'announcements'}));

                        // Should call the progress method to update the progress to 100% before calling load
                        // Setting computable to false switches the loading indicator to infinite mode
                        request.upload.onprogress = (e) => {
                            progress(e.lengthComputable, e.loaded, e.total);
                        };

                        // Should call the load method when done and pass the returned server file id
                        // this server file id is then used later on when reverting or restoring a file
                        // so your server knows which file to return without exposing that info to the client
                        request.onload = function() {
                            if (request.status >= 200 && request.status < 300) {
                                // the load method accepts either a string (id) or an object
                                self.form.images.push(JSON.parse(request.responseText));

                                load(request.responseText);
                            }
                            else {
                                // Can call the error method if something is wrong, should exit after
                                error('oh no');
                            }
                        };

                        request.send(formData);

                        // Should expose an abort method so the request can be cancelled
                        return {
                            abort: () => {
                                // This function is entered if the user has tapped the cancel button
                                request.abort();

                                // Let FilePond know the request has been cancelled
                                abort();
                            }
                        };
                    },
                    revert: (uniqueFileId, load, error) => {
                        let self = this;
                        // Should remove the earlier created temp file here
                        // ...

                        window.axios.delete(self.route('images.delete-image', {filename: JSON.parse(uniqueFileId)})).then(() => {
                            let index = self.form.images.indexOf(JSON.parse(uniqueFileId));
                            if (index !== -1) {
                                self.form.images.splice(index, 1);
                            }
                            load();
                        }).catch(() => {
                            error('oh no');
                        })

                    }
                },
                attributes: [],
                cars: this.$page.props.cars,
                files: [],
                form: this.$inertia.form({
                    title: null,
                    description: null,
                    model: null,
                    year: null,
                    mileage: null,
                    phone: null,
                    price: null,
                    whatsapp: null,
                    location: null,
                    images: [],
                }),
            }
        },
        methods: {
            optionClick(props) {
                console.log(props);
            },
        },
        mounted() {
            this.attributes = this.$page.props.categories;
            _.forEach(this.$page.props.categories, (value, index) => {
                if (value.type === 'radio') {
                    this.$set(this.form, index, '');
                }
                if (value.type === 'checkbox') {
                    this.$set(this.form, index, {});
                    _.forEach(value.attributesArr, (item, key) => {
                        this.$set(this.form[index], key, item.status);
                    })
                }
            })
        }
    }
</script>

<style scoped>

</style>
