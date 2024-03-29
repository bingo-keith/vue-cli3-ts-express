import Vue, { VueConstructor } from 'vue';
import { AxiosInstance } from 'axios';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
  interface VueConstructor {
    $axios: AxiosInstance
  }
}
