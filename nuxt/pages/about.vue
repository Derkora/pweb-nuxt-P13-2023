<template>
  <div class="bg-primary py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class=" font-bold tracking-tight text-2xl sm:text-3xl">About Us</h2>
        <p class="mt-2  leading-8 text-sm">
          Kami kelompok 13 praktikum pemrograman web merupakan tim yang terdiri dari tiga anggota yang memiliki semangat dan aktif dalam mengerjakan penugasan, yaitu Steven Figo, Hafiz Akmaldi Santosa, dan Rizki Ramadhani. Kebersamaan dalam kelompok ini tercermin dalam semangat tinggi yang kita bawa setiap kali melibatkan diri dalam penugasan praktikum. kami tidak hanya berkomitmen pada keberhasilan individu, tetapi juga berusaha mencapai tujuan bersama dengan saling mendukung.
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="person in people" :key="person.name" class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 ">
            <img :src="person.imageUrl" alt="" class="h-10 w-10 rounded-full bg-blue-700" />
            <div class="text-sm leading-6">
              <p class="font-semibold ">
                <a :href="person.href">
                  {{ person.name }}
                </a>
              </p>
              <p class="">{{ person.role }}</p>
            </div>
          </div>
          <div class="mt-5">
            <p class="text-base font-semibold leading-6 ">{{ person.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>

const people = [
  {
    name: 'Steven Figo',
    role: '5027221021',
    imageUrl: 'https://picsum.photos/200',
    description: 'Hai!, saya Steven Figo dengan NRP 5027221021 Saya adalah individu yang antusias dan penuh semangat dalam menjalani perjalanan pemrograman web. ',
  },
  {
    name: 'Hafiz Akmaldi Santosa',
    role: '5027221061',
    imageUrl: 'https://picsum.photos/201',
    description: 'Hallo!, Saya Hafiz Akmaldi Santosa, mahasiswa dengan NRP 5027221061 yang memiliki semangat tinggi untuk mengeksplorasi dunia pemrograman web. ',
  },
  {
    name: 'Rizki Ramadhani',
    role: '5027221013',
    imageUrl: 'https://picsum.photos/202',
    description: 'Hai!, Saya Rizki Ramadhani, mahasiswa dengan NRP 5027221013 yang memiliki semangat untuk mengerjakan penugasan pemrograman web.',
  },
]
</script>