var content = new Vue({
    el: '#content',
    data: {
        menuBtnActive: false,
        navbarShow: false,
    },
    // mounted() {
    // },
    methods: {
        toggleMobileNavbar() {
            this.menuBtnActive === false ? this.menuBtnActive = true : this.menuBtnActive = false;
            this.navbarShow === false ? this.navbarShow = true : this.navbarShow = false;
        },
        hideMobileNavbar() {
            this.menuBtnActive = false
            this.navbarShow = false
        }
    },
});