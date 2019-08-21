<template>
    <div class="container">
        <div v-for="result in results">
            <div class="card">
                <h5 class="card-header">{{result.name}}//{{result.user}}</h5>
                <div class="card-body">
                    <h5 class="card-title">説明</h5>
                    <p class="card-text">{{result.description}}</p>
                    <a href="#" class="btn btn-primary">デバイスに伝送</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      results: []
    }
  },
  mounted () {
    this.$axios.get('http://koyume.prokuma.kr:8080/recipe/' + this.$route.params.user_id)
      .then(response => (this.results = response))
  }
}
</script>
