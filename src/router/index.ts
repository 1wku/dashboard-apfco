import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Login from "../views/Login.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Card from "../views/CardView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import Product from "../views/Product/index.vue";
import ProductNew from "../views/Product/new.vue";
import ProductUpdate from "../views/Product/update.vue";
import OpenInformation from "../views/relations/OpenInformationView.vue";
import CreateRelations from "../views/relations/CreateRelationsView.vue";
import ShareHolderManagement from "../views/relations/ShareHolderManagementView.vue";
import AnnuallyAnnounce from "../views/relations/AnnuallyAnnounceView.vue";
import MoneyAnnounce from "../views/relations/MoneyAnnounceView.vue";
import CompanyManagement from "../views/relations/CompanyManagementView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/admin/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/admin/product",
    name: "product",
    component: Product,
  },
  {
    path: "/admin/product/new",
    name: "productnew",
    component: ProductNew,
  },
  {
    path: "/admin/product/update/:id",
    name: "productupdate",
    component: ProductUpdate,
  },
  {
    path: "/admin/quan-he/1",
    name: "thong-tin-cong-bo",
    component: OpenInformation,
  },

  {
    path: "/admin/quan-he/2",
    name: "dai-hoi-co-dong",
    component: ShareHolderManagement,
  },

  {
    path: "/admin/quan-he/3",
    name: "bao-cao-tai-chinh",
    component: MoneyAnnounce,
  },
  {
    path: "/admin/quan-he/4",
    name: "bao-cao-thuong-nien",
    component: AnnuallyAnnounce,
  },
  {
    path: "/admin/quan-he/5",
    name: "quan-tri-cong-ty",
    component: CompanyManagement,
  },
  {
    path: "/admin/quan-he/new/:type",
    name: "tao-moi-quan-he",
    component: CreateRelations,
  },

  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/admin/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/admin/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/admin/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/admin/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/admin/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/admin/blank",
    name: "Blank",
    component: Blank,
  },
  { path: "/admin/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
