<template>
    <div class="container">
        <Formulaire :todos="todos" />
        <Liste :todos="todos" />
    </div>
</template>

<script>
import Formulaire from '@/components/courses/Formulaire'
import Liste from '@/components/courses/Liste'
import { mapActions } from 'vuex'

export default {
    name: 'courseIndex',
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
      loadTodoStore : 'courses/loadTodo'
      }),
    charge() {
     this.loadTodoStore();
      this.todos = this.$store.state.courses.todolistCourse;
    }
  },
  mounted(){
    this.charge()
  }
}
</script>

<style scoped>

</style>