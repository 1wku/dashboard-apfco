<template>
  <div>
    <div
      class="flex items-center justify-between flex-row mt-8"
    >
      <h1 class="text-2xl">Quản trị công ty</h1>
      <div>
        <button
          class="w-52 px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500 cursor-pointer"
          to="/admin/product/new"
          @click="() => router.go(0)"
        >
          Làm mới trang
        </button>
        <router-link to="/admin/quan-he/new/5">
          <button
            class="w-fit ml-3 px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500 cursor-pointer"
          >
            Tạo mới
          </button>
        </router-link>
      </div>
    </div>
    <div class="mt-8"></div>
    <div v-if="loading">
      <h1>Đang tải</h1>
    </div>
    <template v-else>
      <div class="flex flex-col mt-8">
        <div
          class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Tựa đề
                  </th>

                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Đường dẫn
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Ngày áp dụng
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50"
                  >
                    Thao tác khác
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr
                  v-for="(u, index) in result.docs"
                  :key="index"
                >
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div
                      class="text-sm leading-5 text-gray-900"
                    >
                      {{ u.title }}
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    <a :href="u.link"> {{ u.link }}</a>
                  </td>

                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div
                      class="text-sm leading-5 text-gray-900"
                    >
                      {{ u.uploadDate }}
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex justify-around">
                      <span
                        class="text-yellow-500 flex justify-center"
                      >
                        <router-link
                          :to="`/quan-he/${5}/cap-nhap/${
                            u.id
                          }`"
                          class="mx-2 px-2 rounded-md"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-green-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </router-link>
                        <form method="POST">
                          <button
                            class="mx-2 px-2 rounded-md"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-red-700"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </form>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const route = useRoute();
const typeId = route.path.split("")[route.path.length - 1];

const GET_PRODUCTS = gql`
  query MyQuery($_eq1: String = "5") {
    docs(
      where: { type: { _eq: $_eq1 } }
      order_by: { uploadDate: asc }
    ) {
      id
      link
      title
      type
      uploadDate
    }
  }
`;

const { result, loading } = useQuery(GET_PRODUCTS);
</script>
