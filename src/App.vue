<template>
    <div class="training">

        <h1>Math training. Level {{level + 1}}</h1>

        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" :style="progressStyle" aria-valuemax="100"></div>
        </div>
        <hr>

        <div class="box">
            <transition name="flip" mode="out-in">

            <start-app v-if="state == 'start'"
                       @onStart="StartApp()"
            ></start-app>
            <question-app v-else-if="state == 'question'"
                          @success="onQuestionSuccess()"
                          @error="onQuestionError"
                          :settings="levels[level]"
            >

            </question-app>

            <message-app v-else-if="state == 'message'"
                         :text="message.text"
                         :type="message.type"
                         @msgContinue="msgContinue()"

            ></message-app>

            <result-app v-else-if="state == 'result'"
                        :stats="stats"
                        @repeat="onRepeat()"
                        @nextLevel="onNextLevel()"

            ></result-app>

            <div v-else>Unknown state</div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                state: 'start',

                stats: {
                    success: 0,
                    error: 0
                },

                message: {
                    type: '',
                    text: ''
                },
                questMax: 3,
                level: 0,
                levels:[
                    {
                        variants: 2,
                        from: 10,
                        to: 20,
                        range: 5
                    },

                    {
                        variants: 4,
                        from: 100,
                        to: 200,
                        range: 20
                    },

                    {
                        variants: 6,
                        from: 500,
                        to: 900,
                        range: 40
                    },
                    {
                        variants: 7,
                        from: 800,
                        to: 1000,
                        range: 50
                    }
                ]
            }
        },

        computed: {
            questDone(){
                return this.stats.success + this.stats.error;
            },

            progressStyle(){
                return{
                    width: (this.questDone / this.questMax * 100) + '%'
                }
            }
        },

        methods: {
            StartApp(){
                this.state = 'question'
            },

            onQuestionSuccess(){
                this.stats.success++;
                this.state = 'message';
                this.message.text = 'Correct';
                this.message.type = 'success'

            },

            onQuestionError(msg){
                this.stats.error++;
                this.state = 'message';
                console.log(msg);
                this.message.text = msg;
                this.message.type = 'error'
            },

            msgContinue(){
                if (this.questDone < this.questMax) {
                    this.state = 'question'
                } else {
                    this.state = 'result'

                }

            },

            onRepeat(){
                this.state = 'question';
                this. stats.success = 0;
                this. stats.error= 0;

            },

            onNextLevel(){
                this.level++;
                if(this.level < this.levels.length){
                    this.onRepeat()
                }else {
                    this.level = 0;
                    this.onRepeat()
                }

            },

        }
    }
</script>

<style scoped>
    .training {
        max-width: 700px;
        margin: 20px auto;
        overflow: hidden;
    }

    .flip-enter{

    }

    .flip-enter-active{
        animation: flipInX .3s  linear


    }

    .flip-leave{

    }

    .flip-leave-active{
        animation: flipOutX .3s  linear

    }

    .progress-bar{
        width: 0;
    }

    @keyframes flipInX {
        from{
            transform: translateX(-700px);
        }

        to{
            transform: translateX(0);
        }
    }

    @keyframes flipOutX {
        from{
            transform: translateX(0);
        }

        to{
            transform: translateX(700px);
        }
    }

</style>
