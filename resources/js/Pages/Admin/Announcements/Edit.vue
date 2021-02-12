<template>
    <form @submit.prevent="submitForm" class="flex flex-wrap">
        <div class="w-4/12 mr-4 mb-4 flex-shrink-0">
            <p class="capitalize text-center mb-4">Add images</p>
            <file-pond
                max-files="12"
                :imagePreviewHeight="100"
                allow-multiple="true"
                name="test"
                ref="pond"
                :files="files"
                :server="server"
            ></file-pond>
            <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.images">{{$page.props.errors.images}}</p>

            <div v-for="(item, index) in attributes" :key="index+'Create'" class="py-1" :class="[index, attributes]">
                <p class="mb-2">{{item.title}}</p>
                <div class="flex flex-wrap">
                    <check-box v-if="item.type === 'checkbox'" class="flex-initial mr-2 mb-3" :class="indexAttr"
                               v-for="(value, indexAttr) in item.attributesArr" :key="indexAttr+'checkbox'"
                               :name="index" v-model="form.attributesArr[index][indexAttr]" :type="value"></check-box>
                    <radio-box v-if="item.type === 'radio'" class="flex-initial mr-2 mb-3"
                               v-for="(value, indexAttr) in item.attributesArr" :key="indexAttr+'radio'" :name="index"
                               v-model="form.attributesArr[index]" :type="value"></radio-box>
                    <p class="text-xs text-red-600 mb-2 w-full" v-if="$page.props.errors['attributesArr.'+index]">{{$page.props.errors['attributesArr.'+index]}}</p>
                </div>
            </div>
        </div>
        <div class="flex-grow w-7/12 mb-4">
            <p class="capitalize text-center my-4">Car information</p>
            <div class="py-1">
                <label for="model">Make / Model</label>
                <select-with-search
                    class="flex flex-col items-center border rounded-md px-3 border-gray-400 w-full bg-white"
                    :collection="$page.props.cars" v-model="form.model"></select-with-search>
                <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.model">{{$page.props.errors.model}}</p>
            </div>
            <div class="py-1">
                <label for="year">Year</label>
                <input v-model="form.year" type="number" id="year" class="w-full rounded-md focus:ring-black focus:border-black">
                <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.year">{{$page.props.errors.year}}</p>

            </div>
            <div class="py-1">
                <label for="price">Price</label>
                <input type="number" v-model="form.price" id="price" class="w-full rounded-md focus:ring-black focus:border-black">
                <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.price">{{$page.props.errors.price}}</p>

            </div>
            <div class="py-1">
                <label for="mileage">Mileage</label>
                <input type="number" v-model="form.mileage" id="mileage" class="w-full rounded-md focus:ring-black focus:border-black">
                <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.mileage">{{$page.props.errors.mileage}}</p>

            </div>
            <div class="py-1">
                <label for="phone">Phone</label>
                <input type="number" v-model="form.phone" id="phone" class="w-full rounded-md focus:ring-black focus:border-black">
                <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.phone">{{$page.props.errors.phone}}</p>

            </div>
            <div class="py-1">
                <label for="whatsapp">Whatsapp</label>
                <input type="number" v-model="form.whatsapp" id="whatsapp" class="w-full rounded-md focus:ring-black focus:border-black">
                <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.whatsapp">{{$page.props.errors.whatsapp}}</p>

            </div>
            <div class="py-1">
                <label for="title">Title</label>
                <input type="text" v-model="form.title" id="title" class="w-full rounded-md focus:ring-black focus:border-black">
                <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.title">{{$page.props.errors.title}}</p>

            </div>
            <div class="py-1">
                <label for="description">Description</label>
                <textarea id="description" v-model="form.description" rows="4"
                          class="w-full rounded-md focus:ring-black focus:border-black"></textarea>
                <p class="text-xs text-red-600 mb-2" v-if="$page.props.errors.description">{{$page.props.errors.description}}</p>

            </div>
        </div>

        <div class="w-full py-4">
            <button type="submit" class="bg-green-700 text-gray-100 py-3 px-6 rounded-md">Update</button>
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
    import SelectWithSearch from "@/Components/SelectWithSearch";

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
        props: {
            announcement: Object,
        },
        layout: (h, page) => h(AdminLayout, [page]),
        components: {
            CheckBox,
            RadioBox,
            FilePond,
            Multiselect,
            SelectWithSearch,
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

                    },
                    load: (source, load, error, progress, abort, headers) => {
                        // Should request a file object from the server here
                        // ...
                        let self = this;
                        // Can call the error method if something is wrong, should exit after
                        fetch(self.route('images.get-image', {filename: source})).then(res => {
                            res.blob().then(blob => {
                                progress(true, 0, blob.size);
                                //
                                load(blob);
                            });
                        });

                        // Should expose an abort method so the request can be cancelled
                        return {
                            abort: () => {
                                // User tapped cancel, abort our ongoing actions here

                                // Let FilePond know the request has been cancelled
                                abort();
                            }
                        };
                    },
                    remove: (source, load, error) => {
                        window.axios.delete(this.route('admin.announcements.image.delete', {'ad': this.announcement.id, 'filename': source}))
                            .then(data => {
                                if (data.data) {
                                    window.axios.delete(self.route('images.delete-image', {filename: source})).then(() => {
                                        this.files.splice(this.files.findIndex((item, index, array) => {
                                            return item.source === source;
                                        }), 1);
                                        this.form.images.splice(this.form.images.indexOf(source), 1);
                                        load();
                                    }).catch(() => {
                                        error('oh no');
                                    })
                                }
                            })
                            .catch(data => {
                                error('oh no');
                            })

                    }
                },
                attributes: [],
                cars: this.$page.props.cars,
                files: null,
                form: this.$inertia.form({
                    title: this.announcement.title,
                    description: this.announcement.description,
                    model: [this.announcement.car_model.car, this.announcement.car_model],
                    year: this.announcement.year,
                    mileage: this.announcement.mileage,
                    phone: this.announcement.phone,
                    price: this.announcement.price,
                    whatsapp: this.announcement.whatsapp,
                    attributesArr: {},
                    images: this.announcement.images.map(item => {
                        return item.path;
                    }),
                }),
            }
        },
        methods: {
            optionClick(props) {
                console.log(props);
            },
            submitForm() {
                this.$inertia.put(this.route('admin.announcements.update', {ad: this.announcement.id}), this.form);
            }
        },
        mounted() {
            window.axios.get('/api/attributes')
                .then(data => {
                    this.attributes = data.data;
                    _.forEach(data.data, (value, index) => {
                        if (value.type === 'radio') {
                            let attr = this.announcement.attributesarr.find((item) => {
                                return item.camel === index;
                            });
                            this.$set(this.form.attributesArr, index, attr.id);
                        }
                        if (value.type === 'checkbox') {
                            this.$set(this.form.attributesArr, index, {});
                            _.forEach(value.attributesArr, (item, key) => {
                                let attr = this.announcement.attributesarr.find((item) => {
                                    return item.id == key && item.camel === index;
                                });
                                this.$set(this.form.attributesArr[index], key, attr ? true : false);
                            })
                        }
                    })
                })
                .catch(error => {
                    console.log(error);
                })
            this.files = this.announcement.images ? this.announcement.images.map(item => {
                return {
                    source: item.path,
                    options: {
                        type: 'local',
                    }
                }
            }) : null;
        }
    }
</script>

<style scoped>

</style>
