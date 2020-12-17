<template>
  <div class="home">
    <demo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import demo from '@/components/demo.vue'

export default {
  data() {
      return {
        
      }
    },
  name: 'Home',
  components: {
    HelloWorld,
    demo
  }
}
</script>
