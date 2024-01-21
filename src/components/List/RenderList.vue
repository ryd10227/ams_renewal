<template src="./RenderList.html"></template>
<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
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
        let displayedDataList = ref([]);

        // renderQuery(props.selectedCategory, displayedDataList);
        watchEffect(() => { getQuery(props.selectedCategory, displayedDataList); });

        return {
            displayedDataList,
        };
    },
    computed: {
        isDeleteButtonEnabled() {
            return this.displayedDataList.some(item => item.isChecked);
        },
    },
    methods: {
        selectItem(item) {
            item.isChecked = !item.isChecked;
        },
        toggleSelectAll() {
            this.displayedDataList.forEach(item => (item.isChecked = this.isAllChecked));
        },
        async deleteItems() {
            const selectedItems = this.displayedDataList.filter(item => item.isChecked);
            const selectedCategory = computed(() => this.$store.state.selectedCategory);
            deleteQuery(selectedCategory.value, selectedItems);
            this.displayedDataList = this.displayedDataList.filter(item => !item.isChecked);
            this.isAllChecked = false;
        },
        openItemDetails(item) {
            this.selectedItem = item;
            this.tr_open = !this.tr_open;
        },
        // 아이템 상세보기
        showDetails(item) {
            item.tr_open = !item.tr_open;
            this.selectedData = item;
            this.tr_open = item.tr_open;
        },
        // 아이템 상세보기 취소
        closeDetails() {
            this.tr_open = false;
        },
    }
});
</script>