<template src="./AddBtn.html"></template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AddBtn",
    props: {

    },
    methods: {
        goToAddPage() {
            const selectedCategory = this.selectedCategory;
            // selectedCategory가 'entire'일 시 자동으로 'hw'로 바꿔줌
            if (selectedCategory === 'entire') {
                this.$store.commit('setSelectedCategory', 'hw');
            }
            this.$router.push('/main/add');
        },
    },
});
</script>