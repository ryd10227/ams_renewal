<!-- <template src="./ChangeTabs.html"></template> -->
<template>
    <div class="search_row tab">
        <label v-for="(category, index) in categories" :key="index">
            <input type="radio" :id="'category' + index" name="category" :checked="selectedCategory === category"
        @change="$emit('update:selectedCategory', category)" />
      <span>{{ category }}</span>
        </label>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ChangeTabs",
    props: {
        isListTab: {
            type: Boolean,
            required: true,
        },
        selectedCategory: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            categories: this.isListTab ? ['전체', '하드웨어', '소프트웨어'] : ['하드웨어', '소프트웨어'],
            // selectedCategory: '전체'
        };
    },
});
</script>