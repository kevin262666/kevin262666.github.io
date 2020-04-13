// demo網站的alert
var alertDemoText = document.createElement('div'),
    alertDemoText_text = document.createTextNode('DEMO用,皆非正式資料'),
    alertDemoText_css = 'font-size: 12px; position: fixed; bottom: 0px; left: 0px; width: 100%; background: #f00; color: #fff; text-align: center; z-index: 9999999;';

alertDemoText.setAttribute('class', 'alertDemoText');
alertDemoText.setAttribute('style', alertDemoText_css);
alertDemoText.appendChild(alertDemoText_text);
document.querySelector('body').appendChild(alertDemoText);