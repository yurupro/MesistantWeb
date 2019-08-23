<template>
    <div>
        <header>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <ul class="navbar-nav mr-auto">
                    <a class="navbar-brand" href="#">Mesistant</a>
                </ul>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">ログアウト</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <section>
            <div class="container">
                <div v-for="result in results" :key="result.id">
                    <div class="card">
                        <h5 class="card-header">{{result.name}}/{{result.user_id}}</h5>
                        <div class="card-body">
                            <h5 class="card-title">説明</h5>
                            <p class="card-text">{{result.description}}</p>
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
    logout: function () {
      this.$axios.post('http://koyume.prokuma.kr:8080/user/logout')
        .then(response => {
          this.user_id = null
          this.user_name = null
          console.log(response)
          alert('ログアウト成功')
        })
        .catch(error => {
          alert('ログアウト失敗')
          console.log(error, this.login_response)
        })
    }
  }
}
</script>
