<template>
  <div class="number-input">
    <div class="minus" @click="minus">-</div>
    <input ref="input" v-model="num" />
    <div class="plus" @click="plus">+</div>
  </div>
</template>

<script lang="javascript">
export default {
  name: "number-input",
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {
      num: this.value
    }
  },
  methods: {
    minus() {
      this.num--;
    },
    plus() {
      this.num++;
    }
  }
}
</script>

<style scoped lang="less">
.number-input {
  display: flex;
  align-items: center;
}
</style>
