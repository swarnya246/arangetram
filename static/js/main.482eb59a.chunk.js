(this.webpackJsonparangetram=this.webpackJsonparangetram||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},38:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),c=a(31),r=a.n(c),l=(a(38),a(25)),i=a.n(l),o=(a(39),a(40),a(41),a(42),a(11));var s=function(){return m.a.createElement("div",{className:"Landing"},m.a.createElement("body",{className:"body"},m.a.createElement("div",{"data-aos":"fade-right",className:"float-left"},m.a.createElement("h1",{className:"greeting"},"Hi, I'm ",m.a.createElement("span",{className:"pink-text"},"Swetha"),"! \ud83d\udc4b"),m.a.createElement("p",{className:"bio"},"I am a 9th grader, in my first year of high school, and I have been practicing bharatanatyam for 10 years. My guru, Smt. Vishal Ramani, is the artistic director of Shri Krupa Dance Academy, where I learnt all I know about bharatanatyam. Please watch my arangetram (the equivalent of a final test of sorts) and support me on this big day!"),m.a.createElement("br",null),m.a.createElement(o.b,{to:"/livestream"},m.a.createElement("button",{className:"hyperlink nav-button"},"Watch my arangetram \u2794")),m.a.createElement("br",null),m.a.createElement(o.b,{to:"/guestbook"},m.a.createElement("button",{className:"hyperlink nav-button sign-my-guestbook"},"Sign my guestbook \u2794")),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null)),m.a.createElement("div",{className:"float-right","data-aos":"fade-left"},m.a.createElement("img",{src:"https://storage.googleapis.com/file-in.appspot.com/files/K4hjrPhUNY.jpg"}))))},u=a(2),h=a(20),f=a(21),d=a(13),v=a(23),b=a(22),p=(a(47),a(3)),g=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).nameRef=m.a.createRef(),n.commentRef=m.a.createRef(),n.leaveComment=n.leaveComment.bind(Object(d.a)(n)),n.state={comments:[],some:""},p.database().ref().child("comments").once("value").then((function(e){var t=e.val(),a=Object.keys(t).map((function(e){return Object(u.a)(Object(u.a)({},t[e]),{},{uid:e})}));n.setState({comments:a,some:"haha i don't know what i'm doing"})})),n}return Object(f.a)(a,[{key:"leaveComment",value:function(){var e=this;if(""!=this.commentRef.current.value&&""!=this.nameRef.current.value){var t={name:this.nameRef.current.value,comment:this.commentRef.current.value};this.commentRef.current.value="",p.database().ref().child("comments").push(t),p.database().ref().child("comments").once("value").then((function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(u.a)(Object(u.a)({},a[e]),{},{uid:e})}));e.setState({comments:n,some:"haha i don't know what i'm doing"})}))}}},{key:"render",value:function(){return m.a.createElement("div",{className:"Livestream","data-aos":"fade-right"},m.a.createElement("div",{className:"video-container"},m.a.createElement("iframe",{width:"100%",height:"100%",src:"https://youtube.com/embed/tdykpxu0Z7o",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("div",{className:"commentsection"},m.a.createElement("h1",null,"Comments (",this.state.comments.length,")"),m.a.createElement("div",{className:"comment-form"},m.a.createElement("input",{name:"commenterName",id:"commenterName",ref:this.nameRef,className:"input your-name",type:"text",placeholder:"Your name",required:!0}),m.a.createElement("input",{name:"comment",id:"comment",ref:this.commentRef,className:"input leave-a-comment",type:"text",placeholder:"Leave a comment",required:!0}),m.a.createElement("button",{className:"submit",onClick:this.leaveComment},"\u2794")),m.a.createElement("ul",null,this.state.comments.reverse().map((function(e){return m.a.createElement("li",{key:e.key},m.a.createElement("b",null,e.name)," ",e.comment)})))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement(o.b,{to:"/guestbook"},m.a.createElement("button",{className:"hyperlink nav-button"},"Sign my guestbook \u2794")),m.a.createElement("br",null),m.a.createElement(o.b,{to:"/"},m.a.createElement("button",{className:"hyperlink nav-button sign-my-guestbook"},"Go home \u2794")),m.a.createElement("br",null),m.a.createElement("br",null)," ",m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null))}}]),a}(m.a.Component),E=(a(58),function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).nameRef1=m.a.createRef(),n.commentRef1=m.a.createRef(),n.leaveComment1=n.leaveComment1.bind(Object(d.a)(n)),n.nameRef2=m.a.createRef(),n.commentRef2=m.a.createRef(),n.leaveComment2=n.leaveComment2.bind(Object(d.a)(n)),n.nameRef3=m.a.createRef(),n.commentRef3=m.a.createRef(),n.leaveComment3=n.leaveComment3.bind(Object(d.a)(n)),n.nameRef4=m.a.createRef(),n.commentRef4=m.a.createRef(),n.leaveComment4=n.leaveComment4.bind(Object(d.a)(n)),n.nameRef5=m.a.createRef(),n.commentRef5=m.a.createRef(),n.leaveComment5=n.leaveComment5.bind(Object(d.a)(n)),n.nameRef6=m.a.createRef(),n.commentRef6=m.a.createRef(),n.leaveComment6=n.leaveComment6.bind(Object(d.a)(n)),n.state={img1:[],img2:[],img3:[],img4:[],img5:[],img6:[],some:""},p.database().ref().child("img1").once("value").then((function(e){var t=e.val(),a=Object.keys(t).map((function(e){return Object(u.a)(Object(u.a)({},t[e]),{},{uid:e})}));n.setState({img1:a,some:"haha i don't know what i'm doing"})})),p.database().ref().child("img2").once("value").then((function(e){var t=e.val(),a=Object.keys(t).map((function(e){return Object(u.a)(Object(u.a)({},t[e]),{},{uid:e})}));n.setState({img2:a,some:"haha i don't know what i'm doing"})})),p.database().ref().child("img3").once("value").then((function(e){var t=e.val(),a=Object.keys(t).map((function(e){return Object(u.a)(Object(u.a)({},t[e]),{},{uid:e})}));n.setState({img3:a,some:"haha i don't know what i'm doing"})})),p.database().ref().child("img4").once("value").then((function(e){var t=e.val(),a=Object.keys(t).map((function(e){return Object(u.a)(Object(u.a)({},t[e]),{},{uid:e})}));n.setState({img4:a,some:"haha i don't know what i'm doing"})})),p.database().ref().child("img5").once("value").then((function(e){var t=e.val(),a=Object.keys(t).map((function(e){return Object(u.a)(Object(u.a)({},t[e]),{},{uid:e})}));n.setState({img5:a,some:"haha i don't know what i'm doing"})})),p.database().ref().child("img6").once("value").then((function(e){var t=e.val(),a=Object.keys(t).map((function(e){return Object(u.a)(Object(u.a)({},t[e]),{},{uid:e})}));n.setState({img6:a,some:"haha i don't know what i'm doing"})})),n}return Object(f.a)(a,[{key:"leaveComment1",value:function(){var e=this;if(""!=this.commentRef1.current.value&&""!=this.nameRef1.current.value){var t={name:this.nameRef1.current.value,comment:this.commentRef1.current.value};this.commentRef1.current.value="",p.database().ref().child("img1").push(t),p.database().ref().child("img1").once("value").then((function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(u.a)(Object(u.a)({},a[e]),{},{uid:e})}));e.setState({img1:n,some:"haha i don't know what i'm doing"})}))}}},{key:"leaveComment2",value:function(){var e=this;if(""!=this.commentRef2.current.value&&""!=this.nameRef2.current.value){var t={name:this.nameRef2.current.value,comment:this.commentRef2.current.value};this.commentRef2.current.value="",p.database().ref().child("img2").push(t),p.database().ref().child("img2").once("value").then((function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(u.a)(Object(u.a)({},a[e]),{},{uid:e})}));e.setState({img2:n,some:"haha i don't know what i'm doing"})}))}}},{key:"leaveComment3",value:function(){var e=this;if(""!=this.commentRef3.current.value&&""!=this.nameRef3.current.value){var t={name:this.nameRef3.current.value,comment:this.commentRef3.current.value};this.commentRef3.current.value="",p.database().ref().child("img3").push(t),p.database().ref().child("img3").once("value").then((function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(u.a)(Object(u.a)({},a[e]),{},{uid:e})}));e.setState({img3:n,some:"haha i don't know what i'm doing"})}))}}},{key:"leaveComment4",value:function(){var e=this;if(""!=this.commentRef4.current.value&&""!=this.nameRef4.current.value){var t={name:this.nameRef4.current.value,comment:this.commentRef4.current.value};this.commentRef4.current.value="",p.database().ref().child("img4").push(t),p.database().ref().child("img4").once("value").then((function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(u.a)(Object(u.a)({},a[e]),{},{uid:e})}));e.setState({img4:n,some:"haha i don't know what i'm doing"})}))}}},{key:"leaveComment5",value:function(){var e=this;if(""!=this.commentRef5.current.value&&""!=this.nameRef5.current.value){var t={name:this.nameRef5.current.value,comment:this.commentRef5.current.value};this.commentRef5.current.value="",p.database().ref().child("img5").push(t),p.database().ref().child("img5").once("value").then((function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(u.a)(Object(u.a)({},a[e]),{},{uid:e})}));e.setState({img5:n,some:"haha i don't know what i'm doing"})}))}}},{key:"leaveComment6",value:function(){var e=this;if(""!=this.commentRef6.current.value&&""!=this.nameRef6.current.value){var t={name:this.nameRef6.current.value,comment:this.commentRef1.current.value};this.commentRef6.current.value="",p.database().ref().child("img6").push(t),p.database().ref().child("img6").once("value").then((function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(u.a)(Object(u.a)({},a[e]),{},{uid:e})}));e.setState({img6:n,some:"haha i don't know what i'm doing"})}))}}},{key:"render",value:function(){return m.a.createElement("div",{className:"Guestbook"},m.a.createElement("body",{className:"body","data-aos":"fade-right"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"column"},m.a.createElement("div",{className:"page",id:"img1"},m.a.createElement("img",{src:"https://storage.googleapis.com/file-in.appspot.com/files/_dgKEffwa1.png"}),m.a.createElement("div",{className:"comment-section"},m.a.createElement("h1",null,"Signatures (",this.state.img1.length,")"),m.a.createElement("div",{className:"comment-form"},m.a.createElement("input",{name:"commenterName",id:"commenterName",ref:this.nameRef1,className:"input your-name",type:"text",placeholder:"Your name",required:!0}),m.a.createElement("input",{name:"comment",id:"comment",ref:this.commentRef1,className:"input leave-a-comment",type:"text",placeholder:"Leave a comment",required:!0}),m.a.createElement("button",{className:"submit",onClick:this.leaveComment1},"\u2794")),m.a.createElement("ul",null,this.state.img1.reverse().map((function(e){return m.a.createElement("li",{key:e.key},m.a.createElement("b",null,e.name)," ",e.comment)}))))),m.a.createElement("div",{className:"page",id:"img4"},m.a.createElement("img",{src:"https://storage.googleapis.com/file-in.appspot.com/files/76M-n1Fs7X.png"}),m.a.createElement("div",{className:"comment-section"},m.a.createElement("h1",null,"Signatures (",this.state.img4.length,")"),m.a.createElement("div",{className:"comment-form"},m.a.createElement("input",{name:"commenterName",id:"commenterName",ref:this.nameRef4,className:"input your-name",type:"text",placeholder:"Your name",required:!0}),m.a.createElement("input",{name:"comment",id:"comment",ref:this.commentRef4,className:"input leave-a-comment",type:"text",placeholder:"Leave a comment",required:!0}),m.a.createElement("button",{className:"submit",onClick:this.leaveComment4},"\u2794")),m.a.createElement("ul",null,this.state.img4.reverse().map((function(e){return m.a.createElement("li",{key:e.key},m.a.createElement("b",null,e.name)," ",e.comment)}))))),m.a.createElement("div",{className:"page",id:"img6"},m.a.createElement("img",{src:"https://storage.googleapis.com/file-in.appspot.com/files/CbMQV3DDUD.png"}),m.a.createElement("div",{className:"comment-section"},m.a.createElement("h1",null,"Signatures (",this.state.img6.length,")"),m.a.createElement("div",{className:"comment-form"},m.a.createElement("input",{name:"commenterName",id:"commenterName",ref:this.nameRef6,className:"input your-name",type:"text",placeholder:"Your name",required:!0}),m.a.createElement("input",{name:"comment",id:"comment",ref:this.commentRef6,className:"input leave-a-comment",type:"text",placeholder:"Leave a comment",required:!0}),m.a.createElement("button",{className:"submit",onClick:this.leaveComment6},"\u2794")),m.a.createElement("ul",null,this.state.img6.reverse().map((function(e){return m.a.createElement("li",{key:e.key},m.a.createElement("b",null,e.name)," ",e.comment)})))))),m.a.createElement("div",{class:"column"},m.a.createElement("div",{className:"page",id:"img2"},m.a.createElement("img",{src:"https://storage.googleapis.com/file-in.appspot.com/files/X-Das9fVZC.png"}),m.a.createElement("div",{className:"comment-section"},m.a.createElement("h1",null,"Signatures (",this.state.img2.length,")"),m.a.createElement("div",{className:"comment-form"},m.a.createElement("input",{name:"commenterName",id:"commenterName",ref:this.nameRef2,className:"input your-name",type:"text",placeholder:"Your name",required:!0}),m.a.createElement("input",{name:"comment",id:"comment",ref:this.commentRef2,className:"input leave-a-comment",type:"text",placeholder:"Leave a comment",required:!0}),m.a.createElement("button",{className:"submit",onClick:this.leaveComment2},"\u2794")),m.a.createElement("ul",null,this.state.img2.reverse().map((function(e){return m.a.createElement("li",{key:e.key},m.a.createElement("b",null,e.name)," ",e.comment)}))))),m.a.createElement("div",{className:"page",id:"img3"},m.a.createElement("img",{src:"https://storage.googleapis.com/file-in.appspot.com/files/XMq89OorwQ.png"}),m.a.createElement("div",{className:"comment-section"},m.a.createElement("h1",null,"Signatures (",this.state.img3.length,")"),m.a.createElement("div",{className:"comment-form"},m.a.createElement("input",{name:"commenterName",id:"commenterName",ref:this.nameRef3,className:"input your-name",type:"text",placeholder:"Your name",required:!0}),m.a.createElement("input",{name:"comment",id:"comment",ref:this.commentRef3,className:"input leave-a-comment",type:"text",placeholder:"Leave a comment",required:!0}),m.a.createElement("button",{className:"submit",onClick:this.leaveComment3},"\u2794")),m.a.createElement("ul",null,this.state.img3.reverse().map((function(e){return m.a.createElement("li",{key:e.key},m.a.createElement("b",null,e.name)," ",e.comment)}))))),m.a.createElement("div",{className:"page",id:"img5"},m.a.createElement("img",{src:"https://storage.googleapis.com/file-in.appspot.com/files/xI1GV8EY3M.jpg"}),m.a.createElement("div",{className:"comment-section"},m.a.createElement("h1",null,"Signatures (",this.state.img5.length,")"),m.a.createElement("div",{className:"comment-form"},m.a.createElement("input",{name:"commenterName",id:"commenterName",ref:this.nameRef5,className:"input your-name",type:"text",placeholder:"Your name",required:!0}),m.a.createElement("input",{name:"comment",id:"comment",ref:this.commentRef5,className:"input leave-a-comment",type:"text",placeholder:"Leave a comment",required:!0}),m.a.createElement("button",{className:"submit",onClick:this.leaveComment5},"\u2794")),m.a.createElement("ul",null,this.state.img5.reverse().map((function(e){return m.a.createElement("li",{key:e.key},m.a.createElement("b",null,e.name)," ",e.comment)})))))))),m.a.createElement("br",null),m.a.createElement("div",{className:"nav-links"},m.a.createElement(o.b,{to:"/livestream"},m.a.createElement("button",{className:"hyperlink nav-button"},"Watch my arangetram \u2794")),m.a.createElement("br",null),m.a.createElement(o.b,{to:"/"},m.a.createElement("button",{className:"hyperlink nav-button sign-my-guestbook"},"Go home \u2794"))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null))}}]),a}(m.a.Component));a(59);var y=function(){return m.a.createElement("div",{className:"Footer"},m.a.createElement("footer",null,m.a.createElement("div",{className:"contact"}),m.a.createElement("div",{className:"source"},m.a.createElement("p",null,"Made with \u2615 and \u2764\ufe0f by ",m.a.createElement("a",{href:"https://swarnya.me/",target:"_blank"},"Swarnya Srivastava")),m.a.createElement("p",null,"Source code on ",m.a.createElement("a",{href:"https://github.com/Swarnya246/arangetram",target:"_blank"},"Github")),m.a.createElement("br",null))))};var k=function(){return m.a.createElement("div",{className:"Error"},m.a.createElement("body",{className:"body"},m.a.createElement("h1",{className:"oops"},"Oops! The page you requested was not found."),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null)))},N=a(5);var R=function(){return Object(n.useEffect)((function(){i.a.init(),i.a.refresh()})),m.a.createElement("div",{className:"App"},m.a.createElement(N.c,null,m.a.createElement(N.a,{path:"/",component:s,exact:!0}),m.a.createElement(N.a,{path:"/livestream",component:g}),m.a.createElement(N.a,{path:"/guestbook",component:E}),m.a.createElement(N.a,{component:k})),m.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.initializeApp({apiKey:"AIzaSyCjG7CZRt_ic2FIuFUk9uCZFjnTwr9BR5c",authDomain:"arangetram-8c22d.firebaseapp.com",databaseURL:"https://arangetram-8c22d.firebaseio.com",projectId:"arangetram-8c22d",storageBucket:"arangetram-8c22d.appspot.com",messagingSenderId:"611138268502",appId:"1:611138268502:web:e868443db7f7b6c3367af7",measurementId:"G-1MFWY0KT5H"}),r.a.render(m.a.createElement(o.a,null,m.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.482eb59a.chunk.js.map