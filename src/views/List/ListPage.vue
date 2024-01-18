<template>
	<ion-content class="contentsWrap">
		<div class="web_container sub_container">

			<div class="searchWrap">
				<!-- <ChangeTabs :isListTab="true" v-model="selectedCategory" /> -->
				<ChangeTabs :isListTab="true" v-model:selectedCategory="selectedCategory" />

				<div class="search_row">
					<SearchBox />
					<AddBtn />
				</div>

			</div>

			<RenderList :selectedCategory="selectedCategory" />

		</div>
	</ion-content>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ChangeTabs, SearchBox, AddBtn, RenderList } from '@/components/List';

export default defineComponent({
	name: "ListPage",
	components: {
		ChangeTabs, SearchBox, AddBtn, RenderList,
	},
	setup() {
		//vuex로 카테고리 저장하는 걸로 바꾸기
		const selectedCategory = ref('전체');

		return {
			selectedCategory,
		};
	},
});
</script>