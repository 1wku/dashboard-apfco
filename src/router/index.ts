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
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },
  {
    path: "/product/new",
    name: "productnew",
    component: ProductNew,
  },
  {
    path: "/product/update/:id",
    name: "productupdate",
    component: ProductUpdate,
  },
  {
    path: "/quan-he/thong-tin-cong-bo",
    name: "thong-tin-cong-bo",
    component: OpenInformation,
  },

  {
    path: "/quan-he/dai-hoi-co-dong",
    name: "dai-hoi-co-dong",
    component: ShareHolderManagement,
  },

  {
    path: "/quan-he/bao-cao-tai-chinh",
    name: "bao-cao-tai-chinh",
    component: MoneyAnnounce,
  },
  {
    path: "/quan-he/bao-cao-thuong-nien",
    name: "bao-cao-thuong-nien",
    component: AnnuallyAnnounce,
  },
  {
    path: "/quan-he/quan-tri-cong-ty",
    name: "quan-tri-cong-ty",
    component: CompanyManagement,
  },
  {
    path: "/quan-he/new",
    name: "tao-moi-quan-he",
    component: CreateRelations,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
