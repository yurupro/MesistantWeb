<template>
    <div class="container">
      <!-- <img src="http://koyume.prokuma.kr:8080/image/fried-rice-967081_1920.jpg" class="img-fluid"> -->
        <div class="row">
            <div class="col-lg-12">
                <router-link to ="/login"><button type="submit" class="btn btn-primary">ログイン</button></router-link>
                <router-link to="/register"><button type="submit" class="btn btn-primary">新規登録</button></router-link>
                <button  v-on:click="logout()" type="submit" class="btn btn-primary">ログアウト</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MesistantMain',
  data () {
    return {
      form_mail: '',
      form_password: '',
      form_name: '',
      form_sex: 'female',
      login_response: {},
      register_response: {}
    }
  },
  methods: {
    login: function () {
      console.log(this.mail)
      var data = {'mail': this.form_mail, 'password': this.form_password}
      console.log(data)
      this.$axios.post('http://koyume.prokuma.kr:8080/user/login', data)
        .then(response => {
          this.login_response = response
          console.log(this.login_response)
          console.log('wei')
          this.$router.push({path: '/list', params: { user_id: this.login_response.id }})
        })
        .catch(error => {
          alert('ログイン失敗')
          console.log(error, this.login_response)
        })
    },
    logout: function () {
      var data = {'mail': this.form_mail, 'password': this.form_password}
      this.$axios.post('http://koyume.prokuma.kr:8080/user/logout', data)
        .then(response => {
          console.log(response)
          alert('ログアウト成功')
        })
        .catch(error => {
          alert('ログアウト失敗')
          console.log(error, this.login_response)
        })
    },
    register: function () {
      console.log(this.user)
      this.$axios.post('http://koyume.prokuma.kr:8080/user/add', {'mail': this.form_mail, 'password': this.form_password, 'name': this.form_name, 'sex': this.form_sex})
        .then(response => {
          this.register_response = response
          alert('登録成功')
          console.log(this.register_response)
        })
        .catch(error => {
          alert('登録失敗')
          console.log(error)
        })
    }
  }
}
</script>
