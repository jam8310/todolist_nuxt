<template>
    <div class="container">
        <Formulaire :todos="todos" />
        <Liste :todos="todos" />
    </div>
</template>

<script>
import Formulaire from '@/components/sites/FormulaireSites'
import Liste from '@/components/sites/ListeSites'
import { mapActions } from 'vuex'

export default {
    name: 'siteIndex',
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
      loadTodoStore : 'sites/loadTodo'
      }),
    charge() {
     this.loadTodoStore();
      this.todos = this.$store.state.sites.todolistSite;
    }
  },
  mounted(){
    this.charge()
  }
}
</script>

<style scoped>

</style>