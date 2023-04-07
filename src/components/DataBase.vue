<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {
    // Получаем ссылку на коллекцию сообщений
    const messagesRef = this.$database.ref("messages");

    // Загружаем сообщения из базы данных Firebase
    messagesRef.on("value", (snapshot) => {
      const messages = [];
      snapshot.forEach((childSnapshot) => {
        messages.push(childSnapshot.val());
      });
      this.messages = messages;
    });
  },
};
</script>

<template>
  <div>{{ this.messages }}</div>
</template>

<style lang=""></style>
