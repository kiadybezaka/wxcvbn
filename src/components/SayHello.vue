<template>
  <div class="hello">
    <h1>Hello {{ name }}</h1>
    <p>{{desc}}</p>
    </div>
</template>

<script>
export default {
  name: 'SayHello',
  props: {
    name: String,
    desc: String,
  }
}
</script>
