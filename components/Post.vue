<template>
  <article>
    <h1 class="text-4xl text-blue-400">
      {{ title }}
    </h1>

    <div v-html="content"></div>
  </article>
</template>


<script setup>
  const props = defineProps({
    id: String,
  })

  const { data: post } = await useFetch(`https://peabiru.org.br/wp-json/wp/v2/posts/${props.id}`, {
    pick: ['title','content'],
  })

  const title = post.value.title.rendered
  const content = post.value.content.rendered
</script>
