<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <table-content class="data-table__content" :items="currentPageItems" />

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
import TableContent from '@/components/TableContent.vue';

export default {

  name: 'DataTable',
  components: { TableContent },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
  }),

  computed: {
    filteredRows() {
      const filteredRows = this.rows.filter((row) => Number(row.money) <= this.moneyFilter);
      return filteredRows.length ? filteredRows : this.rows;
    },
    pageCount() {
      return Math.ceil(this.filteredRows.length / this.pageSize);
    },
    currentPageItems() {
      const currentPage = this.page > 0 ? this.page : 1;
      const start = (currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredRows.slice(start, end);
    },
  },
  watch: {
    pageCount() {
      if (this.page > this.pageCount) {
        this.page = this.pageCount;
      }
    },
  },
};
</script>
