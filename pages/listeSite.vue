<template>
    <div class="container">
      <Mdp :revele="affiche" />
      <Formulaire :todos="todos" />
      <Liste :todos="todos" />
    </div>
</template>

<script>
import Formulaire from '@/components/sites/FormulaireSites'
import Liste from '@/components/sites/ListeSites'
import Mdp from '@/components/MdpListeSite'
import { mapActions } from 'vuex'

export default {
    name: 'siteIndex',
    data(){
    return {
      todos : '',
      save: false,
      affiche: true
    }
  },
    components: {
      Mdp,
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