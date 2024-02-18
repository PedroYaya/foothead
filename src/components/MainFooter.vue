<template>
  <div v-if="!hidden">
    <div :style="background" :class="styles.fixed ? 'sticky-footer' : ''">
      <div v-if="type === 'landing'" id="event-footer-container" class="event-footer"> 
        <div class="content">
          <div id="amount-container" class="amount"> 
            <span id="estimated-text" class="estimated">Estimated pre-tax total</span>
            <h3 id="amount" class="text-primary m-0">{{ preTaxTotal }}</h3>
          </div>
          <div class="action" v-for="(item, index) in buttons" :key="index">
            <div :class="disableCheckout ? 'disabled' : ''">
              <button 
                class="btn" 
                :class="item.class" 
                :id="item.id" 
                :disabled="disableCheckout"
                @click="item.action"
              >
                {{ item.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="type === 'checkout'" class="checkout-footer">
        <slot></slot>
      </div>
      <div v-if="type === 'custom'" class="footer"  :style="background" :class="styles.fixed ? 'fixed' : ''">
        <div class="content" :class="rows === 2 ? 'column' : ''">
          <div class="action" v-for="(item, index) in buttons" :key="index">
            <button class="btn" :id="item.id" :class="item.class">{{ item.label }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FooterButton } from './../../types/index';

export default {
  name: "MainFooter",
  props: {
    hidden: {
      type: Boolean,
      default: false,
    },
    disableCheckout: {
      type: Boolean,
      default: false,
    },
    styles: {
      type: Object,
      default: {
        background: 'white',
        fixed: true,
      }
    },
    buttons: {
      type: Array as () => FooterButton[],
      default: [
        {
          label: 'Continue',
          action: () => {},
          class: 'btn-primary',
        },
      ]
    },
    rows: {
      type: Number,
      default: 1,
    },
    preTaxTotal: {
      type: String,
      default: '0.00',
    },
    onCheckout: {
      type: Function,
      default: () => {},
    },
    type: {
      type: String,
      default: 'custom'
    },
  },
  computed: {
    background() {
      return `background: ${this.styles.background}`;
    }
  }
};
</script>

<style lang="scss">

.footer {
    &.fixed {
      position: fixed;
      width: 100%;
      bottom: 0;
    }

    .content {
      display: flex;
      padding: 10px 5px;

      &.column {
        flex-direction: column;
      }
    }

    .btn {
      margin: 5px;
      font-size: 15px;
      text-transform: uppercase;
      padding: 6px;
      flex: 1;
      font-weight: 600;
      cursor: pointer;
    }

    .action {
      display: flex;
      flex: 1;

      .disabled {
        button {
          opacity: .6;
        }
      }
    }

    @media screen and (min-width: 768px) {

      .content {
        justify-content: flex-end;
        padding: 10px 25px;

        &.column {
          flex-direction: unset;
        }
      }
      .action {
        flex: none;
      }

      .btn {
        padding: 8px 24px;
      }
    }
  }
 
  .sticky-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--t-light-grey)
  }

  .event-footer {
    display: block;
    margin: auto;
    border-top: 1px solid var(--grey-dark);

    .content {
      padding: 15px;

      button {
        width: -webkit-fill-available;
        margin-top: 15px;
        border-radius: 7px;
        font-size: 16px;
        padding: 8px;
      }

      .amount {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          font-size: 24px;
        }
        .estimated {
          font-size: 14px;
          color: var(--t-dark-grey);
        }
      }
    }
  }

  .checkout-footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding-left: 115px;
    padding-right: 115px;
    padding-top: 20px;
    padding-bottom: 30px;
    box-shadow: 0px -4px 24px rgba(0, 0, 0, 0.04);
    background-color: var(--t-light-grey);

    .subtotal {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 14px;
      color: var(--dark-grey);
      font-family: 'Gotham-Light';

      span {
        margin-top: auto;
        margin-bottom: auto;
      }

      .amount {
        color: var(--t-red);
        font-size: 24px;
        font-family: 'Gotham-Black';
      }
    }

    .action-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      
      .btn-primary {
        margin-top: auto;
        margin-bottom: auto;
      }
    }

    .info-make-payment {
      font-family: 'Gotham-Light';
      font-size: 10px;
      align-items: center;
      display: flex;
      text-align: end;
      margin-top: 20px;
      text-align: center;
    }
    
    .promo-code-mobile {
        display: none !important;
    }
}

  @media screen and (max-width: 868px) {
    .checkout-footer {
      padding: 20px 15px 15px 15px;
      background-color: var(--white);
      border-radius: 0px 0px 18px 18px;
      display: flex;

      button {
        width: 100%;
      }

      .action-buttons {
        flex-direction: column-reverse;
        gap: 10px;
        width: 100%;
        .info-make-payment {
          text-align: center;
        }
      }

      .action-buttons.payment {
        flex-direction: inherit;
      }

      .promo-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 10px;
      }

      .promo-code-desktop {
        display: none !important;
      }
      .promo-code-mobile {
        display: block !important;
        margin-bottom: 15px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .event-footer {
      .content {
          display: flex;
          justify-content: flex-end;
          align-content: center;
          max-width: 1400px;
          margin: auto;

          button {
              width: fit-content;
              padding: 10px 15px;
              margin-top: 0;
              margin-left: 20px;
          }

          .amount {
              .estimated {
                  margin-right: 20px;
              }
          }
      }
    }
  }

 

</style>