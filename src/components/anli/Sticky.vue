<template>
  <div>
    <div id="lll">555</div>
    <div class="page">1</div>
    <div class="page">2</div>
    <div class="page">3</div>

    <div class="searchBar" id="searchBar">
      <ul :class="searchBarFixed == true ? 'isFixed' :''">测试</ul>
    </div>
    <div class="page">4</div>
    <div class="page">5</div>
    <!-- <div id="back-to-top" class="back-to-top" @click="backToTop" v-show="backTopShow" v-cloak>
      <span>回到</span>
      <span>顶部</span>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchBarFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      window.console.log(scrollTop);
      // let offsetTop = document.querySelector("#searchBar").offsetTop;
      if (scrollTop >= 1155) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.searchBar {
  width: 100%;
  height: 50px;
  // border: 1px solid red;
}
.searchBar {
  .isFixed {
    position: fixed;
    background-color: #fff;
    top: 45px;
    z-index: 999;
  }
}

#lll {
  width: 100%;
  height: 45px;
  border: 1px solid pink;
  position: fixed;
  top: 0;
  left: 0;
}
[v-cloak] {
  display: none;
}

.back-to-top {
  position: fixed;
  bottom: 5px;
  right: 20px;
  z-index: 100;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #222;
  padding: 8px 10px;
  cursor: pointer;
}

.back-to-top:hover {
  background: #5ac4d1;
}

.back-to-top:hover span {
  color: white;
}

.back-to-top span {
  display: block;
}

.page {
  width: 100%;
  height: 400px;
  line-height: 400px;
  text-align: center;
}

.page:nth-child(odd) {
  background: white;
}
</style>