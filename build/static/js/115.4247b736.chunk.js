(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[115],{1965:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(51),s=t(13),r=t(14),o=t(16),i=t(15),c=t(0),l=t.n(c),m=t(1266),d=t(1267),f=t(1264),u=t(1265),p=t(1268),h=t(176),b=t(1271),g=t(812),v=t(805),E=t(801),_=t(40),y=t.n(_),O=t(21),j=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;y.a.post("http://3.108.185.7/nodejs/api/dealer/updateonebank/".concat(a),r.state).then((function(e){console.log(e),r.props.history.push("/app/ro-configuration/RoConfigurationList")})).catch((function(e){console.log(e)}))},r.state={name_of_bank:"",credit_limit_of_bank:"",intrest_rates:"",ifsc_code:"",cresit_offer:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("http://3.108.185.7/nodejs/api/dealer/getonebank/".concat(a)).then((function(a){console.log(a),e.setState({name_of_bank:a.data.data.name_of_bank,credit_limit_of_bank:a.data.data.credit_limit_of_bank,intrest_rates:a.data.data.intrest_rates,ifsc_code:a.data.data.ifsc_code,cresit_offer:a.data.data.cresit_offer})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(d.a,{sm:"12"},l.a.createElement("div",null,l.a.createElement(f.a,{listTag:"div"},l.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),l.a.createElement(u.a,{active:!0},"Edit Bank For Transaction"))))),l.a.createElement(p.a,null,l.a.createElement(m.a,{className:"m-2"},l.a.createElement(d.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Bank For Transaction")),l.a.createElement(d.a,null,l.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/ro-configuration/RoConfigurationList")}},"Back"))),l.a.createElement(b.a,null,l.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},l.a.createElement(m.a,null,l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(v.a,null,"Name Of The Bank "),l.a.createElement(E.a,{type:"text",name:"name_of_bank",value:this.state.name_of_bank,onChange:this.changeHandler})),l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(v.a,null,"Credit Limit For Bank"),l.a.createElement(E.a,{type:"text",name:"credit_limit_of_bank",value:this.state.credit_limit_of_bank,onChange:this.changeHandler})),l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(v.a,null,"Interest Rates"),l.a.createElement(E.a,{type:"text",name:"intrest_rates",value:this.state.intrest_rates,onChange:this.changeHandler})),l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(v.a,null,"IFSC code"),l.a.createElement(E.a,{type:"text",name:"ifsc_code",value:this.state.ifsc_code,onChange:this.changeHandler})),l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(v.a,null,"Credit offer from bank vaild upto"),l.a.createElement(E.a,{type:"text",name:"cresit_offer",value:this.state.cresit_offer,onChange:this.changeHandler})),l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(v.a,null,"Document upload"),l.a.createElement(E.a,{type:"text",name:"omc_customer_code",value:this.state.omc_customer_code,onChange:this.changeHandler}))),l.a.createElement(m.a,null,l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(c.Component)},801:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),o=t(12),i=t(0),c=t.n(i),l=t(1),m=t.n(l),d=t(4),f=t.n(d),u=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:u.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,i=e.valid,l=e.invalid,m=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),_=m||("select"===r||"textarea"===r?r:"input"),y="form-control";h?(y+="-plaintext",_=m||"input"):"file"===r?y+="-file":"range"===r?y+="-range":v&&(y=d?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(u.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var O=Object(u.mapToCssModules)(f()(a,l&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,y),t);return("input"===_||m&&"function"===typeof m)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof _&&"select"!==_&&(Object(u.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(_,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":l}))},a}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},805:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),o=t.n(r),i=t(1),c=t.n(i),l=t(4),m=t.n(l),d=t(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],u=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:u,order:u,offset:u})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,i=e.widths,c=e.tag,l=e.check,u=e.size,p=e.for,h=Object(s.a)(e,f),b=[];i.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,o=!n;if(Object(d.isObject)(s)){var i,c=o?"-":"-"+a+"-";r=g(o,a,s.size),b.push(Object(d.mapToCssModules)(m()(((i={})[r]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i))),t)}else r=g(o,a,s),b.push(r)}}));var v=Object(d.mapToCssModules)(m()(a,!!r&&"sr-only",!!l&&"form-check-label",!!u&&"col-form-label-"+u,b,!!b.length&&"col-form-label"),t);return o.a.createElement(c,Object(n.a)({htmlFor:p},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},812:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),o=t(12),i=t(0),c=t.n(i),l=t(1),m=t.n(l),d=t(4),f=t.n(d),u=t(3),p=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:u.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,i=e.innerRef,l=Object(s.a)(e,p),m=Object(u.mapToCssModules)(f()(a,!!r&&"form-inline"),t);return c.a.createElement(o,Object(n.a)({},l,{ref:i,className:m}))},a}(i.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=115.4247b736.chunk.js.map