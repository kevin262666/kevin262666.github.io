document.addEventListener('DOMContentLoaded', function() {

    // 複製帳號==============================================================================================
    const alertPlaceholder = document.getElementById('accountQrcodeAlert')
    const alertTrigger = document.querySelectorAll('.accountQrcodeAlertBtn')
    const alertMsg = '已複製您的帳號至剪貼簿'
    const accountId = '006200055688638' // e財庫帳號

    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible hasIcon fixedAlert" role="alert"><i class="fa-solid fa-circle-check alert-icon"></i>' + message + '<button type="button" class="btn-close fixedAlert-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        alertPlaceholder.append(wrapper)
    }

    if (alertTrigger) {
        alertTrigger.forEach(function(button) {
            button.addEventListener('click', function () {
                document.querySelectorAll('.fixedAlert').forEach(function(alert) {
                    alert.remove();
                });
                alert(alertMsg, 'success');
                navigator.clipboard.writeText(accountId); // 複製帳號
                setTimeout(() => {
                    // $document.querySelectorAll('.fixedAlert-close').click();
                    document.querySelectorAll('.fixedAlert-close').forEach(function(closeButton) {
                        closeButton.click();
                    });
                }, 8000);
                
            })
        });
    }

    // 分享帳號==============================================================================================
    const shareButton = document.querySelector('.accountShareBtn');
    shareButton.addEventListener('click', function (event) {
        if (navigator.share) {
            navigator
            .share({
                // title: '1王小明的e財庫帳號：' + accountId,
                text: '2王小明的e財庫帳號：' + accountId,
                // url: 'https://www.kgi.com.tw/zh-tw/',
            })
            // 成功開啟原生分享
            .then(() => console.log('分享成功')) 
            // 分享錯誤後的事件
            .catch((error) => console.log('分享錯誤：', error)); 
        }
    });

    // 圖檔上傳預覽==============================================================================================
    // 從所有具有類別 'uploadDocument-info' 的元素中移除 'hasData' 類別
    document.querySelectorAll(".uploadDocument-info").forEach((element) => {
        element.classList.remove("hasData");
    });
    
    // 讀取檔案輸入內容並顯示預覽圖像的函式
    function readURL(input) {
        // 檢查輸入是否已選取檔案
        if (input.files && input.files[0]) {
        // 建立一個新的 FileReader 物件
        const reader = new FileReader();
    
        // 當讀取器完成載入檔案時
        reader.onload = function (e) {
            // 在輸入的父標籤後添加一個載入指示器
            const loadingIndicator = document.createElement("div");
            loadingIndicator.classList.add("uploadDocument-loading");
            loadingIndicator.innerHTML =
                `<div class="uploadDocument-loading-icon">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                </div>`;
            input.insertAdjacentElement("beforebegin", loadingIndicator);
    
            // 將 'hasData' 類別添加到具有類別 'uploadDocument-info' 的兄弟元素，
            // 並將內部圖像的 src 屬性設置為載入的檔案數據
            const previewElement = input.nextElementSibling;
            previewElement.classList.add("hasData");
            previewElement.querySelector("img").src = e.target.result;
    
            // 2 秒後移除載入指示器
            setTimeout(() => {
                loadingIndicator.remove();
            }, 2000);
        };
    
        // 將檔案讀取為資料 URL
        reader.readAsDataURL(input.files[0]);
        }
    }
    
    // 為所有檔案輸入元素添加事件監聽器
    document.querySelectorAll('input[type="file"]').forEach((input) => {
        input.addEventListener("change", () => {
            readURL(input);
        });
    });
  
    // 證券預收款申請alert==============================================================================================
    const alertPlaceholder2 = document.getElementById('selectSecuritiesAccountAlert')
    const alertTrigger2 = document.querySelectorAll('.selectSecuritiesAccountAlertBtn')
    const alertMsg2 = '申請已完成'

    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible hasIcon fixedAlert" role="alert"><i class="fa-solid fa-circle-check alert-icon"></i>' + message + '<button type="button" class="btn-close fixedAlert-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        alertPlaceholder2.append(wrapper)
    }

    if (alertTrigger2) {
        alertTrigger2.forEach(function(button) {
            button.addEventListener('click', function () {
                document.querySelectorAll('.fixedAlert').forEach(function(alert) {
                    alert.remove();
                });
                alert(alertMsg2, 'success');
                setTimeout(() => {
                    // $document.querySelectorAll('.fixedAlert-close').click();
                    document.querySelectorAll('.fixedAlert-close').forEach(function(closeButton) {
                        closeButton.click();
                    });
                }, 8000);
                
            })
        });
    }

});