<template>
    <card class="w-3/10">
        <form class="flex flex-col space-y-4" @submit.prevent="storeCar">
            <div class="py-2">
                <label class="text-sm text-gray-700" for="title">Title</label>
                <input type="text" id="title" v-model="form.title" class="rounded-md focus:ring-gray-600 focus:border-600 w-full">
                <p class="text-xs text-red-600 mb-2" v-if="form.errors.title">{{form.errors.title}}</p>
            </div>
            <div class="py-2">
                <file-pond
                    max-files="1"
                    :imagePreviewHeight="100"
                    name="test"
                    ref="pond"
                    :files="files"
                    :server="server"
                    @addfilestart="processFileStart"
                    @removefile="processFileRevert"
                    @processfile="processFileFinished"
                ></file-pond>
            </div>
            <div class="py-2">
                <label class="text-sm text-gray-700">Models (Hit Enter to add)</label>
                <multiselect v-model="form.models" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="title" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag" class="rounded-md focus:ring-gray-600 focus:border-600 w-full"></multiselect>
                <p class="text-xs text-red-600 mb-2" v-if="form.errors.models">{{form.errors.models}}</p>
            </div>
            <button class="bg-green-600 text-gray-100 text-lg font-medium py-3 rounded-md" type="submit" :disabled="disabledButton">Update</button>
        </form>
    </card>
</template>

<script>
    import AdminLayout from "@/Layouts/AdminLayout";
    import Card from "@/Components/Card";
    import Multiselect from "vue-multiselect";
    import 'vue-multiselect/dist/vue-multiselect.min.css';

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
            car: Object,
        },
        components: {
            Multiselect,
            Card,
        },
        layout: (h, page) => h(AdminLayout, [page]),
        data() {
            return {
                options: [],
                files: null,
                form: this.$inertia.form({
                    title: this.car.title,
                    image: this.car.image,
                    models: this.car.models,
                }),
                server: {
                    process:(fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                        let self = this;
                        // fieldName is the name of the input field
                        // file is the actual file object to send
                        const formData = new FormData();
                        formData.append(fieldName, file, file.name);

                        const request = new XMLHttpRequest();
                        request.open('POST', route('images.post-image', {dir: 'cars', prefix: 'cars'}));

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
                                self.form.image = JSON.parse(request.responseText);

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
                            self.form.image = null;
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
                        this.files = null;
                        this.form.image = null;

                        load();
                    }
                },
                disabledButton: false,
            }
        },
        methods: {
            processFileStart() {
                this.disabledButton = true;
                // this.files.push(this.files.length);
            },
            processFileFinished() {
                // this.files.shift();
                // if (!this.files)
                this.disabledButton = false;
            },
            processFileRevert() {
                this.disabledButton = false;
            },
            addTag(newTag) {
                const tag = {
                    title: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                };
                this.options.push(tag);
                this.form.models.push(tag);
            },
            storeCar() {
                this.disabledButton = true;
                this.form.put(this.route('admin.cars.update', {car: this.car.id}), {
                    onSuccess: (data) => {
                        this.disabledButton = false;
                    },
                    onError: () => {
                        this.disabledButton = false;
                    }
                });
            }
        },
        mounted() {
            this.files = this.$page.props.car.image ? [
                {
                    source: this.$page.props.car.image,
                    options: {
                        type: 'local',
                    }
                }
            ] : null;
        }
    }
</script>

<style scoped>

</style>
