<template src="./RenderInputs.html"></template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { postQuery } from '@/queries';

export default defineComponent({
    name: "RenderInputs",
    props: {
    },
    setup() {
        // 중앙 상태에서 selectedCategory를 가져옴
        const store = useStore();
        const selectedCategory = computed(() => store.state.selectedCategory);

        const insertedData = ref({
            assettype: '',
            manufacturer: '',
            sn: '',
            status: '',
            dept: '',
            currentuser: '',
            previoususer: '',
            assigneddate: '',
            expirydate: '',
            duedate: '',
            returndate: '',
            assetname: store.state.platformInfo || '',
            cpu: '',
            ssd: '',
            hdd: '',
            memory: '',
        });

        const formFields = computed(() => {
            const commonFields = [
                { key: 'assettype', label: '자산종류', type: 'text' },
                { key: 'assetname', label: '모델명', type: 'text' },
                { key: 'manufacturer', label: '제조사', type: 'text' },
                { key: 'sn', label: 'S/N', type: 'text' },
                { key: 'status', label: '자산상태', type: 'text' },
                { key: 'dept', label: '부서', type: 'text' },
                { key: 'currentuser', label: '사용자', type: 'text' },
            ];

            return selectedCategory.value === '소프트웨어'
                ? [...commonFields, { key: 'expirydate', label: '만료일', type: 'date' }]
                : [
                    ...commonFields,
                    { key: 'previoususer', label: '전사용자', type: 'text' },
                    { key: 'assigneddate', label: '지급일', type: 'date' },
                    { key: 'deadline', label: '반납기한', type: 'date' },
                    { key: 'returndate', label: '반납일', type: 'date', disabled: true },
                    { key: 'cpu', label: 'CPU', type: 'text' },
                    { key: 'ssd', label: 'SSD', type: 'text' },
                    { key: 'hdd', label: 'HDD', type: 'text' },
                    { key: 'memory', label: '메모리', type: 'text' },
                ];
        });

        return {
            insertedData,
            selectedCategory,
            formFields,
        };
    },
    methods: {
        async saveData() {
            // 필수 입력 필드 유효성 검사
            if (!this.insertedData.sn) {
                alert('시리얼 넘버는 필수 입력 항목입니다.');
                return;
            }

            const insertedCommon = {
                assettype: this.insertedData.assettype,
                assetname: this.insertedData.assetname,
                manufacturer: this.insertedData.manufacturer,
                sn: this.insertedData.sn,
                status: this.insertedData.status,
                dept: this.insertedData.dept,
                currentuser: this.insertedData.currentuser,
            };

            const insertedHW = {
                ...insertedCommon,
                previoususer: this.insertedData.previoususer,
                assigneddate: this.insertedData.assigneddate,
                deadline: this.insertedData.returndate,
                cpu: this.insertedData.cpu,
                ssd: this.insertedData.ssd,
                hdd: this.insertedData.hdd,
                memory: this.insertedData.memory,
            };

            const insertedSW = {
                ...insertedCommon,
                expirydate: this.insertedData.expirydate,
            };

            const dataToSend = this.selectedCategory === '소프트웨어' ? insertedSW : insertedHW;
            postQuery(this.selectedCategory, dataToSend);

            this.$store.commit('setPlatformInfo', null);
            this.$router.replace('/main/list');
        },
    },
});
</script>