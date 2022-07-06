<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

const activeNames = ref(['1'])
</script>

<template>
  <van-config-provider theme="light">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1">
        <template #title>
          <div>标题1 <van-icon name="question-o" /></div>
        </template>
        代码是写出来给人看的，附带能在机器上运行。
      </van-collapse-item>
      <van-collapse-item title="标题2" name="2" icon="shop-o"> 技术无非就是那些开发它的人的共同灵魂。 </van-collapse-item>
    </van-collapse>
  </van-config-provider>
</template>
