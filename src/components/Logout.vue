<script>
export default {
  name: 'MesistantLogout',
  data () {
    return {
      user_id: null,
      user_name: null
    }
  },
  mounted: function () {
    this.$axios.post('/user/logout')
      .then(response => {
        console.log(response)
        alert('ログアウト成功')
        this.$router.push({name: 'Main'})
      })
      .catch(error => {
        alert('ログアウト失敗')
        console.log(error, this.login_response)
        this.$router.push({name: 'Main'})
      })
  }
}
</script>
