<script lang="ts" setup>
// import { ref } from 'vue'

defineProps({
  id: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
})
</script>

<template>
    <div class="kgiCheckbox">
        <label>
            <input type="checkbox" name="" :id="id">
            <span class="kgiCheckbox-fakeCheckbox">
                <i class="fa-solid fa-check"></i>
            </span>
            <span class="kgiCheckbox-text" v-if="text!=undefined">
                {{ text }}
            </span>
        </label>
    </div>
</template>