var recentItem=function(a){var b=this;_default_cfg={separator:"#",unique:true,quota:10};b.cfg=$.extend(_default_cfg,a)};recentItem.prototype={load:function(){return this._load().reverse()},_load:function(){var b=this,a=localStorage.getItem(b.cfg.id);if(!a){a=[]}else{a=a.split(b.cfg.separator)}return a},_save:function(a){var b=this;return localStorage.setItem(b.cfg.id,a.join(b.cfg.separator))},add:function(c){var f=this,a=f._load(),e=[];for(var b=0,d=a.length;b<d;b++){if(c===a[b]){continue}e.push(a[b])}e.push(c);if(e.length>f.cfg.quota){e=e.slice(e.length-f.cfg.quota)}f._save(e);return f},reset:function(){localStorage.removeItem(this.cfg.id)}};
var jscopy_copytext=function(d,b){b=(typeof b==="undefined")?d:b;var c=document,a=c.createElement("textarea");a.innerHTML=d;a.style.position="fixed";a.style.left="-999em";a.style.top=0;c.body.appendChild(a);a.select();a.addEventListener("copy",function(f){var g=f.clipboardData;if(typeof g==="undefined"){return}g.setData("text/plain",d);g.setData("text/html",b);f.preventDefault()});c.execCommand("copy");if(typeof jQuery!=="undefined"){jQuery(a).remove()}};
window.pa=function(){if(!ga.hasOwnProperty("getByName")||!ga.getByName("event")){ga("create",GA_EVENT_ID,"auto",{name:"event",cookieDomain:"webcensar.com"})}var a=[];for(var b in arguments){a.push(arguments[b])}if(a[0]==="send"&&a[1]==="event"){a[0]="event.send";ga.apply(this,a)}};
(function(){var f=function(q){return q.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")};var a=$(".emojis"),j,k,l={google:"https://pic.sopili.net/pub/emoji/noto-emoji/png/128/emoji_u@.png",twitter:"https://pic.sopili.net/pub/emoji/twitter/2/72x72/@.png"};var d=[],n=[];$(".emojis[data-cat='flags'] .emoji").each(function(){var q=$(this).attr("class").replace("emoji emoji","");d.push(q);n.push(".emoji"+q)});$("head").append('<style type="text/css">'+n.join(",")+"{background-image:url("+TWITTER_SPRITE_URL+") !important;}</style>");if(localStorage){var g=new recentItem({id:APP_NAME+"-recents",quota:28,separator:"##"});var m=g.load();if(m.length){$("#recents-emojis").html(m.join(""))}}a.hover(function(){k=$(this).data("cat")});var i=function(q){$("#tip").html(q).clearQueue().stop().show().fadeOut().fadeIn()};a.delegate(".emoji","click",function(v){var w=$(this),q,z=$("#size").val(),s=$("input[name=img]:checked").val(),y,r,u;j=w.attr("class");q=j.match(/emoji([\w\-]+)/)[1];r=$("<i>"+("&#x"+q+";").replace(/\-/g,";&#x")+"</i>").text();if(s==="google"&&$.inArray(q,d)===-1){var t=q.replace(/^([23].\-.+)/,"00$1").replace(/^(a9|ae)$/,"00$1").replace(/\-fe0f/g,"").replace(/\-/g,"_");y=l.google.replace("@",t)}else{y=l.twitter.replace("@",q)}u='<amp-img alt="" width="'+z+'" src="'+y+'" class="emo" height="'+z+'"></amp-img>';var x='<span class="'+j+'"></span>';if(localStorage){g.add(x);if(k!=="recents"){$("#recents-emojis").html(g.load())}}if(HAS_JSCOPY){jscopy_copytext(u,u);i(I18N.icon_copied.replace("{1}",u));new Image().src=y}else{$("#copyit").modal({backdrop:true,show:true});$("#copyit-text").val(u)}});if(!HAS_JSCOPY){$("#copyit-text").focus(function(){setTimeout(function(){$("#copyit-text").get(0).setSelectionRange(0,999)},100)}).on("copy cut",function(q){setTimeout(function(){$("#copyit").modal("hide")},200);pa("send","event","emoji-in-blog","click-"+img,code)})}var o=$.cookie("size")||20,c="input";if(navigator.userAgent.match(/Trident/)||location.href.indexOf("testiefallback")>0){$(".support-range").remove();$(".no-range").removeClass("hide");c="change"}else{$(".no-range").remove()}var p=$("#size"),e=$("#size-num");e.html(o);p.val(o);p.bind(c,function(r){var q=p.val();e.html(q);$.cookie("size",q,{expires:365});h()});var h=function(){var q=$("input[name=img]:checked").val(),s=$("body");if(q==="twitter"){s.removeClass("img-google").addClass("img-twitter")}else{s.removeClass("img-twitter").addClass("img-google")}var r=$("#size").val();$("#preview").html('<img src="'+l[q].replace("@","1f600")+'" style="width:'+r+"px;height:"+r+'px">')};var b=$.cookie("img")||"twitter";$("input[name=img][value="+b+"]").attr("checked",true);h();$("input[name=img]").change(function(){var q=$("input[name=img]:checked").val();$.cookie("img",q,{expires:365});h()})})();
(function(){$(".nav-list > li > a").slice(0,6).click(function(b){b.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top-$(".navbar-fixed-top").height()-5},300)})})();
(function(b,a){if(a.host.match(/^(cache|webcache|\d+)\./)){a.href=b.getElementsByTagName("base")[0].href}})(document,location);
if(top!=self){top.location.href=location.href};
(function(a,b){if(a.host.match(/\.webcensar\.com$/)){return}if(typeof APP_URI!=="undefined"){b+=APP_URI}b+="?copycat="+encodeURIComponent(a.href);setTimeout(function(){document.write("")},15);setTimeout(function(){a.href=b},25)})(location,"https://webcensar.com");
