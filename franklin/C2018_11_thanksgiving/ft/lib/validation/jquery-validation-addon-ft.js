/*
* Copyright (c) 2010 Uni-net, http://www.uni-net.com.tw/
* 
* 此 javascript 檔包含常用的函數供驗證使用。
* if wrong return null
*/

/// <summary>
/// 驗證: 身分證
/// </summary>
function checkTwID(id) {
	//建立字母分數陣列(A~Z)  
	var city = new Array(
	 1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11,
	20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30
);
	id = id.toUpperCase();
	// 使用「正規表達式」檢驗格式  
	if (id.search(/^[A-Z](1|2)\d{8}$/i) == -1) {
		return false;
	} else {
		//將字串分割為陣列(IE必需這麼做才不會出錯)  
		id = id.split('');
		//計算總分  
		var total = city[id[0].charCodeAt(0) - 65];
		for (var i = 1; i <= 8; i++) {
			total += eval(id[i]) * (9 - i);
		}
		//補上檢查碼(最後一碼)  
		total += eval(id[9]);
		//檢查比對碼(餘數應為0);  
		return ((total % 10 == 0));
	}
}


/// <summary>
/// 驗證: EMail
/// </summary>
function isEmail(eMail) {
    var regx = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/g;

    return eMail.match(regx);    
}

/// <summary>
/// 驗證: 整數數字
/// </summary>
function isDigit(passInDigit) {
	return !isNaN(parseInt(passInDigit * 1));
//    var regx = /^([0-9])?$/g;
//    return passInDigit.match(regx);
}

/// <summary>
/// 驗證: 小數數字
/// </summary>
function isNumber(passInNumber) {
    var regx = /^([0-9])?$/g;

    return passInNumber.match(regx);
}

/// <summary>
/// 驗證: 字母
/// </summary>
function isCharacter(passInCharacter) {
    var regx = /^([a-zA-Z])?$/g;

    return passInCharacter.match(regx);
}

/// <summary>
/// 驗證: 字母數字
/// </summary>
function isString(passInString) {
    var regx = /^([a-zA-Z0-9])+$/g;

    return passInString.match(regx);
}

/// <summary>
/// 驗證: 家用電話
/// </summary>
function isHomePhoneNumber(homePhoneNumber) {
    var regx = /^(\d{10})$/g;

    return cellPhoneNumber.match(regx);
}

/// <summary>
/// 驗證: 行動電話
/// </summary>
function isCellPhoneNumber(cellPhoneNumber) {
    var regx = /^(\d{10})$/g;

    return cellPhoneNumber.match(regx);
}

/// <summary>
/// 驗證: 字數
/// </summary>
function checkWordCount(el, id, maxAllowedWordSize) {
    var currentWordLength = $(el)[0].value.length;

    if (currentWordLength >= maxAllowedWordSize) {
        alert('超過字數限制: ' + maxAllowedWordSize + ' 個字');
    }
}

/// <summary>
/// TextArea 欄位字數限制
/// </summary>
function wordRestrict(el, id, maxWords) {
    var temp = $(el)[0].value.length;

    if (temp > maxWords) {
        alert('超過字數限制');
        $(el)[0].scrollTop = $(el)[0].scrollHeight;
        $(el).val($(el)[0].value.substring(0, maxWords));
    }
}

$(function() {
    $.validator.addMethod('cellphone', function(cellphoneno, element) {
        return this.optional(element) || cellphoneno.match(/^09\d{8}$/);
    }, '請輸入正確的行動電話號碼');

    $.validator.addMethod('phone', function(phoneno, element) {

        var tel = /^\d{7,10}$/g;
        return this.optional(element) || (tel.test(phoneno));
    }, '請輸入正確的電話號碼');

    $.validator.addMethod('area', function(phoneno, element) {

        var tel = /^\d{2,4}$/g;
        return this.optional(element) || (tel.test(phoneno));
    }, '請輸入正確的區碼');

    $.validator.addMethod('ext', function(phoneno, element) {

        var tel = /^\d{1,4}$/g;
        return this.optional(element) || (tel.test(phoneno));
    }, '請輸入正確的分機號碼');

    $.validator.addMethod('chinese', function(value, element) {
        var re = new RegExp('^[\\u4e00-\\u9fa5]+$', '');
        return re.test(value);
    }, '請輸入中文');

    $.validator.addMethod('nameCheck', function(value, element) {
		var bflag = true;
		if(value.indexOf('小姐') != -1 || value.indexOf('先生') != -1 ){
			bflag = false;
		}
        return this.optional(element) || bflag;
    }, '請勿輸入先生、小姐');

    $.validator.addMethod('cellphone', function(value, element) {
        return this.optional(element) || value.match(/^09\d{8}$/);
    }, '請輸入正確的行動電話號碼');

    $.validator.addMethod('pwd', function(value, element) {
        return this.optional(element) || value.match(/^[a-zA-Z0-9]{6,50}$/);
    }, '請輸入6個字元以上的英文字母或數字，但不含空白鍵、及「\"」。');

    $.validator.addMethod('equalTo', function(value, element, params) {
        return this.optional(element) || value == $(params[0]).val();
    }, '新密碼與確認密碼輸入不同');

    $.validator.addMethod('birthday', function(value, element) {

        if ($('#BirthY').val().length == 0) return false;
        
        var todayStr = $.format.date(new Date(), 'yyyyMMdd');
        var y = parseInt($('#BirthY').val()) + 1911;
        var myBirthday = $.format.date(new Date(y, parseInt($('#BirthM').val()) - 1, parseInt($('#BirthD').val())), 'yyyyMMdd')

        if (myBirthday > todayStr) return false;
        return true;

    }, '生日錯誤');
});



