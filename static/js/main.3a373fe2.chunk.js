(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(10),s=n.n(a),o=(n(15),n(7)),u=n(3),i=n.n(u),l=n(6),j=n(2),b=(n(17),n(0));var d,h,p,O=function(e){var t=function(t){var n,r;return t===(null===(n=e.userAnswer)||void 0===n?void 0:n.correctAnswer)?"palegreen":t===(null===(r=e.userAnswer)||void 0===r?void 0:r.answer)?"lightcoral":"white"};return Object(b.jsxs)("div",{className:"QuestionCard",children:[Object(b.jsxs)("p",{className:"number",children:["Question ",e.questionNumber," of ",e.totalQuestions]}),Object(b.jsx)("p",{className:"question",dangerouslySetInnerHTML:{__html:e.question}}),Object(b.jsx)("div",{className:"answers",children:e.answers.map((function(n){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{disabled:void 0!==e.userAnswer,value:n,onClick:e.callback,style:{backgroundColor:t(n)},children:Object(b.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})})}))})]})},f=n(9),v=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e};!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(d||(d={})),function(e){e.MULTIPLE="multiple",e.TRUE_FALSE="boolean"}(h||(h={})),function(e){e[e.SCIENCE=17]="SCIENCE"}(p||(p={}));var m=function(){var e=Object(l.a)(i.a.mark((function e(t,n,r){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://opentdb.com/api.php?"+"amount=".concat(t)+"&category=".concat(n)+"&type=".concat(r),e.next=3,fetch(c);case 3:return e.next=5,e.sent.json();case 5:return a=e.sent,console.log(a),e.abrupt("return",a.results.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{answers:v([e.correct_answer].concat(Object(o.a)(e.incorrect_answers)))})})));case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();var x=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),u=s[0],d=s[1],f=Object(r.useState)(0),v=Object(j.a)(f,2),x=v[0],w=v[1],g=Object(r.useState)([]),N=Object(j.a)(g,2),S=N[0],C=N[1],E=Object(r.useState)(0),k=Object(j.a)(E,2),A=k[0],q=k[1],y=Object(r.useState)(!0),I=Object(j.a)(y,2),L=I[0],M=I[1],T=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),M(!1),e.next=4,m(10,p.SCIENCE,h.MULTIPLE);case 4:t=e.sent,d(t),C([]),c(!1),q(0),w(0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Big Brain Quiz \ud83e\udde0"}),Object(b.jsxs)("div",{className:"info-card",children:[L?Object(b.jsx)("button",{className:"start",onClick:T,children:"Start"}):null,L?null:Object(b.jsxs)("p",{className:"score",children:["Score: ",A," / ",S.length]}),n?Object(b.jsx)("p",{className:"loading",children:"Loading Questions..."}):null,n||L?null:Object(b.jsx)(O,{question:u[x].question,answers:u[x].answers,callback:function(e){if(!L){var t=e.currentTarget.value,n=u[x].correct_answer,r=t===n;r&&q(A+1);var c={question:u[x].question,answer:t,correctAnswer:n,correct:r};C([].concat(Object(o.a)(S),[c]))}},userAnswer:S[x],questionNumber:x+1,totalQuestions:10}),S.length>=10&&!n?Object(b.jsx)("button",{className:"restart",onClick:T,children:"Try Again"}):null,!L&&!n&&S.length>=x+1&&x<9?Object(b.jsx)("button",{className:"next",onClick:function(){var e=x+1;e>=10?M(!0):w(e)},children:"Next Question"}):null]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),w()}},[[19,1,2]]]);
//# sourceMappingURL=main.3a373fe2.chunk.js.map