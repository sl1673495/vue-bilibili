webpackJsonp([1],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(455)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(189),
  /* template */
  __webpack_require__(492),
  /* scopeId */
  "data-v-a80c0110",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


const getSeasonInfo = id => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`https://api.imjad.cn/bilibili/v2/?get=seasoninfo&season_id=${id}`).then(res => res.data.result);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getSeasonInfo;


/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Store {
    constructor(prefix = '__PEACE__') {
        this._prefix = prefix;
        this._store = {};
    }

    get(key) {
        return this._store[key] || JSON.parse(window.localStorage.getItem(this._prefix + key));
    }

    set(key, val) {
        window.localStorage.setItem(this._prefix + key, JSON.stringify(val));
        this._store[key] = val;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (new Store());

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading.cefbee4.gif";

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(453)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(490),
  /* scopeId */
  "data-v-7cfaa90a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(452)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(489),
  /* scopeId */
  "data-v-783b4544",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(450)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(487),
  /* scopeId */
  "data-v-6cd3393e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(445)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(197),
  /* template */
  __webpack_require__(482),
  /* scopeId */
  "data-v-381232f9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(451)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(488),
  /* scopeId */
  "data-v-72efe6cd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// 基准大小
const baseSize = 14;
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 375;
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


// 添加请求拦截器
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.timeout = 2000;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_page_recommend_recommend__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_page_recommend_recommend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_page_recommend_recommend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_page_season_detail_season_detail__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_page_season_detail_season_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_page_season_detail_season_detail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_page_short_video_detail_short_video_detail__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_page_short_video_detail_short_video_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_page_short_video_detail_short_video_detail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_page_zhihu_detail_zhihu_detail__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_page_zhihu_detail_zhihu_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_page_zhihu_detail_zhihu_detail__);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'recommend',
    redirect: '/recommend'
  }, {
    path: '/recommend',
    name: 'recommend',
    component: __WEBPACK_IMPORTED_MODULE_2_page_recommend_recommend___default.a
  }, {
    path: '/season-detail/:id',
    name: 'season-detail',
    component: __WEBPACK_IMPORTED_MODULE_3_page_season_detail_season_detail___default.a
  }, {
    path: '/short-video',
    name: 'short-video-detail',
    component: __WEBPACK_IMPORTED_MODULE_4_page_short_video_detail_short_video_detail___default.a
  }, {
    path: '/zhihu-detail',
    name: 'zhihu-detail',
    component: __WEBPACK_IMPORTED_MODULE_5_page_zhihu_detail_zhihu_detail___default.a
  }]
}));

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(447)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(188),
  /* template */
  __webpack_require__(484),
  /* scopeId */
  "data-v-52cb1144",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_m_header_m_header__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_m_header_m_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_m_header_m_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_config__ = __webpack_require__(44);
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    this.NOT_ALIVED_ROUTES = __WEBPACK_IMPORTED_MODULE_1_common_js_config__["a" /* NOT_ALIVED_ROUTES */];
  },
  components: {
    MHeader: __WEBPACK_IMPORTED_MODULE_0_components_m_header_m_header___default.a
  }
});

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['loading']
});

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String
    },
    value: {
      type: Boolean
    },
    right: {
      type: String,
      default: '查看更多'
    }
  },
  data() {
    return {};
  },
  methods: {
    more() {
      if (typeof this.value !== 'boolean') return;
      this.$emit("input", !this.value);
    }
  },
  computed: {
    iconCls() {
      return this.value ? "icon-xiangxia" : "icon-xiangyou";
    }
  },
  components: {}
});

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_config__ = __webpack_require__(44);
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      default: ''
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    const options = Object.assign({
      click: true
    }, this.options);

    this.scroller = new __WEBPACK_IMPORTED_MODULE_0_better_scroll__["a" /* default */](this.$refs.scroller, options);
  },
  data() {
    return {};
  },
  methods: {
    refresh() {
      this.scroller.refresh();
    }
  },
  watch: {
    data: {
      handler() {
        this.$nextTick(() => {
          this.scroller && this.scroller.refresh();
        });
      }
    },
    $route(route) {
      if (!__WEBPACK_IMPORTED_MODULE_1_common_js_config__["a" /* NOT_ALIVED_ROUTES */].includes(route.name)) {
        this.$nextTick(() => {
          this.refresh();
        });
      }
    }
  },
  components: {}
});

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_base_scroller_scroller__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_base_scroller_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_base_scroller_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_more_header_more_header__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_more_header_more_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_base_more_header_more_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_season_list_season_list__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_season_list_season_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_season_list_season_list__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const INIT_LEN = 2;




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      scrollRefreshKey: true
    };
  },
  methods: {
    getShowList(section, index) {
      const { data } = section || {};
      return section.showMore ? data : data.slice(0, INIT_LEN);
    },
    scrollerRefresh() {
      this.scrollRefreshKey = !this.scrollRefreshKey;
    }
  },
  watch: {
    sections(sections) {
      if (sections.length) {
        sections.forEach(sec => {
          if (!sec.showMore) {
            this.$set(sec, "showMore", false);
          }
        });
      }
    }
  },
  components: {
    Scroller: __WEBPACK_IMPORTED_MODULE_0_base_scroller_scroller___default.a,
    MoreHeader: __WEBPACK_IMPORTED_MODULE_1_base_more_header_more_header___default.a,
    SeasonList: __WEBPACK_IMPORTED_MODULE_2_components_season_list_season_list___default.a
  }
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    height: {
      type: Number,
      default: 10
    }
  },
  mounted() {
    this.$refs.whiteSpace.style.height = `${this.height}px`;
  }
});

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xgplayer__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xgplayer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xgplayer__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['url'],
  mounted() {
    this.initPlayer();
  },
  methods: {
    initPlayer() {
      if (!this.url) return;
      this.player = new __WEBPACK_IMPORTED_MODULE_0_xgplayer___default.a({
        el: this.$refs.player,
        url: this.url,
        width: '100%'
      });
    }
  },
  watch: {
    url(url, oldUrl) {
      if (url && url !== oldUrl) {
        if (!this.player) {
          this.initPlayer();
        } else {
          this.player.src = url;
          this.player.reload();
        }
      }
    }
  }
});

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(114);
//
//
//
//
//
//



const replacePx = str => str.replace('px', '');

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    const ulDom = this.$refs.scroller.querySelector('ul');
    const parentDom = ulDom.parentNode;
    const minWidth = parentDom.clientWidth;
    if (!ulDom) {
      throw new Error('子节点必须是ul列表');
    }
    const listItems = Array.from(ulDom.querySelectorAll('li'));
    const listWidth = listItems.reduce((total, b) => {
      const style = getComputedStyle(b);
      return total + Number(b.offsetWidth) + Number(replacePx(style.marginRight)) + Number(replacePx(style.marginLeft));
    }, 0);
    // 最小和父元素宽度一样 否则外层写列表样式会出问题
    ulDom.style.width = `${Math.max(minWidth, listWidth)}px`;
    this.scroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll__["a" /* default */](this.$refs.scroller, {
      scrollX: true,
      eventPassthrough: 'vertical',
      click: true,
      bounce: false
    });
  }
});

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    toIndex() {
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_util__ = __webpack_require__(74);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    this.formatNumber = __WEBPACK_IMPORTED_MODULE_0_common_js_util__["a" /* formatNumber */];
  },
  props: ['season']
});

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_util__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_js_storage__ = __webpack_require__(73);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    this.formatNumber = __WEBPACK_IMPORTED_MODULE_0_common_js_util__["a" /* formatNumber */];
  },
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    selectSeason() {
      const { season_id } = this.item;
      if (season_id) {
        this.$router.push(`/season-detail/${season_id}`);
      } else {
        this.$router.push(`/short-video`);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_common_js_storage__["b" /* setShortVideo */])(this.item);
      }
    },
    imageCls(item) {
      return item.short_id ? 'short-video' : '';
    },
    getPlayCount(item) {
      return item.play_count ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_js_util__["a" /* formatNumber */])(item.play_count) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_js_util__["a" /* formatNumber */])(item.statistics.share);
    },
    getFavCount(item) {
      return item.dm_count ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_js_util__["a" /* formatNumber */])(item.dm_count) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_js_util__["a" /* formatNumber */])(item.statistics.zan);
    }
  },
  components: {}
});

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__season_item_season_item__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__season_item_season_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__season_item_season_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zhihu_item_zhihu_item__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zhihu_item_zhihu_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__zhihu_item_zhihu_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_lazyload__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_easy_lazyload__);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["list", "type"],
  data() {
    return {};
  },
  methods: {
    initLazyload() {
      this.loader = new __WEBPACK_IMPORTED_MODULE_2_easy_lazyload___default.a(this.$refs.list, {
        loading: __webpack_require__(155)
      });
      this._initLoader = true;
    }
  },
  watch: {
    list: {
      handler(newList) {
        if (newList.length && !this._initLoader) {
          this.$nextTick(() => {
            this.initLazyload();
          });
        } else {
          this.$nextTick(() => {
            this.loader.refresh();
          });
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    component() {
      if (this.type === "知乎热图") {
        return "zhihu-item";
      }
      return "season-item";
    }
  },
  components: {
    SeasonItem: __WEBPACK_IMPORTED_MODULE_0__season_item_season_item___default.a,
    ZhihuItem: __WEBPACK_IMPORTED_MODULE_1__zhihu_item_zhihu_item___default.a
  }
});

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_base_more_header_more_header__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_base_more_header_more_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_base_more_header_more_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_x_scroller_x_scroller__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_x_scroller_x_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_base_x_scroller_x_scroller__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    parts: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MoreHeader: __WEBPACK_IMPORTED_MODULE_0_base_more_header_more_header___default.a,
    XScroller: __WEBPACK_IMPORTED_MODULE_1_base_x_scroller_x_scroller___default.a
  },
  methods: {
    selectPart(index) {
      this.$emit('selectPart', this.parts[index]);
      this.$emit('update:activeIndex', index);
    }
  }
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_global_store__ = __webpack_require__(113);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods: {
    select() {
      __WEBPACK_IMPORTED_MODULE_0_global_store__["a" /* default */].set('currentImages', this.item.imgSrc);
      this.$router.push('zhihu-detail');
    }
  },
  computed: {
    mainImage() {
      return this.item.imgSrc && this.item.imgSrc[0];
    }
  }
});

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api_recommend__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_section_list_section_list__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_section_list_section_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_base_section_list_section_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_loading_loading__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_loading_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_base_loading_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common_js_util__ = __webpack_require__(74);
//
//
//
//
//
//
//






const sectionOptions = [{ title: "知乎热图", req: __WEBPACK_IMPORTED_MODULE_0_api_recommend__["a" /* getZhihuDefaultsFallback */] }, { title: "抖音", req: __WEBPACK_IMPORTED_MODULE_0_api_recommend__["b" /* getShortVideos */] }, {
  title: "热门动画",
  req: __WEBPACK_IMPORTED_MODULE_0_api_recommend__["c" /* getSeasonRecommends */],
  fallback: __WEBPACK_IMPORTED_MODULE_0_api_recommend__["d" /* fallbackSeasonRecommends */]
}, { title: "国产动画", req: __WEBPACK_IMPORTED_MODULE_0_api_recommend__["e" /* getCnRecommends */], fallback: __WEBPACK_IMPORTED_MODULE_0_api_recommend__["f" /* fallbackCnRecommends */] }];

/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    this.initSections();
  },
  methods: {
    async initSections() {
      let sections = [];
      let promises = [];
      sectionOptions.forEach(opt => {
        let section = {
          title: opt.title,
          data: null
        };
        // promises for Promise.all
        promises.push(this._recursionGetList.call(this, opt.req, opt.fallback));
        sections.push(section);
      });
      const datas = await Promise.all(promises);
      datas.forEach((data, i) => {
        sections[i].data = data;
        sections[i].type = sectionOptions[i].title;
      });
      this.sections = sections;
    },
    // 接口很辣鸡，总是失败，所以要准备降级请求本地json
    async _recursionGetList(req, fallback) {
      let data = await req()
      // 请求报错不处理 走回退方案 不catch的话会报错
      .catch(__WEBPACK_IMPORTED_MODULE_3_common_js_util__["b" /* noop */]);

      if (!data) {
        fallback && (data = await fallback());
      }

      return data;
    }
  },
  data() {
    return {
      sections: []
    };
  },
  computed: {
    loading() {
      return !this.sections.length;
    }
  },
  components: {
    SectionList: __WEBPACK_IMPORTED_MODULE_1_base_section_list_section_list___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_2_base_loading_loading___default.a
  }
});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api_season__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_loading_loading__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_loading_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_base_loading_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_js_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_js_storage__ = __webpack_require__(73);
//
//
//
//
//
//
//
//
//
//
//
//
//
//











const DEFAULT_SEASON = {
  season_id: 1,
  cover: 'static/images/miaowu.png',
  title: '秒速五厘米',
  play_count: '99999999',
  favorites: '8888888',
  evaluate: '远野贵树因为父母调职而转校来到东京的小学。一年后，篠原明里也转校来到同一班级。两人因体弱多病，不擅长运动，而喜欢独自待在图书馆。虽然年纪还小，可是两人还是互相吸引，对方在自己心中的存在渐渐变得无法取代。但是，两人亲密的世界因明里再度转校而悲哀地告终。之后，贵树一直努力地适应没有明里的世界。但在中学一年级的夏天，贵树收到明里写给他的信时，感情一下子再度涌现。他们开始通信，并再次得到能够互相传达心意的幸福。',
  media: {
    rating: {
      count: 99999,
      score: 10
    }
  }
};

const parts = [{
  title: '命运石之门',
  url: 'static/season/demo.mp4'
}, {
  title: '杀戮天使',
  url: 'static/season/demo.mp4'
}, {
  title: '秒速五厘米',
  url: 'static/season/demo.mp4'
}, {
  title: '你的名字',
  url: 'static/season/demo.mp4'
}];

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'season-detail',
  created() {
    const id = this.$route.params.id;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_api_season__["a" /* getSeasonInfo */])(id).then(season => {
      this.season = season;
    }).catch(() => {
      this.error = true;
      this.season = DEFAULT_SEASON;
    });
  },
  data() {
    return {
      season: {},
      error: false,
      activePartIndex: 0,
      parts
    };
  },
  computed: {
    loading() {
      return !this.season.season_id && !this.error;
    },
    playUrl() {
      return this.parts[this.activePartIndex].url;
    }
  },
  components: {
    Scroller: __WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_2_base_loading_loading___default.a,
    SeasonCard: __WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card___default.a,
    XPlayer: __WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player___default.a,
    SelectPart: __WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part___default.a,
    WhiteSpace: __WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space___default.a
  }
});

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api_season__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_loading_loading__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_loading_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_base_loading_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_js_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_js_storage__ = __webpack_require__(73);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'short-video-detail',
  created() {
    this.shortVideo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_common_js_storage__["a" /* getShortVideo */])() || {};
  },
  data() {
    return {
      shortVideo: {},
      loading: false
    };
  },
  components: {
    Scroller: __WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_2_base_loading_loading___default.a,
    SeasonCard: __WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card___default.a,
    XPlayer: __WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player___default.a,
    SelectPart: __WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part___default.a,
    WhiteSpace: __WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space___default.a
  }
});

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_base_scroller_scroller__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_base_scroller_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_base_scroller_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_global_store__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_lazyload_src__ = __webpack_require__(438);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "zhihu-detail",
  mounted() {
    this.loader = new __WEBPACK_IMPORTED_MODULE_2_easy_lazyload_src__["a" /* default */](this.$refs.list, {
      loading: __webpack_require__(155),
      beforeMount: function (img) {
        img.style.opacity = 0;
      },
      mounted: function (img) {
        img.style.transition = 'all .8s';
        img.style.opacity = 1;
      }
    });
  },
  data() {
    return {
      imgSrc: __WEBPACK_IMPORTED_MODULE_1_global_store__["a" /* default */].get("currentImages")
    };
  },
  components: {
    Scroller: __WEBPACK_IMPORTED_MODULE_0_base_scroller_scroller___default.a
  }
});

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


const getSeasonRecommends = createRecommendRequest('global', 'bangumiRankCallback');
/* harmony export (immutable) */ __webpack_exports__["c"] = getSeasonRecommends;


const getCnRecommends = createRecommendRequest('cn', 'guochuangRankCallback');
/* harmony export (immutable) */ __webpack_exports__["e"] = getCnRecommends;


function createRecommendRequest(type, jsonpCallbackName) {
  return () => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=${type}`).then(res => {
      res = res.data;
      if (typeof res === 'object') {
        return res.result.list;
      } else {
        // jsonp处理
        return new Function(`
                    var ${jsonpCallbackName} = function(res) {
                      return res.result.list
                    }
                    return ${res}
                  `)();
      }
    });
  };
}

const fallbackSeasonRecommends = () => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("static/json/season.json").then(res => res.data.list);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = fallbackSeasonRecommends;


const fallbackCnRecommends = () => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("static/json/cn.json").then(res => res.data.list);
};
/* harmony export (immutable) */ __webpack_exports__["f"] = fallbackCnRecommends;


const getShortVideos = () => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("static/json/douyin.json").then(res => res.data);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getShortVideos;


const getZhihuImages = id => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`http://www.jackyangli.com:8089/sisterImg?questionId=${id}&limit=18&offset=0`).then(res => res.data);
};
/* unused harmony export getZhihuImages */


const ZHIHU_DEFULAT_IDS = [28997505, 50426133];

const getZhihuDefaults = () => {
  return Promise.all(ZHIHU_DEFULAT_IDS.map(id => getZhihuImages(id)));
};
/* unused harmony export getZhihuDefaults */


const getZhihuDefaultsFallback = () => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("static/json/zhihu.json").then(res => res.data);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getZhihuDefaultsFallback;


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_global_axios__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_js_rem__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_js_rem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_common_js_rem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fastclick__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vant_lib_loading__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vant_lib_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vant_lib_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_stylus_index_styl__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_stylus_index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_common_stylus_index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vant_lib_vant_css_base_css__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vant_lib_vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vant_lib_vant_css_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vant_lib_vant_css_loading_css__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vant_lib_vant_css_loading_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vant_lib_vant_css_loading_css__);














__WEBPACK_IMPORTED_MODULE_3_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vant_lib_loading___default.a);

__WEBPACK_IMPORTED_MODULE_6_fastclick___default.a.attach(document.body);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_3_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */],
  render: h => h(__WEBPACK_IMPORTED_MODULE_4__App___default.a)
});

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SHORT_VIDEO_KEY = 'short-video';
/* harmony export (immutable) */ __webpack_exports__["b"] = SHORT_VIDEO_KEY;


const NOT_ALIVED_ROUTES = ['season-detail', 'short-video-detail', 'zhihu-detail'];
/* harmony export (immutable) */ __webpack_exports__["a"] = NOT_ALIVED_ROUTES;


/***/ }),

/***/ 440:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(442)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(479),
  /* scopeId */
  "data-v-12b6bbbe",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(443)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(480),
  /* scopeId */
  "data-v-158bb9de",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(446)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(483),
  /* scopeId */
  "data-v-42099c3a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(440)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(477),
  /* scopeId */
  "data-v-0ac0137f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(444)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(199),
  /* template */
  __webpack_require__(481),
  /* scopeId */
  "data-v-2c0f69d6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(441)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(478),
  /* scopeId */
  "data-v-0d6742fa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(457)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(202),
  /* template */
  __webpack_require__(494),
  /* scopeId */
  "data-v-d95c1514",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(448)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(485),
  /* scopeId */
  "data-v-58620c34",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(449)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(486),
  /* scopeId */
  "data-v-6c7bb5fc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(454)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(491),
  /* scopeId */
  "data-v-9ab6c608",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "season-item",
    on: {
      "click": _vm.selectSeason
    }
  }, [_c('div', {
    staticClass: "image-wrap"
  }, [_c('img', {
    staticClass: "image",
    class: _vm.imageCls(_vm.item),
    attrs: {
      "data-src": _vm.item.square_cover
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('i', {
    staticClass: "icon iconfont icon-play"
  }), _vm._v(" "), _c('span', {
    staticClass: "info-text"
  }, [_vm._v(_vm._s(_vm.getPlayCount(_vm.item)))])]), _vm._v(" "), _c('div', {
    staticClass: "info-item"
  }, [_c('i', {
    staticClass: "icon iconfont icon-xin"
  }), _vm._v(" "), _c('span', {
    staticClass: "info-text"
  }, [_vm._v(_vm._s(_vm.getFavCount(_vm.item)))])])]), _vm._v(" "), _c('h1', {
    staticClass: "title"
  }, [_vm._v("\n          " + _vm._s(_vm.item.title) + "\n        ")])])])
},staticRenderFns: []}

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "zhihu-item",
    on: {
      "click": _vm.select
    }
  }, [_c('div', {
    staticClass: "image-wrap"
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "data-src": _vm.mainImage
    }
  }), _vm._v(" "), _c('h1', {
    staticClass: "title"
  }, [_vm._v("\n          " + _vm._s(_vm.item.meta.title) + "\n        ")])])])
},staticRenderFns: []}

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.sections.length) ? _c('div', {
    ref: "recommend",
    staticClass: "recommend"
  }, [_c('scroller', {
    staticClass: "season-list-wrap",
    attrs: {
      "data": _vm.scrollRefreshKey
    }
  }, [_c('div', [_vm._l((_vm.sections), function(section, index) {
    return [_c('more-header', {
      attrs: {
        "title": section.title
      },
      model: {
        value: (section.showMore),
        callback: function($$v) {
          _vm.$set(section, "showMore", $$v)
        },
        expression: "section.showMore"
      }
    }), _vm._v(" "), _c('season-list', {
      attrs: {
        "list": _vm.getShowList(section, index),
        "type": section.type
      }
    })]
  })], 2)])], 1) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scroller",
    staticClass: "scroll-wrapper"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "list",
    staticClass: "season-list"
  }, [_c('ul', {
    staticClass: "season-list-ul"
  }, _vm._l((_vm.list), function(item) {
    return (_vm.component) ? _c(_vm.component, {
      key: item.season_id,
      tag: "component",
      attrs: {
        "item": item
      }
    }) : _vm._e()
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.season.season_id),
      expression: "season.season_id"
    }],
    staticClass: "season-card"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "img-wrap"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.season.cover
    }
  })]), _vm._v(" "), _c('div', {
    ref: "content",
    staticClass: "season-content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.season.title))]), _vm._v(" "), _c('p', {
    staticClass: "data"
  }, [_c('span', {
    staticClass: "play"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(_vm.season.play_count)) + "次观看\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "follow"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(_vm.season.favorites)) + "人追番\n                ")])]), _vm._v(" "), _c('p', {
    staticClass: "evaluate"
  }, [_vm._v("\n                " + _vm._s(_vm.season.evaluate) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "rating-wrap"
  }, [_c('div', {
    staticClass: "score"
  }, [_c('span', {
    staticClass: "score-num"
  }, [_vm._v(_vm._s(_vm.season.media && _vm.season.media.rating.score))]), _vm._v("分\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "count"
  }, [_vm._v("\n                " + _vm._s(_vm.formatNumber(_vm.season.media && _vm.season.media.rating.count)) + "人\n            ")])])])])
},staticRenderFns: []}

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-header"
  }, [_c('div', {
    on: {
      "click": _vm.toIndex
    }
  }, [_c('div', {
    staticClass: "icon"
  }), _vm._v(" "), _c('h1', {
    staticClass: "text"
  }, [_vm._v("Peace and Love")])])])
},staticRenderFns: []}

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    },
    on: {
      "touchmove": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('m-header'), _vm._v(" "), _c('keep-alive', {
    attrs: {
      "exclude": _vm.NOT_ALIVED_ROUTES
    }
  }, [_c('router-view', {
    staticClass: "router-view"
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    attrs: {
      "options": {
        eventPassthrough: 'horizontal'
      }
    }
  }, [_c('div', {
    staticClass: "season-detail"
  }, [_c('x-player', {
    attrs: {
      "url": _vm.playUrl
    }
  }), _vm._v(" "), _c('season-card', {
    attrs: {
      "season": _vm.season
    }
  }), _vm._v(" "), _c('select-part', {
    attrs: {
      "parts": _vm.parts,
      "activeIndex": _vm.activePartIndex
    },
    on: {
      "update:activeIndex": function($event) {
        _vm.activePartIndex = $event
      }
    }
  }), _vm._v(" "), _c('Loading', {
    attrs: {
      "loading": _vm.loading
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: "short-video-detail"
  }, [_c('x-player', {
    attrs: {
      "url": _vm.shortVideo.video_url
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "video-info"
  }, [_c('div', {
    staticClass: "author"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.shortVideo.avatar
    }
  }), _vm._v("\n                @" + _vm._s(_vm.shortVideo.nickname) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("\n                " + _vm._s(_vm.shortVideo.title) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "comment-wrap"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("评论(" + _vm._s(_vm.shortVideo.comments.length) + ")")]), _vm._v(" "), _c('ul', {
    staticClass: "comment-list"
  }, _vm._l((_vm.shortVideo.comments), function(comment, index) {
    return _c('li', {
      staticClass: "comment-item"
    }, [_c('div', {
      staticClass: "avatar-wrap"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": comment.avatar
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('p', {
      staticClass: "author"
    }, [_vm._v(_vm._s(comment.nickname))]), _vm._v(" "), _c('p', {
      staticClass: "text",
      class: {
        top: index < 3
      }
    }, [_vm._v(_vm._s(comment.text))])]), _vm._v(" "), _c('div', {
      staticClass: "favorite"
    }, [_c('i', {
      staticClass: "iconfont icon iconfont icon-xin"
    }), _vm._v(" "), _c('p', {
      staticClass: "fav-num"
    }, [_vm._v("\n                            " + _vm._s(comment.zan) + "\n                        ")])])])
  }))]), _vm._v(" "), _c('Loading', {
    attrs: {
      "loading": _vm.loading
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "player",
    staticClass: "player"
  })
},staticRenderFns: []}

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "select-part"
  }, [_c('more-header', {
    attrs: {
      "title": "选集",
      "right": "视频是死的啦"
    }
  }), _vm._v(" "), _c('x-scroller', [_c('ul', {
    staticClass: "part-ul"
  }, _vm._l((_vm.parts), function(part, index) {
    return _c('li', {
      staticClass: "part-li",
      class: {
        active: _vm.activeIndex === index
      },
      on: {
        "click": function($event) {
          _vm.selectPart(index)
        }
      }
    }, [_c('p', {
      staticClass: "index"
    }, [_vm._v("\n                   第" + _vm._s(index + 1) + "部\n               ")]), _vm._v(" "), _c('p', {
      staticClass: "title"
    }, [_vm._v("\n                   " + _vm._s(part.title) + "\n               ")])])
  }))])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "whiteSpace",
    staticClass: "white-space"
  })
},staticRenderFns: []}

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "more-header"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n   " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "more",
    on: {
      "click": _vm.more
    }
  }, [_vm._v("\n    " + _vm._s(_vm.right) + " "), _c('i', {
    staticClass: "icon iconfont",
    class: _vm.iconCls
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    ref: "list",
    staticClass: "zhihu-detail"
  }, _vm._l((_vm.imgSrc), function(img, i) {
    return _c('img', {
      key: i,
      staticClass: "image",
      attrs: {
        "data-src": img
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "loading-wrap"
  }, [_c('van-loading', _vm._b({
    attrs: {
      "color": "white"
    }
  }, 'van-loading', _vm.$attrs, false))], 1)
},staticRenderFns: []}

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._b({
    ref: "scroller",
    staticClass: "scroller"
  }, 'div', _vm.$attrs, false), [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recommend"
  }, [_c('section-list', {
    attrs: {
      "sections": _vm.sections
    }
  }), _vm._v(" "), _c('loading', {
    attrs: {
      "loading": _vm.loading
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(456)

var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(493),
  /* scopeId */
  "data-v-b7ec2c84",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_config__ = __webpack_require__(44);


const s = JSON.stringify;

const p = JSON.parse;

const setShortVideo = video => window.localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0_common_js_config__["b" /* SHORT_VIDEO_KEY */], s(video));
/* harmony export (immutable) */ __webpack_exports__["b"] = setShortVideo;


const getShortVideo = video => {
  const item = window.localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0_common_js_config__["b" /* SHORT_VIDEO_KEY */]);
  return item ? p(item) : null;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getShortVideo;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const formatNumber = number => {
  if (typeof number !== 'number') {
    number = Number(number);
    if (typeof number !== 'number') {
      return 0;
    }
  }
  number = String(number);
  const l = number.length;
  if (l > 5) {
    number = number.slice(0, l - 4) + '万';
  }
  return number;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = formatNumber;


const noop = () => {};
/* harmony export (immutable) */ __webpack_exports__["b"] = noop;


/***/ })

},[207]);
//# sourceMappingURL=app.f163149cd499fa139c55.js.map