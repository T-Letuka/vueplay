<template>
  <div class="results">
    <div v-if="showQuestion">
      <p class="sure">Are you sure You want to Calculate compatability</p>
      <div class="buttons">
        <button @click="handleCalculate" class="btn">Yes</button>

        <button @click="handleCancel" class="btn">No</button>
      </div>
    </div>

    <div class="modal" v-if="showModal">
      <div class="modal-dialog">
        <div class="content">
          <div class="header">
            <h4 class="modal-title">Calculating...</h4>
          </div>
          <div class="modal-body">
            Please Wait While We Calculate the results...
          </div>
        </div>
      </div>
    </div>
    <!--RESULTS-->
    <div v-if="showResults">
      <img alt="image" class="home-image" src="@/assets/meme.jpg" />
      <p class="result-text">
        Okay mara honestly you need a calculator to know if your person loves
        you?
      </p>
    </div>
    <!--Closing-->
    <div class="goodbye" v-if="showGoodbye">
      <img alt="image" class="home-image" src="@/assets/emoji.jpg" />
      <p class="goodbye-text">
        Otherwise, i was just playing around with Vue.
        <span class="goodbye-text">I am sorry for wasting your time</span>
      </p>
    </div>
    <div class="goes-home">
      <button class="home-btn">
        <router-link to="/love" class="home">Home</router-link>
      </button>
    </div>
  </div>

  <!--MODAL -->
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      showModal: false,
      showResults: false,
      showGoodbye: false,
      showQuestion: true,
    };
  },
  methods: {
    handleCalculate() {
      if (confirm) {
        this.showModal = true;
        this.showQuestion = true;
        setTimeout(() => {
          this.showModal = false;
          this.showResults = true;
          this.showQuestion = false;
          setTimeout(() => {
            this.showResults = false;
            this.showGoodbye = true;
            this.showQuestion = false;
          }, 3000);
        }, 1000);
      }
    },
  },
  handleCancel() {
    this.showModal = false;
  },
};
</script>
<style scoped>
.home-image {
  width: 30%;
  height: 20%;
}

.results {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px black;
  text-align: center;
  margin-top: 10px;
  width: 100%;
  height: auto;
}
.sure {
  font-size: 20px;
}
.btn {
  width: 30%;
  padding: 10px;
  background-color: #01264e;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline;
  justify-content: center;
  margin-left: 10px;
}
.modal {
  display: block;
  background-color: #01264e;
  border-radius: 20px;
  margin-top: 10px;
}
.home-btn {
  width: 40%;
  padding: 10px;
  background-color: #004225;
  color: #fff;
  margin-top: 50px;
  border: none;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.home-btn:hover {
  background-color: #00693e;
  text-decoration: underline;
}
.home-btn:active {
  background-color: #00693e;
  transform: translateY(3px);
}
.home {
  color: white;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
  color: white;
}
.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
  color: white;
  font-size: 20px;
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  color: white;
  font-size: 20px;
}
.result-text {
  margin-top: 10px;
  font-size: 25px;
  color: red;
}
.goodbye {
  margin-top: 10px;
}
.goodbye-text {
  font-size: 25px;
  color: #de3163;
  font-weight: bold;
}
</style>
