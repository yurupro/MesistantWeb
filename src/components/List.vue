<template>
    <div class="container">
        <div v-for="result in results" :key="result.id">
            <div class="card">
                <h5 class="card-header">{{result.name}}//{{result.user}}</h5>
                <div class="card-body">
                    <h5 class="card-title">説明</h5>
                    <p class="card-text">{{result.description}}</p>
                    <button v-click:on="sendToDevice(result.id)" class="btn btn-primary">デバイスに伝送</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MesistantList',
  data () {
    return {
      results: [],
      send_result: null
    }
  },
  mounted () {
    console.log(this.$route)
    this.$axios.get('http://koyume.prokuma.kr:8080/user/' + this.$route.params.user_id + '/recipes')
      .then(response => (this.results = response.data))
  },
  methods: {
    sendToDevice: function (recipeId) {
      this.$axios.get('http://koyume.prokuma.kr:8080/recipe/' + recipeId + '/add_queue')
        .then(response => {
          console.log(response.data)
          alert('伝送完了')
        })
        .catch(error => {
          console.log(error)
          alert('伝送失敗')
        })
    }
  }
}
</script>
