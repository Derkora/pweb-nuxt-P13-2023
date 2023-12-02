<template>
    <div>
      <!-- Card -->
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          </div>
          <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
              <div class="flex items-center gap-x-4 text-xs">
                <time :datetime="post.datetime" class="text-gray-500">{{ formatDate(post.date) }}</time>
              </div>
              <NuxtLink :to="'/artikel/' + post.id">
                <div class="group relative">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </h3>
                  <div>
                    <img :src="post.image.alt" alt="" />
                  </div>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.isiBlog }}</p>
                </div>
              </NuxtLink>
              <div class="relative mt-8 flex items-center gap-x-4">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a>
                      <span class="absolute inset-0" />
                      {{ post.writer.nama }}
                    </a>
                  </p>
                  <p class="text-gray-600">{{ post.writer.division }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const posts = ref([]);
  const images = ref([]);
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3069/api/Blog', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      posts.value = responseData.docs;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  
  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:3069/api/media', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      images.value = responseData.docs;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  
  onMounted(async () => {
    try {
      await fetchData();
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat mengambil data post atau gambar.');
    }
  });
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  </script>
  
    