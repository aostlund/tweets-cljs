// Compiled by ClojureScript 0.0-2268
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13635,args){var map__13637 = p__13635;var map__13637__$1 = ((cljs.core.seq_QMARK_.call(null,map__13637))?cljs.core.apply.call(null,cljs.core.hash_map,map__13637):map__13637);var debug = cljs.core.get.call(null,map__13637__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13635,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13635,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13638){
var p__13635 = cljs.core.first(arglist__13638);
var args = cljs.core.rest(arglist__13638);
return log__delegate(p__13635,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13639){var map__13641 = p__13639;var map__13641__$1 = ((cljs.core.seq_QMARK_.call(null,map__13641))?cljs.core.apply.call(null,cljs.core.hash_map,map__13641):map__13641);var websocket_url = cljs.core.get.call(null,map__13641__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__13642,callback){var map__13644 = p__13642;var map__13644__$1 = ((cljs.core.seq_QMARK_.call(null,map__13644))?cljs.core.apply.call(null,cljs.core.hash_map,map__13644):map__13644);var msg = map__13644__$1;var dependency_file = cljs.core.get.call(null,map__13644__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__13644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__13644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7871__auto__ = dependency_file;if(cljs.core.truth_(or__7871__auto__))
{return or__7871__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13644,map__13644__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13644,map__13644__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__13645,p__13646){var map__13649 = p__13645;var map__13649__$1 = ((cljs.core.seq_QMARK_.call(null,map__13649))?cljs.core.apply.call(null,cljs.core.hash_map,map__13649):map__13649);var opts = map__13649__$1;var url_rewriter = cljs.core.get.call(null,map__13649__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__13650 = p__13646;var map__13650__$1 = ((cljs.core.seq_QMARK_.call(null,map__13650))?cljs.core.apply.call(null,cljs.core.hash_map,map__13650):map__13650);var d = map__13650__$1;var file = cljs.core.get.call(null,map__13650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13651,p__13652){var map__13693 = p__13651;var map__13693__$1 = ((cljs.core.seq_QMARK_.call(null,map__13693))?cljs.core.apply.call(null,cljs.core.hash_map,map__13693):map__13693);var opts = map__13693__$1;var on_jsload = cljs.core.get.call(null,map__13693__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__13693__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__13694 = p__13652;var map__13694__$1 = ((cljs.core.seq_QMARK_.call(null,map__13694))?cljs.core.apply.call(null,cljs.core.hash_map,map__13694):map__13694);var files = cljs.core.get.call(null,map__13694__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11083__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto__,map__13693,map__13693__$1,opts,on_jsload,before_jsload,map__13694,map__13694__$1,files){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto__,map__13693,map__13693__$1,opts,on_jsload,before_jsload,map__13694,map__13694__$1,files){
return (function (state_13716){var state_val_13717 = (state_13716[(1)]);if((state_val_13717 === (6)))
{var inst_13699 = (state_13716[(7)]);var inst_13708 = (state_13716[(2)]);var inst_13709 = [inst_13699];var inst_13710 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13709,null));var inst_13711 = cljs.core.apply.call(null,on_jsload,inst_13710);var state_13716__$1 = (function (){var statearr_13718 = state_13716;(statearr_13718[(8)] = inst_13708);
return statearr_13718;
})();var statearr_13719_13733 = state_13716__$1;(statearr_13719_13733[(2)] = inst_13711);
(statearr_13719_13733[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13717 === (5)))
{var inst_13714 = (state_13716[(2)]);var state_13716__$1 = state_13716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13716__$1,inst_13714);
} else
{if((state_val_13717 === (4)))
{var state_13716__$1 = state_13716;var statearr_13720_13734 = state_13716__$1;(statearr_13720_13734[(2)] = null);
(statearr_13720_13734[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13717 === (3)))
{var inst_13699 = (state_13716[(7)]);var inst_13702 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_13703 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13699);var inst_13704 = cljs.core.prn_str.call(null,inst_13703);var inst_13705 = console.log(inst_13704);var inst_13706 = cljs.core.async.timeout.call(null,(10));var state_13716__$1 = (function (){var statearr_13721 = state_13716;(statearr_13721[(9)] = inst_13702);
(statearr_13721[(10)] = inst_13705);
return statearr_13721;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13716__$1,(6),inst_13706);
} else
{if((state_val_13717 === (2)))
{var inst_13699 = (state_13716[(7)]);var inst_13699__$1 = (state_13716[(2)]);var inst_13700 = cljs.core.not_empty.call(null,inst_13699__$1);var state_13716__$1 = (function (){var statearr_13722 = state_13716;(statearr_13722[(7)] = inst_13699__$1);
return statearr_13722;
})();if(cljs.core.truth_(inst_13700))
{var statearr_13723_13735 = state_13716__$1;(statearr_13723_13735[(1)] = (3));
} else
{var statearr_13724_13736 = state_13716__$1;(statearr_13724_13736[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13717 === (1)))
{var inst_13695 = before_jsload.call(null,files);var inst_13696 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13697 = figwheel.client.load_all_js_files.call(null,inst_13696);var state_13716__$1 = (function (){var statearr_13725 = state_13716;(statearr_13725[(11)] = inst_13695);
return statearr_13725;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13716__$1,(2),inst_13697);
} else
{return null;
}
}
}
}
}
}
});})(c__11083__auto__,map__13693,map__13693__$1,opts,on_jsload,before_jsload,map__13694,map__13694__$1,files))
;return ((function (switch__11018__auto__,c__11083__auto__,map__13693,map__13693__$1,opts,on_jsload,before_jsload,map__13694,map__13694__$1,files){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_13729 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13729[(0)] = state_machine__11019__auto__);
(statearr_13729[(1)] = (1));
return statearr_13729;
});
var state_machine__11019__auto____1 = (function (state_13716){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_13716);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e13730){if((e13730 instanceof Object))
{var ex__11022__auto__ = e13730;var statearr_13731_13737 = state_13716;(statearr_13731_13737[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13716);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13738 = state_13716;
state_13716 = G__13738;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_13716){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_13716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto__,map__13693,map__13693__$1,opts,on_jsload,before_jsload,map__13694,map__13694__$1,files))
})();var state__11085__auto__ = (function (){var statearr_13732 = f__11084__auto__.call(null);(statearr_13732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto__);
return statearr_13732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto__,map__13693,map__13693__$1,opts,on_jsload,before_jsload,map__13694,map__13694__$1,files))
);
return c__11083__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13739,link_href){var map__13741 = p__13739;var map__13741__$1 = ((cljs.core.seq_QMARK_.call(null,map__13741))?cljs.core.apply.call(null,cljs.core.hash_map,map__13741):map__13741);var request_url = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__11083__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto__,parent){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto__,parent){
return (function (state_13762){var state_val_13763 = (state_13762[(1)]);if((state_val_13763 === (2)))
{var inst_13759 = (state_13762[(2)]);var inst_13760 = parent.removeChild(orig_link);var state_13762__$1 = (function (){var statearr_13764 = state_13762;(statearr_13764[(7)] = inst_13759);
return statearr_13764;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13762__$1,inst_13760);
} else
{if((state_val_13763 === (1)))
{var inst_13757 = cljs.core.async.timeout.call(null,(200));var state_13762__$1 = state_13762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13762__$1,(2),inst_13757);
} else
{return null;
}
}
});})(c__11083__auto__,parent))
;return ((function (switch__11018__auto__,c__11083__auto__,parent){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_13768 = [null,null,null,null,null,null,null,null];(statearr_13768[(0)] = state_machine__11019__auto__);
(statearr_13768[(1)] = (1));
return statearr_13768;
});
var state_machine__11019__auto____1 = (function (state_13762){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_13762);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e13769){if((e13769 instanceof Object))
{var ex__11022__auto__ = e13769;var statearr_13770_13772 = state_13762;(statearr_13770_13772[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13773 = state_13762;
state_13762 = G__13773;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_13762){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_13762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto__,parent))
})();var state__11085__auto__ = (function (){var statearr_13771 = f__11084__auto__.call(null);(statearr_13771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto__);
return statearr_13771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto__,parent))
);
return c__11083__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13774){var map__13776 = p__13774;var map__13776__$1 = ((cljs.core.seq_QMARK_.call(null,map__13776))?cljs.core.apply.call(null,cljs.core.hash_map,map__13776):map__13776);var f_data = map__13776__$1;var request_url = cljs.core.get.call(null,map__13776__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13776__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__13777,files_msg){var map__13799 = p__13777;var map__13799__$1 = ((cljs.core.seq_QMARK_.call(null,map__13799))?cljs.core.apply.call(null,cljs.core.hash_map,map__13799):map__13799);var opts = map__13799__$1;var on_cssload = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__13800_13820 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__13801_13821 = null;var count__13802_13822 = (0);var i__13803_13823 = (0);while(true){
if((i__13803_13823 < count__13802_13822))
{var f_13824 = cljs.core._nth.call(null,chunk__13801_13821,i__13803_13823);figwheel.client.reload_css_file.call(null,f_13824);
{
var G__13825 = seq__13800_13820;
var G__13826 = chunk__13801_13821;
var G__13827 = count__13802_13822;
var G__13828 = (i__13803_13823 + (1));
seq__13800_13820 = G__13825;
chunk__13801_13821 = G__13826;
count__13802_13822 = G__13827;
i__13803_13823 = G__13828;
continue;
}
} else
{var temp__4126__auto___13829 = cljs.core.seq.call(null,seq__13800_13820);if(temp__4126__auto___13829)
{var seq__13800_13830__$1 = temp__4126__auto___13829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13800_13830__$1))
{var c__8627__auto___13831 = cljs.core.chunk_first.call(null,seq__13800_13830__$1);{
var G__13832 = cljs.core.chunk_rest.call(null,seq__13800_13830__$1);
var G__13833 = c__8627__auto___13831;
var G__13834 = cljs.core.count.call(null,c__8627__auto___13831);
var G__13835 = (0);
seq__13800_13820 = G__13832;
chunk__13801_13821 = G__13833;
count__13802_13822 = G__13834;
i__13803_13823 = G__13835;
continue;
}
} else
{var f_13836 = cljs.core.first.call(null,seq__13800_13830__$1);figwheel.client.reload_css_file.call(null,f_13836);
{
var G__13837 = cljs.core.next.call(null,seq__13800_13830__$1);
var G__13838 = null;
var G__13839 = (0);
var G__13840 = (0);
seq__13800_13820 = G__13837;
chunk__13801_13821 = G__13838;
count__13802_13822 = G__13839;
i__13803_13823 = G__13840;
continue;
}
}
} else
{}
}
break;
}
var c__11083__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto__,map__13799,map__13799__$1,opts,on_cssload){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto__,map__13799,map__13799__$1,opts,on_cssload){
return (function (state_13810){var state_val_13811 = (state_13810[(1)]);if((state_val_13811 === (2)))
{var inst_13806 = (state_13810[(2)]);var inst_13807 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13808 = on_cssload.call(null,inst_13807);var state_13810__$1 = (function (){var statearr_13812 = state_13810;(statearr_13812[(7)] = inst_13806);
return statearr_13812;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13810__$1,inst_13808);
} else
{if((state_val_13811 === (1)))
{var inst_13804 = cljs.core.async.timeout.call(null,(100));var state_13810__$1 = state_13810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13810__$1,(2),inst_13804);
} else
{return null;
}
}
});})(c__11083__auto__,map__13799,map__13799__$1,opts,on_cssload))
;return ((function (switch__11018__auto__,c__11083__auto__,map__13799,map__13799__$1,opts,on_cssload){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_13816 = [null,null,null,null,null,null,null,null];(statearr_13816[(0)] = state_machine__11019__auto__);
(statearr_13816[(1)] = (1));
return statearr_13816;
});
var state_machine__11019__auto____1 = (function (state_13810){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_13810);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e13817){if((e13817 instanceof Object))
{var ex__11022__auto__ = e13817;var statearr_13818_13841 = state_13810;(statearr_13818_13841[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13842 = state_13810;
state_13810 = G__13842;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_13810){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_13810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto__,map__13799,map__13799__$1,opts,on_cssload))
})();var state__11085__auto__ = (function (){var statearr_13819 = f__11084__auto__.call(null);(statearr_13819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto__);
return statearr_13819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto__,map__13799,map__13799__$1,opts,on_cssload))
);
return c__11083__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13843){var map__13848 = p__13843;var map__13848__$1 = ((cljs.core.seq_QMARK_.call(null,map__13848))?cljs.core.apply.call(null,cljs.core.hash_map,map__13848):map__13848);var opts = map__13848__$1;var on_compile_fail = cljs.core.get.call(null,map__13848__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__13848__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__13848__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__13848__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13849 = cljs.core._EQ_;var expr__13850 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13849.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__13850)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13849.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__13850)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13849.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13850)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13848,map__13848__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13855 = {"detail":url};return obj13855;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__13856){var map__13858 = p__13856;var map__13858__$1 = ((cljs.core.seq_QMARK_.call(null,map__13858))?cljs.core.apply.call(null,cljs.core.hash_map,map__13858):map__13858);var class$ = cljs.core.get.call(null,map__13858__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__13858__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__13859){var map__13865 = p__13859;var map__13865__$1 = ((cljs.core.seq_QMARK_.call(null,map__13865))?cljs.core.apply.call(null,cljs.core.hash_map,map__13865):map__13865);var ed = map__13865__$1;var exception_data = cljs.core.get.call(null,map__13865__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__13865__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__13866_13870 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__13867_13871 = null;var count__13868_13872 = (0);var i__13869_13873 = (0);while(true){
if((i__13869_13873 < count__13868_13872))
{var msg_13874 = cljs.core._nth.call(null,chunk__13867_13871,i__13869_13873);console.log(msg_13874);
{
var G__13875 = seq__13866_13870;
var G__13876 = chunk__13867_13871;
var G__13877 = count__13868_13872;
var G__13878 = (i__13869_13873 + (1));
seq__13866_13870 = G__13875;
chunk__13867_13871 = G__13876;
count__13868_13872 = G__13877;
i__13869_13873 = G__13878;
continue;
}
} else
{var temp__4126__auto___13879 = cljs.core.seq.call(null,seq__13866_13870);if(temp__4126__auto___13879)
{var seq__13866_13880__$1 = temp__4126__auto___13879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13866_13880__$1))
{var c__8627__auto___13881 = cljs.core.chunk_first.call(null,seq__13866_13880__$1);{
var G__13882 = cljs.core.chunk_rest.call(null,seq__13866_13880__$1);
var G__13883 = c__8627__auto___13881;
var G__13884 = cljs.core.count.call(null,c__8627__auto___13881);
var G__13885 = (0);
seq__13866_13870 = G__13882;
chunk__13867_13871 = G__13883;
count__13868_13872 = G__13884;
i__13869_13873 = G__13885;
continue;
}
} else
{var msg_13886 = cljs.core.first.call(null,seq__13866_13880__$1);console.log(msg_13886);
{
var G__13887 = cljs.core.next.call(null,seq__13866_13880__$1);
var G__13888 = null;
var G__13889 = (0);
var G__13890 = (0);
seq__13866_13870 = G__13887;
chunk__13867_13871 = G__13888;
count__13868_13872 = G__13889;
i__13869_13873 = G__13890;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7871__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7871__auto__))
{return or__7871__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13891){var map__13893 = p__13891;var map__13893__$1 = ((cljs.core.seq_QMARK_.call(null,map__13893))?cljs.core.apply.call(null,cljs.core.hash_map,map__13893):map__13893);var opts = map__13893__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__13891 = null;if (arguments.length > 0) {
  p__13891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13891);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13894){
var p__13891 = cljs.core.seq(arglist__13894);
return watch_and_reload__delegate(p__13891);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map