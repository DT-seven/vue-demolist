<template>
  <div id="slideshow">
    <div class="container">
      <div class="slide" ref="slide">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
    <button class="pre">pre</button>
    <button class="next">next</button>
  </div>
</template>
<script>
export default {
  name: "fade",
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count: {
      handler() {
        let arry = this.$refs.slide.querySelectorAll("div");
        arry.forEach((element) => {
          element.style.transform = `translateY(${this.count * -200}px)`;
        });
      },
    },
  },
  mounted() {
    document.querySelector(".pre").addEventListener("click", () => {
      console.log(this.count);
      if (this.count < 4) {
        this.count++;
      } else {
        this.count = 0;
      }
    });
    document.querySelector(".next").addEventListener("click", () => {
      console.log(this.count);
      if (this.count > 0) {
        this.count--;
      } else {
        this.count = 4;
      }
    });
  },
};
</script>
<style scoped lang="scss">
.container {
  width: 500px;
  height: 200px;
  margin: auto;
  overflow: hidden;
}
.slide {
  & > div {
    display: flex;
    height: 200px;
    &:nth-child(1) {
      background-color: #ccc;
    }
    &:nth-child(2) {
      background-color: #333333;
    }
    &:nth-child(3) {
      background-color: red;
    }
    &:nth-child(4) {
      background-color: blue;
    }
    &:nth-child(5) {
      background-color: black;
    }
  }
}
</style>