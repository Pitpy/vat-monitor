(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b349329"],{"4f82":function(t,e,a){},8416:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"navSearch"},[a("div",{staticClass:"navItemLeft"},[a("div",{staticClass:"contentLeft"},[a("div",{staticClass:"item"},[a("select",{attrs:{name:"rpOpt"},on:{change:t.changeReport}},t._l(t.listRpOpts,(function(e){return a("option",{key:e.index,domProps:{value:e.key}},[t._v(t._s(e.value))])})),0)]),a("div",{staticClass:"item"},[a("datepicker",{attrs:{format:t.customFomatter,"input-class":"input"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),"fdtd"==t.rpOpt?a("div",{staticClass:"item"},[a("datepicker",{attrs:{format:t.customFomatter,"input-class":"input"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1):t._e(),a("div",{staticClass:"item"},[a("button",{class:[t.buttonLoading,"button"],on:{click:t.search}},[a("font-awesome-icon",{attrs:{icon:t.iconSearch}}),t._v("  Search\n          ")],1)])])]),a("div",{staticClass:"navItemRight"},[a("div",{staticClass:"contentRight"},[a("div",{staticClass:"item"},[a("button",{staticClass:"excelColor",on:{click:function(e){return t.exportDoc(1)}}},[a("font-awesome-icon",{attrs:{icon:t.iconExcel}}),t._v(" Export EXCEL\n          ")],1)]),a("div",{staticClass:"item"},[a("button",{staticClass:"pdfColor",on:{click:function(e){return t.exportDoc(2)}}},[a("font-awesome-icon",{attrs:{icon:t.iconPdf}}),t._v(" Export PDF\n          ")],1)])])])]),a("div",{staticClass:"scroll"},[a("table",[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(t._s(t.header.report.vehicleId))]),a("th",{staticClass:"vehicleType",attrs:{scope:"col"}},[t._v(t._s(t.header.report.vehicleType))]),a("th",{staticClass:"r",attrs:{scope:"col"}},[t._v(t._s(t.header.report.cntIn))]),a("th",{staticClass:"r",attrs:{scope:"col"}},[t._v(t._s(t.header.report.cntOut))]),a("th",{staticClass:"r",attrs:{scope:"col"}},[t._v(t._s(t.header.report.cntAll))]),a("th",{staticClass:"r",attrs:{scope:"col"}},[t._v(t._s(t.header.report.fees))])])]),a("tbody",t._l(t.json_datas,(function(e){return a("tr",{key:e.index},[a("td",{attrs:{scope:"row","data-label":t.header.report.vehicleId}},[t._v(t._s(e.vehicleId))]),a("td",{staticClass:"vehicleType",staticStyle:{"font-family":"'Saysettha OT'"},attrs:{"data-label":t.header.report.vehicleType}},[t._v(t._s(e.vehicleType))]),a("td",{staticClass:"tdd r",attrs:{"data-label":t.header.report.cntIn}},[t._v(t._s(t.num(e.cntIn).format("0,0")))]),a("td",{staticClass:"tdd r",attrs:{"data-label":t.header.report.cntOut}},[t._v(t._s(t.num(e.cntOut).format("0,0")))]),a("td",{staticClass:"tdd r",attrs:{"data-label":t.header.report.cntAll}},[t._v(t._s(t.num(e.cntAll).format("0,0")))]),a("td",{staticClass:"tdd r",attrs:{"data-label":t.header.report.fees}},[t._v(t._s(t.num(e.fees).format("0,0")))])])})),0)])])])},o=[],n=(a("3b2b"),a("a481"),a("fa33")),c=a("c1df"),r=a.n(c),i=a("c074"),l=a("ad3d"),d=a("6612"),p=a.n(d),h=a("b0c1"),u={name:"ReportVehicle",components:{Datepicker:n["a"],FontAwesomeIcon:l["a"]},data:function(){return{header:h,num:p.a,buttonLoading:"",isLoading:!1,isFullPage:!0,rpOpt:"daily",startDate:new Date,endDate:new Date,listRpOpts:[{key:"daily",value:"Daily"},{key:"monthly",value:"Monthly"},{key:"yearly",value:"Yearly"},{key:"quarter",value:"Quarter"},{key:"fdtd",value:"From day To day"}],json_datas:[]}},methods:{customFomatter:function(t){return r()(t).format("DD-MM-YYYY")},changeReport:function(t){this.rpOpt=t.target.options[t.target.options.selectedIndex].value},getData:function(t,e,a,s){var o=this,n=r()(a).format("YYYY-MM-DD"),c="";"fdtd"==e&&(c=r()(s).format("YYYY-MM-DD")),this.axios.get(this.$store.getters.apiReport+t+"&rptOpt="+e+"&fromDate="+n+"&toDate="+c).then((function(t){o.json_datas=t.data}))},search:function(){this.getData("vehicle",this.rpOpt,this.startDate,this.endDate)},exportDoc:function(t){location.href=1==t?location.href.replace(new RegExp("^"+window.location.href),"http://".concat(location.host,"/report/excel_vehicle.php?type=vehicle&option=").concat(this.rpOpt,"&from=").concat(r()(this.startDate).format("YYYY-MM-DD"),"&to=").concat(r()(this.endDate).format("YYYY-MM-DD"))):location.href.replace(new RegExp("^"+window.location.href),"http://".concat(location.host,"/report/pdf_vehicle.php?type=vehicle&option=").concat(this.rpOpt,"&from=").concat(r()(this.startDate).format("YYYY-MM-DD"),"&to=").concat(r()(this.endDate).format("YYYY-MM-DD")))}},mounted:function(){this.getData("vehicle",this.rpOpt,this.startDate,this.endDate)},computed:{iconSearch:function(){return i["c"]},iconPdf:function(){return i["b"]},iconExcel:function(){return i["a"]}}},f=u,v=(a("dc4d0"),a("2877")),m=Object(v["a"])(f,s,o,!1,null,null,null);e["default"]=m.exports},dc4d0:function(t,e,a){"use strict";var s=a("4f82"),o=a.n(s);o.a}}]);
//# sourceMappingURL=chunk-0b349329.017d7bec.js.map