var makeBSS=function(e,t){var s=document.querySelectorAll(e),n={init:function(e,t){this.counter=0,this.el=e,this.$items=e.querySelectorAll("figure"),this.numItems=this.$items.length,(t=t||{}).auto=t.auto||!1,this.opts={auto:void 0!==t.auto&&t.auto,speed:void 0===t.auto.speed?1500:t.auto.speed,pauseOnHover:void 0!==t.auto.pauseOnHover&&t.auto.pauseOnHover,swipe:void 0!==t.swipe&&t.swipe},this.$items[0].classList.add("bss-show"),this.injectControls(e),this.addEventListeners(e),this.opts.auto&&this.autoCycle(this.el,this.opts.speed,this.opts.pauseOnHover),this.opts.fullScreen&&this.addFullScreen(this.el),this.opts.swipe&&this.addSwipe(this.el)},showCurrent:function(e){this.counter=0<e?this.counter+1===this.numItems?0:this.counter+1:this.counter-1<0?this.numItems-1:this.counter-1,[].forEach.call(this.$items,function(e){e.classList.remove("bss-show")}),this.$items[this.counter].classList.add("bss-show")},injectControls:function(e){var t=document.createElement("span"),s=document.createElement("span"),n=document.createDocumentFragment();t.classList.add("bss-prev"),s.classList.add("bss-next"),t.innerHTML="&larr;",s.innerHTML="&rarr;",n.appendChild(t),n.appendChild(s),e.appendChild(n)},addEventListeners:function(e){var t=this;e.querySelector(".bss-next").addEventListener("click",function(){t.showCurrent(1)},!1),e.querySelector(".bss-prev").addEventListener("click",function(){t.showCurrent(-1)},!1),e.onkeydown=function(e){37===(e=e||window.event).keyCode?t.showCurrent(-1):39===e.keyCode&&t.showCurrent(1)}},autoCycle:function(e,t,s){var n=this,i=window.setInterval(function(){n.showCurrent(1)},t);s&&(e.addEventListener("mouseover",function(){i=clearInterval(i)},!1),e.addEventListener("mouseout",function(){i=window.setInterval(function(){n.showCurrent(1)},t)},!1))},addSwipe:function(e){var t=this,s=new Hammer(e);s.on("swiperight",function(e){t.showCurrent(-1)}),s.on("swipeleft",function(e){t.showCurrent(1)})}};[].forEach.call(s,function(e){Object.create(n).init(e,t)})},opts={auto:{speed:5e3,pauseOnHover:!0},swipe:!0};makeBSS(".demo1 , .demo2",opts);