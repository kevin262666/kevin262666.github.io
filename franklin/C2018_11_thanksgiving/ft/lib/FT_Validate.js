/******************************************************
*       JavaScript function 函示庫
*
******************************************************/

var FT_Validate = (function () {

    /******************************************************
    *	hasSpecialCode(s) 檢查字串是否有特殊字元
    *	參數：String s 要檢查的字串
    *	回傳值：第一個特殊字元，若回傳空字串代表無特殊字元
    *	功能：字串只能使用中文、半形英數及+-|&!等符號
    *	
    ******************************************************/
    var _hasSpecialCode = function (s) {
        var c;
        for (i = 0; i < s.length; i++) {
            c = s.charCodeAt(i);
            if (!(
			  ((c >= 48) && (c <= 57)) ||
			  ((c >= 65) && (c <= 90)) ||
			  ((c >= 97) && (c <= 122)) ||
			  (c == 32) || (c == 33) ||
			  (c == 38) || (c == 40) ||
			  (c == 41) || (c == 43) ||
			  (c == 45) || (c == 124) || (c > 255)
			  )) {
                return s.charAt(i);
            }
        }
        return "";
    }

    /******************************************************
    *	hasNormalChar(s) 檢查字串是否含有正常字元
    *	參數：String s 要檢查的字串
    *	回傳值：boolean
    *	功能：檢查字串必須含有一個以上的半形英數或中文字
    ******************************************************/
    var _hasNormalChar = function (s) {
        var c;
        var b;
        for (i = 0; i < s.length; i++) {
            c = s.charCodeAt(i);
            if (((c >= 48) && (c <= 57)) ||
			   ((c >= 65) && (c <= 90)) ||
			   ((c >= 97) && (c <= 122)) ||
			   (c > 127)
			   ) {
                b = true;
            } else {
                b = false;
                break;
            }
        }
        return b;
    }

    /******************************************************
    *	chkStr(s) 檢查字串
    *	參數：String s 要檢查的字串
    *	回傳值：boolean
    *	功能：
    *		1.字串必須無特殊不合法字元
    *		2.字串必須含有一個以上的半形英數或全形字
    ******************************************************/
    var _chkStr = function (s) {
        if (trim(s) != "") {
            if (hasSpecialCode(s) != "") {
                alert("字詞不能含有特殊字元：" + hasSpecialCode(s));
                return false;
            } else if (!hasNormalChar(s)) {
                alert("沒有輸入合法的字詞...");
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    /******************************************************
    *	hasSeriousChar(s) 檢查字串是否為0-9,A-Z,a-z
    *	參數：String s 要檢查的字串
    *	回傳值：第一個特殊字元，若回傳空字串代表無特殊字元
    *	
    ******************************************************/
    var _hasSeriousCode = function (s) {
        var c;
        for (i = 0; i < s.length; i++) {
            c = s.charCodeAt(i);
            if (!(
			  ((c >= 48) && (c <= 57)) ||
			  ((c >= 65) && (c <= 90)) ||
			  ((c >= 97) && (c <= 122))
			  )) {
                return s.charAt(i);
            }
        }
        return "";
    }

    /******************************************************
    *	hasSeriousChar(s) 檢查字串是否為中文
    *	參數：String s 要檢查的字串
    *	回傳值：boolean
    *	
    ******************************************************/
    var _isChinese = function (s) {
        var re = /[^\u4e00-\u9fa5]/;
        if (re.test(s)) return false;
        return true;
    }

    /******************************************************
    *	compareDate(s1,s2) 檢查日期字串的大小
    *	參數：String s1,s2 要檢查的日期
    *	回傳值：char
    *	日期格式:20030909
    *		
    ******************************************************/
    var _compareDate = function (dateString1, dateString2) {
        year1 = eval(dateString1);
        year2 = eval(dateString2);
        if (year1 > year2)
            status = "g";
        if (year1 == year2)
            status = "e";
        if (year1 < year2)
            status = "l";
        return status;
    }

    /******************************************************
    *	chkUrl(s) 檢查連結網址
    *	參數：String s 要檢查的網址
    *	回傳值：boolean
    *	日期格式:2003-12-09
    *		
    ******************************************************/
    var _chkUrl = function (urlString) {
        urlString = replaceSpace(urlString);
        if (urlString == "" || urlString == "http://" || urlString.length <= 7) {
            alert("請輸入「網址連結」");
            return false;
        }

        if ("http://" != urlString.substr(0, 7)) {
            alert("「網址連結」必須以http://為開始");
            return false;
        }
        return true;
    }

    /******************************************************
    *	chkAmount(s) 檢查字串必須為數字
    *	參數：String s 要檢查的字串 
    *	回傳值：boolean
    *		
    ******************************************************/
    var _chkAmount = function (amount) {
        amount = replaceSpace(amount);
        if ("" == amount || isNaN(amount)) {
            return false;
        }
        return true;
    }

    /******************************************************
    *	chkGZ(s) 檢查字串必須為大於 0 的數字 
    *	參數：String s 要檢查的字串
    *	回傳值：boolean
    *		
    ******************************************************/
    var _chkGZ = function (amount) {
        amount = replaceSpace(amount);
        if ("" == amount || isNaN(amount) || parseFloat(amount) <= 0) {
            return false;
        }
        return true;
    }

    /******************************************************
    *	chkEGZ(s) 檢查字串必須為大於等於 0 的數字 
    *	參數：String s 要檢查的字串
    *	回傳值：boolean
    *		
    ******************************************************/
    var _chkEGZ = function (amount) {
        amount = replaceSpace(amount);
        if ("" == amount || isNaN(amount) || parseFloat(amount) < 0) {
            return false;
        }
        return true;
    }

    /******************************************************
    *	checkNum() 檢查輸入字元必須為數字 
    *	參數：String s 要檢查的字串
    *	回傳值：boolean
    *		
    ******************************************************/
    var _checkNum = function () {
        c = String.fromCharCode(event.keyCode);
        if ("0123456789".indexOf(c, 0) < 0) return false;
        return true;
    }

    /******************************************************
    *	checkDate() 檢查是否為日期
    *	參數：String dstText 要檢查的字串
    *	參數：boolean chkEmpty 是否允許空白
    *	參數：char dFormat 日期分隔符號
    *	回傳值：boolean
    *		
    ******************************************************/
    var _checkDate = function (dstText, chkEmpty, dFormat) {
        dstText = replaceSpace(dstText);
        if (chkEmpty) { if (dstText == "") return true; }

        if (dFormat == "-") { data = dstText.match(/(\d{4})\-(\d{2})\-(\d{2})/); }
        else { data = dstText.match(/(\d{4})\/(\d{2})\/(\d{2})/); }

        if (!data || !dstText) return false;
        return true;
    }


    /******************************************************
    *	checkMailAddr 檢查Email格式 
    *	參數：String dstText 要檢查的字串
    *	參數：boolean chkEmpty 是否允許空白
    *	回傳值：boolean
    *		
    ******************************************************/
    var _checkMailAddr = function (dstText, chkEmpty) {
        if (chkEmpty) {
            if (dstText == "") return true;
        }
        data = dstText.match(/^\S+@\S+\.\S+$/);
        if (!data || !dstText) return false;
        return true;
    }

    /******************************************************
    *	checkAlp 檢查是否為英文字母格式
    *	參數：String dstText 要檢查的字串
    *	回傳值：boolean
    *		
    ******************************************************/
    var _checkAlp = function (dstText) {
        data = dstText.match(/[^a-z]/gi);
        if (!data || !dstText) return false;
        return true;
    }


    /****************************************************/
    var _showRunning = function () {
        wObj = window.createPopup();
        popObj = wObj.document.body;
        popObj.style.border = "solid blue 2px";
        popObj.innerHTML = "<font size='3' color='#ff0000'>　　程式執行中.....</font>";
        wObj.show(360, 260, 180, 32, document.body);
    }

    /****************************************************/
    var _replaceSpace = function (s) {
        strlen = s.length;
        new_s = "";
        for (var i = 0; i < strlen; i++) { if (s.charAt(i) != " ") { new_s = new_s + s.charAt(i); } }
        return new_s;
    }

    var _newOpen = function (url, x, y) {
        window.open(url, "", "toolbar=no,width=" + x + ",height=" + y + ",directories=no,status=no,scrollbars=yes,resizable=yes,menubar=no");
    }

    var _onKeyPressBlockNumbers = function (e, cond) {
        var key = window.event ? e.keyCode : e.which;
        var keychar = String.fromCharCode(key);

        reg = /\d/;
        reg2 = /[0-9\b\t]/;
        reg3 = /[0-1\b\t]/;
        reg4 = /[0-3\b\t]/;
        if (cond == "c") { return !reg.test(keychar); }
        if (cond == "i") {
            if (reg2.test(keychar) || key == 13) return true;
            else {
                alert("本欄位限輸入半型數字，\n任何符號皆錯誤");
                return false;
            }
        }
        if (cond == "m") { return reg3.test(keychar); }
        if (cond == "d") { return reg4.test(keychar); }
        return false;
    }

    var _urlencode = function (str) {

        str = (str + '').toString();
        // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
        // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
        return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
        replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');

    }

    var _closeMe = function () {
        window.opener = null;
        window.open("", "_self");
        window.close();
    }

    var _over = function (i) {
        if (document.all) {
            document.getElementById('abgne-player-control_' + (i - 1)).click();
        } else {
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent("click", true, true);
            document.getElementById('abgne-player-control_' + (i - 1)).dispatchEvent(evt);
        }

    }

    /******************************************
    列印文件
    block: 列印區塊
    ******************************************/
    //預覽div包起來的部分並且列印完畢後自動關閉列印網頁
    var _previewScreen = function (block) {
        var value = block.innerHTML;
        var printPage = window.open("", "printPage", "");
        printPage.document.open();
        printPage.document.write("<OBJECT classid='CLSID:8856F961-340A-11D0-A96B-00C04FD705A2' height=0 id=wc name=wc width=0></OBJECT>");
        printPage.document.write("<HTML><head></head><BODY onload='javascript:wc.execwb(7,1);window.close()'>");
        printPage.document.write("<PRE>");
        printPage.document.write(value);
        printPage.document.write("</PRE>");
        printPage.document.close("</BODY></HTML>");
    }

    /******************************************
    轉寄
    ******************************************/
    var _sendOther = function (url, a_id) {
        tb_show("", "SendOther.php?url=" + url + "&article_id=" + a_id + "&TB_iframe=true&height=300&width=472&top=200&left=350", "");
    }

    /******************************************
    *   檢查輸入文字是否為身分證
    *	參數：id 要檢查的字串
    *	回傳值：boolean
    ******************************************/
    var _checkTwIdNo = function (id) {
        id = id.toLocaleUpperCase();
        tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
        A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
        A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
        Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

        if (id.length != 10) return false;
        i = tab.indexOf(id.charAt(0));
        if (i == -1) return false;
        sum = A1[i] + A2[i] * 9;

        for (i = 1; i < 10; i++) {
            v = parseInt(id.charAt(i));
            if (isNaN(v)) return false;
            sum = sum + v * Mx[i];
        }
        if (sum % 10 != 0) return false;
        return true;
    }


    /******************************************
    *   檢查輸入文字是否為手機號碼
    *	參數：Phone 要檢查的字串
    *	回傳值：boolean
    ******************************************/
    var _checkCellPhone = function (Phone) {
        re = /^[09]{2}[0-9]{8}$/;
        if (!re.test(Phone))
            return false;

        return true;
    }

    return {
        hasSpecialCode: _hasSpecialCode,
        hasNormalChar: _hasNormalChar,
        chkStr: _chkStr,
        hasSeriousCode: _hasSeriousCode,
        isChinese: _isChinese,
        compareDate: _compareDate,
        chkUrl: _chkUrl,
        chkAmount: _chkAmount,
        chkGZ: _chkGZ,
        chkEGZ: _chkEGZ,
        checkNum: _checkNum,
        checkMailAddr: _checkMailAddr,
        checkAlp: _checkAlp,
        showRunning: _showRunning,
        replaceSpace: _replaceSpace,
        newOpen: _newOpen,
        onKeyPressBlockNumbers: _onKeyPressBlockNumbers,
        urlencode: _urlencode,
        closeMe: _closeMe,
        over: _over,
        previewScreen: _previewScreen,
        sendOther: _sendOther,
        checkTwIdNo: _checkTwIdNo,
        checkCellPhone: _checkCellPhone
    };
}());