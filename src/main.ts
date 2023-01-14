import { createApp, h, provide } from "vue";
import VueApexCharts from "vue3-apexcharts";
import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";
import "./assets/tailwind.css";
import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./storeFireBase";

const cache = new InMemoryCache();

const createApolloClient = (authToken: any) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://stirred-shiner-19.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret":
          "TKrjwyPC0UH3sfUFyNS64kCfLastnHcvTnA9NyF5TCjX27U5WNuzNxIeZopDrN0y",
      },
    }),
    cache: new InMemoryCache(),
  });
};

const apolloClient = createApolloClient(
  "TKrjwyPC0UH3sfUFyNS64kCfLastnHcvTnA9NyF5TCjX27U5WNuzNxIeZopDrN0y"
);
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app
  .use(router)
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
  .use(VueApexCharts)
  .mount("#app");
