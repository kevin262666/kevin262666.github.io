<script lang="ts" setup>
import { ref } from 'vue'
import { Sort } from '@element-plus/icons-vue'
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex';
const store = useStore();

const sortDialogVisible = ref(false)
</script>

<template>
  <div class="headerNav switchOrderType">
    <div class="switchOrder">
      <div class="container">
        <div class="switchOrder-tab">
          <ul>
            <li :class="{'active': $route.path === '/Securities/OrderSet/ManyTriggersOrder'}">
              <RouterLink to="/Securities/OrderSet/ManyTriggersOrder" title="多條件觸價" v-scroll-to="'#main'">
                多條件觸價
              </RouterLink>
            </li>
            <li :class="{'active': $route.path === '/Securities/OrderSet/ChooseOneOrTheOther'}">
              <RouterLink to="/Securities/OrderSet/ChooseOneOrTheOther" title="二擇一出場" v-scroll-to="'#main'">
                二擇一出場
              </RouterLink>
            </li>
            <li :class="{'active': $route.path === '/Securities/OrderSet/LimitedEntryAndExit'}">
              <RouterLink to="/Securities/OrderSet/LimitedEntryAndExit" title="限時進出" v-scroll-to="'#main'">
                限時進出
              </RouterLink>
            </li>
            <li :class="{'active': $route.path === '/Securities/OrderSet/ChooseOneOfThree'}">
              <RouterLink to="/Securities/OrderSet/ChooseOneOfThree" title="三擇一出場" v-scroll-to="'#main'">
                三擇一出場
              </RouterLink>
            </li>
            <li :class="{'active': $route.path === '/Securities/OrderSet/MoveOut'}">
              <RouterLink to="/Securities/OrderSet/MoveOut" title="移動出場" v-scroll-to="'#main'">
                移動出場
              </RouterLink>
            </li>
            <li :class="{'active': $route.path === '/Securities/OrderSet/MotherAndSon'}">
              <RouterLink to="/Securities/OrderSet/MotherAndSon" title="母子單" v-scroll-to="'#main'">
                母子單
              </RouterLink>
            </li>
            <li :class="{'active': $route.path === '/Securities/OrderSet/TimingAndQuantitative'}">
              <RouterLink to="/Securities/OrderSet/TimingAndQuantitative" title="定時/定量" v-scroll-to="'#main'">
                定時/定量
              </RouterLink>
            </li>
            <li :class="{'active': $route.path === '/Securities/OrderSet/MotherAndSonPro'}">
              <RouterLink to="/Securities/OrderSet/MotherAndSonPro" title="母子單" v-scroll-to="'#main'">
                母子Pro
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="switchOrder-sort" title="排序">
          <i class="fa-solid fa-arrow-down-wide-short" @click="sortDialogVisible = true"></i>
        </div>
      </div>
    </div>
  </div>

  <div class="container-2">
    <RouterView />
  </div>

  <el-dialog
    v-model="sortDialogVisible"
    title="編輯選單順序"
    :width="store.state.dialogWidth"
  >
    <div>
      設定選單順序&nbsp;<span class="remark">(點擊移除)</span>
      <div class="sortOrder">
        <el-button type="primary">
          限時進出&nbsp;<i class="fa-regular fa-circle-xmark"></i>
        </el-button>
        <el-button type="primary">
          定時/定量&nbsp;<i class="fa-regular fa-circle-xmark"></i>
        </el-button>
        <el-button plain>
          3
        </el-button>
        <el-button plain>
          4
        </el-button>
        <el-button plain>
          5
        </el-button>
        <el-button plain>
          6
        </el-button>
        <el-button plain>
          7
        </el-button>
        <el-button plain>
          8
        </el-button>
      </div>
      <el-divider>
        <el-icon><sort /></el-icon>
      </el-divider>
      可選擇選單&nbsp;<span class="remark">(點擊新增)</span>
      <div class="sortOrder">
        <el-button type="primary">
          多條件觸價&nbsp;<i class="fa-solid fa-circle-plus"></i>
        </el-button>
        <el-button type="primary">
          二擇一出場&nbsp;<i class="fa-solid fa-circle-plus"></i>
        </el-button>
        <el-button plain>
          限時進出
        </el-button>
        <el-button type="primary">
          三擇一出場&nbsp;<i class="fa-solid fa-circle-plus"></i>
        </el-button>
        <el-button type="primary">
          移動出場&nbsp;<i class="fa-solid fa-circle-plus"></i>
        </el-button>
        <el-button type="primary">
          母子單&nbsp;<i class="fa-solid fa-circle-plus"></i>
        </el-button>
        <el-button plain>
          定時/定量
        </el-button>
        <el-button type="primary">
          母子Pro&nbsp;<i class="fa-solid fa-circle-plus"></i>
        </el-button>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="sortDialogVisible = false">
          儲存
        </el-button>
        <el-button>
          還原預設
        </el-button>
        <el-button @click="sortDialogVisible = false">
          取消
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
