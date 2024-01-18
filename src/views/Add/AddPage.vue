<template src="./AddPage.html"></template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ChangeTabs, } from '@/components/List';
import { RenderInputs, } from '@/components/Add';

export default defineComponent({
	name: "AddPage",
	components: {
		ChangeTabs, RenderInputs,
	},
	setup() {
		//vuex로 카테고리 저장하는 걸로 바꾸기
		const selectedCategory = ref('하드웨어');

		return {
			selectedCategory,
		};
	},
});
</script>