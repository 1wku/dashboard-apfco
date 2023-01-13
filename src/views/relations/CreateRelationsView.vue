<template>
  <div>
    <div class="flex justify-between items-center">
      <Breadcrumb breadcrumb="tao-moi" />

      <router-link :to="`/quan-he/${route.params.type}`">
        <button
          class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
        >
          Quay lại
        </button>
      </router-link>
    </div>

    <!--Banner get you to github repo-->

    <div class="mt-8"></div>
    <div class="mt-4">
      <div class="p-6 bg-white rounded-md shadow-md">
        <h2
          class="text-lg font-semibold text-gray-700 capitalize"
        >
          Thêm mới dữ liệu [ {{ relationsLabel() }}]
        </h2>

        <form @submit.prevent="addRelations">
          <div class="grid grid-cols-1 gap-6 mt-4">
            <div>
              <label
                class="text-gray-700"
                for="relationsname"
                >Tựa đề</label
              >
              <input
                class="w-full border p-2 mt-2 border-gray-200 rounded-md focus:border-green-600 focus:ring focus:ring-opacity-40 focus:ring-green-500"
                type="text"
                v-model="relations.title"
              />
            </div>

            <div>
              <label
                class="text-gray-700"
                for="emailAddress"
                >Mã nguồn
              </label>
              <input
                class="w-full border mt-2 p-2 border-gray-200 rounded-md focus:border-green-600 focus:ring focus:ring-opacity-40 focus:ring-green-500"
                type="email"
                v-model="relations.link"
              />
            </div>
            <div>
              <label
                class="text-gray-700"
                for="emailAddress"
                >Mã nguồn
              </label>
              <input
                class="w-full border mt-2 p-2 border-gray-200 rounded-md focus:border-green-600 focus:ring focus:ring-opacity-40 focus:ring-green-500"
                type="date"
                v-model="relations.uploadDate"
              />
            </div>
          </div>
        </form>
        <div class="flex justify-end mt-4">
          <button
            class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            @click="register"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
import Relations from "../../models/relations.vue";
import RelationType from "../../models/relationtype.vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import router from "@/router";
import { useRoute } from "vue-router";

const route = useRoute();

const INSERT_INFO = gql`
  mutation MyMutation(
    $id: Int = -1
    $link: String = ""
    $title: String = ""
    $type: String = ""
    $uploadDate: date = ""
  ) {
    insert_docs_one(
      object: {
        link: $link
        title: $title
        type: $type
        uploadDate: $uploadDate
      }
    ) {
      id
    }
  }
`;

const {
  mutate: insert_info,
  loading,
  error,
} = useMutation(INSERT_INFO);
console.log(route.params.type);

const today = new Date();

const relations = ref<Relations>({
  type: route.params.type,
  title: "",
  link: "",
  uploadDate: today
    .toLocaleDateString("en-US")
    .split("/")
    .reverse()
    .join("-"),
});

console.log(relations.value.uploadDate);

const register = () => {
  console.log("oke");
  if (
    (relations.value.title !== "",
    relations.value.link !== "")
  ) {
    const data = JSON.parse(
      JSON.stringify(relations.value)
    );
    console.log(data);
    insert_info(data);
    alert("Thêm sản phẩm thành công");
    router.push("/quan-he/" + route.params.type);
  } else {
    alert("Vui lòng nhập tên tài liệu và đường dẫn");
  }
};

const addRelations = () => {
  const data = JSON.parse(JSON.stringify(relations.value));
  console.log("Relations: ", relations);
};

function relationsLabel() {
  switch (route.params.type) {
    case "1":
      return "Thông Tin Công Bố";
    case "2":
      return "Đại hội cổ đông ";
    case "3":
      return "Báo cáo tài chính";
    case "4":
      return "Báo cáo thường niên";
    case "5":
      return "Quản trị công ty";
    default:
      return "";
  }
}
</script>
