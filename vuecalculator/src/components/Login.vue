<template>
  <div class="login-container">
    <h1 class="title">Login</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <!-- <label for="email">Email</label> -->
        <input
          class="input-group"
          type="email"
          id="email"
          v-model.trim="email"
          :class="{ invalid: !emailValid }"
          @blur="validateEmail"
          placeholder="Please enter email"
        />
        <p class="notice" v-if="!emailValid">
          Please enter a valid email address.
        </p>
      </div>

      <div class="form-control">
        <!-- <label for="password">Password</label> -->
        <input
          class="input-group"
          type="password"
          id="password"
          v-model.trim="password"
          :class="{ invalid: !passwordValid }"
          @blur="validatePassword"
          placeholder="Please enter password"
        />
        <p v-if="!passwordValid" class="notice">
          Please enter a valid password (min. 8 characters, 1 uppercase, 1
          lowercase, 1 number, 1 special character).
        </p>
      </div>

      <button
        class="login-btn"
        type="submit"
        :disabled="!formValid"
        @click="handleSubmit"
      >
        Login
      </button>
      <p class="sign-up-paragraph">
        Don't have an account?

        <router-link to="/signup">Sign Up</router-link>
      </p>
    </form>
    <div class="goes-home">
      <button class="home-btn">
        <router-link to="/" class="home">Home</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      emailValid: true,
      passwordValid: true,
    };
  },
  computed: {
    formValid() {
      return this.emailValid && this.passwordValid;
    },
  },
  methods: {
    handleSubmit() {
      this.$router.push("/love");
    },
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.emailValid = emailRegex.test(this.email);
    },
    validatePassword() {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      this.passwordValid = passwordRegex.test(this.password);
    },
    signup() {
      this.$router.push("/SignUp");
    },
    submitForm() {
      if (this.formValid) {
        // submit form data to server
        console.log("Form submitted:", {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  text-align: center;
  color: #ff0800;
  font-weight: 600;
}
.login-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px black;
  text-align: center;
  margin-top: 10px;
}
.input-group {
  margin-bottom: 15px;
}
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #01264e;
  border-radius: 3px;
  font-size: 15px;
}
.notice {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  color: red;
}
.login-btn {
  width: 30%;
  padding: 10px;
  background-color: #01264e;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.login-btn:hover {
  background-color: #0056b3;
  text-decoration: underline;
}
.login-btn:active {
  background-color: #0056b3;
  transform: translateY(1px);
}
.sign-up-paragraph {
  display: block;
  color: blue;
  align-items: center;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
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
.goes-home {
  display: flex;
  justify-content: start;
}
</style>
