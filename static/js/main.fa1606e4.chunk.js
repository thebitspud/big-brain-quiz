(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{19:function(e,t,s){},21:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),c=s(13),a=s.n(c),i=(s(19),s(8)),o=s(3),u=s.n(o),l=s(7),h=s(2),b=(s(21),s(0));var j,d,p,m=function(e){var t=function(t){var s,n;return t===(null===(s=e.userAnswer)||void 0===s?void 0:s.correctAnswer)?"palegreen":t===(null===(n=e.userAnswer)||void 0===n?void 0:n.answer)?"lightcoral":"white"};return Object(b.jsxs)("div",{className:"QuestionCard",children:[Object(b.jsxs)("p",{className:"number",children:["Question ",e.questionNumber," of ",e.totalQuestions]}),Object(b.jsx)("p",{className:"question",dangerouslySetInnerHTML:{__html:e.question}}),Object(b.jsx)("div",{className:"answers",children:e.answers.map((function(s){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{disabled:void 0!==e.userAnswer,value:s,onClick:e.callback,style:{backgroundColor:t(s)},children:Object(b.jsx)("span",{dangerouslySetInnerHTML:{__html:s}})})})}))})]})},O=s(12),f=function(e){for(var t=e.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),n=[e[s],e[t]];e[t]=n[0],e[s]=n[1]}return e};!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(j||(j={})),function(e){e.MULTIPLE="multiple",e.TRUE_FALSE="boolean"}(d||(d={})),function(e){e[e.SCIENCE=17]="SCIENCE"}(p||(p={}));var v=function(){var e=Object(l.a)(u.a.mark((function e(t,s,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://opentdb.com/api.php?"+"amount=".concat(t)+"&category=".concat(s)+"&type=".concat(n),e.next=3,fetch(r);case 3:return e.next=5,e.sent.json();case 5:return c=e.sent,e.abrupt("return",c.results.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{answers:f([e.correct_answer].concat(Object(i.a)(e.incorrect_answers)))})})));case 7:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}();var g=function(e){return Object(b.jsxs)("div",{className:"score-card",children:[e.finishedQuiz?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Score: ",e.score," / ",S]}),Object(b.jsxs)("p",{className:"rank",children:["Your Rank: ",0===e.score?"Bottomless Pit":e.score<=2?"Unlucky":e.score<=4?"Small Brain":e.score<=7?"Average":e.score<=9?"Big Brain":e.stats.totalAttempts<8?"Cheater":"Galaxy Brain"]}),Object(b.jsx)("p",{className:"description",children:0===e.score?"That was intentional, wasn't it?":e.score<=2?"Wow, you did worse than the average random guesser!":e.score<=4?"It's okay, not everyone can be a big brain.":e.score<=7?"Not bad, but not that impressive either.":e.score<=9?"Congrats, you are a certified big brain! :)":e.stats.totalAttempts<8?"Nice try, nerd.":"You really wanted that perfect score, huh?"}),Object(b.jsx)("button",{className:"stats",onClick:e.seeStats,children:"See Stats"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["High Score: ",e.stats.highScore," / ",S]}),Object(b.jsxs)("p",{children:["Times Achieved: ",e.stats.timesAchieved]}),Object(b.jsxs)("p",{children:["Total Attempts: ",e.stats.totalAttempts]})]}),Object(b.jsx)("button",{className:"start",onClick:e.onStart,children:e.finishedQuiz?"Try Again":"Start"})]})},x=s(24),S=10,w={highScore:0,timesAchieved:0,totalAttempts:0};var A=function(){var e,t=Object(n.useState)(!1),s=Object(h.a)(t,2),r=s[0],c=s[1],a=Object(n.useState)([]),o=Object(h.a)(a,2),j=o[0],O=o[1],f=Object(n.useState)(0),A=Object(h.a)(f,2),N=A[0],y=A[1],k=Object(n.useState)([]),C=Object(h.a)(k,2),T=C[0],E=C[1],q=Object(n.useState)(0),I=Object(h.a)(q,2),M=I[0],L=I[1],Q=Object(x.a)(["stats"]),B=Object(h.a)(Q,2),_=B[0],z=B[1],F=Object(n.useState)(!0),P=Object(h.a)(F,2),U=P[0],H=P[1],R=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),H(!1),L(0),y(0),e.next=6,v(S,p.SCIENCE,d.MULTIPLE);case 6:t=e.sent,O(t),E([]),c(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Big Brain Quiz \ud83e\udde0"}),Object(b.jsxs)("div",{className:"info-card",children:[U?Object(b.jsx)(g,{onStart:R,seeStats:function(){E([])},stats:null!==(e=_.stats)&&void 0!==e?e:w,finishedQuiz:T.length>=S,score:M}):Object(b.jsxs)("p",{className:"score",children:["Score: ",M," / ",T.length]}),r&&Object(b.jsx)("p",{className:"loading",children:"Loading Questions..."}),!r&&!U&&Object(b.jsx)(m,{question:j[N].question,answers:j[N].answers,callback:function(e){if(!U){var t=e.currentTarget.value,s=j[N].correct_answer,n=t===s;n&&L(M+1);var r={question:j[N].question,answer:t,correctAnswer:s,correct:n};E([].concat(Object(i.a)(T),[r]))}},userAnswer:T[N],questionNumber:N+1,totalQuestions:S}),T.length>=S&&!U&&!r&&Object(b.jsx)("button",{className:"results",onClick:function(){!function(){var e,t=null!==(e=_.stats)&&void 0!==e?e:w,s={highScore:Math.max(M,t.highScore),timesAchieved:M>t.highScore?1:t.timesAchieved+(M===t.highScore?1:0),totalAttempts:t.totalAttempts+=1};z("stats",s,{path:"/",maxAge:157784630})}(),H(!0)},children:"See Results"}),!U&&!r&&T.length>=N+1&&N<S-1&&Object(b.jsx)("button",{className:"next",onClick:function(){var e=N+1;e<S&&y(e)},children:"Next Question"})]}),Object(b.jsxs)("p",{id:"footer",children:["This website uses cookies."," ",Object(b.jsx)("a",{href:"https://github.com/thebitspud/big-brain-quiz",rel:"noreferrer",target:"_blank",children:"Made by Thebitspud (2021)."})]})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),c(e),a(e)}))},y=s(25);a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(y.a,{children:Object(b.jsx)(A,{})})}),document.getElementById("root")),N()}},[[23,1,2]]]);
//# sourceMappingURL=main.fa1606e4.chunk.js.map