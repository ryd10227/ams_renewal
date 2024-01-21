<template src="./AddPage.html"></template>
<script lang="ts">
import { defineComponent } from "vue";
import { ChangeTabs, } from '@/components/List';
import { RenderInputs, } from '@/components/Add';

export default defineComponent({
	name: "AddPage",
	components: {
		ChangeTabs, RenderInputs,
	},
});
</script>