<template>
  <div
    class="flex items-center justify-center h-screen px-6 bg-gray-200"
  >
    <div
      class="w-full max-w-sm p-6 bg-white rounded-md shadow-md"
    >
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700"
          >Đăng nhập
        </span>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700"
            >Tên đăng nhập
          </span>
          <input
            type="text"
            class="block p-2 w-full mt-1 rounded-md ring-1 ring-gray-300"
            v-model="username"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700"
            >Mật khẩu
          </span>
          <input
            type="password"
            class="block p-2 w-full mt-1 rounded-md ring-1 ring-gray-300"
            v-model="password"
          />
        </label>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-green-600 rounded-md focus:outline-none hover:bg-green-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const GET_USER = gql`
  query get_user($password: bpchar, $name: name) {
    user_aggregate(
      where: {
        password: { _eq: $password }
        name: { _eq: $name }
      }
    ) {
      nodes {
        id
        name
        password
      }
    }
  }
`;

function login() {
  console.log(username.value);
  const { result, loading } = useQuery(GET_USER, {
    name: username.value,
    password: password.value,
  });
  console.log(result);
  // if (result.value.user_aggregate.nodes != null) {
  // }

  // router.push("/dashboard");
}
</script>
