import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
    install: (app, options)=> {
        app.component("MainHeader", MainHeader).component("MainFooter", MainFooter)
    }
};

export { MainFooter, MainHeader }