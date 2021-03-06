<template>
  <div>
    <div class="nav">
      <nav>
        <nuxt-link to="/" exact-active-class="active">Liste Tache</nuxt-link>
        <nuxt-link to="/listeCourse" exact-active-class="active">Liste Course </nuxt-link>
        <nuxt-link to="/listeSite" exact-active-class="active">Liste Site </nuxt-link>
      </nav>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.nav{
  padding:15px;
  text-align: center;
}
a{
  text-decoration: none;
  color: #333;
  margin: 0 20px;
  transition: .2s;
}
a:hover{
  color:#999;
}
.active{
  color:#999;
  border-bottom: 1px solid #3b8070;
}
.container, .nav{
  max-width: 800px;
  margin: 0 auto;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
@media screen and (max-width: 400px) {
  a{
    margin:0 5px;
  }
}
</style>
