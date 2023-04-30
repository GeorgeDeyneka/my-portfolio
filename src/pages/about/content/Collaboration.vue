<script>
import ButtonLink from "../../../components/buttons/ButtonLink.vue";
import ButtonNav from "../../../components/buttons/ButtonNav.vue";
import { BUTTON_DATA } from "@/data/buttonsData";

export default {
  data() {
    return {
      btnGetIn: BUTTON_DATA.getInTouch,
      btnHire: BUTTON_DATA.hireMe,
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
    <h3>Collaboration</h3>
    <h2 class="collab__title">Lets talk to Collaboration!</h2>

    <div class="collab__buttons">
      <ButtonNav :text="btnGetIn.text" :route="btnGetIn.link" />
      <ButtonLink :text="btnHire.text" :link="btnHire.link" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collab {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 150px;

  &__title {
    font-size: 45px;
    padding: 10px 0 40px;
    max-width: 650px;
    text-align: center;
    line-height: 1.3;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }
}

@media (min-width: 768) {
  .collab {
    &__title {
      font-size: 80px;
    }

    &__buttons {
      gap: 40px;
    }
  }
}
</style>
