<template>
  <div>
    <div class="container-fluid navbar navbar-dark bg-dark shadow-sm fixed-top">
      <div class="container">
        <div class="navbar-brand d-flex align-items-center">
          {{ title }}
        </div>
        <div class="navbar-item">
          <p>Score: {{ score }}</p>
        </div>
      </div>
    </div>
    <Quiz :questions="questions" />
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'
import { QUIZ_DATA } from './assets/data/quiz'

export default {
  name: 'App',
  components: {
    Quiz
  },
  data: () => ({
    title: QUIZ_DATA.title,
    questions: QUIZ_DATA.questions,
    score: 0,
    currentQuestion: 0,
  }),
  methods: {
    addQuestion() {
      console.log('add', this.questions)
    }
  }
}
</script>

<style lang="scss">

</style>
