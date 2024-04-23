<template>
  <div id="welcome">
    <img alt="image" class="home-image" src="@/assets/logo2.png" />
    <div class="call-to-action">
      <h1>Cupid's Compass</h1>
      <p>
        Are you curious to know if your hearts beat as one? Dive into our
        mystical realm where numbers unveil the secrets of affection. This is an
        automated love calculator.
      </p>
    </div>
    <div class="buttons">
      <button class="signup-btn">
        <router-link to="/signup" class="home">Sign Up</router-link>
      </button>
      <button class="login-btn">
        <router-link to="/login" class="home">Login In</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>
<style scoped>
#welcome {
  text-align: center;
}
.home-image {
  width: 60%;
  max-width: 250px;
  margin-bottom: 20px;
  margin-top: 15px;
}
.call-to-action {
  margin-bottom: 50px;
}
.call-to-action h1 {
  font-size: 32px;
  margin-bottom: 10px;
  color: #021325;
  font-weight: 600;
}
.call-to-action p {
  font-size: 22px;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
}
button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
.login-btn {
  background-color: #f653a6;
  color: white;
}
.signup-btn {
  background-color: #de3163;
  color: white;
}
.home {
  color: white;
}
</style>
