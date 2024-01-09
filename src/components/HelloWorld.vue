<script setup lang="ts">
import {Ofdview} from 'ofdview-vue3';
import * as parser from 'parser_x.js'
import {ref} from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)


</script>

<template>
  <div style="height: 100vh;">
    <Ofdview
        :mem="parser"
        :canClose="true"
    ></Ofdview>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
