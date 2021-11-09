<template>
  <div class="table">
    <div class="table__header table__field" v-for="(header, index) in headers" :key="index">
      {{header}}
    </div>
    <template v-for="(row,index) in items" >
      <div class="table__column table__field" v-for="column in mappedRow(row)" :key="`${column.name}${index}`">
        <span class="table__column-label">{{column.label}}</span>
        {{column | formatter}}
      </div>
    </template>
  </div>
</template>

<script>
import { dataMapper } from '@/helpers/mapper';

export default {
  name: 'TableContent',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  filters: {
    formatter(column) {
      return column.formatter ? column.formatter(column.value) : column.value;
    },
  },
  computed: {
    sortedMapper() {
      return dataMapper.sort((a, b) => {
        if (a.sort === b.sort) {
          return 0;
        }
        if (a.sort > b.sort) {
          return 1;
        }
        return -1;
      });
    },
    headers() {
      return this.sortedMapper.map((field) => field.label);
    },
  },
  methods: {
    mappedRow(row) {
      return this.sortedMapper.map((column) => {
        return { ...column, value: row[column.name] };
      });
    },
  },
};
</script>
