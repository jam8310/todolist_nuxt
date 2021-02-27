<template>
    <div class="overlay" v-if="revele">
        <div class="modale">
        <span>Veuillez corriger votre item !</span>
        <form class="form">
          <div class="formModale">
            <label for="article">Article</label>
            <input class="input" type="text" id="article" :value="item">
          </div>
          <div class="formModale">
            <label for="price">Prix</label>
            <input class="input" type="number" id="price" step="0.01" min="0" :value="price">
          </div>
          <input type="submit" class="btn" @click="modif" value="Enregistrer">
        </form>
    </div>
    </div>
    
</template>

<script>
export default {
    name: 'Modale',
    props:['revele', 'item','price', 'index'],
    methods: {
        modif(event) {
            let data = {
                item : event.target.form[0].value,
                price: event.target.form[1].value,
                index: this.index
            };
            this.$emit('newitem', data )
        }
    }

}
</script>

<style scoped>
.overlay{
    position: fixed;
    top:0; bottom:0; left:0; right:0;
    background-color: rgba(0,0,0,0.5);
}
.modale{
    position: fixed;
    top:30%;left:50%;
    transform: translate(-50%, -50%);
    border: 1px solid #333;
    width:80%;
    max-width:400px;
    padding: 20px;
    border-radius:10px;
    background-color:#f1f1f1;
}
span{
    width: 100%;
}
.form{
    position:relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0 30px;
}
.formModale{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
label{
  width:20%;
}
.input{
  width:80%;
}
input{
    border: none;
    padding: 5px;
    border: 1px solid #999;
    border-radius: 3px;
}
input:first-child{
    margin-bottom: 10px;
}
.btn{
    width:100px;
    position: absolute; 
    right:0; bottom: 0;
}
</style>