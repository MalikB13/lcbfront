<template>
  <sections class="todoapp " >
    <div class="main bg-purple bg-darken-lg">
      <ul class="window-principal" style="padding-inline-start: 0px;">
        <li v-for="message in messages" :key="message.text">
          <div class="bubbleWrapper .bg-primary">
            <div class="inlineContainer .bg-primary" :class="{own: message.user === 'own'}">
              <img class="inlineIcon" src="../assets/lcb_logo.png">
              <div :class="[{ownBubble: message.user === 'own'}, {otherBubble: message.user === 'other'}, message.user, '.bg-primary' ]">{{message.text}}</div>
            </div>
          </div>
        </li>
      </ul>
      <input type="text" placeholder="Votre message" v-model="newMessage" @keyup.enter="sendMessage">
    </div>
  </sections>

</template>

<script>
import ChatbotService from '../services/ChatbotService'

export default {

  data () {
    return {
      messages: [{
        user: 'other',
        text: 'gaaang'
      }, {user: 'own',
        text: 'yo'
      }],
      newMessage: ''
    }
  },
  methods: {
    async sendMessage () {
      console.log('yooooo')
      const response = await ChatbotService.model({
        sentence: this.newMessage
      })
      this.messages.push({
        user: 'own',
        text: this.newMessage
      })
      console.log('yooooo')
      this.newMessage = ''
      this.messages.push({
        user: 'other',
        text: response.answer
      })
    }
  }
}
</script>

<style src="./messages.css">

</style>
