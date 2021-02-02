<template>
    <div class="relative">
        <input class="w-full border-0 focus:outline-none focus:border-0 focus:ring-0" type="text" @input="$event => searchWord=$event.target.value" v-model="searchWord" :placeholder="selectedOptionValue">
        <button class="focus:outline-none absolute top-1/2 right-4 transform -translate-y-1/2" @click.prevent="active = !active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 class="fill-current text-gray-600 transition-all duration-300 transform" :class="{'-rotate-180': active}">
                <path
                    d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"></path>
            </svg>
        </button>
        <div v-show="active" class="overflow-y-auto max-h-4/10vh absolute w-full top-full left-0 shadow-xl border border-t-0 divide-y divide-gray-300">
            <div v-for="item in filteredCollection" :key="item.id">
                <button class="bg-gray-100 text-gray-900 px-3 py-2 cursor-pointer hover:bg-gray-200 focus:outline-none w-full text-left"
                     @click.prevent="toggleModels(item.id)">{{item.title}}
                </button>
                <div class="divide-y divide-gray-300" v-show="collapsed.includes(item.id)">
                    <button v-if="withAll" @click.prevent="selectOption(item)" class="bg-gray-100 text-gray-900 px-6 py-2 cursor-pointer hover:bg-gray-200 focus:outline-none w-full text-left">{{item.title}}
                        - All models
                    </button>
                    <button @click.prevent="selectOption([item, model])" class="bg-gray-100 text-gray-900 px-6 py-2 cursor-pointer hover:bg-gray-200 focus:outline-none w-full text-left"
                         v-for="model in item.models" :key="model.id">{{item.title}} - {{model.title}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "@/Jetstream/Button";
    export default {
        components: {Button},
        model: {
            prop: 'option',
            event: 'change',
        },
        props: {
            withAll: {
                type: Boolean,
            },
            collection: {
                required: true,
                type: Array,
            },
            option: {
                required: true,
            }
        },
        data() {
            return {
                collapsed: [],
                searchWord: '',
                active: false,
            }
        },
        watch: {
            searchWord: function (newVal) {
                this.collapsed.shift();
                this.active = newVal !== '';
            }
        },
        computed: {
            filteredCollection: function() {
                return this.collection.filter(item => {
                    return item.title.toLowerCase().includes(this.searchWord.toLowerCase());
                })
            },
            selectedOptionValue: function () {
                if (Array.isArray(this.option)) {
                    return this.option[0].title + ' - ' + this.option[1].title;
                }
                return this.option ? this.option.title : 'Search...';
            }
        },
        methods: {
            toggleModels(itemId) {
                if (this.collapsed.shift() !== itemId) {
                    this.collapsed.push(itemId);
                }
            },
            selectOption(option) {
                this.active = false;
                this.$emit('change', option);
                this.searchWord = '';
            }
        },
        updated() {
        }
    }
</script>

<style scoped>

</style>
