<!-- <template src="./SearchBox.html"></template> -->
<template>
    <select v-model="selectedOption">
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>

    <div class="inp_box" v-if="!selectedOption.endsWith('Date')">
        <input type="text" v-model="searchTerm" placeholder="검색" />
        <button type="button" class="btn_search" @click="search"><span>Search</span></button>
    </div>
    <div class="inp_box" v-else>
        <input type="date" id="" />
    </div>
</template>
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