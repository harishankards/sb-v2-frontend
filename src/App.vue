<template>
  <div id="app">
    <auth-layout v-if="isAuth"></auth-layout>
    <landing v-else-if="isLanding"></landing>
    <not-found v-else-if="isNotFound"></not-found>
    <changelog v-else-if="isChangelog"></changelog>
    <!-- <PostSignup v-else-if="isPostsignup"></PostSignup>
    <post-signup v-else-if="isCompanyPostsignup"></post-signup> -->
    <layout v-else ></layout>
  </div>
</template>

<script>
import Layout from '@/components/layout/Layout.vue';
import AuthLayout from '@/components/layout/AuthLayout.vue';
import Landing from '@/components/landing/Landing.vue';
import NotFound from '@/views/404/404.vue';
import Changelog from '@/views/public/Changelog.vue';

export default {
  name: 'app',
  components: {
    Layout,
    AuthLayout,
    Landing,
    NotFound,
    Changelog,
  },
  computed: {
    isAuth() {
      return this.$route.path.match('auth');
    },
    isLanding() {
      return this.$route.name === 'landing';
    },
    isNotFound() {
      return this.$route.name === '404';
    },
    isChangelog() {
      return this.$route.path.match('changelog');
    },
    // isPostsignup () {
    //   return this.$route.name === 'postsignup'
    // },
    // isCompanyPostsignup () {
    //   return this.$route.name === 'postsignupcompany'
    // }
  },
};
</script>

<style lang="scss">
  @import "sass/main";
  body {
    height: 100%;
    #app {
      height: 100%;
    }
  }
</style>
