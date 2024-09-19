<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Search, InfoFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import InventoryStockCard from '../components/InventoryStockCard.vue'
import kgiCheckbox from '../components/kgiCheckbox.vue'
import { useStore } from 'vuex';
const store = useStore();
import { useRoute } from 'vue-router';
const route = useRoute();

defineProps({
  aleradySelect: {
    type: Boolean,
    required: true
  },
  selectAllStock: {
    type: Boolean,
    required: true
  },
})

const stock = ref(''),
      stock2 = ref(''),
      stockList = ref(0),
      stockList2 = ref(1),
      editWishlistName1 = ref('自選群組一'),
      checked1 = ref(false),
      checked2 = ref(false),
      checked3 = ref(false),
      checked4 = ref(false),
      showStockList = ref(false)

const optionaSync = ref(false),
      editWishlist = ref(false),
      addProduct = ref(false),
      selectInventory = route.path === '/Securities/OrderSet/ChooseOneOrTheOther' || route.path === '/Securities/OrderSet/MoveOut' || route.path === '/Securities/OrderSet/ChooseOneOfThree' ? ref(true) : ref(false);

function stockInputFocus() {
  stock.value == '' ? stockList.value = 1 : stockList.value = 5
}

function changeStockList(no) {
  stockList.value = no
}

function changeStockList2(no) {
  stockList2.value = no
}

function setStock(info) {
  stock.value = info
  setTimeout(()=> {
    stockList.value = 0
    showStockList.value = false
  }, 100)
}

// 收合選單
function stockInputClick() {
  showStockList.value = !showStockList.value
}
document.addEventListener('click', function(event) {
  var exclude = document.querySelector('.orderSet-stockInfo-input');
  var exclude2 = document.querySelector('.dontHideStockList');
  var exclude3 = document.querySelector('.dontHideStockList2');

  if (!exclude.contains(event.target) && !exclude2.contains(event.target) && !exclude3.contains(event.target)) {
    showStockList.value = false
  }
});

// 監聽 stock 值的變化
watch(stock, (newStock) => {
  newStock != '' ? stockList.value = 5 : stockList.value = 1
})
watch(stock2, (newStock) => {
  newStock != '' ? stockList2.value = 5 : stockList2.value = 1
})

// 自選同步完成
const optionaSyncSuccess = () => {
  ElMessage({
    showClose: true,
    message: '自選同步完成',
    type: 'success',
    // duration: 0 //設為0就不會自動關閉
  })
}

const handleCirclePlusClick = () => {
  // 将 sortDialogVisible 设置为 true
  selectInventory.value = false;
  stockList.value = 0
};
</script>

<template>
  <div class="orderSet-stockInfo">
    <div class="orderSet-stockInfo-input" v-if="!aleradySelect">
      <el-input v-model="stock" placeholder="請輸入商品名稱或代碼" :prefix-icon="Search" @click="stockInputClick()" @focus="stockInputFocus()" clearable />
      <template v-if="showStockList">
        <div class="orderSet-stockInfo-input-stockSortList" v-show="stockList == 1">
          <ul>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(3)">
                雲端自選&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="selectInventory = true">
                庫存商品&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(2)">
                股票&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(2)">
                興櫃&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(2)">
                指數&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="orderSet-stockInfo-input-stockSortList" v-show="stockList == 2">
          <ul>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(1)">
                <i class="fa-solid fa-angle-left"></i>&nbsp;回前頁選單
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="setStock(`0050&nbsp;元大台灣50`)">
                0050&nbsp;元大台灣50
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="setStock(`0056&nbsp;元大中型100`)">
                0056&nbsp;元大中型100
              </div>
            </li>
          </ul>
        </div>
        <div class="orderSet-stockInfo-input-stockSortList" v-show="stockList == 3">
          <ul>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(1)">
                <i class="fa-solid fa-angle-left"></i>&nbsp;回前頁選單
              </div>
            </li>
            <li class="hasBeforeIcon">
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(4)">
                自選群組一&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
              <el-tooltip class="box-item" effect="dark" content="編輯自選群組一" placement="top-end">
                <i class="fa-solid fa-pen beforeIcon" @click="editWishlist = true"></i>
              </el-tooltip>
            </li>
            <li class="hasBeforeIcon">
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(4)">
                自選群組二&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
              <el-tooltip class="box-item" effect="dark" content="編輯自選群組二" placement="top-end">
                <i class="fa-solid fa-pen beforeIcon" @click="editWishlist = true"></i>
              </el-tooltip>
            </li>
            <li class="notOption">
              <el-alert title="自選群組最多可新增30個" type="info" show-icon :closable="false" />
            </li>
            <li class="notOption hasBtn">
              <el-button type="primary" @click="editWishlist = true">新增群組</el-button>
              <el-button plain @click="optionaSync = true">自選同步</el-button>
            </li>
          </ul>
        </div>
        <div class="orderSet-stockInfo-input-stockSortList" v-show="stockList == 4">
          <ul>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList(3)">
                <i class="fa-solid fa-angle-left"></i>&nbsp;回前頁選單
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="setStock(`1503&nbsp;士電`)">
                1503&nbsp;士電
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="setStock(`2317&nbsp;鴻海`)">
                2317&nbsp;鴻海
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="setStock(`3008&nbsp;大立光`)">
                3008&nbsp;大立光
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="setStock(`2330&nbsp;台積電`)">
                2330&nbsp;台積電
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="setStock(`2303&nbsp;聯電`)">
                2303&nbsp;聯電
              </div>
            </li>
          </ul>
        </div>
        <div class="orderSet-stockInfo-input-stockSortList" v-show="stockList == 5">
          <ul>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="setStock(`1503&nbsp;士電`)">
                1503&nbsp;士電
              </div>
            </li>
            <li class="notOption notFind">
              找不到資料，請重新輸入
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div class="orderSet-stockInfo-alreadySelected" v-if="aleradySelect">
      <div class="orderSet-stockInfo-alreadySelected-content">
        <div class="orderSet-stockInfo-alreadySelected-content-stockName">
          中鋼 2002
        </div>
        <div class="orderSet-stockInfo-alreadySelected-content-info">
          <div class="remark text-black">
            <span>庫存股數1,000股</span> | <span>成本均價30.00元</span>
          </div>
          <el-tag
            type="danger"
            effect="dark"
            round
            size="large"
          >
            現買
          </el-tag>
          <el-tag
            type="success"
            effect="dark"
            round
            size="large"
          >
            現賣
          </el-tag>
        </div>
      </div>
      <!-- <el-alert type="error" :closable="false" class="resetAlert">
        <template #title>
          <div class="resetAlert-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="resetAlert-content">
            請先選擇您的庫存
          </div>
        </template>
      </el-alert> -->
      <div class="orderSet-stockInfo-alreadySelected-stockBtn">
        <el-button :type="store.state.darkMode ? '': 'primary'" plain @click="selectInventory = true">庫存</el-button>
      </div>
    </div>
    <el-divider />
    <div class="orderSet-stockInfo-info">
      <ul>
        <li>
          <div class="orderSet-stockInfo-info-tit">
            買價
          </div>
          <div class="orderSet-stockInfo-info-num">
            21.27
          </div>
        </li>
        <li>
          <div class="orderSet-stockInfo-info-tit">
            賣價
          </div>
          <div class="orderSet-stockInfo-info-num">
            21.28
          </div>
        </li>
        <li>
          <div class="orderSet-stockInfo-info-tit">
            成交價
          </div>
          <div class="orderSet-stockInfo-info-num">
            20.99
          </div>
        </li>
        <li>
          <div class="orderSet-stockInfo-info-tit">
            漲跌
          </div>
          <div class="orderSet-stockInfo-info-num text-red">
            <i class="fa-solid fa-caret-up"></i> 0.82
          </div>
        </li>
        <li>
          <div class="orderSet-stockInfo-info-tit">
            總量
          </div>
          <div class="orderSet-stockInfo-info-num">
            931
          </div>
        </li>
        <li>
          <div class="orderSet-stockInfo-info-tit">
            漲跌幅
          </div>
          <div class="orderSet-stockInfo-info-num text-green">
            -3.50%
          </div>
        </li>
      </ul>
    </div>
  </div>

  <el-dialog
    v-model="optionaSync"
    title="自選同步"
    :width="store.state.dialogWidth"
  >
    <div class="text-center">
      <el-button type="primary" @click="optionaSyncSuccess">
        自選股上傳&nbsp;<i class="fa-solid fa-upload"></i>
      </el-button>
      <el-button type="primary" @click="optionaSyncSuccess">
        自選股下載&nbsp;<i class="fa-solid fa-download"></i>
      </el-button>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="optionaSync = false">
          關閉
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog
    v-model="editWishlist"
    title="編輯自選同步"
    :width="store.state.dialogWidth"
    modal-class="dontHideStockList"
  >
    <div>
      <el-input v-model="editWishlistName1" placeholder="請輸入群組名稱" />
      <el-alert title="不可使用特殊符號" type="error" show-icon :closable="false" class="margin-top-20"/>
      <div class="orderSet-stockInfo-input-stockSortList editWishlistType">
        <ul>
          <li class="hasAfterIcon hasBeforeIcon">
            <i class="fa-solid fa-circle-minus afterIcon text-red" title="刪除"></i>
            <div class="orderSet-stockInfo-input-stockSortList-option">
              1503&nbsp;士電
            </div>
            <i class="fa-solid fa-sort beforeIcon"></i>
          </li>
          <li class="hasAfterIcon hasBeforeIcon">
            <i class="fa-solid fa-circle-minus afterIcon text-red" title="刪除"></i>
            <div class="orderSet-stockInfo-input-stockSortList-option">
              2317&nbsp;鴻海
            </div>
            <i class="fa-solid fa-sort beforeIcon"></i>
          </li>
        </ul>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="editWishlist = false">
          儲存
        </el-button>
        <el-button type="primary" @click="addProduct = true">
          新增商品
        </el-button>
        <el-button @click="editWishlist = false">
          關閉
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog
    v-model="addProduct"
    title="新增商品"
    :width="store.state.dialogWidth"
    modal-class="dontHideStockList2"
  >
    <div>
      <el-input
          v-model="stock2"
          placeholder="請輸入商品名稱或代碼"
          :prefix-icon="Search"
          @focus="stockInputFocus()"
          clearable
        />
      <div class="orderSet-stockInfo-input-stockSortList editWishlistType" v-show="stockList2 == 1">
        <ul>
          <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(2)">
                股票&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(2)">
                興櫃&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(2)">
                指數&nbsp;<i class="fa-solid fa-angle-right"></i>
              </div>
            </li>
        </ul>
      </div>
      <div class="orderSet-stockInfo-input-stockSortList editWishlistType" v-show="stockList2 == 2">
        <ul>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(1)">
              <i class="fa-solid fa-angle-left"></i>&nbsp;回前頁選單
            </div>
          </li>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(3)">
              上市&nbsp;<i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(3)">
              創新版&nbsp;<i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(3)">
              上櫃&nbsp;<i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(3)">
              戰略新版&nbsp;<i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
      <div class="orderSet-stockInfo-input-stockSortList editWishlistType" v-show="stockList2 == 3">
        <ul>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(2)">
              <i class="fa-solid fa-angle-left"></i>&nbsp;回前頁選單
            </div>
          </li>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(4)">
              其他分類&nbsp;<i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(4)">
              水泥工業&nbsp;<i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(4)">
              食品工業&nbsp;<i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(4)">
              電機機械&nbsp;<i class="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
      <div class="orderSet-stockInfo-input-stockSortList editWishlistType" v-show="stockList2 == 4">
        <ul>
          <li>
            <div class="orderSet-stockInfo-input-stockSortList-option" @click="changeStockList2(3)">
              <i class="fa-solid fa-angle-left"></i>&nbsp;回前頁選單
            </div>
          </li>
          <li class="hasCheckbox">
            <label for="checked1">
              <div class="orderSet-stockInfo-input-stockSortList-option">
                1101&nbsp;台泥
              </div>
            </label>
            <kgiCheckbox id="checked1"></kgiCheckbox>
          </li>
          <li class="hasCheckbox">
            <label for="checked2">
              <div class="orderSet-stockInfo-input-stockSortList-option">
                1102&nbsp;亞泥
              </div>
            </label>
            <kgiCheckbox id="checked2"></kgiCheckbox>
          </li>
          <li class="hasCheckbox">
            <label for="checked3">
              <div class="orderSet-stockInfo-input-stockSortList-option">
                1103&nbsp;嘉泥
              </div>
            </label>
            <kgiCheckbox id="checked3"></kgiCheckbox>
          </li>
        </ul>
      </div>
      <div class="orderSet-stockInfo-input-stockSortList editWishlistType" v-show="stockList2 == 5">
        <ul>
          <li class="hasCheckbox">
            <label for="checked4">
              <div class="orderSet-stockInfo-input-stockSortList-option">
                1103&nbsp;嘉泥
              </div>
            </label>
            <el-checkbox v-model="checked4" size="large" id="checked4" />
          </li>
          <li class="notOption notFind">
              找不到資料，請重新輸入
            </li>
        </ul>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="addProduct = false">
          加入
        </el-button>
        <el-button>
          重選
        </el-button>
        <el-button @click="addProduct = false">
          關閉
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog
    v-model="selectInventory"
    title="選擇可出場的庫存"
    :width="store.state.dialogWidth"
  >
    <div>
      <p class="text-right remark text-black margin-top-0">
        最後更新日 2023/08/09
        <el-link>
          <i class="fa-solid fa-arrow-rotate-right"></i>
        </el-link>
      </p>
      <p class="text-right">
        庫存與對應的條件設定
        <el-popover placement="bottom-end" :width="316" trigger="hover">
          <template #reference>
            <i class="fa-solid fa-circle-exclamation text-blue"></i>
          </template>
          <div class="inventoryAndCorrespondingConditionsetting">
            <el-row :gutter="4">
              <el-col :span="6">
                <div class="remark text-black text-center">
                  今現買
                </div>
              </el-col>
              <el-col :span="6">
                <div class="remark text-black text-center">
                  今現賣
                </div>
              </el-col>
              <el-col :span="6">
                <div class="remark text-black text-center">
                  今資買
                </div>
              </el-col>
              <el-col :span="6">
                <div class="remark text-black text-center">
                  今券賣
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="4" class="margin-top-5">
              <el-col :span="6">
                <el-tag
                  type="success"
                  effect="dark"
                >
                  隔日現賣
                </el-tag>
              </el-col>
              <el-col :span="6">
                <el-tag
                  type="warning"
                  effect="dark"
                >
                  今日現買
                </el-tag>
              </el-col>
              <el-col :span="6">
                <el-tag
                  type="success"
                  effect="dark"
                >
                  今日券賣
                </el-tag>
              </el-col>
              <el-col :span="6">
                <el-tag
                  type="warning"
                  effect="dark"
                >
                  今日資買
                </el-tag>
              </el-col>
            </el-row>
            <el-row :gutter="4" class="margin-top-5">
              <el-col :span="6">
                <el-tag
                  type="success"
                  effect="dark"
                >
                  今日現賣
                </el-tag>
              </el-col>
              <el-col :span="6">
                &nbsp;
              </el-col>
              <el-col :span="6">
                <el-tag
                  type="success"
                  effect="dark"
                >
                  隔日資賣
                </el-tag>
              </el-col>
              <el-col :span="6">
                <el-tag
                  type="warning"
                  effect="dark"
                >
                  隔日券買
                </el-tag>
              </el-col>
            </el-row>
          </div>
        </el-popover>
      </p>
      <el-alert title="註：條件單不可進行零股交易，故此庫存列表將無條件捨去零股庫存，如需查看完整庫存商品，請至帳務中心查詢。" type="info" show-icon :closable="false" />
      <InventoryStockCard :selectAll="selectAllStock" stock1="台積電 2330"
        qty1="10" price1="499.55" :up1="true" :choose1="false"
        qty2="5" price2="480.00" :up2="true" :choose2="false"
        qty3="-" price3="-" :up3="true" :choose3="false" @circlePlusClick="handleCirclePlusClick"/>
      <InventoryStockCard :selectAll="selectAllStock" stock1="開發金 2883"
        qty1="8" price1="19.05" :up1="false" :choose1="false"
        qty2="5" price2="480.00" :up2="true" :choose2="false"
        qty3="-" price3="-" :up3="true" :choose3="false" @circlePlusClick="handleCirclePlusClick"/>
      <InventoryStockCard :selectAll="selectAllStock" stock1="長榮 2603"
        qty1="1" price1="82.05" :up1="true" :choose1="false"
        qty2="-" price2="-" :up2="true" :choose2="false"
        qty3="32" price3="95.55" :up3="true" :choose3="false" @circlePlusClick="handleCirclePlusClick"/>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="selectInventory = false">
          取消
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>