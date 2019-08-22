<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <form>
                    <div class="form-group">
                        <label for="loginEmailForm">Email</label>
                        <input v-model="form_mail" type="text" class="form-control" id="loginEmailForm" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="loginPasswordForm">Password</label>
                        <input v-model="form_password" type="password" class="form-control" id="passwordForm" placeholder="Password"/>
                    </div>
                    <router-link to="/"><button type="submit" class="btn btn-primary">戻る</button></router-link>
                    <button  v-on:click="login()" type="submit" class="btn btn-primary">ログイン</button>
                </form>
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
      login_response: null,
      register_response: null
    }
  },
  methods: {
    login: function () {
      console.log(this.mail)
      var data = {'mail': this.form_mail, 'password': this.form_password}
      console.log(data)
      this.$axios.post('http://koyume.prokuma.kr:8080/user/login', data)
        .then(response => {
          this.login_response = response.data
          this.$router.push({name: 'List', params: { user_id: this.login_response.id }})
        })
        .catch(error => {
          console.log(error, this.login_response)
          alert('ログイン失敗')
        })
    }
  }
}
</script>
