<template src="./SearchBox.html"></template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SearchBox",
    data() {
        return {
            selectedOption: 'assetType',
            searchTerm: '',
            options: [
                { value: 'assetType', label: '자산종류' },
                { value: 'manufacturer', label: '제조사' },
                { value: 'serialNum', label: 'S/N' },
                { value: 'assetState', label: '자산상태' },
                { value: 'department', label: '부서' },
                { value: 'user', label: '사용자' },
                { value: 'exUser', label: '전사용자' },
                { value: 'HWModel', label: '모델명' },
                { value: 'returnedDate', label: '반납일' },
                { value: 'SWExpireDate', label: '만료일' },
            ],
        };

    },
});
</script>