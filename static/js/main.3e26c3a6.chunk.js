(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,a){t.exports={buttonList:"FeedbackOptions_buttonList__1m7Ky"}},11:function(t,e,a){t.exports={notification:"Notification_notification__3LLzV"}},2:function(t,e,a){t.exports={statList:"Statistics_statList__3ZjL5",statItem:"Statistics_statItem__3f7pR"}},20:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(4),i=a.n(s),o=a(5),r=a(6),l=a(7),d=a(13),b=a(12),u=a(8),j=a.n(u),h=a(9),f=a.n(h),k=a(0),p=function(t){var e=t.title,a=t.children;return Object(k.jsxs)("section",{children:[Object(k.jsx)("h2",{className:f.a.title,children:e}),a]})},O=a(2),m=a.n(O),x=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positivePercentage;return Object(k.jsxs)("ul",{className:m.a.statList,children:[Object(k.jsxs)("li",{className:m.a.statItem,children:["Good: ",e]}),Object(k.jsxs)("li",{className:m.a.statItem,children:["Neutral: ",a]}),Object(k.jsxs)("li",{className:m.a.statItem,children:["Bad: ",n]}),Object(k.jsxs)("li",{className:m.a.statItem,children:["Total: ",c]}),Object(k.jsxs)("li",{className:m.a.statItem,children:["Positive feedback: ",s>0?s:0,"%"]})]})},g=a(10),v=a.n(g),_=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(k.jsx)("ul",{className:v.a.buttonList,children:e.map((function(t){return Object(k.jsx)("li",{children:Object(k.jsx)("button",{type:"button",onClick:function(){a(t)},children:t.slice(0,1).toUpperCase()+t.slice(1)})},t)}))})},F=a(11),N=a.n(F),C=function(t){var e=t.message;return Object(k.jsx)("p",{className:N.a.notification,children:e})},L=function(t){var e=t.goodFeedback,a=t.neutralFeedback,n=t.badFeedback,c=t.total,s=t.percentage,i=t.hendleClick,o=t.options;return Object(k.jsxs)("div",{className:j.a.CounterFeedback,children:[Object(k.jsx)(p,{title:"Please leave feedback",children:Object(k.jsx)(_,{options:o,onLeaveFeedback:i})}),c>0?Object(k.jsx)(p,{title:"Statistics",children:Object(k.jsx)(x,{good:e,neutral:a,bad:n,total:c,positivePercentage:s})}):Object(k.jsx)(C,{message:"No feedback given"})]})},I=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleClick=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(e){return Math.round(Number(t.state.good)/Number(e)*100)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage(c),i=Object.keys(this.state);return Object(k.jsx)(L,{goodFeedback:e,neutralFeedback:a,badFeedback:n,total:c,percentage:s,hendleClick:this.handleClick,options:i})}}]),a}(n.Component);a(19);i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(I,{})}),document.getElementById("root"))},8:function(t,e,a){t.exports={CounterFeedback:"CounterFeedback_CounterFeedback__1T6_l"}},9:function(t,e,a){t.exports={title:"Section_title__26hpT"}}},[[20,1,2]]]);
//# sourceMappingURL=main.3e26c3a6.chunk.js.map