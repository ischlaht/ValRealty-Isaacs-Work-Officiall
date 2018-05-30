import Vue from "vue";
import Router from "vue-router";
import ListingCard from "@/components/ListingCard";

Vue.use(Router);

export default new Router({
  routes: [{
    path: "/",
    name: "ListingCard",
    component: ListingCard,
  }, ],
});
