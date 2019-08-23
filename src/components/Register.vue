<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <form>
                    <div class="form-group">
                        <label for="registerEmailForm">メールアドレス</label>
                        <input v-model="form_mail" type="email" class="form-control" id="registerEmailForm" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="registerNameForm">氏名</label>
                        <input v-model="form_name" type="text" class="form-control" id="registerNameForm" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                        <label for="registerSexForm">性別</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male"/>
                            <label class="form-check-label" for="gridRadios1">
                                男性
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female"/>
                            <label class="form-check-label" for="gridRadios1">
                                女性
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="others"/>
                            <label class="form-check-label" for="gridRadios1">
                                その他
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="registerPasswordForm">パスワード</label>
                        <input v-model="form_password" type="password" class="form-control" id="registerPasswordForm" placeholder="Password"/>
                    </div>
                    <router-link to="/"><button type="submit" class="btn btn-primary">戻る</button></router-link>
                    <button  v-on:click="register()" type="submit" class="btn btn-primary">登録</button>
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
      login_response: {},
      register_response: {}
    }
  },
  methods: {
    logout: function () {
      var data = {'mail': this.form_mail, 'password': this.form_password}
      this.$axios.post('/user/logout', data)
        .then(response => {
          alert('ログアウト成功')
          console.log(response)
        })
        .catch(error => {
          alert('ログアウト失敗')
          console.log(error, this.login_response)
        })
    },
    register: function () {
      console.log(this.user)
      this.$axios.post('/user/add', {'mail': this.form_mail, 'password': this.form_password, 'name': this.form_name, 'sex': this.form_sex})
        .then(response => {
          this.register_response = response
          alert('登録に成功しました！ログインしてください！')
          console.log(this.register_response)
          this.$router.push({name: 'Login'})
        })
        .catch(error => {
          alert('登録に失敗しました')
          console.log(error)
        })
    }
  }
}
</script>
