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
                    <ul class="navbar-nav">
                        <div v-if="user_id != null">
                            <router-link v-bind:to="{ name:'List', params: { user_id: user_id, user_name: user_name }}"><a class="nav-link">レシピ</a></router-link>
                            <router-link v-bind:to="{ name:'Upload', params: { user_id: user_id, user_name: user_name }}"><a class="nav-link">アプロード</a></router-link>
                        </div>
                        <div v-else>
                            <router-link to="/register"><a class="nav-link">新規登録</a></router-link>
                        </div>
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
  methods: {
    logout: function () {
      this.$axios.post('http://koyume.prokuma.kr:8080/user/logout')
        .then(response => {
          console.log(response)
          this.user_id = null
          this.user_name = null
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
<style>
     .jumbotron { background:url(http://koyume.prokuma.kr:8080/image/fried-rice-967081_1920.jpg) center no-repeat; background-size: cover;}
</style>
