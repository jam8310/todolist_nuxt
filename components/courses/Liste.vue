<template>
  <div class="container">
    <Modale :revele="revele" :item="item" :price="price" :index="index" @newitem="newItem" />
    <div class="total">
      <span>TotalArticle : {{ this.$store.state.courses.totalArticle }} </span>
      <span>TotalPrice : {{ Math.round(this.$store.state.courses.totalPrice * 100) /100 }} €</span>
    </div>
    <ul v-for="(todo, index) in todos" :key="index">
      <li v-if="!todo.checked" @load="total(todo.price)">
          <div class="liste">
              <div class="listeText">{{ todo.text }} </div>
              <div class="listePrice">{{ todo.price }} €</div>
          </div>
        <div class="align">
           <button class="btn green" type="button" @click="checked(index)">
            <img src="../../assets/img/check.png" alt="">
          </button>
          <button class="btn" type="button" @click="modif(index)">&#9998;</button>
          <button class="btn red" type="button" @click="del(index)">&#10008;</button>
        </div>
      </li>
      <li v-else class="fondBarre"><div class="barre">{{ todo.text }}</div> 
        <div class="align">
          <button class="btn blue" type="button" @click="checked(index)">
            <img src="../../assets/img/rejouer.png" alt="">
          </button>
          <button class="btn red" type="button" @click="del(index)">&#10008;</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Modale from '@/components/courses/Modale'
import { mapActions } from 'vuex'

export default {
  name: "Liste",
  data() {
    return {
      revele: false,
      item: '',
      price: 0,
      index: ''
    }
  },
  props: ['todos'],
  components: {
    Modale
  },
  methods: {
    ...mapActions({
      delTodoStore : 'courses/delTodo',
      checkedTodoStore : 'courses/checkedTodo',
      newItemStore : 'courses/newItem',
      totalStore : 'courses/total'
    }),
    del(index) {
      this.delTodoStore(index);
      this.totalStore();
    },
    checked(index) {
      this.checkedTodoStore(index);
      this.totalStore();
    },
    modif(index) {
      this.item = this.$store.state.courses.todolistCourse[index].text;
      this.price = this.$store.state.courses.todolistCourse[index].price;
      this.index= index;
      this.revele = true;
      this.totalStore();
    },
    newItem(value) {
      this.newItemStore(value);
    }
  }
}
</script>

<style scoped>
.container{
  padding-top: 20px;
}
.total{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}
li{
  line-height:20px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 5px #999;
  border-radius:3px;
  padding: 10px;
  margin-bottom: 5px;
}
.liste{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
}
.listeText{
  width:80%;
}
.listePrice{
  width: 20%;
  text-align: right;
}
.align{
  display: flex;
  align-items: center;
}
.btn{
  line-height:20px;
  font-size:18px;
  width:20px;
  height:20px;
  cursor: pointer;
  border: none;
  background-color:transparent;
  outline: none;
  margin-right:3px;
}
.btn img{
  width:20px;
  height:20px;
  padding: 2px 0;
}
.red{
  color: crimson;
}
.green{
  color: green;
}
.blue {
  color: rgb(72, 161, 209);
}
.barre{
  text-decoration: line-through;
  background-color:#e8e8e8;
}
.fondBarre{
  background-color: rgb(232, 232, 232);
}
</style>