<template>
  <div class="hello">
    <h1>Vue3 Demo</h1>
    <p>

    </p>

    <h3>Form 表單</h3>
    <ul>
      <li>
        <router-link to="/form_text">Form text</router-link>
      </li>
      <li>
        <router-link to="/form_checkbox">Form checkbox</router-link>
      </li>
      <li>
        <router-link to="/form_multi_textarea">Form multi textarea</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
