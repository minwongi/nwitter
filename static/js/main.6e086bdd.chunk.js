(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(43),s=n.n(r),i=n(11),o=n(31),u=n(12),l=n(0),j=n.n(l),b=n(2),O=n(24),d=n(33),p=n(19),f=n(25),m=n(32),h=n(6);var x=function(){var e=Object(f.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(f.useState)(""),r=Object(i.a)(a,2),s=r[0],o=r[1],u=Object(f.useState)(!0),l=Object(i.a)(u,2),O=l[0],d=l[1],p=Object(f.useState)(""),x=Object(i.a)(p,2),g=x[0],v=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&o(a)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,a,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=Object(m.d)(),e.prev=2,!O){e.next=11;break}return e.next=6,Object(m.c)(c,n,s);case 6:a=e.sent,console.log("\uac00\uc785"),console.log(a),e.next=14;break;case 11:return e.next=13,Object(m.e)(c,n,s);case 13:console.log("\ub85c\uadf8\uc778");case 14:console.log("data"),console.log(undefined),e.next=26;break;case 18:e.prev=18,e.t0=e.catch(2),r=e.t0.code,i=e.t0.message,console.log(r),console.log(i),console.log(e.t0),v(e.t0.message);case 26:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:w,className:"container",children:[Object(h.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"password",required:!0,value:s,onChange:y,className:"authInput"}),Object(h.jsx)("input",{type:"submit",className:"authInput authSubmit",value:O?"Create Account":"Sign In"}),g&&Object(h.jsx)("span",{className:"authError",children:g})]}),Object(h.jsx)("span",{onClick:function(){return d((function(e){return!e}))},className:"authSwitch",children:O?"Sign in":"Create Account"})]})},g=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.target.name),n=t.target.name,c=Object(p.c)(),a=new p.b,r=new p.a,"google"===n?Object(p.d)(c,a).then((function(e){var t=p.b.credentialFromResult(e);t.accessToken,e.user;console.log("Google\ub370\uc774\ud130 \uc131\uacf5",t)})).catch((function(e){e.code,e.message,e.email;var t=p.b.credentialFromError(e);console.log("Google\ub370\uc774\ud130 \uc2e4\ud328",t)})):"github"===n&&Object(p.d)(c,r).then((function(e){var t=p.a.credentialFromResult(e);t.accessToken,e.user;console.log("Github\ub370\uc774\ud130 \uc131\uacf5",t)})).catch((function(e){e.code,e.message,e.email;var t=p.a.credentialFromError(e);console.log("Github\ub370\uc774\ud130 \uc2e4\ud328",t)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"authContainer",children:[Object(h.jsx)(O.a,{icon:d.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(h.jsx)(x,{}),Object(h.jsxs)("div",{className:"authBtns",children:[Object(h.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(h.jsx)(O.a,{icon:d.b})]}),Object(h.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(h.jsx)(O.a,{icon:d.a})]})]})]})},v=n(44),y=n(45),w=n(36),N=n(46);Object(y.a)({apiKey:"AIzaSyAyKpqX4i8lYlIo4XT0w_N_IKEvUj36j5U",authDomain:"nwitter-bec3a.firebaseapp.com",projectId:"nwitter-bec3a",storageBucket:"nwitter-bec3a.appspot.com",messagingSenderId:"376080339858",appId:"1:376080339858:web:cde4bcaa656ff7cf05274b"});var k=Object(p.c)(),S=Object(w.b)(),I=Object(N.a)(),F=n(21),C=n(26),_=n(28),U=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(f.useState)(!1),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(f.useState)(t.text),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("Are you sure you want to delete this nweet?"),console.log(n),!n){e.next=7;break}return e.next=5,Object(F.c)(Object(F.d)(S,"nweets/".concat(t.id)));case 5:return e.next=7,Object(C.a)(Object(C.d)(I,t.attachmentUrl));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return s((function(e){return!e}))},x=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(t,l),e.next=3,Object(F.i)(Object(F.d)(S,"nweets/".concat(t.id)),{text:l});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"nweet",children:r?Object(h.jsx)(h.Fragment,{children:n&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:x,className:"container nweetEdit",children:[Object(h.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:l,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;d(t)},className:"formInput"}),Object(h.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(h.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h4",{children:[" ",t.text]}),t.attachmentUrl&&Object(h.jsx)("img",{src:t.attachmentUrl}),n&&Object(h.jsxs)("div",{class:"nweet__actions",children:[Object(h.jsx)("span",{onClick:p,children:Object(h.jsx)(O.a,{icon:_.d})}),Object(h.jsx)("span",{onClick:m,children:Object(h.jsx)(O.a,{icon:_.a})})]})]})})},A=n(60),B=function(e){var t=e.userObj,n=Object(f.useState)(""),c=Object(i.a)(n,2),a=c[0],r=c[1],s=Object(f.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],d=function(){var e=Object(b.a)(j.a.mark((function e(n){var c,s,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),c="",""===u){e.next=12;break}return s=Object(C.d)(I,"".concat(t.uid,"/").concat(Object(A.a)())),e.next=8,Object(C.e)(s,u,"data_url");case 8:return i=e.sent,e.next=11,Object(C.b)(i.ref);case 11:c=e.sent;case 12:return o={text:a,createAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.next=15,Object(F.a)(Object(F.b)(S,"nweets"),o);case 15:r(""),l("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:d,className:"factoryForm",children:[Object(h.jsxs)("div",{className:"factoryInput__container",children:[Object(h.jsx)("input",{className:"factoryInput__input",value:a,onChange:function(e){var t=e.target.value;r(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(h.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(h.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(h.jsx)("span",{children:"Add photos"}),Object(h.jsx)(O.a,{icon:_.b})]}),Object(h.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;l(t)},n.readAsDataURL(t)},style:{opacity:0}}),u&&Object(h.jsxs)("div",{className:"factoryForm__attachment",children:[Object(h.jsx)("img",{src:u,style:{backgroundImage:u}}),Object(h.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return l("")},children:[Object(h.jsx)("span",{children:"Remove"}),Object(h.jsx)(O.a,{icon:_.c})]})]})]})},E=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){Object(w.c)(Object(w.a)(S,"nweets"),(function(e){var t=e.docs.map((function(e){return Object(v.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(B,{userObj:t}),Object(h.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(h.jsx)(U,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},D=function(e){var t=e.refreshUser,n=e.userObj,a=Object(u.f)(),r=Object(f.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(F.h)(Object(F.b)(S,"nweets"),Object(F.j)("creatorId","==",n.uid)),e.next=3,Object(F.e)(t);case 3:(c=e.sent).forEach((function(e){console.log(c.docs.map((function(e){return e.data()})))}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O()}),[]);var d=function(){var e=Object(b.a)(j.a.mark((function e(c){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),Object(p.c)(),n.displayName===o){e.next=7;break}return a=Object(p.c)(),e.next=6,Object(p.e)(a.currentUser,{displayName:o,photoURL:"https://example.com/jane-q-user/profile.jpg"});case 6:t();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(h.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:o,className:"formInput"}),Object(h.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(h.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){k.signOut(),a("/")},children:"Log Out"})]})},T=function(e){var t=e.userObj;return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(h.jsx)(O.a,{icon:d.c,color:"#04AAFF",size:"2x"})})}),Object(h.jsx)("li",{children:Object(h.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(h.jsx)(O.a,{icon:_.e,color:"#04AAFF",size:"2x"}),Object(h.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},L=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(h.jsxs)(o.a,{children:[n&&Object(h.jsx)(T,{userObj:c}),Object(h.jsx)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:Object(h.jsx)(u.c,{children:n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",element:Object(h.jsx)(E,{userObj:c})}),Object(h.jsx)(u.a,{exact:!0,path:"/profile",element:Object(h.jsx)(D,{userObj:c,refreshUser:t})})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u.a,{exact:!0,path:"/",element:Object(h.jsx)(g,{})})})})})]})};var P=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(c.useState)(""),j=Object(i.a)(l,2);return j[0],j[1],Object(c.useEffect)((function(){k.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),a(!0)}))}),[]),Object(h.jsx)(h.Fragment,{children:n?Object(h.jsx)(L,{refreshUser:function(){var e=k.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing...."})};n(58);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.6e086bdd.chunk.js.map