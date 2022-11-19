<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">logo</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark">
        <a-menu-item key="1">
          <user-outlined/>
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="2">
          <caret-right-outlined/>
          <span>展示</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined/>
          <span>管理页面</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        内容
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import {ref} from 'vue';

const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
</script>