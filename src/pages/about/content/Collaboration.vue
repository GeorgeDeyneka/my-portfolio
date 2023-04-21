<script>
import ButtonLink from "../../../components/buttons/ButtonLink.vue";
import ButtonNav from "../../../components/buttons/ButtonNav.vue";
import { BUTTON_DATA } from "/src/data/buttonsData";

export default {
  data() {
    return {
      BtnGetIn: BUTTON_DATA.getInTouch,
      BtnHire: BUTTON_DATA.hireMe,
    };
  },

  components: {
    ButtonNav,
    ButtonLink,
  },
};
</script>

<template>
  <div class="collab">
    <h3 class="collab__subtitle">Collaboration</h3>
    <h2 class="collab__title">Lets talk to Collaboration!</h2>
    
    <div class="collab__buttons">
      <ButtonNav :text="BtnGetIn.text" :route="BtnGetIn.link" />
      <ButtonLink :text="BtnHire.text" :link="BtnHire.link" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collab {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  &__title {
    font-size: 80px;
    padding: 10px 0 40px;
    max-width: 650px;
    text-align: center;
    line-height: 1.3;
  }

  &__subtitle {
    color: #61cf9e;
  }

  &__buttons {
    display: flex;
    gap: 40px;
    align-items: center;
  }
}
</style>
