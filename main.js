// Import多國語系
import zh_TW from './zh_TW.js';

// 註冊驗證套件
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

// Class 設定檔案
VeeValidate.configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
    }
});
// 加入語系至 VeeValidate 的設定檔案
VeeValidate.localize('tw', zh_TW);

// 建立Vue實體
new Vue({
    el: '#app',
    data: {
        name: '',
        mail: '',
        phone: '',
        addresse: '',
        pay: '',
        message: ''
    },
    methods: {
        sendForm(){
            alert('表單資料已送出');
        }
    }
});