import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#9652ff',
        success: '#3cd1c2',
        info: '#ffaac2',
        error: '#f83e70'
      }
    }
  }
});
