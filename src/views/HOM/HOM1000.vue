<template src="./HOM1000.html"></template>
<script lang="ts">
import { defineComponent } from "vue";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { VDatePicker } from 'vuetify/labs/VDatePicker'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


export default defineComponent({
	name: "HOM1000",
	components: {Swiper, SwiperSlide, VDatePicker},
    setup() {
      const onSwiper = (swiper: any) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination],
      };
    },
	data() {
		return {};
	}
});
</script>