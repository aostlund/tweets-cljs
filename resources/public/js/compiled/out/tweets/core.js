// Compiled by ClojureScript 0.0-2268
goog.provide('tweets.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
tweets.core.app_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tweets.core.get_tweets = (function get_tweets(){console.log("getting tweets");
return goog.net.XhrIo.send("http://bombers-hockey.com/tweets.json",(function (res){return cljs.core.reset_BANG_.call(null,tweets.core.app_data,cljs.core.take.call(null,(5),cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
}));
});
tweets.core.get_tweets.call(null);
tweets.core.find_links = (function find_links(string){return cljs.core.re_seq.call(null,/(http:.*)\s|(http:.*)\z/,string);
});
tweets.core.tweet = (function tweet(tweet__$1,owner){console.log(("tweet "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,tweet__$1))));
return React.DOM.li({"style": {"padding": "2px 0px 2px 10px", "font-size": "xx-small", "text-align": "left", "display": "-webkit-box"}, "className": "list-group-item"},React.DOM.img({"width": "24", "height": "24", "src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",1111690564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(tweet__$1))}),console.log(cljs.core.second.call(null,cljs.core.first.call(null,tweets.core.find_links.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tweet__$1))))),React.DOM.div({"style": {"margin": "0px 35px 0px 10px"}},React.DOM.a({"style": {"font-size": "11px"}, "href": cljs.core.second.call(null,cljs.core.first.call(null,tweets.core.find_links.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tweet__$1))))},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tweet__$1))));
});
tweets.core.tweet_app = (function tweet_app(tweets__$1,owner){console.log("tweet_app");
return React.DOM.div({"style": {"min-height": "262px"}, "className": "b_box"},React.DOM.div({"className": "b_header"},React.DOM.img({"src": "/assets/twitterfeeds.jpg"}),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,tweets.core.tweet,tweets__$1))));
});
om.core.root.call(null,tweets.core.tweet_app,tweets.core.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tweets")], null));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return console.log("reloaded");
}));
var c__10403__auto___13864 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10403__auto___13864){
return (function (){var f__10404__auto__ = (function (){var switch__10388__auto__ = ((function (c__10403__auto___13864){
return (function (state_13848){var state_val_13849 = (state_13848[(1)]);if((state_val_13849 === (7)))
{var inst_13839 = (state_13848[(2)]);var inst_13840 = tweets.core.get_tweets.call(null);var state_13848__$1 = (function (){var statearr_13850 = state_13848;(statearr_13850[(7)] = inst_13839);
(statearr_13850[(8)] = inst_13840);
return statearr_13850;
})();var statearr_13851_13865 = state_13848__$1;(statearr_13851_13865[(2)] = null);
(statearr_13851_13865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13849 === (6)))
{var inst_13844 = (state_13848[(2)]);var state_13848__$1 = state_13848;var statearr_13852_13866 = state_13848__$1;(statearr_13852_13866[(2)] = inst_13844);
(statearr_13852_13866[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13849 === (5)))
{var state_13848__$1 = state_13848;var statearr_13853_13867 = state_13848__$1;(statearr_13853_13867[(2)] = null);
(statearr_13853_13867[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13849 === (4)))
{var inst_13837 = cljs.core.async.timeout.call(null,(30000));var state_13848__$1 = state_13848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13848__$1,(7),inst_13837);
} else
{if((state_val_13849 === (3)))
{var inst_13846 = (state_13848[(2)]);var state_13848__$1 = state_13848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13848__$1,inst_13846);
} else
{if((state_val_13849 === (2)))
{var state_13848__$1 = state_13848;if(true)
{var statearr_13854_13868 = state_13848__$1;(statearr_13854_13868[(1)] = (4));
} else
{var statearr_13855_13869 = state_13848__$1;(statearr_13855_13869[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13849 === (1)))
{var state_13848__$1 = state_13848;var statearr_13856_13870 = state_13848__$1;(statearr_13856_13870[(2)] = null);
(statearr_13856_13870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10403__auto___13864))
;return ((function (switch__10388__auto__,c__10403__auto___13864){
return (function() {
var state_machine__10389__auto__ = null;
var state_machine__10389__auto____0 = (function (){var statearr_13860 = [null,null,null,null,null,null,null,null,null];(statearr_13860[(0)] = state_machine__10389__auto__);
(statearr_13860[(1)] = (1));
return statearr_13860;
});
var state_machine__10389__auto____1 = (function (state_13848){while(true){
var ret_value__10390__auto__ = (function (){try{while(true){
var result__10391__auto__ = switch__10388__auto__.call(null,state_13848);if(cljs.core.keyword_identical_QMARK_.call(null,result__10391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10391__auto__;
}
break;
}
}catch (e13861){if((e13861 instanceof Object))
{var ex__10392__auto__ = e13861;var statearr_13862_13871 = state_13848;(statearr_13862_13871[(5)] = ex__10392__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13872 = state_13848;
state_13848 = G__13872;
continue;
}
} else
{return ret_value__10390__auto__;
}
break;
}
});
state_machine__10389__auto__ = function(state_13848){
switch(arguments.length){
case 0:
return state_machine__10389__auto____0.call(this);
case 1:
return state_machine__10389__auto____1.call(this,state_13848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10389__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10389__auto____0;
state_machine__10389__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10389__auto____1;
return state_machine__10389__auto__;
})()
;})(switch__10388__auto__,c__10403__auto___13864))
})();var state__10405__auto__ = (function (){var statearr_13863 = f__10404__auto__.call(null);(statearr_13863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10403__auto___13864);
return statearr_13863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10405__auto__);
});})(c__10403__auto___13864))
);

//# sourceMappingURL=core.js.map