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
            <div class="jumbotron">
                <div class="container">
                    <h1>ASSIST <br>YOU  to<br>COOK  MESI</h1>
                    <div class="row">
                        <div class="col-lg-12">
                            <router-link to ="/login"><button type="submit" class="btn btn-primary">ログイン</button></router-link>
                            <router-link to="/register"><button type="submit" class="btn btn-primary">新規登録</button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'MesistantMain',
  data () {
    return {
      user_id: null,
      user_name: null
    }
  },
  mounted: function () {
    this.user_id = this.$route.params.user_id
    this.user_name = this.$route.params.user_name
  },
  methods: {
    logout: function () {
      this.$axios.post('/user/logout')
        .then(response => {
          console.log(response)
          this.user_id = null
          this.user_name = null
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
.jumbotron {
    background:url('../assets/background.jpg') center no-repeat;
    background-size: cover;
}
</style>
