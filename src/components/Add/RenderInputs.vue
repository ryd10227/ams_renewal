<template src="./RenderInputs.html"></template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RenderInputs",
    data() {
        return {
            categories: ['하드웨어', '소프트웨어'],
            // selectedCategory: '하드웨어'
        };
    },
});
</script>