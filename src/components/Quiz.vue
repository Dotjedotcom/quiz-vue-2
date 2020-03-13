<template>
    <div id="quiz" class="quiz container">
        <div v-for="(question, id) in questions" :key="id" class="card">
          <div class="card-body">
            <p class="card-title" v-html="question.title"></p>
            <ul class="list-group">
              <li v-for="(answer, idx) in question.answers" :key="idx" class="list-group-item">
                <div class="form-check">
                  <input class="form-check-input"
                         type="radio"
                         :name="'test'+id"
                         v-model="question.answer"
                         :disabled="question.answer"
                         :value="idx"
                         :id="'answer'+id+idx">
                  <label class="form-check-label" v-bind:for="'answer'+id+idx">
                    {{ answer.answer }}
                  </label>
                </div>
              </li>
            </ul>
            <div class="alert"
                 v-bind:class="{
                  'alert-dark': question.answer === null,
                  'alert-danger': question.correct !== question.answer,
                  'alert-success': question.correct === question.answer
                  }">
              <div>{{ question.answers[question.answer] && question.answers[question.answer].remark || 'Nog geen antwoord gegeven.' }}</div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Quiz',
        props: {
            questions: Array,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .quiz {
      margin-top: 100px;
      .card {
        margin-bottom: 50px;
        .form-check {
          .form-check-label {
            display: block;
              cursor: pointer;
        }
        }
      }
    }
</style>
