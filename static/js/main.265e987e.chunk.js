(this["webpackJsonpmedication-counter-app-react"]=this["webpackJsonpmedication-counter-app-react"]||[]).push([[0],{186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(10),i=a.n(r),o=a(118),c=a(11),l=a(27),d=a(28),h=a(33),m=a(31),u=a(17),j=a.n(u),p=a(63),b=a(120),g=a(41),x=a(30),f=a.n(x),O=a(64),v=a(218),N=a(114),C=a.n(N),y=a(220),w=a(221),S=a(222),k=a(223),P=a(224),T=a(235),I=a(226),L=a(4),W=function(e){null===localStorage.getItem("AuthToken")&&e.push("/login")},A=a(2),z=["classes"],E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).componentWillMount=function(){W(s.props.history);var e=localStorage.getItem("AuthToken");j.a.defaults.headers.common={Authorization:"".concat(e)},j.a.get("/user").then((function(e){console.log(e.data),s.setState({firstName:e.data.userCredentials.firstName,lastName:e.data.userCredentials.lastName,email:e.data.userCredentials.email,phoneNumber:e.data.userCredentials.phoneNumber,country:e.data.userCredentials.country,username:e.data.userCredentials.username,uiLoading:!1})})).catch((function(e){403===e.response.status&&s.props.history.push("/login"),console.log(e),s.setState({errorMsg:"Error in retrieving the data"})}))},s.handleChange=function(e){s.setState(Object(g.a)({},e.target.name,e.target.value))},s.handleImageChange=function(e){s.setState({image:e.target.files[0]})},s.profilePictureHandler=function(e){e.preventDefault(),s.setState({uiLoading:!0}),W(s.props.history);var t=localStorage.getItem("AuthToken"),a=new FormData;a.append("image",s.state.image),a.append("content",s.state.content),j.a.defaults.headers.common={Authorization:"".concat(t)},j.a.post("/user/image",a,{headers:{"content-type":"multipart/form-data"}}).then((function(){window.location.reload()})).catch((function(e){403===e.response.status&&s.props.history.push("/login"),console.log(e),s.setState({uiLoading:!1,imageError:"Error in posting the data"})}))},s.updateFormValues=function(e){e.preventDefault(),s.setState({buttonLoading:!0}),W(s.props.history);var t=localStorage.getItem("AuthToken");j.a.defaults.headers.common={Authorization:"".concat(t)};var a={firstName:s.state.firstName,lastName:s.state.lastName,country:s.state.country};j.a.post("/user",a).then((function(){s.setState({buttonLoading:!1})})).catch((function(e){403===e.response.status&&s.props.history.push("/login"),console.log(e),s.setState({buttonLoading:!1})}))},s.state={firstName:"",lastName:"",email:"",phoneNumber:"",username:"",country:"",profilePicture:"",uiLoading:!0,buttonLoading:!1,imageError:""},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=Object(b.a)(e,z);return!0===this.state.uiLoading?Object(A.jsxs)("main",{className:t.content,children:[Object(A.jsx)("div",{className:t.toolbar}),this.state.uiLoading&&Object(A.jsx)(v.a,{size:150,className:t.uiProgess})]}):Object(A.jsxs)("main",{className:t.content,children:[Object(A.jsx)("div",{className:t.toolbar}),Object(A.jsxs)(y.a,Object(p.a)(Object(p.a)({},a),{},{className:Object(L.a)(t.root,t),children:[Object(A.jsxs)(w.a,{children:[Object(A.jsx)("div",{className:t.details,children:Object(A.jsxs)("div",{children:[Object(A.jsxs)(O.a,{className:t.locationText,gutterBottom:!0,variant:"h4",children:[this.state.firstName," ",this.state.lastName]}),Object(A.jsx)(S.a,{variant:"outlined",color:"primary",type:"submit",size:"small",startIcon:Object(A.jsx)(C.a,{}),className:t.uploadButton,onClick:this.profilePictureHandler,children:"Upload Photo"}),Object(A.jsx)("input",{type:"file",onChange:this.handleImageChange}),!!this.state.imageError&&Object(A.jsxs)("div",{className:t.customError,children:[" ","Wrong Image Format || Supported Format are PNG and JPG"]})]})}),Object(A.jsx)("div",{className:t.progress})]}),Object(A.jsx)(k.a,{})]})),Object(A.jsx)("br",{}),Object(A.jsx)(y.a,Object(p.a)(Object(p.a)({},a),{},{className:Object(L.a)(t.root,t),children:Object(A.jsxs)("form",{autoComplete:"off",noValidate:!0,children:[Object(A.jsx)(k.a,{}),Object(A.jsx)(w.a,{children:Object(A.jsxs)(P.a,{container:!0,spacing:3,children:[Object(A.jsx)(P.a,{item:!0,md:6,xs:12,children:Object(A.jsx)(T.a,{fullWidth:!0,label:"First name",margin:"dense",name:"firstName",variant:"outlined",value:this.state.firstName,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,md:6,xs:12,children:Object(A.jsx)(T.a,{fullWidth:!0,label:"Last name",margin:"dense",name:"lastName",variant:"outlined",value:this.state.lastName,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,md:6,xs:12,children:Object(A.jsx)(T.a,{fullWidth:!0,label:"Email",margin:"dense",name:"email",variant:"outlined",disabled:!0,value:this.state.email,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,md:6,xs:12,children:Object(A.jsx)(T.a,{fullWidth:!0,label:"Phone Number",margin:"dense",name:"phone",type:"number",variant:"outlined",disabled:!0,value:this.state.phoneNumber,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,md:6,xs:12,children:Object(A.jsx)(T.a,{fullWidth:!0,label:"User Name",margin:"dense",name:"userHandle",disabled:!0,variant:"outlined",value:this.state.username,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,md:6,xs:12,children:Object(A.jsx)(T.a,{fullWidth:!0,label:"Country",margin:"dense",name:"country",variant:"outlined",value:this.state.country,onChange:this.handleChange})})]})}),Object(A.jsx)(k.a,{}),Object(A.jsx)(I.a,{})]})})),Object(A.jsxs)(S.a,{color:"primary",variant:"contained",type:"submit",className:t.submitButton,onClick:this.updateFormValues,disabled:this.state.buttonLoading||!this.state.firstName||!this.state.lastName||!this.state.country,children:["Save details",this.state.buttonLoading&&Object(A.jsx)(v.a,{size:30,className:t.progess})]})]})}}]),a}(s.Component),F=f()((function(e){return{content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar,root:{},details:{display:"flex"},avatar:{height:110,width:100,flexShrink:0,flexGrow:0},locationText:{paddingLeft:"15px"},buttonProperty:{position:"absolute",top:"50%"},uiProgess:{position:"fixed",zIndex:"1000",height:"31px",width:"31px",left:"50%",top:"35%"},progess:{position:"absolute"},uploadButton:{marginLeft:"8px",margin:e.spacing(1)},customError:{color:"red",fontSize:"0.8rem",marginTop:10},submitButton:{marginTop:"10px"}}}))(E),B=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(A.jsxs)("main",{className:e.content,children:[Object(A.jsx)("div",{className:e.toolbar}),Object(A.jsx)(O.a,{paragraph:!0,children:"Hello I am todo"})]})}}]),a}(s.Component),D=f()((function(e){return{content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}))(B),U=a(237),q=a(228),G=a(227),M=a(229),H=a(225),V=a(230),J=a(231),R=a(232),$=a(116),K=a.n($),Q=a(115),X=a.n(Q),Y=a(238),Z=a(117),_=a.n(Z),ee=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={render:!1},s.loadAccountPage=function(e){s.setState({render:!0})},s.loadTodoPage=function(e){s.setState({render:!1})},s.logoutHandler=function(e){localStorage.removeItem("AuthToken"),s.props.history.push("/login")},s.componentWillMount=function(){W(s.props.history);var e=localStorage.getItem("AuthToken");j.a.defaults.headers.common={Authorization:"".concat(e)},j.a.get("/user").then((function(e){console.log(e.data),s.setState({firstName:e.data.userCredentials.firstName,lastName:e.data.userCredentials.lastName,email:e.data.userCredentials.email,username:e.data.userCredentials.username,uiLoading:!1})})).catch((function(e){403===e.response.status&&s.props.history.push("/login"),console.log(e),s.setState({errorMsg:"Error in retrieving the data"})}))},s.state={firstName:"",lastName:"",profilePicture:"",uiLoading:!0,imageLoading:!1},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return!0===this.state.uiLoading?Object(A.jsx)("div",{className:e.root,children:this.state.uiLoading&&Object(A.jsx)(v.a,{size:150,className:e.uiProgess})}):Object(A.jsxs)("div",{className:e.root,children:[Object(A.jsx)(G.a,{}),Object(A.jsx)(q.a,{position:"fixed",className:e.appBar,children:Object(A.jsx)(M.a,{children:Object(A.jsx)(O.a,{variant:"h6",noWrap:!0,children:"MediApp"})})}),Object(A.jsxs)(U.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},children:[Object(A.jsx)("div",{className:e.toolbar}),Object(A.jsx)(k.a,{}),Object(A.jsxs)("center",{children:[Object(A.jsx)(Y.a,{src:this.state.profilePicture,className:e.avatar}),Object(A.jsxs)("p",{children:[" ",this.state.firstName," ",this.state.lastName]})]}),Object(A.jsx)(k.a,{}),Object(A.jsxs)(H.a,{children:[Object(A.jsxs)(V.a,{button:!0,onClick:this.loadTodoPage,children:[Object(A.jsxs)(J.a,{children:[" ",Object(A.jsx)(X.a,{})," "]}),Object(A.jsx)(R.a,{primary:"Todo"})]},"Todo"),Object(A.jsxs)(V.a,{button:!0,onClick:this.loadAccountPage,children:[Object(A.jsxs)(J.a,{children:[" ",Object(A.jsx)(K.a,{})," "]}),Object(A.jsx)(R.a,{primary:"Account"})]},"Account"),Object(A.jsxs)(V.a,{button:!0,onClick:this.logoutHandler,children:[Object(A.jsxs)(J.a,{children:[" ",Object(A.jsx)(_.a,{})," "]}),Object(A.jsx)(R.a,{primary:"Logout"})]},"Logout")]})]}),Object(A.jsx)("div",{children:this.state.render?Object(A.jsx)(F,{}):Object(A.jsx)(D,{})})]})}}]),a}(s.Component),te=f()((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},avatar:{height:110,width:100,flexShrink:0,flexGrow:0,marginTop:20},uiProgess:{position:"fixed",zIndex:"1000",height:"31px",width:"31px",left:"50%",top:"35%"},toolbar:e.mixins.toolbar}}))(ee),ae=a(79),se=a.n(ae),ne=a(234),re=a(233),ie=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(g.a)({},e.target.name,e.target.value))},s.handleSubmit=function(e){e.preventDefault(),s.setState({loading:!0});var t={email:s.state.email,password:s.state.password};j.a.post("/login",t).then((function(e){localStorage.setItem("AuthToken","Bearer ".concat(e.data.token)),s.setState({loading:!1}),s.props.history.push("/")})).catch((function(e){s.setState({errors:e.response.data,loading:!1})}))},s.state={email:"",password:"",errors:[],loading:!1},s}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.errors,s=t.loading;return Object(A.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(A.jsx)(G.a,{}),Object(A.jsxs)("div",{className:e.paper,children:[Object(A.jsx)(Y.a,{className:e.avatar,children:Object(A.jsx)(se.a,{})}),Object(A.jsx)("h2",{children:"Login"}),Object(A.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(A.jsx)(T.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,helperText:a.email,error:!!a.email,onChange:this.handleChange}),Object(A.jsx)(T.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:a.password,error:!!a.password,onChange:this.handleChange}),Object(A.jsxs)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.handleSubmit,disabled:s||!this.state.email||!this.state.password,children:["Sign In",s&&Object(A.jsx)(v.a,{size:30,className:e.progess})]}),Object(A.jsx)(P.a,{container:!0,children:Object(A.jsx)(P.a,{item:!0,children:Object(A.jsx)(ne.a,{href:"signup",variant:"body2",children:"Don't have an account? Sign Up"})})}),a.general&&Object(A.jsx)(O.a,{variant:"body2",className:e.customError,children:a.general})]})]})]})}}]),a}(s.Component),oe=f()((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progess:{position:"absolute"}}}))(ie),ce=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(g.a)({},e.target.name,e.target.value))},s.handleSubmit=function(e){e.preventDefault(),s.setState({loading:!0});var t={firstName:s.state.firstName,lastName:s.state.lastName,phoneNumber:s.state.phoneNumber,country:s.state.country,username:s.state.username,email:s.state.email,password:s.state.password,confirmPassword:s.state.confirmPassword};j.a.post("/signup",t).then((function(e){localStorage.setItem("AuthToken","".concat(e.data.token)),s.setState({loading:!1}),s.props.history.push("/")})).catch((function(e){s.setState({errors:e.response.data,loading:!1})}))},s.state={firstName:"",lastName:"",username:"",email:"",password:"",confirmPassword:"",errors:[],loading:!1},s}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.errors,s=t.loading;return Object(A.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(A.jsx)(G.a,{}),Object(A.jsxs)("div",{className:e.paper,children:[Object(A.jsx)(Y.a,{className:e.avatar,children:Object(A.jsx)(se.a,{})}),Object(A.jsx)(O.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(A.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(A.jsxs)(P.a,{container:!0,spacing:2,children:[Object(A.jsx)(P.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",autoComplete:"firstName",helperText:a.firstName,error:!!a.firstName,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lastName",helperText:a.lastName,error:!!a.lastName,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,xs:12,sm:6,children:Object(A.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",helperText:a.username,error:!!a.username,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,xs:12,children:Object(A.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",helperText:a.email,error:!!a.email,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,xs:12,children:Object(A.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:a.password,error:!!a.password,onChange:this.handleChange})}),Object(A.jsx)(P.a,{item:!0,xs:12,children:Object(A.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",autoComplete:"current-password",onChange:this.handleChange})})]}),Object(A.jsxs)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.handleSubmit,disabled:s||!this.state.email||!this.state.password||!this.state.firstName||!this.state.lastName||!this.state.username,children:["Sign Up",s&&Object(A.jsx)(v.a,{size:30,className:e.progess})]}),Object(A.jsx)(P.a,{container:!0,justify:"flex-end",children:Object(A.jsx)(P.a,{item:!0,children:Object(A.jsx)(ne.a,{href:"login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}}]),a}(s.Component),le=f()((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},progess:{position:"absolute"}}}))(ce);var de=function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Medi App"}),Object(A.jsx)(o.a,{children:Object(A.jsx)("div",{children:Object(A.jsxs)(c.c,{children:[Object(A.jsx)(c.a,{exact:!0,path:"/",component:te}),Object(A.jsx)(c.a,{path:"/login",render:function(){return Object(A.jsx)("div",{children:Object(A.jsx)(oe,{})})}}),Object(A.jsx)(c.a,{exact:!0,path:"/signup",component:le})]})})})]})};a(186),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,240)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(de,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),he()}},[[187,1,2]]]);
//# sourceMappingURL=main.265e987e.chunk.js.map