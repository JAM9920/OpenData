(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b40a1a86"],{"42e6":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"custom-main--container"},[e("div",{staticClass:"custom-card map-header"},[e("div",{staticClass:"week-days"},t._l(t.weekDays,(function(i){return e("div",{key:i.short,class:["day",{active:i.long==t.selectedDay}],on:{click:function(e){return t.onDayClick(i.long)}}},[t._v("\n                "+t._s(i.short)+"\n            ")])})),0),e("div",{staticClass:"day-times mb-0"},t._l(t.dayTimes,(function(i){return e("div",{key:i.filter,class:["time",{active:i.filter==t.selectedTime}],on:{click:function(e){return t.onTimeClick(i.filter)}}},[t._v("\n                "+t._s(i.title)+"\n            ")])})),0)]),e("div",{staticClass:"custom-card map-center p-0"},[e("div",{staticClass:"district-maps"},[t.dataList?e("div",{staticClass:"row"},t._l(t.dataList,(function(i){return e("div",{key:i.id,staticClass:"col-6"},[e("div",{staticClass:"district"},[e("div",{staticClass:"district-title"},[t._v("\n                            "+t._s(i&&i.district&&i.district.name)+"\n                        ")]),e("img",{staticClass:"district-img",attrs:{src:i.image,alt:""}}),e("div",{staticClass:"map-detail"},[e("ul",[e("li",[e("span",[t._v("Average number of cars: ")]),t._v(" "+t._s(i.avg_num_cars)+"\n                                ")]),e("li",[e("span",[t._v("Average speed of cars: ")]),t._v(" "+t._s(i.avg_speed_cars)+" kmph\n                                ")]),e("li",[e("span",[t._v("Average time of traffic jams: ")]),t._v(" "+t._s(i.jam_time)+" h.\n                                ")])])])])])})),0):t._e()])]),t._m(0)])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"custom-card map-footer mb-3"},[e("div",{staticClass:"map",attrs:{id:"map"}})])}],n=(e("7f7f"),e("ac6a"),{mounted:function(){this.mapRender(),this.getList(),this.fetchList()},data:function(){return{imgList:[],districtList:[],selectedDay:"Monday",selectedTime:"8-10",weekDays:[{short:"Mon",long:"Monday"},{short:"Tue",long:"Tuesday"},{short:"Wed",long:"Wednesday"},{short:"Thu",long:"Thursday"},{short:"Fri",long:"Friday"},{short:"Sat",long:"Saturday"},{short:"Sun",long:"Sunday"}],dayTimes:[{filter:"8-10",title:"8:00 - 10:00"},{filter:"10-12",title:"10:00 - 12:00"},{filter:"12-14",title:"12:00 - 14:00"},{filter:"14-16",title:"14:00 - 16:00"},{filter:"16-18",title:"16:00 - 18:00"},{filter:"18-20",title:"18:00 - 20:00"},{filter:"20-22",title:"20:00 - 22:00"}],dataList:[]}},computed:{imgFilter:function(){var t=this;return this.imgList.filter((function(i){return i.period==t.selectedTime&&i.day==t.selectedDay}))}},methods:{fetchList:function(){var t=this;this.$store.dispatch("getDistrictsData",{day:this.selectedDay,period:this.selectedTime}).then((function(i){t.dataList=i})).catch((function(t){console.log("Districts err",t)}))},getList:function(){var t=this;this.$store.dispatch("getDistricts",{}).then((function(i){t.districtList=i})).catch((function(t){console.log("Districts err",t)})),this.$store.dispatch("getDistrictsData",{}).then((function(i){t.imgList=i})).catch((function(t){console.log("Districts err",t)}))},mapRender:function(){ymaps.ready((function(){var t=new ymaps.Map("map",{center:[429.248418,41.346789],zoom:15,controls:["zoomControl"]}),i=new ymaps.ObjectManager,e={type:"FeatureCollection",features:[{type:"Feature",id:2,geometry:{coordinates:[[429.251787,41.348158],[429.247071,41.347969],[429.219512,41.350139],[429.218481,41.349881],[429.193125,41.325328]],type:"LineString"},properties:{name:"Линия 3"}}]};e&&(e.features.forEach((function(t){t.properties.balloonContent=t.properties.name,t.properties.iconCaption&&(t.options={preset:"islands#greenDotIconWithCaption"})})),i.add(e),t.geoObjects.add(i))}))},onDayClick:function(t){this.selectedDay=t,this.fetchList()},onTimeClick:function(t){this.selectedTime=t,this.fetchList()}}}),c=n,r=(e("8296"),e("2877")),o=Object(r["a"])(c,s,a,!1,null,null,null);i["default"]=o.exports},7488:function(t,i,e){},"7f7f":function(t,i,e){var s=e("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,c="name";c in a||e("9e1e")&&s(a,c,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},8296:function(t,i,e){"use strict";var s=e("7488"),a=e.n(s);a.a}}]);