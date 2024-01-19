<template src="./ListPage.html"></template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { ChangeTabs, SearchBox, AddBtn, RenderList } from '@/components/List';
import { useStore } from 'vuex';

export default defineComponent({
	name: "ListPage",
	components: {
		ChangeTabs, SearchBox, AddBtn, RenderList,
	},
	setup() {
		// 중앙 상태에서 selectedCategory를 가져옴
		const store = useStore();
		const selectedCategory = computed(() => store.state.selectedCategory);

		return {
			selectedCategory,
		};
	},
});
</script>