import { openBlock as e, createElementBlock as t, normalizeClass as d, normalizeStyle as v, createElementVNode as n, createCommentVNode as s, Fragment as q, renderList as f, toDisplayString as i, renderSlot as V } from "vue";
const w = {
  name: "MainHeader",
  data() {
    return {
      openMenu: !1
    };
  },
  props: {
    hidden: {
      type: Boolean,
      default: !1
    },
    logo: {
      type: Object,
      default: {
        hidden: !1,
        size: "small",
        path: ""
      }
    },
    mode: {
      type: String,
      default: "regular"
    },
    styles: {
      type: Object,
      default: {
        background: "white",
        fixed: !0
      }
    },
    menuItems: {
      type: Array,
      default: [
        { label: "Item 1", path: "/" },
        { label: "Item 2", path: "/" },
        { label: "Item 3", path: "/" },
        { label: "Item 4", path: "/" }
      ]
    }
  },
  computed: {
    background() {
      return `background: ${this.styles.background}`;
    },
    showDesktopMenuItems() {
      return this.mode !== "hamburger";
    },
    showHamburger() {
      return this.mode !== "regular";
    }
  }
}, B = "data:image/png;base64,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";
const b = (a, l) => {
  const A = a.__vccOpts || a;
  for (const [g, u] of l)
    A[g] = u;
  return A;
}, C = { class: "content" }, h = ["src"], X = {
  key: 1,
  class: "menu-items"
}, p = ["href"], M = {
  key: 0,
  class: "hamburger-icon",
  src: B
}, m = {
  key: 0,
  class: "menu-mobile"
}, y = ["href"];
function P(a, l, A, g, u, c) {
  return A.hidden ? s("", !0) : (e(), t("div", {
    key: 0,
    class: d(["header", A.styles.fixed ? "fixed" : ""]),
    style: v(c.background)
  }, [
    n("div", C, [
      A.logo.hidden ? s("", !0) : (e(), t("img", {
        key: 0,
        class: d(["app-logo", A.logo.size]),
        src: A.logo.path
      }, null, 10, h)),
      c.showDesktopMenuItems ? (e(), t("div", X, [
        (e(!0), t(q, null, f(A.menuItems, (r, o) => (e(), t("div", { key: o }, [
          n("a", {
            href: r.path
          }, i(r.label), 9, p)
        ]))), 128))
      ])) : s("", !0),
      n("a", {
        onClick: l[0] || (l[0] = (r) => u.openMenu = !u.openMenu)
      }, [
        c.showHamburger ? (e(), t("img", M)) : s("", !0)
      ])
    ]),
    u.openMenu ? (e(), t("div", m, [
      n("ul", null, [
        (e(!0), t(q, null, f(A.menuItems, (r, o) => (e(), t("div", { key: o }, [
          n("a", {
            href: r.path
          }, [
            n("li", null, i(r.label), 1)
          ], 8, y)
        ]))), 128))
      ])
    ])) : s("", !0)
  ], 6));
}
const k = /* @__PURE__ */ b(w, [["render", P], ["__scopeId", "data-v-3c66e15b"]]), D = {
  name: "MainFooter",
  props: {
    hidden: {
      type: Boolean,
      default: !1
    },
    disableCheckout: {
      type: Boolean,
      default: !1
    },
    styles: {
      type: Object,
      default: {
        background: "white",
        fixed: !0
      }
    },
    buttons: {
      type: Array,
      default: [
        {
          label: "Continue",
          action: () => {
          },
          class: "btn-primary"
        }
      ]
    },
    rows: {
      type: Number,
      default: 1
    },
    preTaxTotal: {
      type: String,
      default: "0.00"
    },
    onCheckout: {
      type: Function,
      default: () => {
      }
    },
    type: {
      type: String,
      default: "custom"
    }
  },
  computed: {
    background() {
      return `background: ${this.styles.background}`;
    }
  }
};
const N = { key: 0 }, z = {
  key: 0,
  class: "event-footer"
}, x = { class: "content" }, W = { class: "amount" }, O = /* @__PURE__ */ n("span", { class: "estimated" }, "Estimated pre-tax total", -1), Y = { class: "text-primary m-0" }, H = ["disabled", "onClick"], Q = {
  key: 1,
  class: "checkout-footer"
};
function j(a, l, A, g, u, c) {
  return A.hidden ? s("", !0) : (e(), t("div", N, [
    n("div", {
      style: v(c.background),
      class: d(A.styles.fixed ? "sticky-footer" : "")
    }, [
      A.type === "landing" ? (e(), t("div", z, [
        n("div", x, [
          n("div", W, [
            O,
            n("h3", Y, i(A.preTaxTotal), 1)
          ]),
          (e(!0), t(q, null, f(A.buttons, (r, o) => (e(), t("div", {
            class: "action",
            key: o
          }, [
            n("div", {
              class: d(A.disableCheckout ? "disabled" : "")
            }, [
              n("button", {
                class: d(["btn", r.class]),
                disabled: A.disableCheckout,
                onClick: r.action
              }, i(r.label), 11, H)
            ], 2)
          ]))), 128))
        ])
      ])) : s("", !0),
      A.type === "checkout" ? (e(), t("div", Q, [
        V(a.$slots, "default")
      ])) : s("", !0),
      A.type === "custom" ? (e(), t("div", {
        key: 2,
        class: d(["footer", A.styles.fixed ? "fixed" : ""]),
        style: v(c.background)
      }, [
        n("div", {
          class: d(["content", A.rows === 2 ? "column" : ""])
        }, [
          (e(!0), t(q, null, f(A.buttons, (r, o) => (e(), t("div", {
            class: "action",
            key: o
          }, [
            n("button", {
              class: d(["btn", r.class])
            }, i(r.label), 3)
          ]))), 128))
        ], 2)
      ], 6)) : s("", !0)
    ], 6)
  ]));
}
const G = /* @__PURE__ */ b(D, [["render", j]]), E = {
  install: (a, l) => {
    a.component("MainHeader", k).component("MainFooter", G);
  }
};
export {
  G as MainFooter,
  k as MainHeader,
  E as default
};
