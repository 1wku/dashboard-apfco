<template>
  <div>
    <div class="flex justify-between items-center">
      <Breadcrumb breadcrumb="tao-moi" />

      <router-link to="/quan-he/thong-tin-cong-bo">
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
        <h2 class="text-lg font-semibold text-gray-700 capitalize">
          Thêm mới dữ liệu
        </h2>

        <form @submit.prevent="addRelations">
          <div class="grid grid-cols-1 gap-6 mt-4">
            <div>
              <label class="text-gray-700" for="relationsname">Tựa đề</label>
              <input
                class="w-full p-2 mt-2 border-gray-200 rounded-md focus:border-green-600 focus:ring focus:ring-opacity-40 focus:ring-green-500"
                type="text"
                v-model="relations.title"
              />
            </div>

            <div>
              <label class="text-gray-700" for="emailAddress">Mã nguồn </label>
              <input
                class="w-full mt-2 p-2 border-gray-200 rounded-md focus:border-green-600 focus:ring focus:ring-opacity-40 focus:ring-green-500"
                type="email"
                v-model="relations.url"
              />
            </div>

            <div class="flex justify-end mt-4">
              <button
                class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
import Relations from "../../models/relations.vue";

const relations = ref<Relations>({
  id: 0,
  title: "",
  url: "",
});

const addRelations = () => {
  const data = JSON.parse(JSON.stringify(relations.value));
  console.log("Relations: ", relations);
};
</script>
