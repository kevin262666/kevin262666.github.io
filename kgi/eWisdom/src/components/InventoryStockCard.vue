<script setup>
  import { useStore } from 'vuex';
  const store = useStore();
  defineProps({
    selectAll: {
      type: Boolean,
      required: true
    },
    stock1: {
      type: String,
      required: true
    },
    qty1: {
      type: String,
      required: true
    },
    price1: {
      type: String,
      required: true
    },
    up1: {
      type: Boolean,
      required: true
    },
    choose1: {
      type: Boolean,
      required: true
    },

    qty2: {
      type: String,
      required: true
    },
    price2: {
      type: String,
      required: true
    },
    up2: {
      type: Boolean,
      required: true
    },
    choose2: {
      type: Boolean,
      required: true
    },

    qty3: {
      type: String,
      required: true
    },
    price3: {
      type: String,
      required: true
    },
    up3: {
      type: Boolean,
      required: true
    },
    choose3: {
      type: Boolean,
      required: true
    },
  })

  const emit = defineEmits(["circlePlusClick"])

  const handleCirclePlusClick = () => {
    // 发送事件到父组件
    emit('circlePlusClick');
  };
</script>

<template>
  <div class="inventoryStockCard">
    <div class="inventoryStockCard-head" :class="{'type2': selectAll}">
      {{ stock1 }}
      <i class="fa-solid fa-circle-plus" v-if="!selectAll"  @click="handleCirclePlusClick"></i>
    </div>
    <div class="inventoryStockCard-main">
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="remark">現股</div>
          <div class="inventoryStockCard-qty">
            <b>{{ qty1 }}</b>張
          </div>
          <div class="remark">成本均價</div>
          <div class="inventoryStockCard-price" :class="{'text-orange': up1 && price1 != '-', 'text-green': !up1 && price1 != '-'}">
            {{ price1 }}
          </div>
          <div class="text-center margin-top-5" v-if="qty1 != '-' && selectAll">
            <el-button :type="store.state.darkMode ? '' : 'primary'" plain @click="handleCirclePlusClick">選擇</el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="remark">融資</div>
          <div class="inventoryStockCard-qty">
            <b>{{ qty2 }}</b>張
          </div>
          <div class="remark">成本均價</div>
          <div class="inventoryStockCard-price" :class="{'text-orange': up2 && price2 != '-', 'text-green': !up2 && price2 != '-'}">
            {{ price2 }}
          </div>
          <div class="text-center margin-top-5" v-if="qty2 != '-' && selectAll">
            <el-button :type="store.state.darkMode ? '' : 'primary'" plain @click="handleCirclePlusClick">選擇</el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="remark">融券</div>
          <div class="inventoryStockCard-qty">
            <b>{{ qty3 }}</b>張
          </div>
          <div class="remark">成本均價</div>
          <div class="inventoryStockCard-price" :class="{'text-orange': up3 && price3 != '-', 'text-green': !up3 && price3 != '-'}">
            {{ price3 }}
          </div>
          <div class="text-center margin-top-5" v-if="qty3 != '-' && selectAll">
            <el-button :type="store.state.darkMode ? '' : 'primary'" plain @click="handleCirclePlusClick">選擇</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
