<template>
  <div class="container">
    <div class="logo-header">
      <p>Let's check your compatability!!</p>
    </div>
    <div class="container-question">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          class="input-group"
          id="name"
          v-model.trim="name"
          :class="{ invalid: !nameValid }"
          @blur="validateName"
          placeholder="Please enter your name"
        />
        <input
          type="text"
          class="input-group"
          id="hisname"
          v-model.trim="hisname"
          :class="{ invalid: !hisnameValid }"
          @blur="validateHisname"
          placeholder="Please enter their name"
        />
        <button type="submit" class="btn">Calculate</button>
        <p class="notice" v-if="!nameValid">Please enter your name.</p>
        <p class="notice" v-if="!hisnameValid">Please enter your name.</p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Love",
  data() {
    return {
      name: "",
      hisname: "",
      nameValid: true,
      hisnameValid: true,
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push("/results");
    },
    validateName() {
      this.nameValid = this.name.trim() !== "";
    },
    validateHisName() {
      this.hisnameValid = this.hisname.trim() !== "";
    },
  },
};
</script>
<style>
.logo-header p {
  display: flex;
  font-size: 20px;
  font-weight: bold;
  color: #ff0800;
  justify-content: center;
}
.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px black;
  text-align: center;
  margin-top: 10px;
  width: 100%;
  height: auto;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #01264e;
  border-radius: 3px;
  font-size: 15px;
  margin-top: 10px;
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
  margin-top: 10px;
}
.btn:hover {
  background-color: #0056b3;
  text-decoration: underline;
}
.btn:active {
  background-color: #0056b3;
  transform: translateY(1px);
}
</style>
