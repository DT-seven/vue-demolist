<template>
  <div class="cube">
    <div class="container">
      <div
        class="box"
        :style="{transform: `rotateX(${distance.x}deg) rotateY(${distance.y}deg) rotateZ(0deg) translate3d(38px, 0px, 200px)`}"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cube",
  data() {
    return {
      canmove: false,
      down: {
        x: 0,
        y: 0,
      },
      init: {
        x: -21,
        y: 38,
      },
      move: {
        x: 0,
        y: 0,
      },
      distance: {
        x: -21,
        y: 38,
      },
    };
  },

  methods: {
    handleMove() {
      document.addEventListener("mousedown", (e_down) => {
        this.down.x = e_down.clientX;
        this.down.y = e_down.clientY;
        this.canmove = true;
      });
      document.addEventListener("mousemove", (e_move) => {
        if (this.canmove) {
          this.move.x = e_move.clientX;
          this.move.y = e_move.clientY;
          this.distance.x = this.init.x + this.move.x - this.down.x;
          this.distance.y = this.init.y + this.move.y - this.down.y;
        }
      });
      document.addEventListener("mouseup", () => {
        this.init.x = this.distance.x % 360;
        this.init.y = this.distance.y % 360;
        this.canmove = false;
      });
    },
  },
  mounted() {
    this.handleMove();
  },
};
</script>
<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
  transform-style: preserve-3d;
  transform: rotateX(-21deg) rotateY(38deg) rotateZ(0deg)
    translate3d(0px, 0px, 0px);
  & > span {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    user-select: none;
    &:nth-child(1) {
      background-color: #ccc;
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px);
    }
    &:nth-child(2) {
      background-color: red;
      transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg)
        translate3d(0px, -100px, -100px);
    }
    &:nth-child(3) {
      background-color: blue;
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        translate3d(0px, 0px, -200px);
    }
    &:nth-child(4) {
      background: #000;
      transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg)
        translate3d(0px, -100px, 100px);
    }
    &:nth-child(5) {
      background-color: yellow;
      transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg)
        translate3d(-100px, 0px, 100px);
    }
    &:nth-child(6) {
      background-color: green;
      transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg)
        translate3d(-100px, 0px, -100px);
    }
  }
}
</style>