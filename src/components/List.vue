<template>
    <div>
        <header>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <ul class="navbar-nav mr-auto">
                    <router-link v-bind:to="{ name:'Main', params: { user_id: user_id, user_name: user_name }}"><a class="navbar-brand" href="#">Mesistant</a></router-link>
                </ul>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul v-if="user_id != null" class="navbar-nav">
                        <li class="nav-item">
                            <router-link v-bind:to="{ name:'List', params: { user_id: user_id, user_name: user_name }}"><a class="nav-link">レシピ</a></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-bind:to="{ name:'Upload', params: { user_id: user_id, user_name: user_name }}"><a class="nav-link">アプロード</a></router-link>
                        </li>
                    </ul>
                    <ul v-else class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/register"><a class="nav-link">新規登録</a></router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <div v-if="user_id != null">
                                <a class="nav-link" v-on:click="logout()">ログアウト({{ user_name }})</a>
                            </div>
                            <div v-else>
                                <router-link to="/login"><a class="nav-link">ログイン</a></router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <section>
            <div class="container">
                <div class="description" v-for="result in results" :key="result.id">
                    <div class="my-3 card">
                        <h5 class="card-header">{{ result.name }}</h5>
                        <div class="card-body">
                            <h5 class="card-title">説明</h5>
                            <p class="card-text">{{ result.description }}</p>
                            <router-link v-bind:to="{ name:'Details', params: { user_id: user_id, user_name: user_name, recipe_id: result.id }}"><button class="btn btn-info">詳細</button></router-link>
                            <button v-on:click="sendToDevice(result.id)" class="btn btn-primary">デバイスに伝送</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'MesistantList',
  data () {
    return {
      user_id: null,
      user_name: null,
      results: [],
      send_result: null
    }
  },
  mounted () {
    this.user_id = this.$route.params.user_id
    this.user_name = this.$route.params.user_name
    this.$axios.get('/recipes')
      .then(response => {
        console.log(response.data.array)
        this.results = response.data.array
      })
  },
  methods: {
    getRecipes: function () {
      this.$axios.get('/recipes')
        .then(response => {
          console.log(response.data.array)
          this.results = response.data.array
        })
    },
    sendToDevice: function (recipeId) {
      this.$axios.post('/recipe/' + recipeId + '/add_queue')
        .then(response => {
          console.log(response.data)
          alert('伝送完了')
        })
        .catch(error => {
          console.log(error)
          alert('伝送失敗')
        })
    },
    recipeDelete: function (recipeId) {
      this.$axios.delete('/recipe/' + recipeId)
        .then(response => {
          console.log(this.results)
          console.log(response.data)
          alert('削除完了')
          for (var i = 0; i < this.results.length; i++) {
            if (this.results[i].id === recipeId) {
              this.results.splice(i, 1)
              break
            }
          }
        })
        .catch(error => {
          console.log(error)
          alert('削除失敗')
        })
    },
    logout: function () {
      this.$axios.post('/user/logout')
        .then(response => {
          this.user_id = null
          this.user_name = null
          console.log(response)
          alert('ログアウト成功')
          this.$router.push({name: 'Main'})
        })
        .catch(error => {
          alert('ログアウト失敗')
          console.log(error, this.login_response)
        })
    }
  }
}
</script>

<style>
#app{
    padding-top: 55px;
}
</style>
