<template>
    <div class="container">
      <!-- <img src="http://koyume.prokuma.kr:8080/image/fried-rice-967081_1920.jpg" class="img-fluid"> -->
        <div class="row">
            <div class="col-lg-12">
                <form>
                    <div class="form-group">
                            <label for="editRecipe">レシピを追加</label>
                            <textarea v-model="form_text" class="form-control" id="editRecipe" rows="15"></textarea>
                    </div>
                    <button  v-on:click="upload()" type="submit" class="btn btn-primary">アップロード</button>
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
      form_text: ''
    }
  },
  methods: {
    upload: function () {
      var data = JSON.parse(this.form_text)
      console.log(data)
      this.$axios.post('http://koyume.prokuma.kr:8080/recipe', data)
        .then(response => {
          alert('アップロードに成功しました')
        })
        .catch(error => {
          alert('アップロードに失敗しました')
          console.log(error)
        })
    }
  }
}
</script>
