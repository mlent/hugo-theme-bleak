jQuery(function(a){function b(a){n?(a.removeClass("active"),l.removeClass("menu-active"),setTimeout(function(){a.removeClass("initial"),l.removeClass("menu-initial")},300),n=!1):(l.addClass("menu-initial"),a.addClass("initial"),setTimeout(function(){l.addClass("menu-active"),a.addClass("active")},1),n=!0)}function c(){a(".menu-list-item a").each(function(){var b=a(this);b.removeClass("current"),b.attr("href")==window.location.href&&b.addClass("current")})}function d(){a(".post-list .post .post-image img").each(function(){var b=a(this);b.load(function(){b.parents(".post-image").css({height:"0","padding-bottom":100/b.width()*b.height()+"%"})})});var b=a(".post-list").masonry({itemSelector:".post",isAnimated:!1,gutter:0,columnWidth:1,transitionDuration:0}).imagesLoaded().always(function(){b.masonry("layout")})}function e(){a("pre code").each(function(b,c){hljs.highlightBlock(c);var d=a(this),e=d.html().split(/\n/).length,f=[];for(b=1;e>b;b++)f+='<span class="line">'+b+"</span>";d.parent().addClass("codeblock").append('<div class="lines">'+f+"</div>")})}function f(){a("#wrapper").fitVids()}function g(){if("undefined"!=typeof disqus_shortname&&document.getElementById("disqus_thread")){if(window.DISQUS)return DISQUS.reset({reload:!0,config:function(){this.page.identifier=location.pathname,this.page.url=location.origin+location.pathname}});a.ajax({type:"GET",url:"//"+disqus_shortname+".disqus.com/embed.js",dataType:"script",cache:!0})}else a(".post-comments").css({display:"none"})}function h(){a("[data-gist-id]").gist()}function i(){a("img[data-src]").unveil().imgPin({position:2,pinImg:"//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png"})}function j(){d(),k(),e(),f(),g(),h(),c(),i()}function k(){a('a[href^="'+window.location.origin+'"], .post-image a, .post-title a, .post-more a, .post-meta a, .post-tags a, #pagination a').each(function(){var b=a(this);b.hasClass("rss")||(b.addClass("js-ajax-link"),b.attr("href").indexOf("page")>-1&&b.addClass("js-archive-index"),b.attr("href")==window.location.origin&&b.addClass("js-show-index"),b.attr("href").indexOf("tag")>-1&&b.addClass("js-tag-index"),b.attr("href").indexOf("author")>-1&&b.addClass("js-author-index"))})}var l=a("html"),m=a("body");i(),m.on("click",'[data-action="menu"]',function(){var c=(a(this).data("action"),a('[data-target="'+a(this).data("target")+'"]').not("[data-action]"));b(c)});var n=!1;m.on("click",".overlay, #menu a",function(){if(l.hasClass("menu-active")){var c=a('[data-target="menu"]').not("[data-action]");b(c)}}),c(),d(),e(),f(),g(),h(),k();var o=window.History,p=!1,q=a("#ajax-container");return o.enabled?(o.Adapter.bind(window,"statechange",function(){l.addClass("loading");var b=o.getState();a.get(b.url,function(b){var c=a(b),d=a("#ajax-container",c).contents(),e=b.match(/<title>(.*?)<\/title>/)[1];q.fadeOut(500,function(){l.hasClass("push-next")&&(l.removeClass("push-next"),l.addClass("pushed-next")),l.hasClass("push-prev")&&(l.removeClass("push-prev"),l.addClass("pushed-prev")),document.title=a("<textarea/>").html(e).text(),q.html(d),m.removeClass(),m.addClass(a("#body-class").attr("class")),NProgress.done(),q.fadeIn(500),a(document).scrollTop(0),setTimeout(function(){l.removeClass("loading")},50),j(),p=!1})})}),a("body").on("click",".js-ajax-link",function(b){b.preventDefault();var c=a(this);if(c.hasClass("post-nav-item")||c.hasClass("pagination-item")?((c.hasClass("post-nav-next")||c.hasClass("pagination-next"))&&(l.removeClass("pushed-prev"),l.addClass("push-next")),(c.hasClass("post-nav-prev")||c.hasClass("pagination-prev"))&&(l.removeClass("pushed-next"),l.addClass("push-prev"))):(l.removeClass("pushed-next"),l.removeClass("pushed-prev")),p===!1){var d=o.getState(),e=a(this).prop("href"),f=a(this).attr("title")||null;e.replace(/\/$/,"")!==d.url.replace(/\/$/,"")&&(p=!0,l.addClass("loading"),NProgress.start(),o.pushState({},f,e))}}),void a("body").on("click","#post-index .post .js-ajax-link",function(){var b=a(this).parents(".post");b.addClass("initial"),setTimeout(function(){b.addClass("active")},1)})):!1}),function(a){function b(a){var b,c,d=[];if("number"==typeof a)d.push(a);else{c=a.split(",");for(var e=0;e<c.length;e++)if(b=c[e].split("-"),2===b.length)for(var f=parseInt(b[0],10);f<=b[1];f++)d.push(f);else 1===b.length&&d.push(parseInt(b[0],10))}return d}a.fn.gist=function(){return this.each(function(){var c,d,e,f,g,h,i,j,k,l,m=a(this),n={};return m.css("display","block"),c=m.data("gist-id")||"",e=m.data("gist-file"),i=m.data("gist-hide-footer")===!0,j=m.data("gist-hide-line-numbers")===!0,f=m.data("gist-line"),h=m.data("gist-highlight-line"),l=m.data("gist-show-spinner")===!0,k=l?!1:void 0!==m.data("gist-show-loading")?m.data("gist-show-loading"):!0,e&&(n.file=e),c?(d="https://gist.github.com/"+c+".json",g="Loading gist "+d+(n.file?", file: "+n.file:"")+"...",k&&m.html(g),l&&m.html('<img style="display:block;margin-left:auto;margin-right:auto"  alt="'+g+'" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif">'),void a.ajax({url:d,data:n,dataType:"jsonp",timeout:1e4,success:function(c){var e,g,k,l,n;c&&c.div?(c.stylesheet&&(0===c.stylesheet.indexOf("<link")?c.stylesheet=c.stylesheet.replace(/\\/g,"").match(/href=\"([^\s]*)\"/)[1]:0!==c.stylesheet.indexOf("http")&&(0!==c.stylesheet.indexOf("/")&&(c.stylesheet="/"+c.stylesheet),c.stylesheet="https://gist.github.com"+c.stylesheet)),c.stylesheet&&0===a('link[href="'+c.stylesheet+'"]').length&&(e=document.createElement("link"),g=document.getElementsByTagName("head")[0],e.type="text/css",e.rel="stylesheet",e.href=c.stylesheet,g.insertBefore(e,g.firstChild)),n=a(c.div),n.removeAttr("id"),m.html("").append(n),h&&(l=b(h),n.find("td.line-data").css({width:"100%"}),n.find(".js-file-line").each(function(b){-1!==a.inArray(b+1,l)&&a(this).css({"background-color":"rgb(255, 255, 204)"})})),f&&(k=b(f),n.find(".js-file-line").each(function(b){-1===a.inArray(b+1,k)&&a(this).parent().remove()})),i&&(n.find(".gist-meta").remove(),n.find(".gist-data").css("border-bottom","0px"),n.find(".gist-file").css("border-bottom","1px solid #ddd")),j&&n.find(".js-line-number").remove()):m.html("Failed loading gist "+d)},error:function(a,b){m.html("Failed loading gist "+d+": "+b)}})):!1})},a(function(){a("[data-gist-id]").gist()})}(jQuery),function(a){a.fn.imgPin=function(b){var c={pinImg:"https://assets.pinterest.com/images/pidgets/pin_it_button.png",position:1},b=a.extend({},c,b),d=encodeURIComponent(document.URL),e=b.pinImg,f="";switch(b.position){case 1:f="top left";break;case 2:f="top right";break;case 3:f="bottom right";break;case 4:f="bottom left";break;case 5:f="center"}this.each(function(){var c=window.location.port,g="http://"+window.location.hostname+(c?":"+c:"")+(a(this).attr("src")||a(this).attr("data-src")),i=d,j=new Image;j.src=g;var k=a(this).attr("title")||a(this).attr("alt"),l=k+" ("+encodeURIComponent(document.title)+")",m=encodeURIComponent(g),n="https://www.pinterest.com/pin/create/button/";if(n+="?url="+i,n+="&media="+m,n+="&description="+l,a(this).wrap('<div class="imgPinWrap">').after('<a href="'+n+'" class="pin '+f+'"><img src="'+e+'" alt="Pin this!"></a>'),5==b.position){var j=new Image;j.onload=function(){var b=this.width;h=this.height,a(".imgPinWrap .pin.center").css("margin-left",-b/2).css("margin-top",-h/2)},j.src=e}a(".imgPinWrap .pin").click(function(){var a=700,b=400,c=screen.width/2-a/2,d=screen.height/2-b/2,e=window.open(this.href,"imgPngWindow","toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=700, height=400");return e.moveTo(c,d),!1})})}}(jQuery);