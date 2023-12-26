<script setup lang="ts">
import {Ofdview} from 'ofdview-vue3';
import * as parser from 'parser_x.js'
import {ref} from 'vue'
import axios from 'axios'

axios({
  method: 'get',
  url: 'https://cmimg.maycur.com/front-static-resource/test/3c51333a0392fe9e47d89dd48e28789d.ofd',
  data: {},
  responseType: 'arraybuffer'
}).then(res => {
  console.log(res.data)
})

function closePage() {
  console.log('sdsfsdf')
}

</script>

<template>
  <div style="height: 100vh;">
    <Ofdview
        :mem="parser"
        water_text="自定义水印内容"
        :canClose="true"
        :file="msg"
        @closePage="closePage"
    ></Ofdview>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
