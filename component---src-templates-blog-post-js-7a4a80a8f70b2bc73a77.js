(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(149),s=n.n(i),a=n(148),p=n(7),h=n.n(p),l=n(172),c=n.n(l),d=function(t){function e(){var e;return(e=t.call(this)||this).state={progress:0},e}h()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.progressObserver=new c.a(function(e,n){t.setState({progress:100*n})})},n.componentWillUnmount=function(){this.progressObserver.destroy()},n.render=function(){var t={backgroundColor:"#0175d8",height:"5px",position:"fixed",top:0,left:0,zIndex:9,width:this.state.progress+"%"};return o.a.createElement("div",{className:"progress-bar",style:t})},e}(o.a.Component),g=n(153),u=n.n(g);function m(t){var e=t.data,n=t.location,r=e.markdownRemark,i="https://https://181192.github.io/expr-site";return o.a.createElement(a.a,{location:n},o.a.createElement("div",{className:"blog-post-container"},o.a.createElement(s.a,{title:"ExPr - "+r.frontmatter.title,meta:[{name:"description",content:""+r.frontmatter.ogDescription},{name:"keywords",content:""+r.frontmatter.ogKeywords},{property:"og:type",content:"website"},{property:"og:url",content:""+i+r.frontmatter.path},{property:"og:image",content:u.a},{property:"og:title",content:"ExPr | "+r.frontmatter.title},{property:"og:description",content:""+r.frontmatter.ogDescription}]},o.a.createElement("script",{type:"application/ld+json"},'\n          {\n            "@context": "http://schema.org",\n            "@type": "NewsArticle",\n            "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'+i+r.frontmatter.path+'"\n            },\n            "headline": "'+r.frontmatter.title+'",\n            "name": "'+r.frontmatter.title+'",\n            "author": {\n              "@type": "Person",\n              "name": "'+r.frontmatter.author+'"\n            },\n            "datePublished": "'+r.frontmatter.dateUnformatted+'",\n            "dateModified": "'+r.frontmatter.dateUnformatted+'",\n            "image": [\n              "'+u.a+'",\n              "'+u.a+'",\n              "'+u.a+'"\n            ],\n            "publisher": {\n              "@type": "Organization",\n              "name": "ExPr",\n              "logo": {\n                "@type": "ImageObject",\n                "url": "'+i+'"\n              }\n            },\n            "description": "'+r.excerpt+'",\n            "articleSection": "'+r.excerpt+'",\n            "url": "'+i+r.frontmatter.path+'"\n          }\n        ')),o.a.createElement("div",{className:"blog-post"},o.a.createElement(d,null),o.a.createElement("h1",null,r.frontmatter.title),o.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:r.html}}))))}n.d(e,"default",function(){return m}),n.d(e,"pageQuery",function(){return w});var w="271043444"},172:function(t,e,n){t.exports=function(){"use strict";function t(){}var e=function(e){this._handleUpdate="function"==typeof e?e:t,this._viewportHeight=this._getViewportHeight(),this._viewportWidth=this._getViewportWidth(),this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y),this._onScroll=this._onScroll.bind(this),this._onResize=this._onResize.bind(this),window.addEventListener("scroll",this._onScroll),window.addEventListener("resize",this._onResize)};return e.prototype._getViewportHeight=function(){return document.body.scrollHeight-window.innerHeight},e.prototype._getViewportWidth=function(){return document.body.scrollWidth-window.innerWidth},e.prototype._getProgress=function(){var t=void 0===window.scrollX?window.pageXOffset:window.scrollX,e=void 0===window.scrollY?window.pageYOffset:window.scrollY;return{x:0===this._viewportWidth?0:t/this._viewportWidth,y:0===this._viewportHeight?0:e/this._viewportHeight}},e.prototype._onScroll=function(){this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y)},e.prototype._onResize=function(){this._viewportHeight=this._getViewportHeight(),this._viewportWidth=this._getViewportWidth(),this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y)},e.prototype.trigger=function(){this._handleUpdate(this._progress.x,this._progress.y)},e.prototype.destroy=function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("resize",this._onResize),this._handleUpdate=null},e}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7a4a80a8f70b2bc73a77.js.map