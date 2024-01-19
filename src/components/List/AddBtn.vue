<template src="./AddBtn.html"></template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AddBtn",
    props: {
        selectedCategory: {
            type: String,
            required: true,
        },
    },
    methods: {
        goToAddPage() {
            // selectedCategory가 '전체'일 시 '하드웨어'로 바꿔서 라우트 이동
            if (this.selectedCategory === '전체') {
                this.$store.commit('setSelectedCategory', '하드웨어');
            }
            this.$router.push('/main/add');
        },
    },
});
</script>
  