<template>
  <label>
    <input
      type="text"
      v-model="valueInput"
      class="ui-money"
      @input="setClearVal"
    />
  </label>
</template>

<script>
import { floatValidator } from '@/helpers/validator';

export default {

  name: 'UiMoney',

  props: {
    value: {
      type: Number,
    },
  },
  data() {
    return {
      valueInput: this.value ? this.value.toString() : '',
    };
  },

  methods: {
    setClearVal() {
      this.$emit('input', 0); // why? because...

      const formatted = floatValidator(this.valueInput);
      this.valueInput = formatted.strValue;
      if (formatted.isValid) {
        this.$emit('input', formatted.value);
      }
    },
  },

};
</script>
