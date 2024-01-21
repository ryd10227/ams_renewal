<template src="./RenderList.html"></template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { RenderInputs } from '@/components/Add'
import { getQuery, deleteQuery } from '@/queries'

export default defineComponent({
    name: "RenderList",
    components: {
        RenderInputs,
    },
    props: {
        selectedCategory: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            tr_open: false,
            tr_open2: false,
        };
    },
    setup(props) {
        const displayedDataList = ref([]);
        watchEffect(() => { getQuery(props.selectedCategory, displayedDataList); });
        return {
            displayedDataList,
        };
    },
    computed: {
        isDeleteButtonEnabled() {
            return this.displayedDataList.some((item: any) => item.isChecked);
        },
    },
    methods: {
        selectItem(item: any) {
            item.isChecked = !item.isChecked;
        },
        toggleSelectAll() {
            this.displayedDataList.forEach((item: any) => (item.isChecked = this.isAllChecked));
        },
        async deleteItems() {
            const selectedItems = this.displayedDataList.filter(item => item.isChecked);
            deleteQuery(this.selectedCategory, selectedItems);
            this.displayedDataList = this.displayedDataList.filter(item => !item.isChecked);
            this.isAllChecked = false;
        },
        openItemDetails(item: object) {
            this.selectedItem = item;
            this.tr_open = !this.tr_open;
        },
        closeDetails() {
            this.tr_open = false;
        },
    }
});
</script>