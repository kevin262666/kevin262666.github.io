import urllib.request
from bs4 import BeautifulSoup
import ssl
import json

# --------------------------------------------------------------------------
# 抓網頁資料
# -----------------------
quote_page = 'https://wwwfile.megabank.com.tw/about/about04.asp'       # 目的網址
context = ssl._create_unverified_context()
page = urllib.request.urlopen(quote_page, context=context)
soup = BeautifulSoup(page, 'html.parser')
items = soup.select('#printthis .tab_left br + a')     # 要過濾出來的tag
info = []                                                                   # 資料陣列
for n in items:
    name = n.text.replace(' ', '').replace('  ', '').replace('\r\n', '')    # 清除空格其他符號
    info.append(name)
    # print(name)


# --------------------------------------------------------------------------
# 寫入json檔
# -----------------------
number = info
file_name = 'py/megabank.json'  # 通過副檔名指定檔案儲存的資料為json格式
with open(file_name, 'w', encoding='utf8') as file_object:
    json.dump(number, file_object, ensure_ascii=False)


# --------------------------------------------------------------------------
# 印出json檔案內容
# -----------------------
with open(file_name, 'r') as file_object:
    contents = json.load(file_object)
print(contents)
