<template>
  <q-layout view="lHr lpR fFf">
    <!-- HEADER CONTENT -->
    <q-header bordered class="bg-black text-white" height-hint="98">
      <q-toolbar class="mobile-only">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> </q-toolbar-title>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
          class="desktop-only"
        />
      </q-toolbar>

      <q-tabs align="center" class="border-bottom">
        <q-route-tab to="/" class="header-tab text-capitalize">
          For you
        </q-route-tab>
        <q-route-tab to="/" class="header-tab text-capitalize">
          Following
        </q-route-tab>
      </q-tabs>
    </q-header>

    <!-- LEFT DRAWER -->
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="480"
      class="left-drawer border-right bg-black q-pl-xl"
    >
      <div class="left-content-icon q-pl-md">
        <q-icon
          name="fa-brands fa-x-twitter"
          color="white"
          size="md"
          class="q-pl-md q-pt-md q-ml-xl"
        />
      </div>

      <!-- LEFT DRAWER CONTENTS -->
      <q-list class="left-content q-pl-md q-pt-md q-ml-xl">
        <q-item
          to="/"
          clickable
          :active="link === 'home'"
          @click="link = 'home'"
          active-class="menu-link"
        >
          <q-item-section avatar>
            <q-icon color="white" name="home_filled" size="md" />
          </q-item-section>

          <q-item-section class="text-white text-20 q-pt-xs"
            >Home</q-item-section
          >
        </q-item>
      </q-list>

      <q-list class="left-content q-pl-md q-pt-xs q-ml-xl">
        <q-item
          to="/about"
          clickable
          :active="link === 'about'"
          @click="link = 'about'"
          active-class="menu-link"
        >
          <q-item-section avatar>
            <q-icon
              color="white"
              name="info"
              class="material-icons-outlined"
              size="md"
            />
          </q-item-section>

          <q-item-section class="text-white text-20 q-pt-xs"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <!-- RIGHT DRAWER -->
    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      width="600"
      class="border-left bg-black q-pr-xl"
    >
      <!-- SEARCH BAR -->
      <q-input
        outlined
        rounded
        dense
        color="primary"
        bg-color="dark"
        v-model="text"
        placeholder="Search"
        class="search-bar q-my-md q-ml-md q-mr-xl"
      >
        <template v-slot:prepend>
          <q-icon name="search" color="grey-8" class="q-pr-sm" />
        </template>
      </q-input>

      <!-- RIGHT DRAWER CONTENTS -->
      <q-card dark flat class="bg-grey-10 my-card q-ml-md">
        <q-card-section>
          <div class="text-h6 text-weight-bold q-mb-xs">
            Subscribe to Premium
          </div>
          {{ subscribeText }}
          <q-btn
            unelevated
            rounded
            color="primary"
            label="Subscribe"
            class="q-mt-sm text-capitalize text-weight-bolder text-14"
          />
        </q-card-section>
      </q-card>
      <q-card dark flat class="bg-grey-10 my-card q-ml-md q-mt-md">
        <q-card-section>
          <div class="text-h6 text-weight-bold">Trends for you</div>
        </q-card-section>
        <q-list dark>
          <q-item clickable class="q-my-xs">
            <q-item-section>
              <q-item-label caption class="text-grey-7"
                >Trending in Philippines</q-item-label
              >
              <q-item-label class="text-15 text-bold">Andrea</q-item-label>
              <q-item-label caption class="text-grey-7">
                100K Posts</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-btn
                unelevated
                round
                flat
                color="grey"
                icon="more_horiz"
                size="sm"
              />
            </q-item-section>
          </q-item>
          <q-item clickable class="q-my-xs">
            <q-item-section>
              <q-item-label caption class="text-grey-7"
                >Trending in Philippines</q-item-label
              >
              <q-item-label class="text-15 text-bold"
                >#TwitterCloning</q-item-label
              >
              <q-item-label caption class="text-grey-7">
                100K Posts</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-btn
                unelevated
                round
                flat
                color="grey"
                icon="more_horiz"
                size="sm"
              />
            </q-item-section>
          </q-item>
          <q-item clickable class="q-my-xs rounded-border-b">
            <q-item-section>
              <q-item-label caption class="text-grey-7"
                >Trending in Philippines</q-item-label
              >
              <q-item-label class="text-15 text-bold"
                >#ThisIsAStaticData</q-item-label
              >
              <q-item-label caption class="text-grey-7">
                100K Posts</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-btn
                unelevated
                round
                flat
                color="grey"
                icon="more_horiz"
                size="sm"
              />
            </q-item-section>
          </q-item>
          <q-item clickable class="q-my-xs rounded-border-b">
            <q-item-section>
              <q-item-label class="text-15 text-primary"
                >Show More</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-drawer>

    <!-- MAIN CONTENT -->
    <q-page-container class="bg-black">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },

      text: ref(""),

      subscribeText:
        "Subscribe to unlock new features and if eligible, receive a share of ads revenue.",

      link: ref("home"),
    };
  },
};
</script>

<style lang="sass">
.menu-link
  color: white
  font-weight: bold
@media screen and (max-width: 1024px)
  .left-drawer
    padding-left: 0px
  .left-content-icon
    padding-left: 0
    margin-left: -32px
    margin-top: 16px
    margin-bottom: 16px
  .left-content
    padding-left: 0
    margin-left: 16px
</style>
