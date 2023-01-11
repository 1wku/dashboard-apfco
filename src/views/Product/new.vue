<template>
  <div>
    <h1>{{ error }}</h1>
    <div class="mt-8">
      <h4 class="text-gray-600">Sản phẩm mới</h4>

      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2
            class="text-lg font-semibold text-gray-700 capitalize mb-8"
          >
            Thông tin sản phẩm mới
          </h2>

          <form @submit.prevent="register">
            <div class="flex flex-col">
              <div class="mb-8">
                <label class="text-gray-700" for="username"
                  >Tên sản phẩm</label
                >
                <input
                  class="w-full mt-2 border-gray-700 border p-4 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  placeholder="Nhập tên sản phẩm ở đây"
                  v-model="product.name"
                />
              </div>
              <div class="mb-8">
                <div
                  class="mb-2 w-full flex justify-between items-center"
                >
                  <label
                    class="text-gray-700"
                    for="username"
                    >Ứng dụng</label
                  >
                  <span
                    class="cursor-pointer w-48 px-4 py-2 text-sm text-center border border-gray-600 border-dashed rounded-md focus:outline-none hover:bg-gray-300"
                    @click="addFeature"
                  >
                    Thêm Ứng dụng
                  </span>
                </div>
                <div
                  class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
                >
                  <table class="min-w-full">
                    <thead>
                      <tr>
                        <th
                          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                        ></th>
                        <th
                          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                        ></th>
                      </tr>
                    </thead>

                    <tbody class="bg-white">
                      <tr
                        v-for="(
                          feature, index
                        ) in product.feature"
                        :key="index"
                      >
                        <td
                          class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                        >
                          <div
                            class="text-md font-medium leading-5 text-gray-900"
                          >
                            <input
                              type="text"
                              class="w-full h-full focus:outline-none"
                              placeholder="Nội dung ứng dụng"
                              v-model="
                                product.feature[index]
                              "
                            />
                          </div>
                        </td>
                        <td
                          class="px-6 py-4 border-b border-gray-200 whitespace-nowrap flex items-center justify-center"
                          @click="
                            () => deleteFeature(feature)
                          "
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
                            ></path>
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mb-4">
                <div
                  class="mb-2 w-full flex justify-between items-center"
                >
                  <label
                    class="text-gray-700"
                    for="username"
                    >Đặc tính</label
                  >
                  <div
                    class="cursor-pointer w-48 px-4 py-2 text-sm text-center border border-gray-600 border-dashed rounded-md focus:outline-none hover:bg-gray-300"
                    @click="addChara"
                  >
                    Thêm Đặc tính
                  </div>
                </div>
                <div
                  class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
                >
                  <table class="min-w-full">
                    <thead>
                      <tr>
                        <th
                          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                        ></th>
                        <th
                          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                        ></th>
                      </tr>
                    </thead>

                    <tbody class="bg-white">
                      <tr
                        v-for="(
                          feature, index
                        ) in product.chara"
                        :key="index"
                      >
                        <td
                          class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                        >
                          <div
                            class="text-md font-medium leading-5 text-gray-900"
                          >
                            <input
                              type="text"
                              class="w-full h-full focus:outline-none"
                              placeholder="Nội dung đặc tính"
                              v-model="product.chara[index]"
                            />
                          </div>
                        </td>
                        <td
                          class="px-6 py-4 border-b border-gray-200 whitespace-nowrap flex items-center justify-center"
                          @click="
                            () => deleteChara(feature)
                          "
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
                            ></path>
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              class="mb-2 w-full flex justify-between items-center"
            >
              <label class="text-gray-700" for="username"
                >Tiêu chuẩn kỹ thuật</label
              >
              <span
                class="cursor-pointer w-fit px-4 py-2 text-sm text-center border border-gray-600 border-dashed rounded-md focus:outline-none hover:bg-gray-300"
                @click="toogleTable"
              >
                <template v-if="hasTable">
                  Ẩn thông tin tiêu chuẩn kĩ thuật
                </template>
                <template v-else>
                  Có chứa tiêu chuẩn kĩ thuật
                </template>
              </span>
            </div>
            <div
              class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
              v-show="hasTable"
            >
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Chỉ tiêu
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      ĐVT
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Quy cách
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    ></th>
                  </tr>
                </thead>

                <tbody class="bg-white">
                  <tr
                    v-for="(u, index) in product.table"
                    :key="index"
                  >
                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div
                        class="text-md font-medium leading-5 text-gray-900"
                      >
                        <input
                          type="text"
                          v-model="u.name"
                        />
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div
                        class="text-md font-medium leading-5 text-black"
                      >
                        <input
                          type="text"
                          v-model="u.unit"
                        />
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div
                        class="text-md font-medium leading-5 text-black"
                      >
                        <input
                          type="text"
                          v-model="u.spec"
                        />
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                      @click="() => removeRow(u)"
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
                        ></path>
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="mt-8">
                <div
                  class="w-full px-4 py-2 text-sm text-center rounded-md border border-dashed border-gray-700 focus:outline-none hover:bg-gray-300"
                  action="none"
                  @click="addRow"
                >
                  Thêm Dòng
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="mt-8">
        <button
          class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          @click="register"
        >
          Thêm Sản phẩm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import router from "@/router";

const INSERT_PRODUCT = gql`
  mutation MyMutation(
    $feature: jsonb = ""
    $chara: jsonb = ""
    $table: jsonb = ""
    $name: String = ""
  ) {
    insert_product(
      objects: {
        name: $name
        feature: $feature
        chara: $chara
        table: $table
      }
    ) {
      returning {
        id
        name
      }
    }
  }
`;

const {
  mutate: insert_product,
  loading,
  error,
} = useMutation(INSERT_PRODUCT);

interface User {
  name: string;
  chara: Array<string>;
  feature: Array<string>;
  table: Array<any>;
}

const hasTable = ref(false);

const product = ref<User>({
  name: "",
  chara: [""],
  feature: [""],
  table: [
    {
      name: "Tinh bột",
      unit: "%",
      spec: "≥ 85,0",
    },
    {
      name: "Độ ẩm",
      unit: "%",
      spec: "≤ 13,0",
    },
    {
      name: "Độ dẻo",
      unit: "BU",
      spec: "≥ 650",
    },
    {
      name: "D.S",
      unit: "%",
      spec: "0,010-0,06",
    },
    {
      name: "Độ mịn",
      unit: "%",
      spec: "≥ 99,0",
    },
    {
      name: "Tạp chất",
      unit: "%",
      spec: "≤ 0,10",
    },
    {
      name: "Độ trắng",
      unit: "%",
      spec: "≥ 90,0",
    },
    {
      name: "Độ tro",
      unit: "%",
      spec: "≤ 0,20",
    },
    {
      name: "Độ xơ",
      unit: "%",
      spec: "≤ 0,05",
    },
    {
      name: "pH",
      unit: "",
      spec: "5,0÷7,0",
    },
    {
      name: "SO2",
      unit: "ppm",
      spec: "≤ 30,0",
    },
  ],
});

const register = () => {
  if (product.value.name !== "") {
    const formatedData = hasTable.value
      ? product.value
      : { ...product.value, table: null };
    const data = JSON.parse(JSON.stringify(formatedData));
    insert_product(data);
    console.log(data);
    alert("Thêm sản phẩm thành công");
    router.push("/product");
  } else {
    alert("Vui lòng nhập tên sản phẩm");
  }
};

function addFeature(e: any) {
  e.preventDefault();
  product.value.feature.push("");
  console.log(product.value);
}

function deleteFeature(obj: any) {
  if (product.value.feature.length > 1)
    product.value.feature.splice(
      product.value.feature.indexOf(obj),
      1
    );
}

function addChara(e: any) {
  e.preventDefault();
  product.value.chara.push("");
  console.log(product.value);
}

function deleteChara(obj: any) {
  if (product.value.chara.length > 1)
    product.value.chara.splice(
      product.value.chara.indexOf(obj),
      1
    );
}

function toogleTable() {
  hasTable.value = !hasTable.value;
}

function addRow() {
  product.value.table.push({
    name: "Chỉ tiêu",
    unit: "ĐTV",
    spec: "Quy cách",
  });
}
function removeRow(row: any) {
  if (product.value.table.length > 1)
    product.value.table.splice(
      product.value.table.indexOf(row),
      1
    );
}
</script>
