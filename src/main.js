import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"
// in your main.js or similar file
import Vue from 'vue'
import cookieconsent from 'vue-cookieconsent-component'


Vue.component('cookie-consent', cookieconsent)

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
