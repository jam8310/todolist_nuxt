<template>
  <div class="container">
    <formulaire />
    <Liste :todos="todos" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Formulaire from '@/components/Formulaire'
import Liste from '@/components/Liste'

export default {
  data(){
    return {
      todos : '',
      save: false
    }
  },
  components: {
    Formulaire,
    Liste
  },
  methods: {
    ...mapActions({
      loadTodoStore : 'loadTodo'
      }),
    charge() {
      
      this.loadTodoStore();
      this.todos = this.$store.state.todolist;
    }
  },
  mounted(){
    this.charge()
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
h1{
  text-align: center;
}
</style>
