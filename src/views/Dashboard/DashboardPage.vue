<template src="./DashboardPage.html"></template>
<script lang="ts">
import { defineComponent } from "vue";
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import 'swiper/css';
import "swiper/css/pagination";
import { ChartAsset, TableChangedHistoryByDate, TableHW, TableSW, TableDueDate } from '@/components/Dashboard';

export default defineComponent({
  name: "DashboardPage",
  components: {
    VDatePicker,
    ChartAsset, TableChangedHistoryByDate, TableHW, TableSW, TableDueDate,
  },
  methods: {
    // '현재 기기를 자산으로 등록하기' 버튼 클릭 이벤트
    // navigator에서 가져온 디바이스의 플랫폼 정보를 Vuex store 저장, 카테고리를 'hw'로 Vuex store 저장, 하드웨어 자산 추가 페이지로 이동
    registerDevice() {
      const platformInfo = navigator.platform;
      this.$store.commit('setPlatformInfo', platformInfo);
      this.$store.commit('setSelectedCategory', '하드웨어');
      this.$router.replace('/main/add');
    },
  },
});
</script>