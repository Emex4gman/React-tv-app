(window["webpackJsonpTV-APP"]=window["webpackJsonpTV-APP"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/loader.ad1152b5.gif"},23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),i=n.n(l),c=(n(28),n(7)),s=n(8),o=n(10),u=n(9),m=n(11),h=n(5),p=(n(29),n(12)),d=function(e){var t=e.series;return r.a.createElement("li",null,r.a.createElement(p.b,{to:"/series/".concat(t.show.id)},t.show.name))},E=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"series-list"},e.list.map((function(e){return r.a.createElement(d,{series:e,key:e.show.id})}))))},f=n(22),v=n.n(f),g={margin:"20px"},w=function(e){return r.a.createElement("div",null,r.a.createElement("img",{style:g,alt:"loader icon",src:v.a}))},b=function(e){return r.a.createElement("p",null,e.message)},j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={series:[],seriesName:"",isFetching:!1},n.onSeriesInputChange=function(e){n.setState({seriesName:e.target.value,isFetching:!0}),fetch("http://api.tvmaze.com/search/shows?q=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){return n.setState({series:e,isFetching:!1})}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.series,n=e.seriesName,a=e.isFetching;return r.a.createElement("div",null,r.a.createElement(b,{message:"Here you can find all of your most loved series"}),r.a.createElement("div",null,r.a.createElement("input",{value:n,type:"text",onChange:this.onSeriesInputChange})),!a&&0===t.length&&""===n.trim()&&r.a.createElement("p",null,"Plaese enter series name into the Input"),!a&&0===t.length&&""!==n.trim()&&r.a.createElement("p",null,"No Tv series has been found with this name"),a&&r.a.createElement(w,null),!a&&r.a.createElement(E,{list:this.state.series}))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("http://api.tvmaze.com/shows/".concat(t,"?embed=episodes")).then((function(e){return e.json()})).then((function(t){return e.setState({show:t})}))}},{key:"render",value:function(){var e=this.state.show;return console.log(e),r.a.createElement("div",null,null===e&&r.a.createElement(w,null),null!==e&&r.a.createElement("div",null,r.a.createElement("p",null,e.name.toUpperCase()),r.a.createElement("p",null,"Premiered - ",e.premiered),r.a.createElement("p",null,"Rating: ",e.rating.average),r.a.createElement("p",null," Episodes: ",e._embedded.episodes.length),r.a.createElement("p",null,null!==e.image&&r.a.createElement("img",{alt:"Show",src:e.image.medium}))))}}]),t}(a.Component),O=function(e){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{path:"/series/:id",component:y}))},k=(n(35),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"TV SERIES")),r.a.createElement(O,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.0c51fd02.chunk.js.map