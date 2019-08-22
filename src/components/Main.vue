<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <form>
                    <div class="form-group">
                        <label for="userIdForm">Email</label>
                        <input v-model="mail" type="text" class="form-control" id="userIdForm" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="passwordForm">Password</label>
                        <input v-model="password" type="password" class="form-control" id="passwordForm" placeholder="Password"/>
                    </div>
                    <button  v-on:click="login()" type="submit" class="btn btn-primary">Sign In</button>
                </form>
            </div>
            <div class="col-lg-12">
                <form>
                    <div class="form-group">
                        <label for="userIdForm">Email</label>
                        <input v-model="mail" type="text" class="form-control" id="userIdForm" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="passwordForm">Password</label>
                        <input v-model="password" type="password" class="form-control" id="passwordForm" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="nameForm">Password</label>
                        <input v-model="password" type="password" class="form-control" id="passwordForm" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="passwordForm">Password</label>
                        <input v-model="password" type="password" class="form-control" id="passwordForm" placeholder="Password"/>
                    </div>
                    <button  v-on:click="register()" type="submit" class="btn btn-primary">Sign In</button>
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
      mail: '',
      password: '',
      name: '',
      sex: '',
      login_response: {},
      register_response: {}
    }
  },
  methods: {
    login: function () {
      console.log(this.user)
      this.$axios.post('http://koyume.prokuma.kr:8080/user/login', {headers: {'Content-Type': 'application/json'}}, {'mail': this.mail, 'password': this.password})
        .then(response => {
          this.login_response = response
          console.log(this.login_response)
          this.$router.push({path: '/list', params: { user_id: this.login_response.id }})
        })
        .catch(error => {
          alert('ログイン失敗')
          console.log(error, this.login_response)
        })
    },
    register: function () {
      console.log(this.user)
      this.$axios.post('http://koyume.prokuma.kr:8080/user/add', {headers: {'Content-Type': 'application/json'}}, {'mail': this.mail, 'password': this.password, 'name': this.name, 'sex': this.sex})
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
