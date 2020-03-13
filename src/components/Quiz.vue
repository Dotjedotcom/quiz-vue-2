<template>

    <div id="quiz"
         class="quiz container">

        <div class="card"
             v-for="(question, questionIdx) in questions"
             :key="questionIdx"
             :id="questionIdx">

            <div class="card-body">

                <p class="card-title"
                   v-html="question.title">
                </p>

                <ul class="list-group">

                    <li class="list-group-item"
                        v-for="( answer, answerIdx ) in question.answers"
                        :key="answerIdx">

                        <div class="form-check">

                            <input class="form-check-input"
                                   type="radio"
                                   :name="'test' + questionIdx"
                                   v-model="question.answer"
                                   :disabled="question.answer"
                                   @change.prevent="handleAnswer({ questionIdx, answerIdx, correct: question.correct === question.answer })"
                                   :value="answerIdx"
                                   :id="'answer' + questionIdx + answerIdx">

                            <label class="form-check-label"
                                   :for="'answer' + questionIdx + answerIdx">
                                {{ answer.answer }}
                            </label>

                        </div>

                    </li>

                </ul>

                <div class="alert"
                     :class="{
                  'alert-dark': question.answer === null,
                  'alert-danger': question.correct !== question.answer,
                  'alert-success': question.correct === question.answer
                  }">

                    <div>{{ question.answers[question.answer] &&
                            question.answers[question.answer].remark ||
                            'Nog geen antwoord gegeven.' }}
                    </div>

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
            addQuestion: Function,
            calculateScore: Function,
            addScore: Function,
        },
        methods: {
            handleAnswer({ questionIdx, answerIdx, correct }) {
                this.addScore({ questionIdx, answerIdx, correct });
                this.scrollDown(questionIdx);
            },
            scrollDown(id) {
                id = this.questions.length === id + 1 ? 0 : id + 1;
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behaviour: 'smooth',
                        block: 'start',
                    });
                }
            }
        }
    }
</script>

<style lang="scss">

    .quiz {
        margin-top: 100px;

        .card {
            margin-bottom: 25px;

            .form-check {
                .form-check-label {
                    display: block;
                    cursor: pointer;
                }
            }
        }
    }

</style>
