<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const startTime_hour = ref(''),
      startTime_minute = ref(''),
      startTime_second = ref('')

const kgiTimePicker = ref(null),
      showOption = ref(false);

onMounted(() => {
  kgiTimePicker.value.addEventListener('mouseenter', function() {
      // 滑鼠移入時設置 showOption 為 true
      showOption.value = true;
  });
  kgiTimePicker.value.addEventListener('mouseleave', function() {
        // 滑鼠移出時設置 showOption 為 false
      showOption.value = false;
  });
});
</script>

<template>
  <div class="kgiTimePicker" ref="kgiTimePicker">
    <div class="kgiTimePicker-input">
      <el-input v-model="startTime_hour" inputmode="none" maxlength="2" placeholder="時"/>
      <span>：</span>
      <el-input v-model="startTime_minute" inputmode="none" maxlength="2" placeholder="分"/>
      <span>：</span>
      <el-input v-model="startTime_second" inputmode="none" maxlength="2" placeholder="秒"/>
    </div>
    <div class="kgiTimePicker-option" v-if="showOption">
      <div class="kgiTimePicker-option-content">
        <div class="kgiTimePicker-option-list">
          <ul>
            <li v-for="(item, index) in 24" :key="index" :class="{'active': index == 2}">
              <template v-if="(index) < 10">0</template>{{ index }}
            </li>
          </ul>
          <ul>
            <li v-for="(item, index) in 59" :key="index" :class="{'active': index == 2}">
              <template v-if="(index) < 9">0</template>{{ index + 1 }}
            </li>
          </ul>
          <ul>
            <li v-for="(item, index) in 59" :key="index" :class="{'active': index == 2}">
              <template v-if="(index) < 9">0</template>{{ index + 1 }}
            </li>
          </ul>
        </div>
        <div class="kgiTimePicker-option-btn">
          <el-button size="small" @click="showOption = false;">取消</el-button>
          <el-button size="small" type="primary" @click="showOption = false;">確定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>