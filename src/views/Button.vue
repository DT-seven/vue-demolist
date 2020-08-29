<template>
  <div class="newsletter">
    <remote-css cdn="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"></remote-css>
    <h1>
      Monthly
      <span>Newsletter</span>
    </h1>
    <p>Lorem ipsum dolor sit amet, natus sequi maxime assumenda.</p>
    <div class="txtb">
      <input type="text" placeholder="Enter Your Email Address" />
      <button type="button">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>
<script>
// import "../assets/css/style.css";
export default {
  name: "Input",
  components: {
    "remote-css": {
      render(createElement) {
        return createElement("link", {
          attrs: {
            rel: "stylesheet",
            type: "text/css",
            href: this.cdn,
          },
        });
      },
      props: {
        cdn: {
          type: String,
          required: true,
        },
      },
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans" sans-serif;
}

body {
  background-color: #7ed6df;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter {
  background: linear-gradient(150deg, #22a6b3, #dff9fb);
  width: 500px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 0 20px #535c68;
}
.newsletter h1 {
  text-transform: uppercase;
  color: #fff;
  font-size: 48px;
  line-height: 40px;
}
.newsletter h1 span {
  display: block;
  font-size: 38px;
}
.newsletter p {
  font-size: 14px;
  color: #fff;
  margin: 10px 0;
}

.txtb {
  width: 100%;
  height: 70px;
  background-color: #f1f1f199;
  border-radius: 40px;
  position: relative;
  margin-top: 40px;
}
.txtb input {
  width: 100%;
  height: 70px;
  background-color: #f1f1f199;
  border-radius: 40px;
  border: 0;
  font-size: 16px;
  background: none;
  padding: 0 30px;
  outline: none;
}

.txtb button {
  background-color: #22a6b3;
  border: 0;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
  outline: none;
  cursor: pointer;
  color: #fff;
  transition: 0.3s linear;
}

.txtb button:hover {
  opacity: 0.5;
}
</style>