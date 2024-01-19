<template>
    <div class="search_row tab">
        <label v-for="(category, index) in categories" :key="index">
            <input type="radio" :id="'category' + index" name="category" :checked="selectedCategory === category"
                @change="changeCategory(category)" />
            <span>{{ category }}</span>
        </label>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: "ChangeTabs",
    props: {
        isListTab: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            categories: this.isListTab ? ['전체', '하드웨어', '소프트웨어'] : ['하드웨어', '소프트웨어'],
        };
    },
    setup() {
        // 중앙 상태에서 selectedCategory를 가져오고, 선택된 카테고리에 따라 selectedCategory를 변경하는 mutation
        const store = useStore();
        const selectedCategory = computed(() => store.state.selectedCategory);
        const changeCategory = (category) => {
            store.commit('setSelectedCategory', category);
        };

        return {
            selectedCategory,
            changeCategory,
        };
    },
});
</script>