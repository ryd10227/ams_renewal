<template src="./AddPage.html"></template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { ChangeTabs, } from '@/components/List';
import { RenderInputs, } from '@/components/Add';
import { useStore } from 'vuex';

export default defineComponent({
	name: "AddPage",
	components: {
		ChangeTabs, RenderInputs,
	},
});
</script>