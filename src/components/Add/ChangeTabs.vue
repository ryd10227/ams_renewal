<!-- <template src="./ChangeTabs.html"></template> -->
<template>
    <div class="search_row tab">
        <label v-for="(category, index) in categories" :key="index">
            <input type="radio" :id="'category' + index" name="category" :checked="index === 0"
                v-model="selectedCategory" />
            <span>{{ category }}</span>
        </label>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ChangeTabs",
    data() {
        return {
            categories: ['하드웨어', '소프트웨어'],
            // selectedCategory: '하드웨어'
        };
    },
});
</script>