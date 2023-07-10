(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4991bfa"],{"866d":function(t,e,a){"use strict";e["a"]=[{id:1,name:"Chicago Bulls",desc:"芝加哥公牛",abbr:"CHI"},{id:2,name:"Cleveland Cavaliers",desc:"克里夫兰骑士",abbr:"CLE"},{id:3,name:"Detroit Pistons",desc:"底特律活塞",abbr:"DET"},{id:4,name:"Indiana Pacers",desc:"印第安纳步行者",abbr:"IND"},{id:5,name:"Milwaukee Bucks",desc:"密尔沃基雄鹿",abbr:"MIL"},{id:6,name:"Brooklyn Nets",desc:"布鲁克林篮网",abbr:"BKN"},{id:7,name:"Boston Celtics",desc:"波士顿凯尔特人",abbr:"BOS"},{id:8,name:"New York Knicks",desc:"纽约尼克斯",abbr:"NYK"},{id:9,name:"Philadelphia 76ers",desc:"费城76人",abbr:"PHI"},{id:10,name:"Toronto Raptors",desc:"多伦多猛龙",abbr:"TOR"},{id:11,name:"Atlanta Hawks",desc:"亚特兰大老鹰",abbr:"ATL"},{id:12,name:"Charlotte Hornets",desc:"夏洛特黄蜂",abbr:"CHA"},{id:13,name:"Miami Heat",desc:"迈阿密热火",abbr:"MIA"},{id:14,name:"Orlando Magic",desc:"奥兰多魔术",abbr:"ORL"},{id:15,name:"Washington Wizards",desc:"华盛顿奇才",abbr:"WAS"},{id:16,name:"Denver Nuggets",desc:"丹佛掘金",abbr:"DEN"},{id:17,name:"Minnesota Timberwolves",desc:"明尼苏达森林狼",abbr:"MIN"},{id:18,name:"Oklahoma City Thunder",desc:"俄克拉荷马雷霆",abbr:"OKC"},{id:19,name:"Portland Trail Blazers",desc:"波特兰开拓者",abbr:"POR"},{id:20,name:"Utah Jazz",desc:"犹他爵士",abbr:"UTA"},{id:21,name:"Golden State Warriors",desc:"金州勇士",abbr:"GSW"},{id:22,name:"Los Angeles Clippers",desc:"洛杉矶快船",abbr:"LAC"},{id:23,name:"Los Angeles Lakers",desc:"洛杉矶湖人",abbr:"LAL"},{id:24,name:"Phoenix Suns",desc:"菲尼克斯太阳",abbr:"PHX"},{id:25,name:"Sacramento Kings",desc:"萨克拉门托国王",abbr:"SAC"},{id:26,name:"Dallas Mavericks",desc:"达拉斯小牛",abbr:"DAL"},{id:27,name:"Houston Rockets",desc:"休斯顿火箭",abbr:"HOU"},{id:28,name:"Memphis Grizzlies",desc:"孟菲斯灰熊",abbr:"MEM"},{id:29,name:"New Orleans Pelicans",desc:"新奥尔良鹈鹕",abbr:"NOP"},{id:30,name:"San Antonio Spurs",desc:"圣安东尼奥马刺",abbr:"SAS"}]},f09a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",[a("i18n",{attrs:{path:"common.install"}})],1),a("p",[a("i18n",{attrs:{path:"common.guide.useNpm"}})],1),a("showcode",{attrs:{trigger:!1}},[a("pre",{staticClass:"m-0"},[t._v("npm i -S v-suggest")])]),a("p",[a("i18n",{attrs:{path:"common.guide.include"}})],1),a("showcode",{attrs:{trigger:!1}},[a("v-code",{attrs:{lang:"javascript"}},[a("pre",[t._v("      // Global install as a vue plugin\n      import Vue from 'vue'\n      import vSuggest from 'v-suggest'\n      Vue.use(vSuggest)\n\n      // Import Suggest as a local component\n      import { Suggest } from 'v-suggest'\n      export default {\n        components: {\n          'v-suggest': Suggest\n        }\n      }\n      ")])])],1),a("h2",{staticClass:"mt-5"},[a("i18n",{attrs:{path:"common.deploy"}})],1),a("showcode",{attrs:{trigger:!1}},[a("v-code",[a("pre",[t._v("      <template>\n        <v-suggest :data=\"list\" show-field=\"name\"></v-suggest>\n      </template>\n\n      <script>\n      export default {\n        data () {\n          return {\n            list: [\n              { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛' },\n              { id: 2, name: 'Cleveland Cavaliers', desc:'克里夫兰骑士' },\n              { ... }\n            ]\n          }\n        }\n      }\n      <\/script>\n      ")])])],1),a("h2",{staticClass:"mt-5"},[a("i18n",{attrs:{path:"common.example"}}),a("small",{staticClass:"ms-2"},[a("a",{attrs:{href:"https://codepen.io/terry05/pen/KKPQwxP",target:"_blank"}},[a("i18n",{attrs:{path:"common.codePen"}})],1)])],1),a("div",{staticClass:"card p-5 shadow-sm mt-3"},[a("div",{},[a("h5",[a("i18n",{attrs:{path:"suggest.demo.singleColumn"}})],1),a("pre",{staticClass:"p-3 bg-light"},[t._v(t._s(JSON.stringify(t.value1,null,4)))]),a("p",[a("v-suggest",{attrs:{data:t.sample,"show-field":"name"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),a("showcode",[a("v-code",[a("pre",[t._v('          <v-suggest :data="sample"\n            show-field="name"\n            v-model="value1">\n          </v-suggest>\n          ')])])],1)],1),a("div",{staticClass:"mt-5"},[a("h5",[a("i18n",{attrs:{path:"suggest.demo.custom"}})],1),a("pre",{staticClass:"p-3 bg-light"},[t._v(t._s(JSON.stringify(t.value2,null,4)))]),a("p",[a("v-suggest",{attrs:{data:t.sample,"show-field":t.resultFormat},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),a("showcode",[a("v-code",[a("pre",[t._v('          <v-suggest :data="sample"\n            :show-field="resultFormat"\n            v-model="value2">\n          </v-suggest>\n\n          <script>\n          export default {\n            methods: {\n              resultFormat(row){\n                return row.name+\' (\'+row.desc+\')\';\n              }\n            }\n          }\n          <\/script>\n          ')])])],1)],1),a("div",{staticClass:"mt-5"},[a("h5",[t._v("Placeholder "),a("small",[a("i18n",{attrs:{path:"suggest.demo.placeholder"}})],1)]),a("p",[a("v-suggest",{attrs:{data:t.sample,"show-field":"name",placeholder:"Type something..."}})],1),a("showcode",[a("v-code",[a("pre",[t._v('          <v-suggest :data="sample" placeholder="Type something..."></v-suggest>\n          ')])])],1)],1),a("div",{staticClass:"mt-5"},[a("h5",[a("i18n",{attrs:{path:"suggest.demo.disabled"}})],1),a("p",[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.disabled=!t.disabled}}},[t._v("Toggle disabled")])]),a("p",[a("v-suggest",{attrs:{data:t.sample,"show-field":"name",disabled:t.disabled},model:{value:t.valDisabled,callback:function(e){t.valDisabled=e},expression:"valDisabled"}})],1),a("showcode",[a("v-code",[a("pre",[t._v('          <v-suggest :data="sample" :disabled="true"></v-suggest>\n          ')])])],1)],1),a("div",{staticClass:"mt-5"},[a("h5",[a("i18n",{attrs:{path:"suggest.demo.slot"}})],1),a("p",[a("v-suggest",{attrs:{data:t.sample},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("div",[a("strong",{domProps:{textContent:t._s(s.name)}}),a("small",{staticClass:"ms-2",domProps:{textContent:t._s(s.abbr)}})]),a("div",{staticClass:"text-muted",domProps:{textContent:t._s(s.desc)}})]}}])})],1),a("showcode",[a("v-code",[a("pre",[t._v('          <v-suggest :data="sample">\n            \x3c!-- scoped slot --\x3e\n            <template #default="{ row }">\n              <div>\n                <strong v-text="row.name"></strong>\n                <small class="ms-2" v-text="row.abbr"></small>\n              </div>\n              <div class="text-muted" v-text="row.desc"></div>\n            </template>\n          </v-suggest>\n          ')])])],1)],1),a("div",{staticClass:"mt-5"},[a("h5",[a("i18n",{attrs:{path:"suggest.demo.limit"}})],1),a("p",[a("v-suggest",{attrs:{data:t.sample,"max-length":5}})],1),a("showcode",[a("v-code",[a("pre",[t._v('          <v-suggest :data="sample" :max-length="5"></v-suggest>\n          ')])])],1)],1),a("div",{staticClass:"mt-5"},[a("h5",[a("i18n",{attrs:{path:"suggest.demo.raw"}})],1),a("pre",{staticClass:"p-3 bg-light"},[t._v(t._s(JSON.stringify(t.valCallback,null,4)))]),a("p",[a("v-suggest",{attrs:{data:t.sample,"show-field":"name"},on:{values:t.values}})],1),a("showcode",[a("v-code",[a("pre",[t._v('          <v-suggest :data="sample" @values="values"></v-suggest>\n\n          <script>\n          export default {\n            methods: {\n              values(data){\n                console.log(data);\n              }\n            }\n          }\n          <\/script>\n          ')])])],1)],1)]),a("h2",{staticClass:"mt-5"},[a("i18n",{attrs:{path:"common.options"}})],1),a("table",{staticClass:"table table-bordered table-striped option-table"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.name"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.type"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.required"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.default"}})],1)])]),a("tbody",[a("tr",[a("td",[t._v("data")]),a("td",[t._v("array")]),a("td",[a("i18n",{attrs:{path:"suggest.option.data"}})],1),a("td",[t._v("true")]),a("td")]),a("tr",[a("td",[t._v("show-field")]),a("td",[t._v("string|function")]),a("td",[a("i18n",{attrs:{path:"suggest.option.showField"}})],1),a("td",[t._v("false")]),a("td",[t._v("name")])]),a("tr",[a("td",[t._v("placeholder")]),a("td",[t._v("string")]),a("td",[a("i18n",{attrs:{path:"suggest.demo.placeholder"}})],1),a("td",[t._v("false")]),a("td")]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("boolean")]),a("td",[a("i18n",{attrs:{path:"suggest.demo.disabled"}})],1),a("td",[t._v("false")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("max-length")]),a("td",[t._v("number")]),a("td",[a("i18n",{attrs:{path:"suggest.option.limit"}})],1),a("td",[t._v("false")]),a("td",[t._v("0")])])])]),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.events"}})],1),a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.param"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.args"}})],1)])]),a("tbody",[a("tr",[a("td",[t._v("values")]),a("td",[a("i18n",{attrs:{path:"suggest.event.values"}})],1),a("td",[t._v("Object")])])])])],1)},n=[],d=(a("b0c0"),a("866d")),l={data:function(){return{value1:"",value2:"",disabled:!1,valDisabled:"Oklahoma City Thunder",valCallback:null,sample:d["a"]}},methods:{resultFormat:function(t){if(t)return t.name+" ("+t.desc+")"},values:function(t){this.valCallback=t}}},i=l,o=a("2877"),r=Object(o["a"])(i,s,n,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-c4991bfa.734fd1d0.js.map