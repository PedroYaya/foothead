<template>
  <div v-if="!hidden" class="header" :style="background" :class="styles.fixed ? 'fixed' : ''">
    <div class="content">
      <img v-if="!logo.hidden" class="app-logo" :class="logo.size" :src="logo.path"/>
      <div v-if="showDesktopMenuItems" class="menu-items">
        <div v-for="(item, index) in menuItems" :key="index">
          <a :href="item.path"> {{ item.label }}</a>
        </div>
      </div>
      <a @click="openMenu = !openMenu">
        <img v-if="showHamburger" class="hamburger-icon" src="./../assets/menu.png"/>
      </a>
    </div>
    <div v-if="openMenu" class="menu-mobile">
      <ul>
        <div v-for="(item, index) in menuItems" :key="index">
          <a :href="item.path"><li> {{ item.label }}</li> </a>
        </div>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { MenuItem } from './../../types/index';

export default {
  name: "MainHeader",
  data() {
    return {
      openMenu: false,
    }
  },
  props: {
    hidden: {
      type: Boolean,
      default: false,
    },
    logo: {
      type: Object,
      default: {
        hidden: false,
        size: 'small',
        path: '',
      }
    },
    mode: {
      type: String,
      default: 'regular'
    },
    styles: {
      type: Object,
      default: {
        background: 'white',
        fixed: true,
      }
    },
    menuItems: {
      type: Array as () => MenuItem[],
      default: [
        { label: 'Item 1', path: '/'},
        { label: 'Item 2', path: '/'},
        { label: 'Item 3', path: '/'},
        { label: 'Item 4', path: '/'},
      ]
    }
  },
  computed: {
    background() {
      return `background: ${this.styles.background}`;
    },
    showDesktopMenuItems() {
      return this.mode !== 'hamburger';
    },
    showHamburger() {
      return this.mode !== 'regular';
    }
  }
};
</script>

<style scoped lang="scss">
 
  .header {
    
    &.fixed {
      position: fixed;
      width: 100%;
      top: 0;
    }
    .content {

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
    }
    .app-logo {
      width: 120px;

      &.medium {
        width: 150px;
      }

      &.large {
        width: 200px;
      }
    }

    .hamburger-icon {
      width: 25px;
    }

    a {
      color: unset;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    ul {
      list-style: none;
      padding: 0 20px;
      
      li {
        margin-top: 5px;

        a {
          display: block;
          margin-top: 15px;
        }
      }
    }

    .menu-items {
      display: none;
    }
  
    .d-none {
      display: none;
    }
    
    @media screen and (min-width: 768px) {

      .menu-items {
        display: flex;

        a {
          margin-right: 20px;
        }
      }
    }
}
</style>
