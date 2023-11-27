<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis mauris ac quam semper hendrerit. Fusce semper mauris eu enim mollis, eu tincidunt enim semper. Sed semper eros ac quam vulputate, vel fringilla quam molestie. Nullam sed lectus eget nulla sagittis semper.
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="person in people" :key="person.name" class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <img :src="person.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a :href="person.href">
                  {{ person.name }}
                </a>
              </p>
              <p class="text-gray-600">{{ person.role }}</p>
            </div>
          </div>
          <div class="mt-5">
            <p class="text-base font-semibold leading-6 text-gray-900">{{ person.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const people = [
  {
    name: 'Steven Figo',
    role: 'Back-end Developer',
    imageUrl: 'https://picsum.photos/200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper eros ac quam vulputate, vel fringilla quam molestie. Nullam sed lectus eget nulla sagittis semper.',
  },
  {
    name: 'Hafiz Akmaldi Santosa',
    role: 'Front-end Developer',
    imageUrl: 'https://picsum.photos/201',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed lectus eget nulla sagittis semper.',
  },
  {
    name: 'Rizki Ramadhani',
    role: 'Full-stack Developer',
    imageUrl: 'https://picsum.photos/202',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper eros ac quam vulputate, vel fringilla quam molestie. Nullam sed lectus eget nulla sagittis semper.',
  },
]
</script>