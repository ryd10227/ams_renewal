<!-- 대시보드 페이지 중 날짜별 변경이력 테이블 컴포넌트 -->
<template src="./TableChangedHistoryByDate.html"></template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VDatePicker } from 'vuetify/labs/VDatePicker'

export default defineComponent({
  components: {
    VDatePicker,
  },
  setup() {
    const datePicker = ref(new Date());
    const pickedData = ref(null);

    const dataChanged = () => {
      pickedData.value = new Date(datePicker.value.getTime() - (datePicker.value.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
      console.log(pickedData.value);
    };

    return {
      datePicker,
      pickedData,
      dataChanged
    };
  },
  computed: {
    // 추가된 자산의 개수를 반환
    isAdded() {
      return this.calculateItemCount('isAdded');
    },

    // 수정된 자산의 개수를 반환
    isModified() {
      return this.calculateItemCount('isModified');
    },

    // 삭제된 자산의 개수를 반환
    isDeleted() {
      return this.calculateItemCount('isDeleted');
    },

    // 전체 자산의 변경사항을 최신순으로 5개 보여줌
    recentDateItems() {
      const dateItems = this.$store.state.dataList;
      return dateItems.slice(-5).reverse();
    },
  },
  methods: {
    // 캘린더에서 날짜 선택 시 호출됨
    // dataChanged() {
    //   this.pickedData = (new Date(this.datePicker.getTime() - (this.datePicker.getTimezoneOffset() * 60000)).toISOString()).substring(0, 10);
    //   console.log(this.pickedData)
    //   return;
    // },

    // 더보기 버튼 클릭 이벤트, '전체' 카테고리가 선택된 채로 리스트 페이지로 이동
    more() {
      this.$store.commit('setSelectedCategory', 'entire');
      this.$router.replace('/main/list');
    },

    // 추가, 수정, 삭제된 자산의 개수를 계산
    calculateItemCount(type) {
      return this.$store.state.dataList.filter(item => item.editType === type).length;
    },
  },
  mounted() {
    this.pickedData = (new Date(this.datePicker.getTime() - (this.datePicker.getTimezoneOffset() * 60000)).toISOString()).substring(0, 10)
  },
});
</script>