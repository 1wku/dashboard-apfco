<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700">Đăng nhập </span>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Tên đăng nhập </span>
          <input
            type="text"
            class="block p-2 w-full mt-1 rounded-md focus:border-green-600 focus:ring"
            v-model="username"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Mật khẩu </span>
          <input
            type="password"
            class="block p-2 w-full mt-1 rounded-md focus:border-green-600 focus:ring"
            v-model="password"
          />
        </label>

        <!-- <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="text-green-600 border-gray-200 rounded-md focus:border-green-600 focus:ring focus:ring-opacity-40 focus:ring-green-500"
              />
              <span class="mx-2 text-sm text-gray-600">Ghi nhớ cho lần sau </span>
            </label>
          </div>

          <div>
            <a
              class="block text-sm text-green-700 fontme hover:underline"
              href="#"
              >Forgot your password?</a
            >
          </div>
        </div> -->

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
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

function login() {
  router.push("/dashboard");
}
</script>
