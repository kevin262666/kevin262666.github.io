"use strict";var content=new Vue({el:"#content",data:{menuBtnActive:!1,navbarShow:!1},methods:{toggleMobileNavbar:function(){!1===this.menuBtnActive?this.menuBtnActive=!0:this.menuBtnActive=!1,!1===this.navbarShow?this.navbarShow=!0:this.navbarShow=!1},hideMobileNavbar:function(){this.menuBtnActive=!1,this.navbarShow=!1}}});