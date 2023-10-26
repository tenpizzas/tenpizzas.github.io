(this["webpackJsonppendo-demosite"] =
  this["webpackJsonppendo-demosite"] || []).push([
  [0],
  {
    15: function (e, t, n) {
      e.exports = {
        text: "#001219",
        textLight: "#fff",
        primary: "#128297",
        primaryDark: "#005569",
        primaryLight: "#94d2bd",
        secondary: "#ee9b00",
        secondaryDark: "#ca6702",
        secondaryLight: "#e9d8a6",
        tertiary: "#ae2012",
        tertiaryDark: "#9b2226",
        quaternary: "#43a047",
        quaternaryDark: "#1b5e20",
        quinary: "#8e24aa",
        quinaryDark: "#4a148c",
      };
    },
    213: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Details;
      });
      var _Users_mike_fotinatos_Projects_pendo_sandbox_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(24),
        _Users_mike_fotinatos_Projects_pendo_sandbox_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(25),
        _Users_mike_fotinatos_Projects_pendo_sandbox_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(26),
        _Users_mike_fotinatos_Projects_pendo_sandbox_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(28),
        react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__
        ),
        antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95),
        antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(492),
        antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(236),
        antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37),
        antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(237),
        antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6),
        _details_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(432),
        _details_scss__WEBPACK_IMPORTED_MODULE_11___default =
          __webpack_require__.n(_details_scss__WEBPACK_IMPORTED_MODULE_11__),
        _images_bluewing_logo_png__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(214),
        _images_cloud_logo_png__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(215),
        _images_goldwave_logo_png__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(216),
        _images_hex_logo_png__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(217),
        _images_spiral_logo_png__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(218),
        _images_w_logo_png__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(219),
        _images_x_logo_png__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(220),
        _images_sun_logo_png__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(221),
        _images_200x200_png__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(222),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(2),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default =
          __webpack_require__.n(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__
          ),
        TabPane = antd__WEBPACK_IMPORTED_MODULE_5__.a.TabPane,
        TextArea = antd__WEBPACK_IMPORTED_MODULE_6__.a.TextArea,
        LogoObject = {
          1: _images_bluewing_logo_png__WEBPACK_IMPORTED_MODULE_12__.a,
          2: _images_cloud_logo_png__WEBPACK_IMPORTED_MODULE_13__.a,
          3: _images_goldwave_logo_png__WEBPACK_IMPORTED_MODULE_14__.a,
          4: _images_hex_logo_png__WEBPACK_IMPORTED_MODULE_15__.a,
          5: _images_spiral_logo_png__WEBPACK_IMPORTED_MODULE_16__.a,
          6: _images_w_logo_png__WEBPACK_IMPORTED_MODULE_17__.a,
          7: _images_x_logo_png__WEBPACK_IMPORTED_MODULE_18__.a,
          8: _images_sun_logo_png__WEBPACK_IMPORTED_MODULE_19__.a,
        },
        fieldTwoList = {
          ACCOUNTS: "Rep: ",
          CONTACTS: "Email: ",
          OPPORTUNITIES: "Contact: ",
        },
        fieldThreeList = {
          ACCOUNTS: "Territory: ",
          CONTACTS: "Phone #: ",
          OPPORTUNITIES: "ARR: ",
        },
        tabsArray = [
          { tab: "New Note", key: "1", id: "new-note" },
          { tab: "Email", key: "2" },
          { tab: "Call", key: "3" },
          { tab: "Log Activity", key: "4" },
          { tab: "Create Task", key: "5" },
          { tab: "Schedule", key: "6" },
        ],
        propsEnum = {
          ACCOUNTS: {
            firstField: "this.props.info.name",
            secondField: "this.props.info.rep",
            thirdField: "this.props.info.territory",
          },
          CONTACTS: {
            firstField: "this.props.info.name",
            secondField: "this.props.info.email",
            thirdField: "this.props.info.phone",
          },
          OPPORTUNITIES: {
            firstField: "this.props.info.name",
            secondField: "this.props.info.contact",
            thirdField: "this.props.info.arr",
          },
        },
        localStorageCheck,
        logoNum,
        fieldIdentifier,
        Details = (function (_React$Component) {
          Object(
            _Users_mike_fotinatos_Projects_pendo_sandbox_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__.a
          )(Details, _React$Component);
          var _super = Object(
            _Users_mike_fotinatos_Projects_pendo_sandbox_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__.a
          )(Details);
          function Details() {
            return (
              Object(
                _Users_mike_fotinatos_Projects_pendo_sandbox_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__.a
              )(this, Details),
              _super.apply(this, arguments)
            );
          }
          return (
            Object(
              _Users_mike_fotinatos_Projects_pendo_sandbox_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__.a
            )(Details, [
              {
                key: "UNSAFE_componentWillMount",
                value: function () {
                  var e = document.location.pathname.split("/");
                  fieldIdentifier = e[1].toUpperCase();
                  var t = document.location.pathname;
                  t.includes("new")
                    ? (localStorageCheck = !0)
                    : (this.props.onDetailsLoad(t), (localStorageCheck = !1)),
                    (logoNum = String(Math.floor(8 * Math.random()))),
                    this.props.onPageUpdate("Details");
                },
              },
              {
                key: "render",
                value: function render() {
                  var _this = this;
                  return Object(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs
                  )("div", {
                    className: "details-container",
                    children: [
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs
                      )("div", {
                        className: "contact-info-container",
                        children: [
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs
                          )(antd__WEBPACK_IMPORTED_MODULE_7__.a, {
                            loading: !localStorageCheck && this.props.loading,
                            title: "Quick Information",
                            id: "quick-info",
                            children: [
                              "CONTACTS" == fieldIdentifier
                                ? Object(
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                                  )("img", {
                                    src: localStorageCheck
                                      ? _images_200x200_png__WEBPACK_IMPORTED_MODULE_20__.a
                                      : this.props.info.photo,
                                    alt: "pic",
                                    id: "details-pic",
                                  })
                                : Object(
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                                  )("img", {
                                    src: LogoObject[logoNum],
                                    alt: "pic",
                                    id: "details-pic",
                                  }),
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs
                              )("p", {
                                children: [
                                  Object(
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                                  )("strong", { children: "Name: " }),
                                  " ",
                                  localStorageCheck
                                    ? this.props.location.state.field1.fieldOne
                                    : eval(
                                        propsEnum[fieldIdentifier].firstField
                                      ),
                                ],
                              }),
                            ],
                          }),
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs
                          )(antd__WEBPACK_IMPORTED_MODULE_7__.a, {
                            loading: !localStorageCheck && this.props.loading,
                            title: "Additional Information",
                            id: "additional-info",
                            className: "pendo-ignore",
                            children: [
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs
                              )("p", {
                                children: [
                                  Object(
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                                  )("strong", {
                                    children: fieldTwoList[fieldIdentifier],
                                  }),
                                  " ",
                                  localStorageCheck
                                    ? this.props.location.state.field1.fieldtwo
                                    : eval(
                                        propsEnum[fieldIdentifier].secondField
                                      ),
                                ],
                              }),
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs
                              )("p", {
                                children: [
                                  Object(
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                                  )("strong", {
                                    children: fieldThreeList[fieldIdentifier],
                                  }),
                                  " ",
                                  localStorageCheck
                                    ? this.props.location.state.field1
                                        .fieldThree
                                    : eval(
                                        propsEnum[fieldIdentifier].thirdField
                                      ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs
                      )("div", {
                        children: [
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                          )(antd__WEBPACK_IMPORTED_MODULE_5__.a, {
                            defaultActiveKey: "1",
                            d: "entry-tabs",
                            type: "card",
                            tabBarExtraContent: Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                            )(antd__WEBPACK_IMPORTED_MODULE_8__.a, {
                              id: "submit-btn",
                              onClick: function () {
                                var e = document.getElementsByClassName(
                                  "ant-tabs-tab-active"
                                )[0].innerHTML;
                                _this.props.onDetailsSubmit(
                                  e,
                                  _this.props.inputValue
                                );
                              },
                              children: "Submit",
                            }),
                            children: tabsArray.map(function (e) {
                              return Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                              )(
                                TabPane,
                                {
                                  tab: e.tab,
                                  id: e.id,
                                  className: e.id,
                                  children: Object(
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                                  )(TextArea, {
                                    rows: 6,
                                    className: "timeline-entry",
                                    value: _this.props.inputValue,
                                    onChange: function (e) {
                                      return _this.props.onDetailsChange(
                                        e.target.value
                                      );
                                    },
                                  }),
                                },
                                e.key
                              );
                            }),
                          }),
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                          )(antd__WEBPACK_IMPORTED_MODULE_9__.a, {
                            children: this.props.timelinePosts.map(function (
                              e
                            ) {
                              return Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                              )(
                                antd__WEBPACK_IMPORTED_MODULE_9__.a.Item,
                                {
                                  dot: Object(
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx
                                  )(antd__WEBPACK_IMPORTED_MODULE_10__.a, {
                                    type: e.type,
                                  }),
                                  children: e.entry,
                                },
                                e.key
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            Details
          );
        })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);
    },
    214: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/bluewing_logo.7bc99cd6.png";
    },
    215: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/cloud_logo.3e795fe9.png";
    },
    216: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/goldwave_logo.b260de40.png";
    },
    217: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/hex_logo.ec9f114f.png";
    },
    218: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/spiral_logo.a4cbcc10.png";
    },
    219: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/w_logo.0a5a7c88.png";
    },
    220: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/x_logo.aefb8c15.png";
    },
    221: function (e, t, n) {
      "use strict";
      t.a = n.p + "static/media/sun_logo.7b291143.png";
    },
    222: function (e, t, n) {
      "use strict";
      t.a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEXMzMyWlpbFxcWqqqqcnJyjo6OxsbG3t7e+vr6pf3+GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABTElEQVR4nO3UT07CQByG4Q8phSUtRV2WyAFK4gFaMyYuhRO0N6CJiVu4uTNTgw5h1XZh4vssfsnMl7TzXwIAAAAAAAAAAAAAAACA/+Pu+TWXPrLjd7l4MgfdDHqIsipVnFQPXflRmSS/GfTQFPFKm5dF1pUL29sUt4I+9rkytUftTr5IbaG2lmapJmUQDGDswrg/nWtf7Po9uj5FpaJlEAzwKTuTStoUvkiLdex2YH50M/kdDDJfuaFv3n2x7X1bdoFduCAYokntXOywfbHtc9Id2DjJw2CAaXYKBzxdd8HuTWPN5K46KFz6qDuv23WusfZktpI/x23ti220lavaF9dBf637VnAdzDaVPw7XQX92mAoudnwfu+/P3J/GuvGVMSZ4orb2duRuZ4wpx3q7Eit4bJvaL+HE9i/HeoUBAAAAAAAAAAAAAAAA/AFffMdIP+g1B4cAAAAASUVORK5CYII=";
    },
    248: function (e, t, n) {},
    430: function (e, t, n) {},
    431: function (e, t, n) {},
    432: function (e, t, n) {},
    437: function (e, t, n) {},
    471: function (e, t, n) {},
    490: function (e, t, n) {},
    491: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "RestDBAxios", function () {
          return Fe;
        });
      var a,
        i = n(0),
        o = n.n(i),
        r = n(5),
        c = n.n(r),
        s = n(24),
        l = n(25),
        _ = n(26),
        d = n(28),
        u = n(27),
        p = n(90),
        b = n(159),
        O = n(6),
        j = (n(248), n(2)),
        h =
          (b.a.SubMenu,
          b.a.ItemGroup,
          function (e) {
            var t = e.onNavClick;
            return Object(j.jsxs)("div", {
              className: "nav-bar",
              children: [
                Object(j.jsxs)("div", {
                  className: "logo",
                  children: [
                    Object(j.jsx)("img", {
                      src: "".concat(
                        window.location.origin,
                        "/images/pizza-logo.png"
                      ),
                      alt: "logo",
                      id: "pizza-logo",
                    }),
                    Object(j.jsxs)("span", {
                      className: "logo-text",
                      children: [
                        Object(j.jsx)("strong", { children: "Isaac' pizza" }),
                        "CRM",
                      ],
                    }),
                  ],
                }),
                Object(j.jsxs)(b.a, {
                  theme: "light",
                  id: "main-menu",
                  defaultSelectedKeys: [window.location.pathname],
                  children: [
                    Object(j.jsx)(
                      b.a.Item,
                      {
                        children: Object(j.jsxs)(p.a, {
                          to: "/",
                          onClick: function () {
                            return t("Dashboard");
                          },
                          children: [
                            Object(j.jsx)(O.a, { type: "home" }),
                            Object(j.jsx)("span", {
                              className: "nav-text",
                              children: "Dashboard",
                            }),
                          ],
                        }),
                      },
                      "/"
                    ),
                    Object(j.jsx)(
                      b.a.Item,
                      {
                        children: Object(j.jsxs)(p.a, {
                          to: "/accounts",
                          onClick: function () {
                            return t("Accounts");
                          },
                          children: [
                            Object(j.jsx)(O.a, {
                              className: "nav-icon",
                              type: "team",
                            }),
                            Object(j.jsx)("span", {
                              className: "nav-text",
                              children: "Accounts",
                            }),
                          ],
                        }),
                      },
                      "/accounts"
                    ),
                    Object(j.jsx)(
                      b.a.Item,
                      {
                        children: Object(j.jsxs)(p.a, {
                          to: "/contacts",
                          onClick: function () {
                            return t("Contacts");
                          },
                          children: [
                            Object(j.jsx)(O.a, {
                              className: "nav-icon",
                              type: "contacts",
                            }),
                            Object(j.jsx)("span", {
                              className: "nav-text",
                              children: "Contacts",
                            }),
                          ],
                        }),
                      },
                      "/contacts"
                    ),
                    Object(j.jsx)(
                      b.a.Item,
                      {
                        children: Object(j.jsxs)(p.a, {
                          to: "/opportunities",
                          onClick: function () {
                            return t("Opportunities");
                          },
                          children: [
                            Object(j.jsx)(O.a, {
                              className: "nav-icon",
                              type: "folder-open",
                            }),
                            Object(j.jsx)("span", {
                              className: "nav-text",
                              children: "Opportunities",
                            }),
                          ],
                        }),
                      },
                      "/opportunities"
                    ),
                    Object(j.jsx)(
                      b.a.Item,
                      {
                        style: { bottom: "10px", position: "absolute" },
                        children: Object(j.jsxs)(p.a, {
                          to: "/mobile",
                          onClick: function () {
                            return t("Mobile");
                          },
                          children: [
                            Object(j.jsx)(O.a, { type: "mobile" }),
                            Object(j.jsx)("span", {
                              className: "nav-text",
                              children: "Mobile Demo",
                            }),
                          ],
                        }),
                      },
                      "/mobile"
                    ),
                  ],
                }),
              ],
            });
          }),
        m = function (e) {
          return { type: "UPDATE_PAGE_TITLE", text: e };
        },
        g = Object(u.b)(null, function (e) {
          return {
            onNavClick: function (t) {
              e(m(t));
            },
          };
        })(h),
        y = n(205),
        f = n(112),
        E = n(236),
        x = n(77),
        D = function (e, t) {
          var n = parseInt(e.slice(1, 3), 16),
            a = parseInt(e.slice(3, 5), 16),
            i = parseInt(e.slice(5, 7), 16);
          return t
            ? "rgba("
                .concat(n, ", ")
                .concat(a, ", ")
                .concat(i, ", ")
                .concat(t, ")")
            : "rgba(".concat(n, ", ").concat(a, ", ").concat(i, ")");
        },
        A = n(15),
        v = n.n(A),
        C = {
          labels: [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6",
            "Week 7",
            "Week 8",
            "Week 9",
            "Week 10",
            "Week 11",
            "Week 12",
          ],
          datasets: [
            {
              label: "Forecast in $",
              data: [
                45e3, 98e3, 147e3, 265e3, 467e3, 487e3, 603e3, 102e4, 115e4,
                123e4, 164e4, 246e4,
              ],
              backgroundColor: D(v.a.tertiary, 0.5),
              borderColor: D(v.a.tertiaryDark, 0.5),
              pointBorderColor: D(v.a.tertiaryDark, 0.5),
              pointBackgroundColor: D(v.a.tertiaryDark, 0.5),
            },
          ],
        },
        P = function () {
          return Object(j.jsx)(E.a, {
            title: "Forecast",
            id: "metrics",
            children: Object(j.jsx)(x.Line, {
              data: C,
              options: {
                maintainAspectRatio: !1,
                legend: { display: !1 },
                scales: {
                  xAxes: [
                    {
                      ticks: { fontColor: D(v.a.text, 1) },
                      gridLines: { display: !1 },
                    },
                  ],
                  yAxes: [
                    {
                      ticks: {
                        fontColor: D(v.a.text, 1),
                        callback: function (e, t, n) {
                          return (
                            "$" +
                            e.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, "$1,")
                          );
                        },
                      },
                    },
                  ],
                },
              },
            }),
          });
        },
        k = n(496),
        T = [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 200,
            render: function (e, t) {
              return Object(j.jsx)(p.a, {
                to: "/opportunities/" + t._id + "/details",
                children: Object(j.jsx)("span", { children: e }),
              });
            },
          },
          {
            title: "Account",
            dataIndex: "account",
            key: "account",
            width: 100,
          },
        ],
        I = (function (e) {
          Object(_.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(s.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
              {
                key: "UNSAFE_componentWillMount",
                value: function () {
                  this.props.onOpportunitiesLoad();
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(j.jsx)(E.a, {
                    title: "Open Opportunities",
                    id: "list-view",
                    children: Object(j.jsx)(k.a, {
                      columns: T,
                      dataSource: this.props.opportunitiesList,
                      loading: this.props.loading,
                      size: "middle",
                      className: "card-table",
                      scroll: { y: "100vh" },
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(o.a.Component),
        M = function () {
          return function (e) {
            e({ type: "REQUEST_OPPORTUNITIES_DATA", loading: !0 }),
              Fe.get("opportunities")
                .then(function (t) {
                  e({
                    type: "RECEIVED_OPPORTUNITIES_DATA",
                    loading: !1,
                    json: t.data,
                  });
                })
                .catch(function (e) {
                  return console.log(e);
                });
          };
        },
        w = n(204),
        S = Object(w.a)(
          Object(u.b)(
            function (e) {
              return {
                opportunitiesList: e.OpportunitiesReducer.opportunities,
                loading: e.OpportunitiesReducer.loading,
              };
            },
            function (e) {
              return {
                onOpportunitiesLoad: function () {
                  e(M());
                },
              };
            }
          )(I)
        ),
        R = {
          labels: ["Qual", "Sol Pres.", "Sol Acc.", "Proposal", "Pending"],
          datasets: [
            {
              data: [300, 250, 200, 150, 100],
              borderWidth: 1,
              backgroundColor: [
                D(v.a.tertiary, 0.5),
                D(v.a.primary, 0.5),
                D(v.a.secondary, 0.5),
                D(v.a.quaternary, 0.5),
                D(v.a.quinary, 0.5),
              ],
              borderColor: [
                D(v.a.tertiaryDark, 0.5),
                D(v.a.primaryDark, 0.5),
                D(v.a.secondaryDark, 0.5),
                D(v.a.quaternaryDark, 0.5),
                D(v.a.quinaryDark, 0.5),
              ],
              hoverBackgroundColor: [
                D(v.a.tertiary, 0.7),
                D(v.a.primary, 0.7),
                D(v.a.secondary, 0.7),
                D(v.a.quaternary, 0.7),
                D(v.a.quinary, 0.7),
              ],
              hoverBorderColor: [
                D(v.a.tertiaryDark, 0.7),
                D(v.a.primaryDark, 0.7),
                D(v.a.secondaryDark, 0.7),
                D(v.a.quaternaryDark, 0.7),
                D(v.a.quinaryDark, 0.7),
              ],
            },
          ],
        },
        U = function () {
          return Object(j.jsx)(E.a, {
            title: "Pipeline",
            id: "forecast",
            className: "pipeline",
            children: Object(j.jsx)(x.Doughnut, {
              data: R,
              options: {
                legend: { labels: { fontColor: D(v.a.text, 1) } },
                maintainAspectRatio: !1,
              },
            }),
          });
        },
        N = Object(u.b)()(U),
        L = {
          labels: ["Mona", "Felix", "Jess", "Ravi", "Kam", "Walter"],
          datasets: [
            {
              label: "Attained",
              backgroundColor: D(v.a.tertiary, 0.5),
              borderColor: D(v.a.tertiaryDark, 0.5),
              borderWidth: 1,
              hoverBackgroundColor: D(v.a.tertiary, 0.7),
              hoverBorderColor: D(v.a.tertiaryDark, 0.7),
              data: [3e4, 135e3, 47e3, 25e3, 56e3, 55e3],
            },
            {
              label: "Goal",
              backgroundColor: D(v.a.primary, 0.5),
              borderColor: D(v.a.primaryDark, 0.5),
              borderWidth: 1,
              hoverBackgroundColor: D(v.a.primary, 0.7),
              hoverBorderColor: D(v.a.primaryDark, 0.7),
              data: [5e4, 15e4, 8e4, 65e3, 1e5, 12e4],
            },
          ],
        },
        W = function () {
          return Object(j.jsx)(E.a, {
            title: "Quota Attainment",
            id: "quota",
            className: "quota",
            children: Object(j.jsx)(x.Bar, {
              data: L,
              options: {
                maintainAspectRatio: !1,
                legend: { display: !1 },
                scales: {
                  xAxes: [
                    {
                      stacked: !0,
                      ticks: { fontColor: D(v.a.text, 1) },
                      gridLines: { display: !1 },
                    },
                  ],
                  yAxes: [
                    {
                      stacked: !0,
                      ticks: {
                        fontColor: D(v.a.text, 1),
                        callback: function (e, t, n) {
                          return (
                            "$" +
                            e.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, "$1,")
                          );
                        },
                      },
                    },
                  ],
                },
              },
            }),
          });
        },
        B =
          (n(430),
          function () {
            return Object(j.jsxs)("div", {
              className: "dashboard-container",
              children: [
                Object(j.jsxs)("div", {
                  className: "dashboard-left",
                  children: [
                    Object(j.jsx)(P, {}),
                    Object(j.jsxs)("div", {
                      className: "dashboard-left--bottom",
                      children: [Object(j.jsx)(W, {}), Object(j.jsx)(N, {})],
                    }),
                  ],
                }),
                Object(j.jsx)(S, {}),
              ],
            });
          }),
        K = n(80),
        q = n.n(K),
        F = [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 150,
            render: function (e, t) {
              return Object(j.jsx)("a", {
                children: Object(j.jsx)(q.a, {
                  delay: 500,
                  to: "/accounts/" + t._id + "/details",
                  replace: !1,
                  children: Object(j.jsx)("span", { children: e }),
                }),
              });
            },
          },
          { title: "Rep", dataIndex: "rep", key: "rep", width: 150 },
          {
            title: "Territory",
            dataIndex: "territory",
            key: "territory",
            width: 150,
          },
          {
            title: "Industry",
            dataIndex: "industry",
            key: "industry",
            width: 150,
            render: function (e) {
              return Object(j.jsx)("span", { children: e });
            },
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
            width: 300,
          },
        ],
        V = (function (e) {
          Object(_.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(s.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
              {
                key: "UNSAFE_componentWillMount",
                value: function () {
                  this.props.onAccountsLoad();
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(j.jsx)(k.a, {
                    columns: F,
                    dataSource: this.props.accounts,
                    loading: this.props.loading,
                    style: { margin: "0px 15px" },
                    size: "middle",
                    className: "whole-page-table",
                    scroll: { y: "100vh" },
                  });
                },
              },
            ]),
            n
          );
        })(o.a.Component),
        X = Object(w.a)(
          Object(u.b)(
            function (e) {
              return {
                accounts: e.accountReducer.accounts,
                loading: e.accountReducer.loading,
              };
            },
            function (e) {
              return {
                onAccountsLoad: function () {
                  e(function (e) {
                    e({ type: "REQUEST_ACCOUNTS_DATA", loading: !0 }),
                      Fe.get("accounts")
                        .then(function (t) {
                          e({
                            type: "RECEIVED_ACCOUNTS_DATA",
                            loading: !1,
                            json: t.data,
                          });
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                  });
                },
              };
            }
          )(V)
        ),
        H = [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 150,
            render: function (e, t) {
              return Object(j.jsx)("a", {
                children: Object(j.jsx)(q.a, {
                  delay: 500,
                  to: "/contacts/" + t._id + "/details",
                  replace: !1,
                  children: Object(j.jsx)("span", { children: e }),
                }),
              });
            },
          },
          {
            title: "Account",
            dataIndex: "account",
            key: "account",
            width: 150,
          },
          { title: "Email", dataIndex: "email", key: "email", width: 150 },
          { title: "Phone", dataIndex: "phone", key: "phone", width: 150 },
          { title: "Title", dataIndex: "title", key: "title", width: 150 },
        ],
        z = (function (e) {
          Object(_.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(s.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
              {
                key: "UNSAFE_componentWillMount",
                value: function () {
                  this.props.onContactsRequest();
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(j.jsx)(k.a, {
                    columns: H,
                    dataSource: this.props.contactList,
                    loading: this.props.loading,
                    style: { margin: "0px 15px" },
                    size: "middle",
                    className: "whole-page-table",
                    scroll: { y: "100vh" },
                  });
                },
              },
            ]),
            n
          );
        })(o.a.Component),
        G = Object(w.a)(
          Object(u.b)(
            function (e) {
              return {
                contactList: e.ContactReducer.contacts,
                loading: e.ContactReducer.loading,
              };
            },
            function (e) {
              return {
                onContactsRequest: function () {
                  e(function (e) {
                    e({ type: "REQUEST_CONTACTS_DATA", loading: !0 }),
                      Fe.get("contacts")
                        .then(function (t) {
                          e({
                            type: "RECEIVED_CONTACTS_DATA",
                            loading: !1,
                            json: t.data,
                          });
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                  });
                },
              };
            }
          )(z)
        ),
        Q = [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 250,
            render: function (e, t) {
              return Object(j.jsx)("a", {
                children: Object(j.jsx)(q.a, {
                  delay: 500,
                  to: "/opportunities/" + t._id + "/details",
                  replace: !1,
                  children: Object(j.jsx)("span", { children: e }),
                }),
              });
            },
          },
          {
            title: "Account",
            dataIndex: "account",
            key: "account",
            width: 150,
          },
          {
            title: "Contact",
            dataIndex: "contact",
            key: "contact",
            width: 150,
          },
          { title: "Rep", dataIndex: "rep", key: "rep", width: 150 },
        ],
        J = (function (e) {
          Object(_.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(s.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
              {
                key: "UNSAFE_componentWillMount",
                value: function () {
                  this.props.onOpportunitiesLoad();
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(j.jsx)(k.a, {
                    columns: Q,
                    dataSource: this.props.opportunitiesList,
                    loading: this.props.loading,
                    style: { margin: "0px 15px" },
                    size: "middle",
                    className: "whole-page-table",
                    scroll: { y: "100vh" },
                  });
                },
              },
            ]),
            n
          );
        })(o.a.Component),
        $ = Object(w.a)(
          Object(u.b)(
            function (e) {
              return {
                opportunitiesList: e.OpportunitiesReducer.opportunities,
                loading: e.OpportunitiesReducer.loading,
              };
            },
            function (e) {
              return {
                onOpportunitiesLoad: function () {
                  e(M());
                },
              };
            }
          )(J)
        ),
        Y = n(37),
        Z =
          (n(431),
          (function (e) {
            Object(_.a)(n, e);
            var t = Object(d.a)(n);
            function n() {
              return Object(s.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(l.a)(n, [
                {
                  key: "UNSAFE_componentWillMount",
                  value: function () {
                    this.props.onPageUpdate("Mobile");
                  },
                },
                {
                  key: "_onToggleUI",
                  value: function (e) {
                    e.preventDefault();
                    try {
                      "HIDE UI" === e.target.innerText
                        ? ((e.target.innerText = "SHOW UI"),
                          (document.querySelector(".nav-bar").style.display =
                            "none"),
                          (document.querySelector(".nav-bar").style.width =
                            "0px"),
                          (document.querySelector(
                            ".body-container"
                          ).style.marginLeft = "0px"),
                          (document.querySelector(
                            ".body-container"
                          ).style.width = "100%"),
                          (document.querySelector(
                            ".app-container"
                          ).style.width = "calc(100% - 30px)"),
                          (document.querySelector(
                            ".pendo-sales-engineering-footer"
                          ).style.display = "none"),
                          (document.querySelector(
                            "#feedback-trigger"
                          ).style.display = "none"),
                          (document.querySelector(
                            "._pendo-resource-center-badge-container"
                          ).style.boxShadow = "none"),
                          (document.querySelector(
                            "._pendo-resource-center-badge-image"
                          ).style.display = "none"),
                          (document.querySelector(
                            ".pendo-resource-center-badge-notification-bubble"
                          ).style.display = "none"))
                        : ((e.target.innerText = "HIDE UI"),
                          (document.querySelector(".nav-bar").style.display =
                            "initial"),
                          (document.querySelector(".nav-bar").style.width =
                            "240px"),
                          (document.querySelector(
                            ".body-container"
                          ).style.marginLeft = "240px"),
                          (document.querySelector(
                            ".body-container"
                          ).style.width = "calc(100% - 240px)"),
                          (document.querySelector(
                            ".app-container"
                          ).style.width = "calc(100% - 240px - 30px)"),
                          (document.querySelector(
                            ".pendo-sales-engineering-footer"
                          ).style.display = "initial"),
                          (document.querySelector(
                            "#feedback-trigger"
                          ).style.display = "initial"),
                          (document.querySelector(
                            "._pendo-resource-center-badge-container"
                          ).style.boxShadow =
                            "rgb(0 0 0 / 15%) 2px 0px 6px 0px"),
                          (document.querySelector(
                            "._pendo-resource-center-badge-image"
                          ).style.display = "initial"),
                          (document.querySelector(
                            ".pendo-resource-center-badge-notification-bubble"
                          ).style.display = "initial"));
                    } catch (t) {}
                  },
                },
                {
                  key: "_onlaunchMobileDemo",
                  value: function () {
                    var e,
                      t,
                      n,
                      a,
                      i,
                      o,
                      r = document.getElementById("mobileDemo"),
                      c = document.getElementById("demoLaunch"),
                      s = document.createElement("iframe"),
                      l = Math.min(
                        Math.floor(
                          ((document.querySelector(".mobile-card-body")
                            .clientHeight -
                            48) /
                            946.66) *
                            100
                        ),
                        100
                      );
                    (s.src =
                      "https://appetize.io/embed/ag_yy3m7wknuu96nw0qd9ww7tr6z4?osVersion=13&device=iphone8plus&scale="
                        .concat(l, "&params=%7B%22visitorId%22%3A%22")
                        .concat(
                          null === (e = this.props) ||
                            void 0 === e ||
                            null === (t = e.visInfo) ||
                            void 0 === t ||
                            null === (n = t.visitor) ||
                            void 0 === n
                            ? void 0
                            : n.id,
                          "%22%2C%22accountId%22%3A%22"
                        )
                        .concat(
                          null === (a = this.props) ||
                            void 0 === a ||
                            null === (i = a.visInfo) ||
                            void 0 === i ||
                            null === (o = i.account) ||
                            void 0 === o
                            ? void 0
                            : o.id,
                          "%22%7D"
                        )),
                      console.log("iframe.src: ".concat(s.src)),
                      (s.id = "iphone"),
                      (s.title = "Pendo Experience Mobile"),
                      (s.width = "460px"),
                      (s.height = "100%"),
                      (s.allow = "clipboard-read; clipboard-write"),
                      (s.frameBorder = "0"),
                      (s.scrolling = "no"),
                      r.appendChild(s),
                      (c.style.display = "none");
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return Object(j.jsxs)("div", {
                      id: "phoneContainer",
                      className: "ant-card",
                      children: [
                        Object(j.jsxs)("div", {
                          className: "ant-card-head",
                          children: [
                            Object(j.jsx)("h1", {
                              children: " ACME CRM Mobile Demo",
                            }),
                            Object(j.jsx)(Y.a, {
                              type: "primary",
                              size: "large",
                              id: "toggle-ui",
                              onClick: function (t) {
                                return e._onToggleUI(t);
                              },
                              children: "HIDE UI",
                            }),
                          ],
                        }),
                        Object(j.jsxs)("div", {
                          className: "ant-card-body mobile-card-body",
                          style: { height: "calc(100% - 70px)" },
                          children: [
                            Object(j.jsx)("div", {
                              id: "demoLaunch",
                              children: Object(j.jsx)("button", {
                                className:
                                  "mobile-btn ant-btn ant-btn-primary ant-btn-md",
                                id: "launchPhone",
                                type: "button",
                                onClick: function (t) {
                                  return e._onlaunchMobileDemo(t);
                                },
                                children: "Launch Mobile Demo",
                              }),
                            }),
                            Object(j.jsx)("section", { id: "mobileDemo" }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              n
            );
          })(o.a.Component)),
        ee = Object(w.a)(
          Object(u.b)(null, function (e) {
            return {
              onPageUpdate: function (t) {
                e(m(t));
              },
            };
          })(Z)
        ),
        te = n(213),
        ne = {
          "New Note": "form",
          Email: "mail",
          Call: "phone",
          "Log Activity": "tool",
          "Create Task": "check-circle-o",
          Schedule: "calendar",
        },
        ae = Object(w.a)(
          Object(u.b)(
            function (e) {
              return {
                inputValue: e.TimelineReducer.inputValue,
                timelinePosts: e.TimelineReducer.timelinePosts,
                info: e.DetailsInformationReducer.info,
                loading: e.DetailsInformationReducer.loading,
              };
            },
            function (e) {
              return {
                onDetailsChange: function (t) {
                  e(
                    (function (e) {
                      return { type: "UPDATE_DETAILS_INPUT_VALUE", text: e };
                    })(t)
                  );
                },
                onDetailsSubmit: function (t, n) {
                  e(
                    (function (e, t) {
                      return {
                        type: "ADD_POST_TO_TIMELINE",
                        icon: ne[e],
                        entry: t,
                      };
                    })(t, n)
                  );
                },
                onDetailsLoad: function (t) {
                  localStorage.clear(),
                    e(
                      (function (e) {
                        return function (t) {
                          t({
                            type: "REQUEST_DETAILS_DATA",
                            loading: !0,
                            url: void 0,
                          });
                          var n = e.split("/");
                          Fe.get(n[1] + "/" + n[2])
                            .then(function (e) {
                              t({
                                type: "RECEIVED_DETAILS_DATA",
                                loading: !1,
                                json: e.data,
                              });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        };
                      })(t)
                    );
                },
                onPageUpdate: function (t) {
                  e(m(t));
                },
              };
            }
          )(te.a)
        ),
        ie = (function (e) {
          Object(_.a)(n, e);
          var t = Object(d.a)(n);
          function n(e) {
            return Object(s.a)(this, n), t.call(this, e);
          }
          return (
            Object(l.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(j.jsx)("main", {
                    children: Object(j.jsxs)(y.a, {
                      children: [
                        Object(j.jsx)(f.a, {
                          exact: !0,
                          path: "/",
                          component: B,
                        }),
                        Object(j.jsx)(f.a, {
                          exact: !0,
                          path: "/accounts",
                          component: X,
                        }),
                        Object(j.jsx)(f.a, {
                          exact: !0,
                          path: "/contacts",
                          component: G,
                        }),
                        Object(j.jsx)(f.a, {
                          exact: !0,
                          path: "/opportunities",
                          component: $,
                        }),
                        Object(j.jsx)(f.a, {
                          exact: !0,
                          path: "/mobile",
                          render: function () {
                            var t;
                            return Object(j.jsx)(ee, {
                              visInfo:
                                null === (t = e.props) || void 0 === t
                                  ? void 0
                                  : t.visInfo,
                            });
                          },
                        }),
                        Object(j.jsx)(f.a, {
                          path: "/*/*/details",
                          component: ae,
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(o.a.Component),
        oe = n(492),
        re = n(93),
        ce = n(497),
        se = n(494),
        le = n(495),
        _e = n(498),
        de = (n(437), oe.a.Search),
        ue = re.a.Option,
        pe = ce.a.Item,
        be = {
          Accounts: "Rep: ",
          Contacts: "Email: ",
          Opportunities: "Contact: ",
        },
        Oe = {
          Accounts: "Territory: ",
          Contacts: "Phone #: ",
          Opportunities: "ARR: ",
        },
        je = Object(j.jsx)("table", {
          className: "user-info-table",
          children: Object(j.jsxs)("tbody", {
            children: [
              Object(j.jsxs)("tr", {
                children: [
                  Object(j.jsx)("td", { children: "Visitor:" }),
                  Object(j.jsx)("td", { style: { width: "10px" } }),
                  Object(j.jsx)("td", { children: window.userInfo.visitor }),
                ],
              }),
              Object(j.jsxs)("tr", {
                children: [
                  Object(j.jsx)("td", { children: "Account:" }),
                  Object(j.jsx)("td", { style: { width: "10px" } }),
                  Object(j.jsx)("td", { children: window.userInfo.account }),
                ],
              }),
              Object(j.jsxs)("tr", {
                children: [
                  Object(j.jsx)("td", { children: "Role:" }),
                  Object(j.jsx)("td", { style: { width: "10px" } }),
                  Object(j.jsx)("td", { children: window.userInfo.role }),
                ],
              }),
            ],
          }),
        }),
        he = function (e) {
          return "Mobile" === e.title
            ? null
            : Object(j.jsx)("div", {
                className: "name-and-new",
                children: Object(j.jsx)("h1", { children: e.title }),
              });
        },
        me = (function (e) {
          Object(_.a)(n, e);
          var t = Object(d.a)(n);
          function n(e) {
            var a;
            return (
              Object(s.a)(this, n),
              ((a = t.call(this, e)).state = {
                title: e.title,
                visible: !1,
                loading: !1,
                addNewFormData: {
                  value: "Accounts",
                  fieldOne: "",
                  fieldTwo: "",
                  fieldThree: "",
                },
              }),
              a
            );
          }
          return (
            Object(l.a)(n, [
              {
                key: "_onAddNew",
                value: function (e) {
                  e.preventDefault();
                  var t = window.location.pathname,
                    n = Object.assign({}, this.state.addNewFormData);
                  t.includes("accounts")
                    ? (n.value = "Accounts")
                    : t.includes("contacts")
                    ? (n.value = "Contacts")
                    : (n.value = "Opportunities"),
                    this.setState({ addNewFormData: n }),
                    this.setState({ visible: !0 });
                },
              },
              {
                key: "_handleCancel",
                value: function (e) {
                  this.setState({ visible: !1 });
                },
              },
              {
                key: "_handleOk",
                value: function (e) {
                  var t = this;
                  this.setState({ loading: !0 }),
                    setTimeout(function () {
                      t.setState({ loading: !1, visible: !1 }),
                        localStorage.setItem(
                          "addNewFormData",
                          JSON.stringify(t.state.addNewFormData)
                        ),
                        localStorage.setItem("loading", !1),
                        t.props.history.push({
                          pathname:
                            t.state.addNewFormData.value + "/new/details",
                          state: { field1: t.state.addNewFormData },
                        });
                    }, 1e3);
                },
              },
              {
                key: "_onHandleSelectChange",
                value: function (e) {
                  var t = Object.assign({}, this.state.addNewFormData);
                  (t.value = e), this.setState({ addNewFormData: t });
                },
              },
              {
                key: "_onHandleChange",
                value: function (e) {
                  var t = Object.assign({}, this.state.addNewFormData);
                  (t[e.target.name] = e.target.value),
                    this.setState({ addNewFormData: t });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = (t.title, t.visible);
                  t.loading;
                  return Object(j.jsxs)(j.Fragment, {
                    children: [
                      Object(j.jsxs)("div", {
                        className: "vertical-menu vertical-menu-top",
                        children: [
                          Object(j.jsx)("div", {
                            className:
                              "vertical-menu-item left search-container",
                            children: Object(j.jsx)(de, {
                              name: "search",
                              placeholder: "Search",
                              enterButton: !0,
                              onSearch: function (e) {
                                return console.log(e);
                              },
                            }),
                          }),
                          Object(j.jsx)("div", {
                            className:
                              "vertical-menu-item right avatar-container",
                            children: Object(j.jsx)(se.a, {
                              placement: "bottomRight",
                              title: "Profile",
                              content: je,
                              className: "user-profile",
                              trigger: "click",
                              children: Object(j.jsx)(le.a, {
                                className: "user-profile-avatar",
                                size: 40,
                                icon: "user",
                              }),
                            }),
                          }),
                          Object(j.jsx)("div", {
                            className:
                              "vertical-menu-item right user-info-container",
                            children: Object(j.jsx)("span", {
                              children: window.userInfo.visitorId,
                            }),
                          }),
                          Object(j.jsx)("div", {
                            className:
                              "vertical-menu-item right divider-container",
                            children: Object(j.jsx)("div", {
                              className: "vertical-menu-divider",
                            }),
                          }),
                          Object(j.jsx)("div", {
                            className:
                              "vertical-menu-item right help-container",
                            children: Object(j.jsx)("a", {
                              id: "help-button",
                              href: "http://help.pendo.io/",
                              target: "_blank",
                              rel: "noreferrer",
                              children: Object(j.jsx)("img", {
                                className: "help-icon",
                                src: "./images/help-icon.svg",
                                alt: "help-icon",
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(j.jsxs)("div", {
                        className: "vertical-menu vertical-menu-bottom",
                        children: [
                          Object(j.jsx)("div", {
                            className:
                              "vertical-menu-item left title-container",
                            children: Object(j.jsx)(he, {
                              title: this.props.title,
                            }),
                          }),
                          Object(j.jsx)("div", {
                            className:
                              "vertical-menu-item right button-container",
                            children: Object(j.jsx)(Y.a, {
                              type: "primary",
                              size: "large",
                              id: "add-new",
                              onClick: function (t) {
                                return e._onAddNew(t);
                              },
                              children: "ADD NEW",
                            }),
                          }),
                        ],
                      }),
                      Object(j.jsx)(_e.a, {
                        visible: n,
                        title: "Create New",
                        onOk: function (t) {
                          return e._handleOk(t);
                        },
                        onCancel: function (t) {
                          return e._handleCancel(t);
                        },
                        footer: [
                          Object(j.jsx)(
                            Y.a,
                            {
                              onClick: function (t) {
                                return e._handleCancel(t);
                              },
                              children: "Cancel",
                            },
                            "back"
                          ),
                          Object(j.jsx)(
                            Y.a,
                            {
                              type: "primary",
                              onClick: function (t) {
                                return e._handleOk(t);
                              },
                              children: "OK",
                            },
                            "submit"
                          ),
                        ],
                        children: Object(j.jsxs)(ce.a, {
                          layout: "vertical",
                          children: [
                            Object(j.jsxs)(pe, {
                              children: [
                                Object(j.jsx)("h3", { children: "Type:" }),
                                Object(j.jsxs)(re.a, {
                                  value: this.state.addNewFormData.value,
                                  onChange: function (t) {
                                    return e._onHandleSelectChange(t);
                                  },
                                  children: [
                                    Object(j.jsx)(ue, {
                                      value: "Accounts",
                                      children: "Account",
                                    }),
                                    Object(j.jsx)(ue, {
                                      value: "Contacts",
                                      children: "Contact",
                                    }),
                                    Object(j.jsx)(ue, {
                                      value: "Opportunities",
                                      children: "Opportunity",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(j.jsxs)(pe, {
                              children: [
                                Object(j.jsx)("h3", { children: "Name:" }),
                                Object(j.jsx)(oe.a, {
                                  value: this.state.addNewFormData.fieldOne,
                                  name: "fieldOne",
                                  onChange: function (t) {
                                    return e._onHandleChange(t);
                                  },
                                }),
                              ],
                            }),
                            Object(j.jsxs)(pe, {
                              children: [
                                Object(j.jsx)("h3", {
                                  children: be[this.state.addNewFormData.value],
                                }),
                                Object(j.jsx)(oe.a, {
                                  value: this.state.addNewFormData.fieldTwo,
                                  name: "fieldTwo",
                                  onChange: function (t) {
                                    return e._onHandleChange(t);
                                  },
                                }),
                              ],
                            }),
                            Object(j.jsxs)(pe, {
                              children: [
                                Object(j.jsx)("h3", {
                                  children: Oe[this.state.addNewFormData.value],
                                }),
                                Object(j.jsx)(oe.a, {
                                  value: this.state.addNewFormData.fieldThree,
                                  name: "fieldThree",
                                  onChange: function (t) {
                                    return e._onHandleChange(t);
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(o.a.Component),
        ge = Object(w.a)(me),
        ye =
          (n(471),
          (function (e) {
            Object(_.a)(n, e);
            var t = Object(d.a)(n);
            function n(e) {
              var a;
              return (
                Object(s.a)(this, n),
                ((a = t.call(this, e)).state = {
                  visible: !1,
                  OKLoading: !1,
                  addNewFormData: {
                    value: "Accounts",
                    fieldOne: "",
                    fieldTwo: "",
                    fieldThree: "",
                  },
                }),
                a
              );
            }
            return (
              Object(l.a)(n, [
                {
                  key: "_onAddNew",
                  value: function (e) {
                    e.preventDefault(), this.setState({ visible: !0 });
                  },
                },
                {
                  key: "_onCancel",
                  value: function (e) {
                    e.preventDefault(), this.setState({ visible: !1 });
                  },
                },
                {
                  key: "_onOK",
                  value: function (e) {
                    var t = this;
                    e.preventDefault(),
                      this.setState({ OKLoading: !0 }),
                      setTimeout(function () {
                        t.setState({ OKLoading: !1, visible: !1 }),
                          localStorage.setItem(
                            "addNewFormData",
                            JSON.stringify(t.state.addNewFormData)
                          ),
                          localStorage.setItem("loading", !1),
                          (window.location.href =
                            t.state.addNewFormData.value + "/new/details");
                      }, 1e3);
                  },
                },
                {
                  key: "_onHandleSelectChange",
                  value: function (e) {
                    var t = Object.assign({}, this.state.addNewFormData);
                    (t.value = e), this.setState({ addNewFormData: t });
                  },
                },
                {
                  key: "_onHandleChange",
                  value: function (e) {
                    var t = Object.assign({}, this.state.addNewFormData);
                    (t[e.target.name] = e.target.value),
                      this.setState({ addNewFormData: t });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e, t;
                    return Object(j.jsx)("div", {
                      className: "body-container",
                      children: Object(j.jsxs)("div", {
                        className: "app-container",
                        children: [
                          "Mobile" === this.props.title
                            ? null
                            : Object(j.jsx)(ge, {
                                title: this.props.title,
                                visInfo:
                                  null === (e = this.props) || void 0 === e
                                    ? void 0
                                    : e.visInfo,
                              }),
                          Object(j.jsx)("div", {
                            className: "main-content",
                            children: Object(j.jsx)(ie, {
                              visInfo:
                                null === (t = this.props) || void 0 === t
                                  ? void 0
                                  : t.visInfo,
                            }),
                          }),
                          Object(j.jsx)("div", {
                            className: "pendo-sales-engineering-footer",
                            children: Object(j.jsxs)("span", {
                              children: [
                                "Made with",
                                " ",
                                Object(j.jsx)("span", {
                                  children: Object(j.jsx)(O.a, {
                                    type: "heart",
                                    className: "heart",
                                  }),
                                }),
                                " ",
                                "by Pendo Sales Engineering",
                              ],
                            }),
                          }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              n
            );
          })(o.a.Component)),
        fe = Object(w.a)(
          Object(u.b)(function (e) {
            return { title: e.Navigation };
          }, null)(ye)
        ),
        Ee = (function (e) {
          Object(_.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(s.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
              {
                key: "render",
                value: function () {
                  return (
                    document.addEventListener(
                      "keyup",
                      function (e) {
                        if (e.ctrlKey)
                          switch (e.code) {
                            case "KeyJ":
                              window.pendo.showGuideById(
                                "A4Z_u7D0GnW27J7oCwtG0Ptekfk"
                              );
                              break;
                            case "KeyK":
                              window.pendo.designerv2.launchInAppDesigner();
                              break;
                            case "KeyJL":
                              window.pendo.showGuideById(
                                "kp8lRQSArHUW79IzqloeIBatViI"
                              );
                          }
                      },
                      !1
                    ),
                    Object(j.jsxs)("div", {
                      className: "App",
                      children: [
                        Object(j.jsx)(g, {}),
                        Object(j.jsx)(fe, { visInfo: "" }),
                      ],
                    })
                  );
                },
              },
            ]),
            n
          );
        })(i.Component),
        xe = Ee,
        De = n(197),
        Ae = n(66);
      switch (window.location.pathname) {
        case "/accounts":
          a = "Accounts";
          break;
        case "/contacts":
          a = "Contacts";
          break;
        case "/opportunities":
          a = "Opportunities";
          break;
        default:
          a = "Dashboard";
      }
      var ve = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "UPDATE_PAGE_TITLE" === t.type ? t.text : e;
        },
        Ce = n(232),
        Pe = [
          {
            type: "form",
            entry:
              "Waiting on approval from Jane (CEO) on SaaS approved vendor agreement, aiming for December 31, 2020 close date.",
            key: "1",
          },
          {
            type: "mail",
            entry: "Sent follow up email to re-engage.",
            key: "2",
          },
          {
            type: "phone",
            entry: "Had a phone conversation discussing next steps.",
            key: "3",
          },
          {
            type: "tool",
            entry:
              "Had a troubleshooting conversation with David, Sales Engineer. Resolved.",
            key: "4",
          },
          { type: "check-circle-o", entry: "Demo Complete.", key: "5" },
          {
            type: "calendar",
            entry: "Demo Scheduled November 15, 2020.",
            key: "6",
          },
        ],
        ke = 6,
        Te = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { inputValue: "", timelinePosts: Pe },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "UPDATE_DETAILS_INPUT_VALUE":
              return Object.assign({}, e, { inputValue: t.text });
            case "ADD_POST_TO_TIMELINE":
              return (
                ke++,
                Object.assign({}, e, {
                  timelinePosts: [
                    { type: t.icon, entry: t.entry, key: ke },
                  ].concat(Object(Ce.a)(e.timelinePosts)),
                  inputValue: "",
                })
              );
            default:
              return e;
          }
        },
        Ie = [
          {
            key: "1",
            name: "P Sherman",
            age: "XX",
            address: "42 Wallaby Way, Sydney",
          },
          {
            key: "2",
            name: "P Sherman",
            age: "XX",
            address: "42 Wallaby Way, Sydney",
          },
          {
            key: "3",
            name: "P Sherman",
            age: "XX",
            address: "42 Wallaby Way, Sydney",
          },
        ],
        Me = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { contacts: Ie, loading: !1 },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "REQUEST_CONTACTS_DATA":
              return Object.assign({}, e, { loading: t.loading });
            case "RECEIVED_CONTACTS_DATA":
              return Object.assign({}, e, {
                loading: t.loading,
                contacts: t.json,
              });
            default:
              return e;
          }
        },
        we = [
          {
            key: "1",
            name: "P Sherman",
            age: "XX",
            address: "42 Wallaby Way, Sydney",
          },
          {
            key: "2",
            name: "P Sherman",
            age: "XX",
            address: "42 Wallaby Way, Sydney",
          },
          {
            key: "3",
            name: "P Sherman",
            age: "XX",
            address: "42 Wallaby Way, Sydney",
          },
        ],
        Se = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { opportunities: we, loading: !1 },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "REQUEST_OPPORTUNITIES_DATA":
              return Object.assign({}, e, { loading: t.loading });
            case "RECEIVED_OPPORTUNITIES_DATA":
              return Object.assign({}, e, {
                loading: t.loading,
                opportunities: t.json,
              });
            default:
              return e;
          }
        },
        Re = [
          {
            key: "1",
            name: "P Sherman",
            rep: 32,
            territory: "42 Wallaby Way, Sydney",
          },
        ],
        Ue = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { loading: !1, accounts: Re },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "REQUEST_ACCOUNTS_DATA":
              return Object.assign({}, e, { loading: t.loading });
            case "RECEIVED_ACCOUNTS_DATA":
              return Object.assign({}, e, {
                accounts: t.json,
                loading: t.loading,
              });
            default:
              return e;
          }
        },
        Ne = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    info: [
                      {
                        name: { first: "", last: "" },
                        picture: "",
                        location: "",
                        cell: "",
                      },
                    ],
                    loading: !0,
                    pic: {},
                  },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "REQUEST_DETAILS_DATA":
              return Object.assign({}, e, { loading: t.loading });
            case "RECEIVED_DETAILS_DATA":
              return Object.assign({}, e, { info: t.json, loading: t.loading });
            default:
              return e;
          }
        },
        Le = Object(Ae.c)({
          Navigation: ve,
          TimelineReducer: Te,
          ContactReducer: Me,
          DetailsInformationReducer: Ne,
          accountReducer: Ue,
          OpportunitiesReducer: Se,
        }),
        We = n(231),
        Be = n(230),
        Ke = n.n(Be),
        qe = (n(489), n(490), Object(Ae.d)(Le, Object(Ae.a)(We.a))),
        Fe = Ke.a.create({
          baseURL: "https://petest-9f02.restdb.io/rest/",
          headers: { "x-apikey": "5ad6732125a622ae4d5283ab" },
          responseType: "json",
        });
      c.a.render(
        Object(j.jsx)(u.a, {
          store: qe,
          children: Object(j.jsx)(De.a, { children: Object(j.jsx)(xe, {}) }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[491, 1, 2]],
]);
//# sourceMappingURL=main.5032dd4c.chunk.js.map
