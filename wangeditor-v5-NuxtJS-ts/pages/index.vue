<template>
  <div class="container">
    <main class="main" style="margin: 20px;">
      <h1 class="title">
        Welcome to <a href="https://www.wangeditor.com/">WangEditor V5!</a>
      </h1>
      选择要显示的 demo &nbsp;
      <select v-model="pageName" @change="e => pageName = e.target.value">
        <option value="">置空</option>
        <option value="simple">simple-page</option>
        <option value="basic">basic-page</option>
      </select>
      <hr/>

      <Basic v-if="pageName === 'basic' "/>
      <Simple v-if="pageName === 'simple' "/>
    </main>

    <footer class="footer">
      <a
        href="https://www.wangeditor.com/"
        target="_blank"
        rel="noreferrer"
      >
        Copyright © wangEditor.com (2017 - present) all right reserved
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Basic from '@/components/Basic.vue'
import Simple from '@/components/Simple.vue'

export default Vue.extend({
  components: {
    Basic,
    Simple
  },
  data() {
    return {
      pageName: 'basic'
    }
  }
})
</script>
