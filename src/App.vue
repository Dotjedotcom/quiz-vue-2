<template>

  <div class="top-container">

    <BaseNavbar :title="title"
                :score="score" />

    <Quiz :questions="questions"
          :addQuestion="addQuestion"
          :addScore="addScore" />

  </div>

</template>

<script>
import Quiz from './components/Quiz.vue'
import { QUIZ_DATA } from './assets/data/quiz'
import BaseNavbar from "./components/base/BaseNavbar";

export default {
  name: 'App',
  components: {
    BaseNavbar,
    Quiz
  },
  data: () => ({
    title: QUIZ_DATA.title,
    questions: QUIZ_DATA.questions,
    answers: [],
    score: {
      complete: '0%',
      correct: 0,
      answered: 0,
      total: 0,
    },
    currentQuestion: 0,
  }),
  created() {
    this.score.total = this.questions.length;
  },
  methods: {
    addScore({ correct }) {
      // console.log('App :: addScore :: ', questionIdx, answerIdx, correct);
      this.answers.push(correct);
      this.score.correct += correct ? 1 : 0;
      this.score.answered = this.answers.length;
      this.score.complete =  `${(((this.answers.length / this.questions.length) * 100).toFixed(0))}%`;
    },
    addQuestion() {
      // console.log('add', this.questions)
    }
  }
}
</script>

<style lang="scss">

    .top-container {
        height: 100vh;
        width: 100vw;
        overflow: hidden;

        .quiz.container {
            height: calc(100% - 150px);
            overflow-y: scroll;

            .card:last-child {
                margin-bottom: 600px;
            }
        }
    }

    .container-fluid {
        height: 100vh;
        width: 100vw;
    }

</style>