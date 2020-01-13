<template>
  <div id="settings">
    <div class="_container">
      <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <div class="item-box" v-if="display">
          <div class="title-box">
            <span class="title">Settings</span>
            <span class="close" @click="close">
              <i class="far fa-times-circle"></i>
            </span>
          </div>
          <div class="control-box">
            <div class="item">Always loged in</div>
            <div class="item">
              <label class="switch_wrap" for="field">
                <input id="field" type="checkbox" :checked="chk" @change="onCheck" />
                <div class="switch">
                  <span class="bullet"></span>
                </div>
              </label>
            </div>
            <div class="item _logout" @click="logOut">
              <span>Log out</span>
              <span>
                <i class="fas fa-sign-out-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
      chk: JSON.parse(localStorage.getItem("logRemember"))
    };
  },
  mounted() {
    setTimeout(() => {
      this.display = true;
    }, 200);
  },
  methods: {
    onCheck(val) {
      localStorage.setItem("logRemember", val.target.checked);
    },
    close() {
      this.display = false;
      setTimeout(() => {
        this.$store.dispatch("setPopup", false);
      }, 200);
    },
    logOut() {
      localStorage.clear();
      this.$router.push("/login");
      this.$store.dispatch("data", null);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
#settings {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
}
._container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
}
.item-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: black;
  background-color: white;
  border-radius: 0;
  box-shadow: 0 0.3rem 0.8rem -0.01rem rgba(0, 0, 0, 0.5);
  animation-duration: 0.2s;
  @media screen and (min-width: 760px) {
    width: 30rem;
    height: 30rem;
    border-radius: 1rem;
  }
}
.title-box {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0.5rem 1.2rem;
  color: #ad1818;
  .title {
    flex: 1 1 auto;
    font-size: 1.6rem;
  }
  .close {
    flex: 0 0 auto;
    font-size: 1.4rem;
    cursor: pointer;
    &:active {
      color: red;
    }
  }
}

.control-box {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: start;
}

._logout {
  color: #ad1818;
  cursor: pointer;
  &:active {
    color: red;
  }
  span {
    margin-right: 0.5rem;
  }
}

.switch_wrap input[type="checkbox"] {
  display: none;
}

.switch_wrap input[type="checkbox"]:checked + .switch {
  background-color: #6cbc43;
}

.switch_wrap input[type="checkbox"]:checked + .switch::before {
  display: block;
}

.switch_wrap input[type="checkbox"]:checked + .switch::after {
  display: none;
}

.switch_wrap input[type="checkbox"]:checked + .switch .bullet {
  left: 33px;
}

.switch_wrap .switch {
  position: relative;
  display: inline-block;
  width: 65px;
  height: 24px;
  line-height: 24px;
  margin-right: 1em;
  margin-top: -3px;
  vertical-align: middle;
  background-color: #c1272d;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25) inset, 0 1px 0 rgb(255, 255, 255);
}

.switch_wrap .switch::before,
.switch_wrap .switch::after {
  content: "YES";
  display: none;
  width: 50%;
  position: absolute;
  top: 0;
  font-size: 11px;
  font-weight: bold;
  color: white;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
}

.switch_wrap .switch::after {
  content: "NO";
  display: block;
  right: 0;
}

.switch_wrap .switch .bullet {
  position: relative;
  display: block;
  width: 32px;
  height: 26px;
  top: -2px;
  left: -2px;
  background-color: #f0f0f0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  box-shadow: 0 1px 0 white inset, 0 1px 1px rgba(0, 0, 0, 0.25);
  transition: left 0.1s linear;
}

.switch_wrap .switch .bullet::before,
.switch_wrap .switch .bullet::after {
  content: "";
  display: block;
  height: 15px;
  width: 3px;
  position: absolute;
  top: 5px;
  left: 50%;
  margin-left: -6px;
  border: 1px solid #cccccc;
  border-width: 0 1px;
  -webkit-box-shadow: 1px 0 0 white, 1px 0 0 white inset;
  box-shadow: 1px 0 0 white, 1px 0 0 white inset;
}

.switch_wrap .switch .bullet::after {
  margin-left: 2px;
}
</style>