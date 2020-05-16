<template>
  <footer class="bottom-footer">

    <div class="util__container">
      François MILHET ©copyright
    </div>

  </footer>
</template>

<script>
    export default {
        name: "BottomFooter"
    }
</script>

<style scoped lang="scss">
  .bottom-footer {
    background: black;
    padding: 40px 0 40px 0;
    text-align: center;
    color: white;

    &__link {
      color: white;
      text-decoration: none;
    }
  }
</style>
