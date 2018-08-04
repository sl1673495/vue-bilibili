webpackJsonp([1],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_config__ = __webpack_require__(71);


const s = JSON.stringify;

const p = JSON.parse;

const setShortVideo = video => window.localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0_common_js_config__["a" /* SHORT_VIDEO_KEY */], s(video));
/* harmony export (immutable) */ __webpack_exports__["b"] = setShortVideo;


const getShortVideo = video => {
  const item = window.localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0_common_js_config__["a" /* SHORT_VIDEO_KEY */]);
  return item ? p(item) : null;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getShortVideo;


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(434)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(468),
  /* scopeId */
  "data-v-a80c0110",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(433)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(467),
  /* scopeId */
  "data-v-7cfaa90a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(435)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(469),
  /* scopeId */
  "data-v-b7ec2c84",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(69);
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_page_recommend_recommend__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_page_recommend_recommend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_page_recommend_recommend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_page_season_detail_season_detail__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_page_season_detail_season_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_page_season_detail_season_detail__);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    redirect: '/recommend'
  }, {
    path: '/recommend',
    component: __WEBPACK_IMPORTED_MODULE_2_page_recommend_recommend___default.a
  }, {
    path: '/season-detail/:id',
    component: __WEBPACK_IMPORTED_MODULE_3_page_season_detail_season_detail___default.a
  }]
}));

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(428)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(462),
  /* scopeId */
  "data-v-52cb1144",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_m_header_m_header__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_m_header_m_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_m_header_m_header__);
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
  components: {
    MHeader: __WEBPACK_IMPORTED_MODULE_0_components_m_header_m_header___default.a
  }
});

/***/ }),

/***/ 180:
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

/***/ 181:
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(110);
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
        setTimeout(() => {
          this.scroller && this.scroller.refresh();
        }, 1000);
      }
    }
  },
  components: {}
});

/***/ }),

/***/ 183:
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

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xgplayer__ = __webpack_require__(473);
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

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(110);
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

/***/ 186:
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_util__ = __webpack_require__(72);
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

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_util__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_config__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_js_storage__ = __webpack_require__(109);
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
        this.$router.push(`/season-detail/${__WEBPACK_IMPORTED_MODULE_1_common_js_config__["a" /* SHORT_VIDEO_KEY */]}`);
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__season_item_season_item__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__season_item_season_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__season_item_season_item__);
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
  props: ["list"],
  data() {
    return {};
  },
  components: {
    SeasonItem: __WEBPACK_IMPORTED_MODULE_0__season_item_season_item___default.a
  }
});

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_base_more_header_more_header__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_base_more_header_more_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_base_more_header_more_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_x_scroller_x_scroller__ = __webpack_require__(449);
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api_recommend__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_season_list_season_list__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_season_list_season_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_season_list_season_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_scroller_scroller__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_scroller_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_base_scroller_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_base_more_header_more_header__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_base_more_header_more_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_base_more_header_more_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_loading_loading__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_loading_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_base_loading_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_common_js_util__ = __webpack_require__(72);
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








const INIT_LEN = 4;

/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this._recursionGetList(__WEBPACK_IMPORTED_MODULE_0_api_recommend__["a" /* getSeasonRecommends */], "seasonList", __WEBPACK_IMPORTED_MODULE_0_api_recommend__["b" /* fallbackSeasonRecommends */]);
      this._recursionGetList(__WEBPACK_IMPORTED_MODULE_0_api_recommend__["c" /* getCnRecommends */], "cnList", __WEBPACK_IMPORTED_MODULE_0_api_recommend__["d" /* fallbackCnRecommends */]);
      this._recursionGetList(__WEBPACK_IMPORTED_MODULE_0_api_recommend__["e" /* getShortVideos */], "shortVideoList");
    },
    scrollerRefresh() {
      this.scrollRefreshKey = !this.scrollRefreshKey;
    },
    // 接口很辣鸡，总是失败，所以要准备降级请求本地json
    async _recursionGetList(req, listKey, fallback) {
      let data = await req()
      // 请求报错不处理 走回退方案 不catch的话会报错
      .catch(__WEBPACK_IMPORTED_MODULE_5_common_js_util__["b" /* noop */]);

      if (!data) {
        fallback && (data = await fallback());
      }

      this.list[listKey] = data;
      this.scrollerRefresh();
    }
  },
  data() {
    return {
      seasonMore: false,
      cnMore: false,
      shortVideoMore: false,
      list: {
        seasonList: [],
        cnList: [],
        shortVideoList: []
      },
      scrollRefreshKey: true
    };
  },
  computed: {
    computedSeasonList() {
      return this.seasonMore ? this.list.seasonList : this.list.seasonList.slice(0, INIT_LEN);
    },
    computedCnList() {
      return this.cnMore ? this.list.cnList : this.list.cnList.slice(0, INIT_LEN);
    },
    computedShortVideoList() {
      return this.shortVideoMore ? this.list.shortVideoList : this.list.shortVideoList.slice(0, INIT_LEN);
    },
    // 接口巨慢 有一个出来了就不loading了~
    loading() {
      return this.list.seasonList.length === 0 && this.list.cnList.length === 0;
    }
  },
  watch: {
    seasonMore() {
      this.scrollerRefresh();
    },
    cnMore() {
      this.scrollerRefresh();
    },
    shortVideoList() {
      this.scrollerRefresh();
    }
  },
  components: {
    SeasonList: __WEBPACK_IMPORTED_MODULE_1_components_season_list_season_list___default.a,
    Scroller: __WEBPACK_IMPORTED_MODULE_2_base_scroller_scroller___default.a,
    MoreHeader: __WEBPACK_IMPORTED_MODULE_3_base_more_header_more_header___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_4_base_loading_loading___default.a
  }
});

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api_season__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_base_scroller_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_loading_loading__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base_loading_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_base_loading_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_season_card_season_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_base_x_player_x_player__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_select_part_select_part__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_base_white_space_white_space__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_js_config__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_js_storage__ = __webpack_require__(109);
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
    if (id === __WEBPACK_IMPORTED_MODULE_7_common_js_config__["a" /* SHORT_VIDEO_KEY */]) {
      this.season = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_common_js_storage__["a" /* getShortVideo */])() || {};
      this.shortVideoMode = true;
    } else {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_api_season__["a" /* getSeasonInfo */])(id).then(season => {
        this.season = season;
      }).catch(() => {
        this.error = true;
        this.season = DEFAULT_SEASON;
      });
    }
  },
  data() {
    return {
      season: {},
      error: false,
      shortVideoMode: false,
      activePartIndex: 0,
      parts
    };
  },
  computed: {
    loading() {
      return this.shortVideoMode ? false : !this.season.season_id && !this.error;
    },
    playUrl() {
      return this.shortVideoMode ? this.season.video_url : this.parts[this.activePartIndex].url;
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

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


const getSeasonRecommends = createRecommendRequest('global', 'bangumiRankCallback');
/* harmony export (immutable) */ __webpack_exports__["a"] = getSeasonRecommends;


const getCnRecommends = createRecommendRequest('cn', 'guochuangRankCallback');
/* harmony export (immutable) */ __webpack_exports__["c"] = getCnRecommends;


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
/* harmony export (immutable) */ __webpack_exports__["b"] = fallbackSeasonRecommends;


const fallbackCnRecommends = () => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("static/json/cn.json").then(res => res.data.list);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = fallbackCnRecommends;


const getShortVideos = () => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("static/json/douyin.json").then(res => res.data);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = getShortVideos;


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


const getSeasonInfo = id => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`https://api.imjad.cn/bilibili/v2/?get=seasoninfo&season_id=${id}`).then(res => res.data.result);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getSeasonInfo;


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_global_axios__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fastclick__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vant_lib_loading__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vant_lib_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vant_lib_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_stylus_index_styl__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_common_stylus_index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_common_stylus_index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vant_lib_vant_css_base_css__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vant_lib_vant_css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vant_lib_vant_css_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vant_lib_vant_css_loading_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vant_lib_vant_css_loading_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vant_lib_vant_css_loading_css__);













__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vant_lib_loading___default.a);

__WEBPACK_IMPORTED_MODULE_5_fastclick___default.a.attach(document.body);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_2_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
  render: h => h(__WEBPACK_IMPORTED_MODULE_3__App___default.a)
});

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(432)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(466),
  /* scopeId */
  "data-v-783b4544",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(430)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(464),
  /* scopeId */
  "data-v-6cd3393e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(424)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(185),
  /* template */
  __webpack_require__(458),
  /* scopeId */
  "data-v-158bb9de",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(427)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(186),
  /* template */
  __webpack_require__(461),
  /* scopeId */
  "data-v-42099c3a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(426)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(187),
  /* template */
  __webpack_require__(460),
  /* scopeId */
  "data-v-381232f9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(423)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(188),
  /* template */
  __webpack_require__(457),
  /* scopeId */
  "data-v-0ac0137f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(425)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(189),
  /* template */
  __webpack_require__(459),
  /* scopeId */
  "data-v-2c0f69d6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(431)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(465),
  /* scopeId */
  "data-v-72efe6cd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(436)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(470),
  /* scopeId */
  "data-v-d95c1514",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(429)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(192),
  /* template */
  __webpack_require__(463),
  /* scopeId */
  "data-v-58620c34",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
      "src": _vm.item.square_cover
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
  }, [_vm._v("\n            " + _vm._s(_vm.item.title) + "\n        ")])])])
},staticRenderFns: []}

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scroller",
    staticClass: "scroll-wrapper"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "season-list"
  }, [_c('ul', {
    staticClass: "season-list-ul"
  }, _vm._l((_vm.list), function(item) {
    return _c('li', {
      key: item.season_id,
      staticClass: "season-item"
    }, [_c('season-item', {
      attrs: {
        "item": item
      }
    })], 1)
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 460:
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

/***/ 461:
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
  }, [_vm._v("Love Bilibili")])])])
},staticRenderFns: []}

/***/ }),

/***/ 462:
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
      "exclude": ['season-detail']
    }
  }, [_c('router-view', {
    staticClass: "router-view"
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 463:
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

/***/ 464:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "player",
    staticClass: "player"
  })
},staticRenderFns: []}

/***/ }),

/***/ 465:
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

/***/ 466:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "whiteSpace",
    staticClass: "white-space"
  })
},staticRenderFns: []}

/***/ }),

/***/ 467:
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

/***/ 468:
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

/***/ 469:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._b({
    ref: "scroller",
    staticClass: "scroller"
  }, 'div', _vm.$attrs, false), [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recommend"
  }, [_c('scroller', {
    staticClass: "season-list-wrap",
    attrs: {
      "data": _vm.scrollRefreshKey
    }
  }, [_c('div', [(_vm.computedShortVideoList.length) ? [_c('more-header', {
    attrs: {
      "title": "抖音"
    },
    model: {
      value: (_vm.shortVideoMore),
      callback: function($$v) {
        _vm.shortVideoMore = $$v
      },
      expression: "shortVideoMore"
    }
  }), _vm._v(" "), _c('season-list', {
    attrs: {
      "list": _vm.computedShortVideoList
    }
  })] : _vm._e(), _vm._v(" "), (_vm.computedSeasonList.length) ? [_c('more-header', {
    attrs: {
      "title": "热门动画"
    },
    model: {
      value: (_vm.seasonMore),
      callback: function($$v) {
        _vm.seasonMore = $$v
      },
      expression: "seasonMore"
    }
  }), _vm._v(" "), _c('season-list', {
    attrs: {
      "list": _vm.computedSeasonList
    }
  })] : _vm._e(), _vm._v(" "), (_vm.computedCnList.length) ? [_c('more-header', {
    attrs: {
      "title": "国产动画"
    },
    model: {
      value: (_vm.cnMore),
      callback: function($$v) {
        _vm.cnMore = $$v
      },
      expression: "cnMore"
    }
  }), _vm._v(" "), _c('season-list', {
    attrs: {
      "list": _vm.computedCnList
    }
  })] : _vm._e()], 2)]), _vm._v(" "), _c('loading', {
    attrs: {
      "loading": _vm.loading
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SHORT_VIDEO_KEY = 'short-video';
/* harmony export (immutable) */ __webpack_exports__["a"] = SHORT_VIDEO_KEY;


/***/ }),

/***/ 72:
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

},[195]);
//# sourceMappingURL=app.dad82971a9e779743db6.js.map