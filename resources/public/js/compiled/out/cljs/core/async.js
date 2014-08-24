// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14023 = (function (f,fn_handler,meta14024){
this.f = f;
this.fn_handler = fn_handler;
this.meta14024 = meta14024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14023.cljs$lang$type = true;
cljs.core.async.t14023.cljs$lang$ctorStr = "cljs.core.async/t14023";
cljs.core.async.t14023.cljs$lang$ctorPrWriter = (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t14023");
});
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14025){var self__ = this;
var _14025__$1 = this;return self__.meta14024;
});
cljs.core.async.t14023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14025,meta14024__$1){var self__ = this;
var _14025__$1 = this;return (new cljs.core.async.t14023(self__.f,self__.fn_handler,meta14024__$1));
});
cljs.core.async.__GT_t14023 = (function __GT_t14023(f__$1,fn_handler__$1,meta14024){return (new cljs.core.async.t14023(f__$1,fn_handler__$1,meta14024));
});
}
return (new cljs.core.async.t14023(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14027 = buff;if(G__14027)
{var bit__8521__auto__ = null;if(cljs.core.truth_((function (){var or__7871__auto__ = bit__8521__auto__;if(cljs.core.truth_(or__7871__auto__))
{return or__7871__auto__;
} else
{return G__14027.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14027.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14027);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14027);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14028 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14028);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14028,ret){
return (function (){return fn1.call(null,val_14028);
});})(val_14028,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7859__auto__ = ret;if(cljs.core.truth_(and__7859__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7859__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8727__auto___14029 = n;var x_14030 = (0);while(true){
if((x_14030 < n__8727__auto___14029))
{(a[x_14030] = (0));
{
var G__14031 = (x_14030 + (1));
x_14030 = G__14031;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14032 = (i + (1));
i = G__14032;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14036 = (function (flag,alt_flag,meta14037){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14037 = meta14037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14036.cljs$lang$type = true;
cljs.core.async.t14036.cljs$lang$ctorStr = "cljs.core.async/t14036";
cljs.core.async.t14036.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t14036");
});})(flag))
;
cljs.core.async.t14036.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14038){var self__ = this;
var _14038__$1 = this;return self__.meta14037;
});})(flag))
;
cljs.core.async.t14036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14038,meta14037__$1){var self__ = this;
var _14038__$1 = this;return (new cljs.core.async.t14036(self__.flag,self__.alt_flag,meta14037__$1));
});})(flag))
;
cljs.core.async.__GT_t14036 = ((function (flag){
return (function __GT_t14036(flag__$1,alt_flag__$1,meta14037){return (new cljs.core.async.t14036(flag__$1,alt_flag__$1,meta14037));
});})(flag))
;
}
return (new cljs.core.async.t14036(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14042 = (function (cb,flag,alt_handler,meta14043){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14043 = meta14043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14042.cljs$lang$type = true;
cljs.core.async.t14042.cljs$lang$ctorStr = "cljs.core.async/t14042";
cljs.core.async.t14042.cljs$lang$ctorPrWriter = (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t14042");
});
cljs.core.async.t14042.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14044){var self__ = this;
var _14044__$1 = this;return self__.meta14043;
});
cljs.core.async.t14042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14044,meta14043__$1){var self__ = this;
var _14044__$1 = this;return (new cljs.core.async.t14042(self__.cb,self__.flag,self__.alt_handler,meta14043__$1));
});
cljs.core.async.__GT_t14042 = (function __GT_t14042(cb__$1,flag__$1,alt_handler__$1,meta14043){return (new cljs.core.async.t14042(cb__$1,flag__$1,alt_handler__$1,meta14043));
});
}
return (new cljs.core.async.t14042(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14045_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14045_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7871__auto__ = wport;if(cljs.core.truth_(or__7871__auto__))
{return or__7871__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14046 = (i + (1));
i = G__14046;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7871__auto__ = ret;if(cljs.core.truth_(or__7871__auto__))
{return or__7871__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7859__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7859__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7859__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14047){var map__14049 = p__14047;var map__14049__$1 = ((cljs.core.seq_QMARK_.call(null,map__14049))?cljs.core.apply.call(null,cljs.core.hash_map,map__14049):map__14049);var opts = map__14049__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14047 = null;if (arguments.length > 1) {
  p__14047 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14047);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14050){
var ports = cljs.core.first(arglist__14050);
var p__14047 = cljs.core.rest(arglist__14050);
return alts_BANG___delegate(ports,p__14047);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14058 = (function (ch,f,map_LT_,meta14059){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14059 = meta14059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14058.cljs$lang$type = true;
cljs.core.async.t14058.cljs$lang$ctorStr = "cljs.core.async/t14058";
cljs.core.async.t14058.cljs$lang$ctorPrWriter = (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t14058");
});
cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14061 = (function (fn1,_,meta14059,ch,f,map_LT_,meta14062){
this.fn1 = fn1;
this._ = _;
this.meta14059 = meta14059;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14062 = meta14062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14061.cljs$lang$type = true;
cljs.core.async.t14061.cljs$lang$ctorStr = "cljs.core.async/t14061";
cljs.core.async.t14061.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t14061");
});})(___$1))
;
cljs.core.async.t14061.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14061.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14051_SHARP_){return f1.call(null,(((p1__14051_SHARP_ == null))?null:self__.f.call(null,p1__14051_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14063){var self__ = this;
var _14063__$1 = this;return self__.meta14062;
});})(___$1))
;
cljs.core.async.t14061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14063,meta14062__$1){var self__ = this;
var _14063__$1 = this;return (new cljs.core.async.t14061(self__.fn1,self__._,self__.meta14059,self__.ch,self__.f,self__.map_LT_,meta14062__$1));
});})(___$1))
;
cljs.core.async.__GT_t14061 = ((function (___$1){
return (function __GT_t14061(fn1__$1,___$2,meta14059__$1,ch__$2,f__$2,map_LT___$2,meta14062){return (new cljs.core.async.t14061(fn1__$1,___$2,meta14059__$1,ch__$2,f__$2,map_LT___$2,meta14062));
});})(___$1))
;
}
return (new cljs.core.async.t14061(fn1,___$1,self__.meta14059,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7859__auto__ = ret;if(cljs.core.truth_(and__7859__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7859__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14060){var self__ = this;
var _14060__$1 = this;return self__.meta14059;
});
cljs.core.async.t14058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14060,meta14059__$1){var self__ = this;
var _14060__$1 = this;return (new cljs.core.async.t14058(self__.ch,self__.f,self__.map_LT_,meta14059__$1));
});
cljs.core.async.__GT_t14058 = (function __GT_t14058(ch__$1,f__$1,map_LT___$1,meta14059){return (new cljs.core.async.t14058(ch__$1,f__$1,map_LT___$1,meta14059));
});
}
return (new cljs.core.async.t14058(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14067 = (function (ch,f,map_GT_,meta14068){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14068 = meta14068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14067.cljs$lang$type = true;
cljs.core.async.t14067.cljs$lang$ctorStr = "cljs.core.async/t14067";
cljs.core.async.t14067.cljs$lang$ctorPrWriter = (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t14067");
});
cljs.core.async.t14067.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14067.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14067.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14069){var self__ = this;
var _14069__$1 = this;return self__.meta14068;
});
cljs.core.async.t14067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14069,meta14068__$1){var self__ = this;
var _14069__$1 = this;return (new cljs.core.async.t14067(self__.ch,self__.f,self__.map_GT_,meta14068__$1));
});
cljs.core.async.__GT_t14067 = (function __GT_t14067(ch__$1,f__$1,map_GT___$1,meta14068){return (new cljs.core.async.t14067(ch__$1,f__$1,map_GT___$1,meta14068));
});
}
return (new cljs.core.async.t14067(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14073 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14073 = (function (ch,p,filter_GT_,meta14074){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14074 = meta14074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14073.cljs$lang$type = true;
cljs.core.async.t14073.cljs$lang$ctorStr = "cljs.core.async/t14073";
cljs.core.async.t14073.cljs$lang$ctorPrWriter = (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t14073");
});
cljs.core.async.t14073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14073.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14075){var self__ = this;
var _14075__$1 = this;return self__.meta14074;
});
cljs.core.async.t14073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14075,meta14074__$1){var self__ = this;
var _14075__$1 = this;return (new cljs.core.async.t14073(self__.ch,self__.p,self__.filter_GT_,meta14074__$1));
});
cljs.core.async.__GT_t14073 = (function __GT_t14073(ch__$1,p__$1,filter_GT___$1,meta14074){return (new cljs.core.async.t14073(ch__$1,p__$1,filter_GT___$1,meta14074));
});
}
return (new cljs.core.async.t14073(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11083__auto___14158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___14158,out){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___14158,out){
return (function (state_14137){var state_val_14138 = (state_14137[(1)]);if((state_val_14138 === (7)))
{var inst_14133 = (state_14137[(2)]);var state_14137__$1 = state_14137;var statearr_14139_14159 = state_14137__$1;(statearr_14139_14159[(2)] = inst_14133);
(statearr_14139_14159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14138 === (1)))
{var state_14137__$1 = state_14137;var statearr_14140_14160 = state_14137__$1;(statearr_14140_14160[(2)] = null);
(statearr_14140_14160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14138 === (4)))
{var inst_14119 = (state_14137[(7)]);var inst_14119__$1 = (state_14137[(2)]);var inst_14120 = (inst_14119__$1 == null);var state_14137__$1 = (function (){var statearr_14141 = state_14137;(statearr_14141[(7)] = inst_14119__$1);
return statearr_14141;
})();if(cljs.core.truth_(inst_14120))
{var statearr_14142_14161 = state_14137__$1;(statearr_14142_14161[(1)] = (5));
} else
{var statearr_14143_14162 = state_14137__$1;(statearr_14143_14162[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14138 === (6)))
{var inst_14119 = (state_14137[(7)]);var inst_14124 = p.call(null,inst_14119);var state_14137__$1 = state_14137;if(cljs.core.truth_(inst_14124))
{var statearr_14144_14163 = state_14137__$1;(statearr_14144_14163[(1)] = (8));
} else
{var statearr_14145_14164 = state_14137__$1;(statearr_14145_14164[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14138 === (3)))
{var inst_14135 = (state_14137[(2)]);var state_14137__$1 = state_14137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14137__$1,inst_14135);
} else
{if((state_val_14138 === (2)))
{var state_14137__$1 = state_14137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14137__$1,(4),ch);
} else
{if((state_val_14138 === (11)))
{var inst_14127 = (state_14137[(2)]);var state_14137__$1 = state_14137;var statearr_14146_14165 = state_14137__$1;(statearr_14146_14165[(2)] = inst_14127);
(statearr_14146_14165[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14138 === (9)))
{var state_14137__$1 = state_14137;var statearr_14147_14166 = state_14137__$1;(statearr_14147_14166[(2)] = null);
(statearr_14147_14166[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14138 === (5)))
{var inst_14122 = cljs.core.async.close_BANG_.call(null,out);var state_14137__$1 = state_14137;var statearr_14148_14167 = state_14137__$1;(statearr_14148_14167[(2)] = inst_14122);
(statearr_14148_14167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14138 === (10)))
{var inst_14130 = (state_14137[(2)]);var state_14137__$1 = (function (){var statearr_14149 = state_14137;(statearr_14149[(8)] = inst_14130);
return statearr_14149;
})();var statearr_14150_14168 = state_14137__$1;(statearr_14150_14168[(2)] = null);
(statearr_14150_14168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14138 === (8)))
{var inst_14119 = (state_14137[(7)]);var state_14137__$1 = state_14137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14137__$1,(11),out,inst_14119);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11083__auto___14158,out))
;return ((function (switch__11018__auto__,c__11083__auto___14158,out){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_14154 = [null,null,null,null,null,null,null,null,null];(statearr_14154[(0)] = state_machine__11019__auto__);
(statearr_14154[(1)] = (1));
return statearr_14154;
});
var state_machine__11019__auto____1 = (function (state_14137){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_14137);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e14155){if((e14155 instanceof Object))
{var ex__11022__auto__ = e14155;var statearr_14156_14169 = state_14137;(statearr_14156_14169[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14170 = state_14137;
state_14137 = G__14170;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_14137){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_14137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___14158,out))
})();var state__11085__auto__ = (function (){var statearr_14157 = f__11084__auto__.call(null);(statearr_14157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___14158);
return statearr_14157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___14158,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11083__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto__){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto__){
return (function (state_14322){var state_val_14323 = (state_14322[(1)]);if((state_val_14323 === (7)))
{var inst_14318 = (state_14322[(2)]);var state_14322__$1 = state_14322;var statearr_14324_14361 = state_14322__$1;(statearr_14324_14361[(2)] = inst_14318);
(statearr_14324_14361[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (20)))
{var inst_14293 = (state_14322[(7)]);var inst_14304 = (state_14322[(2)]);var inst_14305 = cljs.core.next.call(null,inst_14293);var inst_14279 = inst_14305;var inst_14280 = null;var inst_14281 = (0);var inst_14282 = (0);var state_14322__$1 = (function (){var statearr_14325 = state_14322;(statearr_14325[(8)] = inst_14282);
(statearr_14325[(9)] = inst_14279);
(statearr_14325[(10)] = inst_14281);
(statearr_14325[(11)] = inst_14304);
(statearr_14325[(12)] = inst_14280);
return statearr_14325;
})();var statearr_14326_14362 = state_14322__$1;(statearr_14326_14362[(2)] = null);
(statearr_14326_14362[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (1)))
{var state_14322__$1 = state_14322;var statearr_14327_14363 = state_14322__$1;(statearr_14327_14363[(2)] = null);
(statearr_14327_14363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (4)))
{var inst_14268 = (state_14322[(13)]);var inst_14268__$1 = (state_14322[(2)]);var inst_14269 = (inst_14268__$1 == null);var state_14322__$1 = (function (){var statearr_14331 = state_14322;(statearr_14331[(13)] = inst_14268__$1);
return statearr_14331;
})();if(cljs.core.truth_(inst_14269))
{var statearr_14332_14364 = state_14322__$1;(statearr_14332_14364[(1)] = (5));
} else
{var statearr_14333_14365 = state_14322__$1;(statearr_14333_14365[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (15)))
{var state_14322__$1 = state_14322;var statearr_14334_14366 = state_14322__$1;(statearr_14334_14366[(2)] = null);
(statearr_14334_14366[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (13)))
{var inst_14282 = (state_14322[(8)]);var inst_14279 = (state_14322[(9)]);var inst_14281 = (state_14322[(10)]);var inst_14280 = (state_14322[(12)]);var inst_14289 = (state_14322[(2)]);var inst_14290 = (inst_14282 + (1));var tmp14328 = inst_14279;var tmp14329 = inst_14281;var tmp14330 = inst_14280;var inst_14279__$1 = tmp14328;var inst_14280__$1 = tmp14330;var inst_14281__$1 = tmp14329;var inst_14282__$1 = inst_14290;var state_14322__$1 = (function (){var statearr_14335 = state_14322;(statearr_14335[(8)] = inst_14282__$1);
(statearr_14335[(14)] = inst_14289);
(statearr_14335[(9)] = inst_14279__$1);
(statearr_14335[(10)] = inst_14281__$1);
(statearr_14335[(12)] = inst_14280__$1);
return statearr_14335;
})();var statearr_14336_14367 = state_14322__$1;(statearr_14336_14367[(2)] = null);
(statearr_14336_14367[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (6)))
{var inst_14268 = (state_14322[(13)]);var inst_14273 = f.call(null,inst_14268);var inst_14278 = cljs.core.seq.call(null,inst_14273);var inst_14279 = inst_14278;var inst_14280 = null;var inst_14281 = (0);var inst_14282 = (0);var state_14322__$1 = (function (){var statearr_14337 = state_14322;(statearr_14337[(8)] = inst_14282);
(statearr_14337[(9)] = inst_14279);
(statearr_14337[(10)] = inst_14281);
(statearr_14337[(12)] = inst_14280);
return statearr_14337;
})();var statearr_14338_14368 = state_14322__$1;(statearr_14338_14368[(2)] = null);
(statearr_14338_14368[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (17)))
{var inst_14293 = (state_14322[(7)]);var inst_14297 = cljs.core.chunk_first.call(null,inst_14293);var inst_14298 = cljs.core.chunk_rest.call(null,inst_14293);var inst_14299 = cljs.core.count.call(null,inst_14297);var inst_14279 = inst_14298;var inst_14280 = inst_14297;var inst_14281 = inst_14299;var inst_14282 = (0);var state_14322__$1 = (function (){var statearr_14339 = state_14322;(statearr_14339[(8)] = inst_14282);
(statearr_14339[(9)] = inst_14279);
(statearr_14339[(10)] = inst_14281);
(statearr_14339[(12)] = inst_14280);
return statearr_14339;
})();var statearr_14340_14369 = state_14322__$1;(statearr_14340_14369[(2)] = null);
(statearr_14340_14369[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (3)))
{var inst_14320 = (state_14322[(2)]);var state_14322__$1 = state_14322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14322__$1,inst_14320);
} else
{if((state_val_14323 === (12)))
{var inst_14313 = (state_14322[(2)]);var state_14322__$1 = state_14322;var statearr_14341_14370 = state_14322__$1;(statearr_14341_14370[(2)] = inst_14313);
(statearr_14341_14370[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (2)))
{var state_14322__$1 = state_14322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14322__$1,(4),in$);
} else
{if((state_val_14323 === (19)))
{var inst_14308 = (state_14322[(2)]);var state_14322__$1 = state_14322;var statearr_14342_14371 = state_14322__$1;(statearr_14342_14371[(2)] = inst_14308);
(statearr_14342_14371[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (11)))
{var inst_14293 = (state_14322[(7)]);var inst_14279 = (state_14322[(9)]);var inst_14293__$1 = cljs.core.seq.call(null,inst_14279);var state_14322__$1 = (function (){var statearr_14343 = state_14322;(statearr_14343[(7)] = inst_14293__$1);
return statearr_14343;
})();if(inst_14293__$1)
{var statearr_14344_14372 = state_14322__$1;(statearr_14344_14372[(1)] = (14));
} else
{var statearr_14345_14373 = state_14322__$1;(statearr_14345_14373[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (9)))
{var inst_14315 = (state_14322[(2)]);var state_14322__$1 = (function (){var statearr_14346 = state_14322;(statearr_14346[(15)] = inst_14315);
return statearr_14346;
})();var statearr_14347_14374 = state_14322__$1;(statearr_14347_14374[(2)] = null);
(statearr_14347_14374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (5)))
{var inst_14271 = cljs.core.async.close_BANG_.call(null,out);var state_14322__$1 = state_14322;var statearr_14348_14375 = state_14322__$1;(statearr_14348_14375[(2)] = inst_14271);
(statearr_14348_14375[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (14)))
{var inst_14293 = (state_14322[(7)]);var inst_14295 = cljs.core.chunked_seq_QMARK_.call(null,inst_14293);var state_14322__$1 = state_14322;if(inst_14295)
{var statearr_14349_14376 = state_14322__$1;(statearr_14349_14376[(1)] = (17));
} else
{var statearr_14350_14377 = state_14322__$1;(statearr_14350_14377[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (16)))
{var inst_14311 = (state_14322[(2)]);var state_14322__$1 = state_14322;var statearr_14351_14378 = state_14322__$1;(statearr_14351_14378[(2)] = inst_14311);
(statearr_14351_14378[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14323 === (10)))
{var inst_14282 = (state_14322[(8)]);var inst_14280 = (state_14322[(12)]);var inst_14287 = cljs.core._nth.call(null,inst_14280,inst_14282);var state_14322__$1 = state_14322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14322__$1,(13),out,inst_14287);
} else
{if((state_val_14323 === (18)))
{var inst_14293 = (state_14322[(7)]);var inst_14302 = cljs.core.first.call(null,inst_14293);var state_14322__$1 = state_14322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14322__$1,(20),out,inst_14302);
} else
{if((state_val_14323 === (8)))
{var inst_14282 = (state_14322[(8)]);var inst_14281 = (state_14322[(10)]);var inst_14284 = (inst_14282 < inst_14281);var inst_14285 = inst_14284;var state_14322__$1 = state_14322;if(cljs.core.truth_(inst_14285))
{var statearr_14352_14379 = state_14322__$1;(statearr_14352_14379[(1)] = (10));
} else
{var statearr_14353_14380 = state_14322__$1;(statearr_14353_14380[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11083__auto__))
;return ((function (switch__11018__auto__,c__11083__auto__){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_14357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14357[(0)] = state_machine__11019__auto__);
(statearr_14357[(1)] = (1));
return statearr_14357;
});
var state_machine__11019__auto____1 = (function (state_14322){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_14322);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e14358){if((e14358 instanceof Object))
{var ex__11022__auto__ = e14358;var statearr_14359_14381 = state_14322;(statearr_14359_14381[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14382 = state_14322;
state_14322 = G__14382;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_14322){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_14322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto__))
})();var state__11085__auto__ = (function (){var statearr_14360 = f__11084__auto__.call(null);(statearr_14360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto__);
return statearr_14360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto__))
);
return c__11083__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11083__auto___14463 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___14463){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___14463){
return (function (state_14442){var state_val_14443 = (state_14442[(1)]);if((state_val_14443 === (7)))
{var inst_14438 = (state_14442[(2)]);var state_14442__$1 = state_14442;var statearr_14444_14464 = state_14442__$1;(statearr_14444_14464[(2)] = inst_14438);
(statearr_14444_14464[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14443 === (1)))
{var state_14442__$1 = state_14442;var statearr_14445_14465 = state_14442__$1;(statearr_14445_14465[(2)] = null);
(statearr_14445_14465[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14443 === (4)))
{var inst_14425 = (state_14442[(7)]);var inst_14425__$1 = (state_14442[(2)]);var inst_14426 = (inst_14425__$1 == null);var state_14442__$1 = (function (){var statearr_14446 = state_14442;(statearr_14446[(7)] = inst_14425__$1);
return statearr_14446;
})();if(cljs.core.truth_(inst_14426))
{var statearr_14447_14466 = state_14442__$1;(statearr_14447_14466[(1)] = (5));
} else
{var statearr_14448_14467 = state_14442__$1;(statearr_14448_14467[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14443 === (6)))
{var inst_14425 = (state_14442[(7)]);var state_14442__$1 = state_14442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14442__$1,(11),to,inst_14425);
} else
{if((state_val_14443 === (3)))
{var inst_14440 = (state_14442[(2)]);var state_14442__$1 = state_14442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14442__$1,inst_14440);
} else
{if((state_val_14443 === (2)))
{var state_14442__$1 = state_14442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14442__$1,(4),from);
} else
{if((state_val_14443 === (11)))
{var inst_14435 = (state_14442[(2)]);var state_14442__$1 = (function (){var statearr_14449 = state_14442;(statearr_14449[(8)] = inst_14435);
return statearr_14449;
})();var statearr_14450_14468 = state_14442__$1;(statearr_14450_14468[(2)] = null);
(statearr_14450_14468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14443 === (9)))
{var state_14442__$1 = state_14442;var statearr_14451_14469 = state_14442__$1;(statearr_14451_14469[(2)] = null);
(statearr_14451_14469[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14443 === (5)))
{var state_14442__$1 = state_14442;if(cljs.core.truth_(close_QMARK_))
{var statearr_14452_14470 = state_14442__$1;(statearr_14452_14470[(1)] = (8));
} else
{var statearr_14453_14471 = state_14442__$1;(statearr_14453_14471[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14443 === (10)))
{var inst_14432 = (state_14442[(2)]);var state_14442__$1 = state_14442;var statearr_14454_14472 = state_14442__$1;(statearr_14454_14472[(2)] = inst_14432);
(statearr_14454_14472[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14443 === (8)))
{var inst_14429 = cljs.core.async.close_BANG_.call(null,to);var state_14442__$1 = state_14442;var statearr_14455_14473 = state_14442__$1;(statearr_14455_14473[(2)] = inst_14429);
(statearr_14455_14473[(1)] = (10));
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
}
}
}
}
});})(c__11083__auto___14463))
;return ((function (switch__11018__auto__,c__11083__auto___14463){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_14459 = [null,null,null,null,null,null,null,null,null];(statearr_14459[(0)] = state_machine__11019__auto__);
(statearr_14459[(1)] = (1));
return statearr_14459;
});
var state_machine__11019__auto____1 = (function (state_14442){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_14442);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e14460){if((e14460 instanceof Object))
{var ex__11022__auto__ = e14460;var statearr_14461_14474 = state_14442;(statearr_14461_14474[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14442);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14475 = state_14442;
state_14442 = G__14475;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_14442){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_14442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___14463))
})();var state__11085__auto__ = (function (){var statearr_14462 = f__11084__auto__.call(null);(statearr_14462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___14463);
return statearr_14462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___14463))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11083__auto___14562 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___14562,tc,fc){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___14562,tc,fc){
return (function (state_14540){var state_val_14541 = (state_14540[(1)]);if((state_val_14541 === (7)))
{var inst_14536 = (state_14540[(2)]);var state_14540__$1 = state_14540;var statearr_14542_14563 = state_14540__$1;(statearr_14542_14563[(2)] = inst_14536);
(statearr_14542_14563[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14541 === (1)))
{var state_14540__$1 = state_14540;var statearr_14543_14564 = state_14540__$1;(statearr_14543_14564[(2)] = null);
(statearr_14543_14564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14541 === (4)))
{var inst_14521 = (state_14540[(7)]);var inst_14521__$1 = (state_14540[(2)]);var inst_14522 = (inst_14521__$1 == null);var state_14540__$1 = (function (){var statearr_14544 = state_14540;(statearr_14544[(7)] = inst_14521__$1);
return statearr_14544;
})();if(cljs.core.truth_(inst_14522))
{var statearr_14545_14565 = state_14540__$1;(statearr_14545_14565[(1)] = (5));
} else
{var statearr_14546_14566 = state_14540__$1;(statearr_14546_14566[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14541 === (6)))
{var inst_14521 = (state_14540[(7)]);var inst_14527 = p.call(null,inst_14521);var state_14540__$1 = state_14540;if(cljs.core.truth_(inst_14527))
{var statearr_14547_14567 = state_14540__$1;(statearr_14547_14567[(1)] = (9));
} else
{var statearr_14548_14568 = state_14540__$1;(statearr_14548_14568[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14541 === (3)))
{var inst_14538 = (state_14540[(2)]);var state_14540__$1 = state_14540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14540__$1,inst_14538);
} else
{if((state_val_14541 === (2)))
{var state_14540__$1 = state_14540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14540__$1,(4),ch);
} else
{if((state_val_14541 === (11)))
{var inst_14521 = (state_14540[(7)]);var inst_14531 = (state_14540[(2)]);var state_14540__$1 = state_14540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14540__$1,(8),inst_14531,inst_14521);
} else
{if((state_val_14541 === (9)))
{var state_14540__$1 = state_14540;var statearr_14549_14569 = state_14540__$1;(statearr_14549_14569[(2)] = tc);
(statearr_14549_14569[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14541 === (5)))
{var inst_14524 = cljs.core.async.close_BANG_.call(null,tc);var inst_14525 = cljs.core.async.close_BANG_.call(null,fc);var state_14540__$1 = (function (){var statearr_14550 = state_14540;(statearr_14550[(8)] = inst_14524);
return statearr_14550;
})();var statearr_14551_14570 = state_14540__$1;(statearr_14551_14570[(2)] = inst_14525);
(statearr_14551_14570[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14541 === (10)))
{var state_14540__$1 = state_14540;var statearr_14552_14571 = state_14540__$1;(statearr_14552_14571[(2)] = fc);
(statearr_14552_14571[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14541 === (8)))
{var inst_14533 = (state_14540[(2)]);var state_14540__$1 = (function (){var statearr_14553 = state_14540;(statearr_14553[(9)] = inst_14533);
return statearr_14553;
})();var statearr_14554_14572 = state_14540__$1;(statearr_14554_14572[(2)] = null);
(statearr_14554_14572[(1)] = (2));
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
}
}
}
}
});})(c__11083__auto___14562,tc,fc))
;return ((function (switch__11018__auto__,c__11083__auto___14562,tc,fc){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_14558 = [null,null,null,null,null,null,null,null,null,null];(statearr_14558[(0)] = state_machine__11019__auto__);
(statearr_14558[(1)] = (1));
return statearr_14558;
});
var state_machine__11019__auto____1 = (function (state_14540){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_14540);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e14559){if((e14559 instanceof Object))
{var ex__11022__auto__ = e14559;var statearr_14560_14573 = state_14540;(statearr_14560_14573[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14574 = state_14540;
state_14540 = G__14574;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_14540){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_14540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___14562,tc,fc))
})();var state__11085__auto__ = (function (){var statearr_14561 = f__11084__auto__.call(null);(statearr_14561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___14562);
return statearr_14561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___14562,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11083__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto__){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto__){
return (function (state_14621){var state_val_14622 = (state_14621[(1)]);if((state_val_14622 === (7)))
{var inst_14617 = (state_14621[(2)]);var state_14621__$1 = state_14621;var statearr_14623_14639 = state_14621__$1;(statearr_14623_14639[(2)] = inst_14617);
(statearr_14623_14639[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14622 === (6)))
{var inst_14607 = (state_14621[(7)]);var inst_14610 = (state_14621[(8)]);var inst_14614 = f.call(null,inst_14607,inst_14610);var inst_14607__$1 = inst_14614;var state_14621__$1 = (function (){var statearr_14624 = state_14621;(statearr_14624[(7)] = inst_14607__$1);
return statearr_14624;
})();var statearr_14625_14640 = state_14621__$1;(statearr_14625_14640[(2)] = null);
(statearr_14625_14640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14622 === (5)))
{var inst_14607 = (state_14621[(7)]);var state_14621__$1 = state_14621;var statearr_14626_14641 = state_14621__$1;(statearr_14626_14641[(2)] = inst_14607);
(statearr_14626_14641[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14622 === (4)))
{var inst_14610 = (state_14621[(8)]);var inst_14610__$1 = (state_14621[(2)]);var inst_14611 = (inst_14610__$1 == null);var state_14621__$1 = (function (){var statearr_14627 = state_14621;(statearr_14627[(8)] = inst_14610__$1);
return statearr_14627;
})();if(cljs.core.truth_(inst_14611))
{var statearr_14628_14642 = state_14621__$1;(statearr_14628_14642[(1)] = (5));
} else
{var statearr_14629_14643 = state_14621__$1;(statearr_14629_14643[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14622 === (3)))
{var inst_14619 = (state_14621[(2)]);var state_14621__$1 = state_14621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14621__$1,inst_14619);
} else
{if((state_val_14622 === (2)))
{var state_14621__$1 = state_14621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14621__$1,(4),ch);
} else
{if((state_val_14622 === (1)))
{var inst_14607 = init;var state_14621__$1 = (function (){var statearr_14630 = state_14621;(statearr_14630[(7)] = inst_14607);
return statearr_14630;
})();var statearr_14631_14644 = state_14621__$1;(statearr_14631_14644[(2)] = null);
(statearr_14631_14644[(1)] = (2));
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
});})(c__11083__auto__))
;return ((function (switch__11018__auto__,c__11083__auto__){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_14635 = [null,null,null,null,null,null,null,null,null];(statearr_14635[(0)] = state_machine__11019__auto__);
(statearr_14635[(1)] = (1));
return statearr_14635;
});
var state_machine__11019__auto____1 = (function (state_14621){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_14621);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e14636){if((e14636 instanceof Object))
{var ex__11022__auto__ = e14636;var statearr_14637_14645 = state_14621;(statearr_14637_14645[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14621);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14646 = state_14621;
state_14621 = G__14646;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_14621){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_14621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto__))
})();var state__11085__auto__ = (function (){var statearr_14638 = f__11084__auto__.call(null);(statearr_14638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto__);
return statearr_14638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto__))
);
return c__11083__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11083__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto__){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto__){
return (function (state_14708){var state_val_14709 = (state_14708[(1)]);if((state_val_14709 === (7)))
{var inst_14689 = (state_14708[(7)]);var inst_14694 = (state_14708[(2)]);var inst_14695 = cljs.core.next.call(null,inst_14689);var inst_14689__$1 = inst_14695;var state_14708__$1 = (function (){var statearr_14710 = state_14708;(statearr_14710[(7)] = inst_14689__$1);
(statearr_14710[(8)] = inst_14694);
return statearr_14710;
})();var statearr_14711_14729 = state_14708__$1;(statearr_14711_14729[(2)] = null);
(statearr_14711_14729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14709 === (1)))
{var inst_14688 = cljs.core.seq.call(null,coll);var inst_14689 = inst_14688;var state_14708__$1 = (function (){var statearr_14712 = state_14708;(statearr_14712[(7)] = inst_14689);
return statearr_14712;
})();var statearr_14713_14730 = state_14708__$1;(statearr_14713_14730[(2)] = null);
(statearr_14713_14730[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14709 === (4)))
{var inst_14689 = (state_14708[(7)]);var inst_14692 = cljs.core.first.call(null,inst_14689);var state_14708__$1 = state_14708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14708__$1,(7),ch,inst_14692);
} else
{if((state_val_14709 === (6)))
{var inst_14704 = (state_14708[(2)]);var state_14708__$1 = state_14708;var statearr_14714_14731 = state_14708__$1;(statearr_14714_14731[(2)] = inst_14704);
(statearr_14714_14731[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14709 === (3)))
{var inst_14706 = (state_14708[(2)]);var state_14708__$1 = state_14708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14708__$1,inst_14706);
} else
{if((state_val_14709 === (2)))
{var inst_14689 = (state_14708[(7)]);var state_14708__$1 = state_14708;if(cljs.core.truth_(inst_14689))
{var statearr_14715_14732 = state_14708__$1;(statearr_14715_14732[(1)] = (4));
} else
{var statearr_14716_14733 = state_14708__$1;(statearr_14716_14733[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14709 === (9)))
{var state_14708__$1 = state_14708;var statearr_14717_14734 = state_14708__$1;(statearr_14717_14734[(2)] = null);
(statearr_14717_14734[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14709 === (5)))
{var state_14708__$1 = state_14708;if(cljs.core.truth_(close_QMARK_))
{var statearr_14718_14735 = state_14708__$1;(statearr_14718_14735[(1)] = (8));
} else
{var statearr_14719_14736 = state_14708__$1;(statearr_14719_14736[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14709 === (10)))
{var inst_14702 = (state_14708[(2)]);var state_14708__$1 = state_14708;var statearr_14720_14737 = state_14708__$1;(statearr_14720_14737[(2)] = inst_14702);
(statearr_14720_14737[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14709 === (8)))
{var inst_14699 = cljs.core.async.close_BANG_.call(null,ch);var state_14708__$1 = state_14708;var statearr_14721_14738 = state_14708__$1;(statearr_14721_14738[(2)] = inst_14699);
(statearr_14721_14738[(1)] = (10));
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
}
}
}
});})(c__11083__auto__))
;return ((function (switch__11018__auto__,c__11083__auto__){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_14725 = [null,null,null,null,null,null,null,null,null];(statearr_14725[(0)] = state_machine__11019__auto__);
(statearr_14725[(1)] = (1));
return statearr_14725;
});
var state_machine__11019__auto____1 = (function (state_14708){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_14708);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e14726){if((e14726 instanceof Object))
{var ex__11022__auto__ = e14726;var statearr_14727_14739 = state_14708;(statearr_14727_14739[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14740 = state_14708;
state_14708 = G__14740;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_14708){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_14708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto__))
})();var state__11085__auto__ = (function (){var statearr_14728 = f__11084__auto__.call(null);(statearr_14728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto__);
return statearr_14728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto__))
);
return c__11083__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14742 = {};return obj14742;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7859__auto__ = _;if(and__7859__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7859__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8498__auto__ = (((_ == null))?null:_);return (function (){var or__7871__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14744 = {};return obj14744;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7859__auto__ = m;if(and__7859__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7859__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8498__auto__ = (((m == null))?null:m);return (function (){var or__7871__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7859__auto__ = m;if(and__7859__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7859__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8498__auto__ = (((m == null))?null:m);return (function (){var or__7871__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7859__auto__ = m;if(and__7859__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7859__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8498__auto__ = (((m == null))?null:m);return (function (){var or__7871__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14968 = (function (cs,ch,mult,meta14969){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14969 = meta14969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14968.cljs$lang$type = true;
cljs.core.async.t14968.cljs$lang$ctorStr = "cljs.core.async/t14968";
cljs.core.async.t14968.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t14968");
});})(cs))
;
cljs.core.async.t14968.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14968.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14968.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14968.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14968.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14970){var self__ = this;
var _14970__$1 = this;return self__.meta14969;
});})(cs))
;
cljs.core.async.t14968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14970,meta14969__$1){var self__ = this;
var _14970__$1 = this;return (new cljs.core.async.t14968(self__.cs,self__.ch,self__.mult,meta14969__$1));
});})(cs))
;
cljs.core.async.__GT_t14968 = ((function (cs){
return (function __GT_t14968(cs__$1,ch__$1,mult__$1,meta14969){return (new cljs.core.async.t14968(cs__$1,ch__$1,mult__$1,meta14969));
});})(cs))
;
}
return (new cljs.core.async.t14968(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11083__auto___15191 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___15191,cs,m,dchan,dctr,done){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___15191,cs,m,dchan,dctr,done){
return (function (state_15105){var state_val_15106 = (state_15105[(1)]);if((state_val_15106 === (7)))
{var inst_15101 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15107_15192 = state_15105__$1;(statearr_15107_15192[(2)] = inst_15101);
(statearr_15107_15192[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (20)))
{var inst_15002 = (state_15105[(7)]);var inst_15012 = cljs.core.first.call(null,inst_15002);var inst_15013 = cljs.core.nth.call(null,inst_15012,(0),null);var inst_15014 = cljs.core.nth.call(null,inst_15012,(1),null);var state_15105__$1 = (function (){var statearr_15108 = state_15105;(statearr_15108[(8)] = inst_15013);
return statearr_15108;
})();if(cljs.core.truth_(inst_15014))
{var statearr_15109_15193 = state_15105__$1;(statearr_15109_15193[(1)] = (22));
} else
{var statearr_15110_15194 = state_15105__$1;(statearr_15110_15194[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (27)))
{var inst_15042 = (state_15105[(9)]);var inst_15044 = (state_15105[(10)]);var inst_15049 = cljs.core._nth.call(null,inst_15042,inst_15044);var state_15105__$1 = (function (){var statearr_15111 = state_15105;(statearr_15111[(11)] = inst_15049);
return statearr_15111;
})();var statearr_15112_15195 = state_15105__$1;(statearr_15112_15195[(2)] = null);
(statearr_15112_15195[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (1)))
{var state_15105__$1 = state_15105;var statearr_15113_15196 = state_15105__$1;(statearr_15113_15196[(2)] = null);
(statearr_15113_15196[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (24)))
{var inst_15002 = (state_15105[(7)]);var inst_15019 = (state_15105[(2)]);var inst_15020 = cljs.core.next.call(null,inst_15002);var inst_14982 = inst_15020;var inst_14983 = null;var inst_14984 = (0);var inst_14985 = (0);var state_15105__$1 = (function (){var statearr_15114 = state_15105;(statearr_15114[(12)] = inst_15019);
(statearr_15114[(13)] = inst_14983);
(statearr_15114[(14)] = inst_14982);
(statearr_15114[(15)] = inst_14984);
(statearr_15114[(16)] = inst_14985);
return statearr_15114;
})();var statearr_15115_15197 = state_15105__$1;(statearr_15115_15197[(2)] = null);
(statearr_15115_15197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (39)))
{var inst_15062 = (state_15105[(17)]);var inst_15080 = (state_15105[(2)]);var inst_15081 = cljs.core.next.call(null,inst_15062);var inst_15041 = inst_15081;var inst_15042 = null;var inst_15043 = (0);var inst_15044 = (0);var state_15105__$1 = (function (){var statearr_15119 = state_15105;(statearr_15119[(9)] = inst_15042);
(statearr_15119[(18)] = inst_15080);
(statearr_15119[(10)] = inst_15044);
(statearr_15119[(19)] = inst_15043);
(statearr_15119[(20)] = inst_15041);
return statearr_15119;
})();var statearr_15120_15198 = state_15105__$1;(statearr_15120_15198[(2)] = null);
(statearr_15120_15198[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (4)))
{var inst_14973 = (state_15105[(21)]);var inst_14973__$1 = (state_15105[(2)]);var inst_14974 = (inst_14973__$1 == null);var state_15105__$1 = (function (){var statearr_15121 = state_15105;(statearr_15121[(21)] = inst_14973__$1);
return statearr_15121;
})();if(cljs.core.truth_(inst_14974))
{var statearr_15122_15199 = state_15105__$1;(statearr_15122_15199[(1)] = (5));
} else
{var statearr_15123_15200 = state_15105__$1;(statearr_15123_15200[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (15)))
{var inst_14983 = (state_15105[(13)]);var inst_14982 = (state_15105[(14)]);var inst_14984 = (state_15105[(15)]);var inst_14985 = (state_15105[(16)]);var inst_14998 = (state_15105[(2)]);var inst_14999 = (inst_14985 + (1));var tmp15116 = inst_14983;var tmp15117 = inst_14982;var tmp15118 = inst_14984;var inst_14982__$1 = tmp15117;var inst_14983__$1 = tmp15116;var inst_14984__$1 = tmp15118;var inst_14985__$1 = inst_14999;var state_15105__$1 = (function (){var statearr_15124 = state_15105;(statearr_15124[(13)] = inst_14983__$1);
(statearr_15124[(14)] = inst_14982__$1);
(statearr_15124[(15)] = inst_14984__$1);
(statearr_15124[(22)] = inst_14998);
(statearr_15124[(16)] = inst_14985__$1);
return statearr_15124;
})();var statearr_15125_15201 = state_15105__$1;(statearr_15125_15201[(2)] = null);
(statearr_15125_15201[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (21)))
{var inst_15023 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15126_15202 = state_15105__$1;(statearr_15126_15202[(2)] = inst_15023);
(statearr_15126_15202[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (31)))
{var inst_15049 = (state_15105[(11)]);var inst_15050 = (state_15105[(2)]);var inst_15051 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15052 = cljs.core.async.untap_STAR_.call(null,m,inst_15049);var state_15105__$1 = (function (){var statearr_15127 = state_15105;(statearr_15127[(23)] = inst_15051);
(statearr_15127[(24)] = inst_15050);
return statearr_15127;
})();var statearr_15128_15203 = state_15105__$1;(statearr_15128_15203[(2)] = inst_15052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15105__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (32)))
{var inst_14973 = (state_15105[(21)]);var inst_15049 = (state_15105[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15105,(31),Object,null,(30));var inst_15056 = cljs.core.async.put_BANG_.call(null,inst_15049,inst_14973,done);var state_15105__$1 = state_15105;var statearr_15129_15204 = state_15105__$1;(statearr_15129_15204[(2)] = inst_15056);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15105__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (40)))
{var inst_15071 = (state_15105[(25)]);var inst_15072 = (state_15105[(2)]);var inst_15073 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15074 = cljs.core.async.untap_STAR_.call(null,m,inst_15071);var state_15105__$1 = (function (){var statearr_15130 = state_15105;(statearr_15130[(26)] = inst_15072);
(statearr_15130[(27)] = inst_15073);
return statearr_15130;
})();var statearr_15131_15205 = state_15105__$1;(statearr_15131_15205[(2)] = inst_15074);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15105__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (33)))
{var inst_15062 = (state_15105[(17)]);var inst_15064 = cljs.core.chunked_seq_QMARK_.call(null,inst_15062);var state_15105__$1 = state_15105;if(inst_15064)
{var statearr_15132_15206 = state_15105__$1;(statearr_15132_15206[(1)] = (36));
} else
{var statearr_15133_15207 = state_15105__$1;(statearr_15133_15207[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (13)))
{var inst_14992 = (state_15105[(28)]);var inst_14995 = cljs.core.async.close_BANG_.call(null,inst_14992);var state_15105__$1 = state_15105;var statearr_15134_15208 = state_15105__$1;(statearr_15134_15208[(2)] = inst_14995);
(statearr_15134_15208[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (22)))
{var inst_15013 = (state_15105[(8)]);var inst_15016 = cljs.core.async.close_BANG_.call(null,inst_15013);var state_15105__$1 = state_15105;var statearr_15135_15209 = state_15105__$1;(statearr_15135_15209[(2)] = inst_15016);
(statearr_15135_15209[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (36)))
{var inst_15062 = (state_15105[(17)]);var inst_15066 = cljs.core.chunk_first.call(null,inst_15062);var inst_15067 = cljs.core.chunk_rest.call(null,inst_15062);var inst_15068 = cljs.core.count.call(null,inst_15066);var inst_15041 = inst_15067;var inst_15042 = inst_15066;var inst_15043 = inst_15068;var inst_15044 = (0);var state_15105__$1 = (function (){var statearr_15136 = state_15105;(statearr_15136[(9)] = inst_15042);
(statearr_15136[(10)] = inst_15044);
(statearr_15136[(19)] = inst_15043);
(statearr_15136[(20)] = inst_15041);
return statearr_15136;
})();var statearr_15137_15210 = state_15105__$1;(statearr_15137_15210[(2)] = null);
(statearr_15137_15210[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (41)))
{var inst_14973 = (state_15105[(21)]);var inst_15071 = (state_15105[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15105,(40),Object,null,(39));var inst_15078 = cljs.core.async.put_BANG_.call(null,inst_15071,inst_14973,done);var state_15105__$1 = state_15105;var statearr_15138_15211 = state_15105__$1;(statearr_15138_15211[(2)] = inst_15078);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15105__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (43)))
{var state_15105__$1 = state_15105;var statearr_15139_15212 = state_15105__$1;(statearr_15139_15212[(2)] = null);
(statearr_15139_15212[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (29)))
{var inst_15089 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15140_15213 = state_15105__$1;(statearr_15140_15213[(2)] = inst_15089);
(statearr_15140_15213[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (44)))
{var inst_15098 = (state_15105[(2)]);var state_15105__$1 = (function (){var statearr_15141 = state_15105;(statearr_15141[(29)] = inst_15098);
return statearr_15141;
})();var statearr_15142_15214 = state_15105__$1;(statearr_15142_15214[(2)] = null);
(statearr_15142_15214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (6)))
{var inst_15033 = (state_15105[(30)]);var inst_15032 = cljs.core.deref.call(null,cs);var inst_15033__$1 = cljs.core.keys.call(null,inst_15032);var inst_15034 = cljs.core.count.call(null,inst_15033__$1);var inst_15035 = cljs.core.reset_BANG_.call(null,dctr,inst_15034);var inst_15040 = cljs.core.seq.call(null,inst_15033__$1);var inst_15041 = inst_15040;var inst_15042 = null;var inst_15043 = (0);var inst_15044 = (0);var state_15105__$1 = (function (){var statearr_15143 = state_15105;(statearr_15143[(9)] = inst_15042);
(statearr_15143[(30)] = inst_15033__$1);
(statearr_15143[(31)] = inst_15035);
(statearr_15143[(10)] = inst_15044);
(statearr_15143[(19)] = inst_15043);
(statearr_15143[(20)] = inst_15041);
return statearr_15143;
})();var statearr_15144_15215 = state_15105__$1;(statearr_15144_15215[(2)] = null);
(statearr_15144_15215[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (28)))
{var inst_15062 = (state_15105[(17)]);var inst_15041 = (state_15105[(20)]);var inst_15062__$1 = cljs.core.seq.call(null,inst_15041);var state_15105__$1 = (function (){var statearr_15145 = state_15105;(statearr_15145[(17)] = inst_15062__$1);
return statearr_15145;
})();if(inst_15062__$1)
{var statearr_15146_15216 = state_15105__$1;(statearr_15146_15216[(1)] = (33));
} else
{var statearr_15147_15217 = state_15105__$1;(statearr_15147_15217[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (25)))
{var inst_15044 = (state_15105[(10)]);var inst_15043 = (state_15105[(19)]);var inst_15046 = (inst_15044 < inst_15043);var inst_15047 = inst_15046;var state_15105__$1 = state_15105;if(cljs.core.truth_(inst_15047))
{var statearr_15148_15218 = state_15105__$1;(statearr_15148_15218[(1)] = (27));
} else
{var statearr_15149_15219 = state_15105__$1;(statearr_15149_15219[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (34)))
{var state_15105__$1 = state_15105;var statearr_15150_15220 = state_15105__$1;(statearr_15150_15220[(2)] = null);
(statearr_15150_15220[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (17)))
{var state_15105__$1 = state_15105;var statearr_15151_15221 = state_15105__$1;(statearr_15151_15221[(2)] = null);
(statearr_15151_15221[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (3)))
{var inst_15103 = (state_15105[(2)]);var state_15105__$1 = state_15105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15105__$1,inst_15103);
} else
{if((state_val_15106 === (12)))
{var inst_15028 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15152_15222 = state_15105__$1;(statearr_15152_15222[(2)] = inst_15028);
(statearr_15152_15222[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (2)))
{var state_15105__$1 = state_15105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15105__$1,(4),ch);
} else
{if((state_val_15106 === (23)))
{var state_15105__$1 = state_15105;var statearr_15153_15223 = state_15105__$1;(statearr_15153_15223[(2)] = null);
(statearr_15153_15223[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (35)))
{var inst_15087 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15154_15224 = state_15105__$1;(statearr_15154_15224[(2)] = inst_15087);
(statearr_15154_15224[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (19)))
{var inst_15002 = (state_15105[(7)]);var inst_15006 = cljs.core.chunk_first.call(null,inst_15002);var inst_15007 = cljs.core.chunk_rest.call(null,inst_15002);var inst_15008 = cljs.core.count.call(null,inst_15006);var inst_14982 = inst_15007;var inst_14983 = inst_15006;var inst_14984 = inst_15008;var inst_14985 = (0);var state_15105__$1 = (function (){var statearr_15155 = state_15105;(statearr_15155[(13)] = inst_14983);
(statearr_15155[(14)] = inst_14982);
(statearr_15155[(15)] = inst_14984);
(statearr_15155[(16)] = inst_14985);
return statearr_15155;
})();var statearr_15156_15225 = state_15105__$1;(statearr_15156_15225[(2)] = null);
(statearr_15156_15225[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (11)))
{var inst_14982 = (state_15105[(14)]);var inst_15002 = (state_15105[(7)]);var inst_15002__$1 = cljs.core.seq.call(null,inst_14982);var state_15105__$1 = (function (){var statearr_15157 = state_15105;(statearr_15157[(7)] = inst_15002__$1);
return statearr_15157;
})();if(inst_15002__$1)
{var statearr_15158_15226 = state_15105__$1;(statearr_15158_15226[(1)] = (16));
} else
{var statearr_15159_15227 = state_15105__$1;(statearr_15159_15227[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (9)))
{var inst_15030 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15160_15228 = state_15105__$1;(statearr_15160_15228[(2)] = inst_15030);
(statearr_15160_15228[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (5)))
{var inst_14980 = cljs.core.deref.call(null,cs);var inst_14981 = cljs.core.seq.call(null,inst_14980);var inst_14982 = inst_14981;var inst_14983 = null;var inst_14984 = (0);var inst_14985 = (0);var state_15105__$1 = (function (){var statearr_15161 = state_15105;(statearr_15161[(13)] = inst_14983);
(statearr_15161[(14)] = inst_14982);
(statearr_15161[(15)] = inst_14984);
(statearr_15161[(16)] = inst_14985);
return statearr_15161;
})();var statearr_15162_15229 = state_15105__$1;(statearr_15162_15229[(2)] = null);
(statearr_15162_15229[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (14)))
{var state_15105__$1 = state_15105;var statearr_15163_15230 = state_15105__$1;(statearr_15163_15230[(2)] = null);
(statearr_15163_15230[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (45)))
{var inst_15095 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15164_15231 = state_15105__$1;(statearr_15164_15231[(2)] = inst_15095);
(statearr_15164_15231[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (26)))
{var inst_15033 = (state_15105[(30)]);var inst_15091 = (state_15105[(2)]);var inst_15092 = cljs.core.seq.call(null,inst_15033);var state_15105__$1 = (function (){var statearr_15165 = state_15105;(statearr_15165[(32)] = inst_15091);
return statearr_15165;
})();if(inst_15092)
{var statearr_15166_15232 = state_15105__$1;(statearr_15166_15232[(1)] = (42));
} else
{var statearr_15167_15233 = state_15105__$1;(statearr_15167_15233[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (16)))
{var inst_15002 = (state_15105[(7)]);var inst_15004 = cljs.core.chunked_seq_QMARK_.call(null,inst_15002);var state_15105__$1 = state_15105;if(inst_15004)
{var statearr_15171_15234 = state_15105__$1;(statearr_15171_15234[(1)] = (19));
} else
{var statearr_15172_15235 = state_15105__$1;(statearr_15172_15235[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (38)))
{var inst_15084 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15173_15236 = state_15105__$1;(statearr_15173_15236[(2)] = inst_15084);
(statearr_15173_15236[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (30)))
{var inst_15042 = (state_15105[(9)]);var inst_15044 = (state_15105[(10)]);var inst_15043 = (state_15105[(19)]);var inst_15041 = (state_15105[(20)]);var inst_15058 = (state_15105[(2)]);var inst_15059 = (inst_15044 + (1));var tmp15168 = inst_15042;var tmp15169 = inst_15043;var tmp15170 = inst_15041;var inst_15041__$1 = tmp15170;var inst_15042__$1 = tmp15168;var inst_15043__$1 = tmp15169;var inst_15044__$1 = inst_15059;var state_15105__$1 = (function (){var statearr_15174 = state_15105;(statearr_15174[(9)] = inst_15042__$1);
(statearr_15174[(33)] = inst_15058);
(statearr_15174[(10)] = inst_15044__$1);
(statearr_15174[(19)] = inst_15043__$1);
(statearr_15174[(20)] = inst_15041__$1);
return statearr_15174;
})();var statearr_15175_15237 = state_15105__$1;(statearr_15175_15237[(2)] = null);
(statearr_15175_15237[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (10)))
{var inst_14983 = (state_15105[(13)]);var inst_14985 = (state_15105[(16)]);var inst_14991 = cljs.core._nth.call(null,inst_14983,inst_14985);var inst_14992 = cljs.core.nth.call(null,inst_14991,(0),null);var inst_14993 = cljs.core.nth.call(null,inst_14991,(1),null);var state_15105__$1 = (function (){var statearr_15176 = state_15105;(statearr_15176[(28)] = inst_14992);
return statearr_15176;
})();if(cljs.core.truth_(inst_14993))
{var statearr_15177_15238 = state_15105__$1;(statearr_15177_15238[(1)] = (13));
} else
{var statearr_15178_15239 = state_15105__$1;(statearr_15178_15239[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (18)))
{var inst_15026 = (state_15105[(2)]);var state_15105__$1 = state_15105;var statearr_15179_15240 = state_15105__$1;(statearr_15179_15240[(2)] = inst_15026);
(statearr_15179_15240[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (42)))
{var state_15105__$1 = state_15105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15105__$1,(45),dchan);
} else
{if((state_val_15106 === (37)))
{var inst_15062 = (state_15105[(17)]);var inst_15071 = cljs.core.first.call(null,inst_15062);var state_15105__$1 = (function (){var statearr_15180 = state_15105;(statearr_15180[(25)] = inst_15071);
return statearr_15180;
})();var statearr_15181_15241 = state_15105__$1;(statearr_15181_15241[(2)] = null);
(statearr_15181_15241[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15106 === (8)))
{var inst_14984 = (state_15105[(15)]);var inst_14985 = (state_15105[(16)]);var inst_14987 = (inst_14985 < inst_14984);var inst_14988 = inst_14987;var state_15105__$1 = state_15105;if(cljs.core.truth_(inst_14988))
{var statearr_15182_15242 = state_15105__$1;(statearr_15182_15242[(1)] = (10));
} else
{var statearr_15183_15243 = state_15105__$1;(statearr_15183_15243[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11083__auto___15191,cs,m,dchan,dctr,done))
;return ((function (switch__11018__auto__,c__11083__auto___15191,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_15187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15187[(0)] = state_machine__11019__auto__);
(statearr_15187[(1)] = (1));
return statearr_15187;
});
var state_machine__11019__auto____1 = (function (state_15105){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_15105);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e15188){if((e15188 instanceof Object))
{var ex__11022__auto__ = e15188;var statearr_15189_15244 = state_15105;(statearr_15189_15244[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15188;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15245 = state_15105;
state_15105 = G__15245;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_15105){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_15105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___15191,cs,m,dchan,dctr,done))
})();var state__11085__auto__ = (function (){var statearr_15190 = f__11084__auto__.call(null);(statearr_15190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___15191);
return statearr_15190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___15191,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15247 = {};return obj15247;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7859__auto__ = m;if(and__7859__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7859__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8498__auto__ = (((m == null))?null:m);return (function (){var or__7871__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7859__auto__ = m;if(and__7859__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7859__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8498__auto__ = (((m == null))?null:m);return (function (){var or__7871__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7859__auto__ = m;if(and__7859__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7859__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8498__auto__ = (((m == null))?null:m);return (function (){var or__7871__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7859__auto__ = m;if(and__7859__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7859__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8498__auto__ = (((m == null))?null:m);return (function (){var or__7871__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7859__auto__ = m;if(and__7859__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7859__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8498__auto__ = (((m == null))?null:m);return (function (){var or__7871__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15357 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15358){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15358 = meta15358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15357.cljs$lang$type = true;
cljs.core.async.t15357.cljs$lang$ctorStr = "cljs.core.async/t15357";
cljs.core.async.t15357.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t15357");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15357.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15357.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15359){var self__ = this;
var _15359__$1 = this;return self__.meta15358;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15359,meta15358__$1){var self__ = this;
var _15359__$1 = this;return (new cljs.core.async.t15357(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15358__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15357 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15357(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15358){return (new cljs.core.async.t15357(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15358));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15357(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11083__auto___15466 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___15466,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___15466,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15424){var state_val_15425 = (state_15424[(1)]);if((state_val_15425 === (7)))
{var inst_15373 = (state_15424[(7)]);var inst_15378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15373);var state_15424__$1 = state_15424;var statearr_15426_15467 = state_15424__$1;(statearr_15426_15467[(2)] = inst_15378);
(statearr_15426_15467[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (20)))
{var inst_15388 = (state_15424[(8)]);var state_15424__$1 = state_15424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15424__$1,(23),out,inst_15388);
} else
{if((state_val_15425 === (1)))
{var inst_15363 = (state_15424[(9)]);var inst_15363__$1 = calc_state.call(null);var inst_15364 = cljs.core.seq_QMARK_.call(null,inst_15363__$1);var state_15424__$1 = (function (){var statearr_15427 = state_15424;(statearr_15427[(9)] = inst_15363__$1);
return statearr_15427;
})();if(inst_15364)
{var statearr_15428_15468 = state_15424__$1;(statearr_15428_15468[(1)] = (2));
} else
{var statearr_15429_15469 = state_15424__$1;(statearr_15429_15469[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (4)))
{var inst_15363 = (state_15424[(9)]);var inst_15369 = (state_15424[(2)]);var inst_15370 = cljs.core.get.call(null,inst_15369,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15371 = cljs.core.get.call(null,inst_15369,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15372 = cljs.core.get.call(null,inst_15369,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_15373 = inst_15363;var state_15424__$1 = (function (){var statearr_15430 = state_15424;(statearr_15430[(10)] = inst_15371);
(statearr_15430[(7)] = inst_15373);
(statearr_15430[(11)] = inst_15372);
(statearr_15430[(12)] = inst_15370);
return statearr_15430;
})();var statearr_15431_15470 = state_15424__$1;(statearr_15431_15470[(2)] = null);
(statearr_15431_15470[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (15)))
{var state_15424__$1 = state_15424;var statearr_15432_15471 = state_15424__$1;(statearr_15432_15471[(2)] = null);
(statearr_15432_15471[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (21)))
{var state_15424__$1 = state_15424;var statearr_15433_15472 = state_15424__$1;(statearr_15433_15472[(2)] = null);
(statearr_15433_15472[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (13)))
{var inst_15420 = (state_15424[(2)]);var state_15424__$1 = state_15424;var statearr_15434_15473 = state_15424__$1;(statearr_15434_15473[(2)] = inst_15420);
(statearr_15434_15473[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (22)))
{var inst_15381 = (state_15424[(13)]);var inst_15417 = (state_15424[(2)]);var inst_15373 = inst_15381;var state_15424__$1 = (function (){var statearr_15435 = state_15424;(statearr_15435[(14)] = inst_15417);
(statearr_15435[(7)] = inst_15373);
return statearr_15435;
})();var statearr_15436_15474 = state_15424__$1;(statearr_15436_15474[(2)] = null);
(statearr_15436_15474[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (6)))
{var inst_15422 = (state_15424[(2)]);var state_15424__$1 = state_15424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15424__$1,inst_15422);
} else
{if((state_val_15425 === (17)))
{var inst_15403 = (state_15424[(15)]);var state_15424__$1 = state_15424;var statearr_15437_15475 = state_15424__$1;(statearr_15437_15475[(2)] = inst_15403);
(statearr_15437_15475[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (3)))
{var inst_15363 = (state_15424[(9)]);var state_15424__$1 = state_15424;var statearr_15438_15476 = state_15424__$1;(statearr_15438_15476[(2)] = inst_15363);
(statearr_15438_15476[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (12)))
{var inst_15403 = (state_15424[(15)]);var inst_15389 = (state_15424[(16)]);var inst_15384 = (state_15424[(17)]);var inst_15403__$1 = inst_15384.call(null,inst_15389);var state_15424__$1 = (function (){var statearr_15439 = state_15424;(statearr_15439[(15)] = inst_15403__$1);
return statearr_15439;
})();if(cljs.core.truth_(inst_15403__$1))
{var statearr_15440_15477 = state_15424__$1;(statearr_15440_15477[(1)] = (17));
} else
{var statearr_15441_15478 = state_15424__$1;(statearr_15441_15478[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (2)))
{var inst_15363 = (state_15424[(9)]);var inst_15366 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15363);var state_15424__$1 = state_15424;var statearr_15442_15479 = state_15424__$1;(statearr_15442_15479[(2)] = inst_15366);
(statearr_15442_15479[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (23)))
{var inst_15414 = (state_15424[(2)]);var state_15424__$1 = state_15424;var statearr_15443_15480 = state_15424__$1;(statearr_15443_15480[(2)] = inst_15414);
(statearr_15443_15480[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (19)))
{var inst_15411 = (state_15424[(2)]);var state_15424__$1 = state_15424;if(cljs.core.truth_(inst_15411))
{var statearr_15444_15481 = state_15424__$1;(statearr_15444_15481[(1)] = (20));
} else
{var statearr_15445_15482 = state_15424__$1;(statearr_15445_15482[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (11)))
{var inst_15388 = (state_15424[(8)]);var inst_15394 = (inst_15388 == null);var state_15424__$1 = state_15424;if(cljs.core.truth_(inst_15394))
{var statearr_15446_15483 = state_15424__$1;(statearr_15446_15483[(1)] = (14));
} else
{var statearr_15447_15484 = state_15424__$1;(statearr_15447_15484[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (9)))
{var inst_15381 = (state_15424[(13)]);var inst_15381__$1 = (state_15424[(2)]);var inst_15382 = cljs.core.get.call(null,inst_15381__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15383 = cljs.core.get.call(null,inst_15381__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15384 = cljs.core.get.call(null,inst_15381__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_15424__$1 = (function (){var statearr_15448 = state_15424;(statearr_15448[(13)] = inst_15381__$1);
(statearr_15448[(18)] = inst_15383);
(statearr_15448[(17)] = inst_15384);
return statearr_15448;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15424__$1,(10),inst_15382);
} else
{if((state_val_15425 === (5)))
{var inst_15373 = (state_15424[(7)]);var inst_15376 = cljs.core.seq_QMARK_.call(null,inst_15373);var state_15424__$1 = state_15424;if(inst_15376)
{var statearr_15449_15485 = state_15424__$1;(statearr_15449_15485[(1)] = (7));
} else
{var statearr_15450_15486 = state_15424__$1;(statearr_15450_15486[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (14)))
{var inst_15389 = (state_15424[(16)]);var inst_15396 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15389);var state_15424__$1 = state_15424;var statearr_15451_15487 = state_15424__$1;(statearr_15451_15487[(2)] = inst_15396);
(statearr_15451_15487[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (16)))
{var inst_15399 = (state_15424[(2)]);var inst_15400 = calc_state.call(null);var inst_15373 = inst_15400;var state_15424__$1 = (function (){var statearr_15452 = state_15424;(statearr_15452[(7)] = inst_15373);
(statearr_15452[(19)] = inst_15399);
return statearr_15452;
})();var statearr_15453_15488 = state_15424__$1;(statearr_15453_15488[(2)] = null);
(statearr_15453_15488[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (10)))
{var inst_15388 = (state_15424[(8)]);var inst_15389 = (state_15424[(16)]);var inst_15387 = (state_15424[(2)]);var inst_15388__$1 = cljs.core.nth.call(null,inst_15387,(0),null);var inst_15389__$1 = cljs.core.nth.call(null,inst_15387,(1),null);var inst_15390 = (inst_15388__$1 == null);var inst_15391 = cljs.core._EQ_.call(null,inst_15389__$1,change);var inst_15392 = (inst_15390) || (inst_15391);var state_15424__$1 = (function (){var statearr_15454 = state_15424;(statearr_15454[(8)] = inst_15388__$1);
(statearr_15454[(16)] = inst_15389__$1);
return statearr_15454;
})();if(cljs.core.truth_(inst_15392))
{var statearr_15455_15489 = state_15424__$1;(statearr_15455_15489[(1)] = (11));
} else
{var statearr_15456_15490 = state_15424__$1;(statearr_15456_15490[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (18)))
{var inst_15383 = (state_15424[(18)]);var inst_15389 = (state_15424[(16)]);var inst_15384 = (state_15424[(17)]);var inst_15406 = cljs.core.empty_QMARK_.call(null,inst_15384);var inst_15407 = inst_15383.call(null,inst_15389);var inst_15408 = cljs.core.not.call(null,inst_15407);var inst_15409 = (inst_15406) && (inst_15408);var state_15424__$1 = state_15424;var statearr_15457_15491 = state_15424__$1;(statearr_15457_15491[(2)] = inst_15409);
(statearr_15457_15491[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15425 === (8)))
{var inst_15373 = (state_15424[(7)]);var state_15424__$1 = state_15424;var statearr_15458_15492 = state_15424__$1;(statearr_15458_15492[(2)] = inst_15373);
(statearr_15458_15492[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11083__auto___15466,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11018__auto__,c__11083__auto___15466,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_15462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15462[(0)] = state_machine__11019__auto__);
(statearr_15462[(1)] = (1));
return statearr_15462;
});
var state_machine__11019__auto____1 = (function (state_15424){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_15424);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e15463){if((e15463 instanceof Object))
{var ex__11022__auto__ = e15463;var statearr_15464_15493 = state_15424;(statearr_15464_15493[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15494 = state_15424;
state_15424 = G__15494;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_15424){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_15424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___15466,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11085__auto__ = (function (){var statearr_15465 = f__11084__auto__.call(null);(statearr_15465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___15466);
return statearr_15465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___15466,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15496 = {};return obj15496;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7859__auto__ = p;if(and__7859__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7859__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8498__auto__ = (((p == null))?null:p);return (function (){var or__7871__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7859__auto__ = p;if(and__7859__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7859__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8498__auto__ = (((p == null))?null:p);return (function (){var or__7871__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7859__auto__ = p;if(and__7859__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7859__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8498__auto__ = (((p == null))?null:p);return (function (){var or__7871__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7859__auto__ = p;if(and__7859__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7859__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8498__auto__ = (((p == null))?null:p);return (function (){var or__7871__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8498__auto__)]);if(or__7871__auto__)
{return or__7871__auto__;
} else
{var or__7871__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7871__auto____$1)
{return or__7871__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7871__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7871__auto__))
{return or__7871__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7871__auto__,mults){
return (function (p1__15497_SHARP_){if(cljs.core.truth_(p1__15497_SHARP_.call(null,topic)))
{return p1__15497_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15497_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7871__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15622 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15623){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15623 = meta15623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15622.cljs$lang$type = true;
cljs.core.async.t15622.cljs$lang$ctorStr = "cljs.core.async/t15622";
cljs.core.async.t15622.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8438__auto__,writer__8439__auto__,opt__8440__auto__){return cljs.core._write.call(null,writer__8439__auto__,"cljs.core.async/t15622");
});})(mults,ensure_mult))
;
cljs.core.async.t15622.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15622.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15622.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15622.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15624){var self__ = this;
var _15624__$1 = this;return self__.meta15623;
});})(mults,ensure_mult))
;
cljs.core.async.t15622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15624,meta15623__$1){var self__ = this;
var _15624__$1 = this;return (new cljs.core.async.t15622(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15623__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15622 = ((function (mults,ensure_mult){
return (function __GT_t15622(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15623){return (new cljs.core.async.t15622(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15623));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15622(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11083__auto___15746 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___15746,mults,ensure_mult,p){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___15746,mults,ensure_mult,p){
return (function (state_15698){var state_val_15699 = (state_15698[(1)]);if((state_val_15699 === (7)))
{var inst_15694 = (state_15698[(2)]);var state_15698__$1 = state_15698;var statearr_15700_15747 = state_15698__$1;(statearr_15700_15747[(2)] = inst_15694);
(statearr_15700_15747[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (20)))
{var state_15698__$1 = state_15698;var statearr_15701_15748 = state_15698__$1;(statearr_15701_15748[(2)] = null);
(statearr_15701_15748[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (1)))
{var state_15698__$1 = state_15698;var statearr_15702_15749 = state_15698__$1;(statearr_15702_15749[(2)] = null);
(statearr_15702_15749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (24)))
{var inst_15677 = (state_15698[(7)]);var inst_15627 = (state_15698[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15698,(23),Object,null,(22));var inst_15684 = cljs.core.async.muxch_STAR_.call(null,inst_15677);var state_15698__$1 = state_15698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15698__$1,(25),inst_15684,inst_15627);
} else
{if((state_val_15699 === (4)))
{var inst_15627 = (state_15698[(8)]);var inst_15627__$1 = (state_15698[(2)]);var inst_15628 = (inst_15627__$1 == null);var state_15698__$1 = (function (){var statearr_15703 = state_15698;(statearr_15703[(8)] = inst_15627__$1);
return statearr_15703;
})();if(cljs.core.truth_(inst_15628))
{var statearr_15704_15750 = state_15698__$1;(statearr_15704_15750[(1)] = (5));
} else
{var statearr_15705_15751 = state_15698__$1;(statearr_15705_15751[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (15)))
{var inst_15669 = (state_15698[(2)]);var state_15698__$1 = state_15698;var statearr_15706_15752 = state_15698__$1;(statearr_15706_15752[(2)] = inst_15669);
(statearr_15706_15752[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (21)))
{var inst_15691 = (state_15698[(2)]);var state_15698__$1 = (function (){var statearr_15707 = state_15698;(statearr_15707[(9)] = inst_15691);
return statearr_15707;
})();var statearr_15708_15753 = state_15698__$1;(statearr_15708_15753[(2)] = null);
(statearr_15708_15753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (13)))
{var inst_15651 = (state_15698[(10)]);var inst_15653 = cljs.core.chunked_seq_QMARK_.call(null,inst_15651);var state_15698__$1 = state_15698;if(inst_15653)
{var statearr_15709_15754 = state_15698__$1;(statearr_15709_15754[(1)] = (16));
} else
{var statearr_15710_15755 = state_15698__$1;(statearr_15710_15755[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (22)))
{var inst_15688 = (state_15698[(2)]);var state_15698__$1 = state_15698;var statearr_15711_15756 = state_15698__$1;(statearr_15711_15756[(2)] = inst_15688);
(statearr_15711_15756[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (6)))
{var inst_15675 = (state_15698[(11)]);var inst_15677 = (state_15698[(7)]);var inst_15627 = (state_15698[(8)]);var inst_15675__$1 = topic_fn.call(null,inst_15627);var inst_15676 = cljs.core.deref.call(null,mults);var inst_15677__$1 = cljs.core.get.call(null,inst_15676,inst_15675__$1);var state_15698__$1 = (function (){var statearr_15712 = state_15698;(statearr_15712[(11)] = inst_15675__$1);
(statearr_15712[(7)] = inst_15677__$1);
return statearr_15712;
})();if(cljs.core.truth_(inst_15677__$1))
{var statearr_15713_15757 = state_15698__$1;(statearr_15713_15757[(1)] = (19));
} else
{var statearr_15714_15758 = state_15698__$1;(statearr_15714_15758[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (25)))
{var inst_15686 = (state_15698[(2)]);var state_15698__$1 = state_15698;var statearr_15715_15759 = state_15698__$1;(statearr_15715_15759[(2)] = inst_15686);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15698__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (17)))
{var inst_15651 = (state_15698[(10)]);var inst_15660 = cljs.core.first.call(null,inst_15651);var inst_15661 = cljs.core.async.muxch_STAR_.call(null,inst_15660);var inst_15662 = cljs.core.async.close_BANG_.call(null,inst_15661);var inst_15663 = cljs.core.next.call(null,inst_15651);var inst_15637 = inst_15663;var inst_15638 = null;var inst_15639 = (0);var inst_15640 = (0);var state_15698__$1 = (function (){var statearr_15716 = state_15698;(statearr_15716[(12)] = inst_15662);
(statearr_15716[(13)] = inst_15637);
(statearr_15716[(14)] = inst_15639);
(statearr_15716[(15)] = inst_15640);
(statearr_15716[(16)] = inst_15638);
return statearr_15716;
})();var statearr_15717_15760 = state_15698__$1;(statearr_15717_15760[(2)] = null);
(statearr_15717_15760[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (3)))
{var inst_15696 = (state_15698[(2)]);var state_15698__$1 = state_15698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15698__$1,inst_15696);
} else
{if((state_val_15699 === (12)))
{var inst_15671 = (state_15698[(2)]);var state_15698__$1 = state_15698;var statearr_15718_15761 = state_15698__$1;(statearr_15718_15761[(2)] = inst_15671);
(statearr_15718_15761[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (2)))
{var state_15698__$1 = state_15698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15698__$1,(4),ch);
} else
{if((state_val_15699 === (23)))
{var inst_15675 = (state_15698[(11)]);var inst_15679 = (state_15698[(2)]);var inst_15680 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15675);var state_15698__$1 = (function (){var statearr_15719 = state_15698;(statearr_15719[(17)] = inst_15679);
return statearr_15719;
})();var statearr_15720_15762 = state_15698__$1;(statearr_15720_15762[(2)] = inst_15680);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15698__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (19)))
{var state_15698__$1 = state_15698;var statearr_15721_15763 = state_15698__$1;(statearr_15721_15763[(2)] = null);
(statearr_15721_15763[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (11)))
{var inst_15637 = (state_15698[(13)]);var inst_15651 = (state_15698[(10)]);var inst_15651__$1 = cljs.core.seq.call(null,inst_15637);var state_15698__$1 = (function (){var statearr_15722 = state_15698;(statearr_15722[(10)] = inst_15651__$1);
return statearr_15722;
})();if(inst_15651__$1)
{var statearr_15723_15764 = state_15698__$1;(statearr_15723_15764[(1)] = (13));
} else
{var statearr_15724_15765 = state_15698__$1;(statearr_15724_15765[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (9)))
{var inst_15673 = (state_15698[(2)]);var state_15698__$1 = state_15698;var statearr_15725_15766 = state_15698__$1;(statearr_15725_15766[(2)] = inst_15673);
(statearr_15725_15766[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (5)))
{var inst_15634 = cljs.core.deref.call(null,mults);var inst_15635 = cljs.core.vals.call(null,inst_15634);var inst_15636 = cljs.core.seq.call(null,inst_15635);var inst_15637 = inst_15636;var inst_15638 = null;var inst_15639 = (0);var inst_15640 = (0);var state_15698__$1 = (function (){var statearr_15726 = state_15698;(statearr_15726[(13)] = inst_15637);
(statearr_15726[(14)] = inst_15639);
(statearr_15726[(15)] = inst_15640);
(statearr_15726[(16)] = inst_15638);
return statearr_15726;
})();var statearr_15727_15767 = state_15698__$1;(statearr_15727_15767[(2)] = null);
(statearr_15727_15767[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (14)))
{var state_15698__$1 = state_15698;var statearr_15731_15768 = state_15698__$1;(statearr_15731_15768[(2)] = null);
(statearr_15731_15768[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (16)))
{var inst_15651 = (state_15698[(10)]);var inst_15655 = cljs.core.chunk_first.call(null,inst_15651);var inst_15656 = cljs.core.chunk_rest.call(null,inst_15651);var inst_15657 = cljs.core.count.call(null,inst_15655);var inst_15637 = inst_15656;var inst_15638 = inst_15655;var inst_15639 = inst_15657;var inst_15640 = (0);var state_15698__$1 = (function (){var statearr_15732 = state_15698;(statearr_15732[(13)] = inst_15637);
(statearr_15732[(14)] = inst_15639);
(statearr_15732[(15)] = inst_15640);
(statearr_15732[(16)] = inst_15638);
return statearr_15732;
})();var statearr_15733_15769 = state_15698__$1;(statearr_15733_15769[(2)] = null);
(statearr_15733_15769[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (10)))
{var inst_15637 = (state_15698[(13)]);var inst_15639 = (state_15698[(14)]);var inst_15640 = (state_15698[(15)]);var inst_15638 = (state_15698[(16)]);var inst_15645 = cljs.core._nth.call(null,inst_15638,inst_15640);var inst_15646 = cljs.core.async.muxch_STAR_.call(null,inst_15645);var inst_15647 = cljs.core.async.close_BANG_.call(null,inst_15646);var inst_15648 = (inst_15640 + (1));var tmp15728 = inst_15637;var tmp15729 = inst_15639;var tmp15730 = inst_15638;var inst_15637__$1 = tmp15728;var inst_15638__$1 = tmp15730;var inst_15639__$1 = tmp15729;var inst_15640__$1 = inst_15648;var state_15698__$1 = (function (){var statearr_15734 = state_15698;(statearr_15734[(18)] = inst_15647);
(statearr_15734[(13)] = inst_15637__$1);
(statearr_15734[(14)] = inst_15639__$1);
(statearr_15734[(15)] = inst_15640__$1);
(statearr_15734[(16)] = inst_15638__$1);
return statearr_15734;
})();var statearr_15735_15770 = state_15698__$1;(statearr_15735_15770[(2)] = null);
(statearr_15735_15770[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (18)))
{var inst_15666 = (state_15698[(2)]);var state_15698__$1 = state_15698;var statearr_15736_15771 = state_15698__$1;(statearr_15736_15771[(2)] = inst_15666);
(statearr_15736_15771[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15699 === (8)))
{var inst_15639 = (state_15698[(14)]);var inst_15640 = (state_15698[(15)]);var inst_15642 = (inst_15640 < inst_15639);var inst_15643 = inst_15642;var state_15698__$1 = state_15698;if(cljs.core.truth_(inst_15643))
{var statearr_15737_15772 = state_15698__$1;(statearr_15737_15772[(1)] = (10));
} else
{var statearr_15738_15773 = state_15698__$1;(statearr_15738_15773[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11083__auto___15746,mults,ensure_mult,p))
;return ((function (switch__11018__auto__,c__11083__auto___15746,mults,ensure_mult,p){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_15742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15742[(0)] = state_machine__11019__auto__);
(statearr_15742[(1)] = (1));
return statearr_15742;
});
var state_machine__11019__auto____1 = (function (state_15698){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_15698);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e15743){if((e15743 instanceof Object))
{var ex__11022__auto__ = e15743;var statearr_15744_15774 = state_15698;(statearr_15744_15774[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15698);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15775 = state_15698;
state_15698 = G__15775;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_15698){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_15698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___15746,mults,ensure_mult,p))
})();var state__11085__auto__ = (function (){var statearr_15745 = f__11084__auto__.call(null);(statearr_15745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___15746);
return statearr_15745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___15746,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11083__auto___15912 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___15912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___15912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15882){var state_val_15883 = (state_15882[(1)]);if((state_val_15883 === (7)))
{var state_15882__$1 = state_15882;var statearr_15884_15913 = state_15882__$1;(statearr_15884_15913[(2)] = null);
(statearr_15884_15913[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (1)))
{var state_15882__$1 = state_15882;var statearr_15885_15914 = state_15882__$1;(statearr_15885_15914[(2)] = null);
(statearr_15885_15914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (4)))
{var inst_15846 = (state_15882[(7)]);var inst_15848 = (inst_15846 < cnt);var state_15882__$1 = state_15882;if(cljs.core.truth_(inst_15848))
{var statearr_15886_15915 = state_15882__$1;(statearr_15886_15915[(1)] = (6));
} else
{var statearr_15887_15916 = state_15882__$1;(statearr_15887_15916[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (15)))
{var inst_15878 = (state_15882[(2)]);var state_15882__$1 = state_15882;var statearr_15888_15917 = state_15882__$1;(statearr_15888_15917[(2)] = inst_15878);
(statearr_15888_15917[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (13)))
{var inst_15871 = cljs.core.async.close_BANG_.call(null,out);var state_15882__$1 = state_15882;var statearr_15889_15918 = state_15882__$1;(statearr_15889_15918[(2)] = inst_15871);
(statearr_15889_15918[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (6)))
{var state_15882__$1 = state_15882;var statearr_15890_15919 = state_15882__$1;(statearr_15890_15919[(2)] = null);
(statearr_15890_15919[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (3)))
{var inst_15880 = (state_15882[(2)]);var state_15882__$1 = state_15882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15882__$1,inst_15880);
} else
{if((state_val_15883 === (12)))
{var inst_15868 = (state_15882[(8)]);var inst_15868__$1 = (state_15882[(2)]);var inst_15869 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15868__$1);var state_15882__$1 = (function (){var statearr_15891 = state_15882;(statearr_15891[(8)] = inst_15868__$1);
return statearr_15891;
})();if(cljs.core.truth_(inst_15869))
{var statearr_15892_15920 = state_15882__$1;(statearr_15892_15920[(1)] = (13));
} else
{var statearr_15893_15921 = state_15882__$1;(statearr_15893_15921[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (2)))
{var inst_15845 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15846 = (0);var state_15882__$1 = (function (){var statearr_15894 = state_15882;(statearr_15894[(7)] = inst_15846);
(statearr_15894[(9)] = inst_15845);
return statearr_15894;
})();var statearr_15895_15922 = state_15882__$1;(statearr_15895_15922[(2)] = null);
(statearr_15895_15922[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (11)))
{var inst_15846 = (state_15882[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15882,(10),Object,null,(9));var inst_15855 = chs__$1.call(null,inst_15846);var inst_15856 = done.call(null,inst_15846);var inst_15857 = cljs.core.async.take_BANG_.call(null,inst_15855,inst_15856);var state_15882__$1 = state_15882;var statearr_15896_15923 = state_15882__$1;(statearr_15896_15923[(2)] = inst_15857);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15882__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (9)))
{var inst_15846 = (state_15882[(7)]);var inst_15859 = (state_15882[(2)]);var inst_15860 = (inst_15846 + (1));var inst_15846__$1 = inst_15860;var state_15882__$1 = (function (){var statearr_15897 = state_15882;(statearr_15897[(7)] = inst_15846__$1);
(statearr_15897[(10)] = inst_15859);
return statearr_15897;
})();var statearr_15898_15924 = state_15882__$1;(statearr_15898_15924[(2)] = null);
(statearr_15898_15924[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (5)))
{var inst_15866 = (state_15882[(2)]);var state_15882__$1 = (function (){var statearr_15899 = state_15882;(statearr_15899[(11)] = inst_15866);
return statearr_15899;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15882__$1,(12),dchan);
} else
{if((state_val_15883 === (14)))
{var inst_15868 = (state_15882[(8)]);var inst_15873 = cljs.core.apply.call(null,f,inst_15868);var state_15882__$1 = state_15882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15882__$1,(16),out,inst_15873);
} else
{if((state_val_15883 === (16)))
{var inst_15875 = (state_15882[(2)]);var state_15882__$1 = (function (){var statearr_15900 = state_15882;(statearr_15900[(12)] = inst_15875);
return statearr_15900;
})();var statearr_15901_15925 = state_15882__$1;(statearr_15901_15925[(2)] = null);
(statearr_15901_15925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (10)))
{var inst_15850 = (state_15882[(2)]);var inst_15851 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15882__$1 = (function (){var statearr_15902 = state_15882;(statearr_15902[(13)] = inst_15850);
return statearr_15902;
})();var statearr_15903_15926 = state_15882__$1;(statearr_15903_15926[(2)] = inst_15851);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15882__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15883 === (8)))
{var inst_15864 = (state_15882[(2)]);var state_15882__$1 = state_15882;var statearr_15904_15927 = state_15882__$1;(statearr_15904_15927[(2)] = inst_15864);
(statearr_15904_15927[(1)] = (5));
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
}
}
}
}
}
}
}
}
}
});})(c__11083__auto___15912,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11018__auto__,c__11083__auto___15912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_15908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15908[(0)] = state_machine__11019__auto__);
(statearr_15908[(1)] = (1));
return statearr_15908;
});
var state_machine__11019__auto____1 = (function (state_15882){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_15882);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e15909){if((e15909 instanceof Object))
{var ex__11022__auto__ = e15909;var statearr_15910_15928 = state_15882;(statearr_15910_15928[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15929 = state_15882;
state_15882 = G__15929;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_15882){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_15882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___15912,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11085__auto__ = (function (){var statearr_15911 = f__11084__auto__.call(null);(statearr_15911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___15912);
return statearr_15911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___15912,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11083__auto___16037 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___16037,out){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___16037,out){
return (function (state_16013){var state_val_16014 = (state_16013[(1)]);if((state_val_16014 === (7)))
{var inst_15993 = (state_16013[(7)]);var inst_15992 = (state_16013[(8)]);var inst_15992__$1 = (state_16013[(2)]);var inst_15993__$1 = cljs.core.nth.call(null,inst_15992__$1,(0),null);var inst_15994 = cljs.core.nth.call(null,inst_15992__$1,(1),null);var inst_15995 = (inst_15993__$1 == null);var state_16013__$1 = (function (){var statearr_16015 = state_16013;(statearr_16015[(7)] = inst_15993__$1);
(statearr_16015[(9)] = inst_15994);
(statearr_16015[(8)] = inst_15992__$1);
return statearr_16015;
})();if(cljs.core.truth_(inst_15995))
{var statearr_16016_16038 = state_16013__$1;(statearr_16016_16038[(1)] = (8));
} else
{var statearr_16017_16039 = state_16013__$1;(statearr_16017_16039[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16014 === (1)))
{var inst_15984 = cljs.core.vec.call(null,chs);var inst_15985 = inst_15984;var state_16013__$1 = (function (){var statearr_16018 = state_16013;(statearr_16018[(10)] = inst_15985);
return statearr_16018;
})();var statearr_16019_16040 = state_16013__$1;(statearr_16019_16040[(2)] = null);
(statearr_16019_16040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16014 === (4)))
{var inst_15985 = (state_16013[(10)]);var state_16013__$1 = state_16013;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16013__$1,(7),inst_15985);
} else
{if((state_val_16014 === (6)))
{var inst_16009 = (state_16013[(2)]);var state_16013__$1 = state_16013;var statearr_16020_16041 = state_16013__$1;(statearr_16020_16041[(2)] = inst_16009);
(statearr_16020_16041[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16014 === (3)))
{var inst_16011 = (state_16013[(2)]);var state_16013__$1 = state_16013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16013__$1,inst_16011);
} else
{if((state_val_16014 === (2)))
{var inst_15985 = (state_16013[(10)]);var inst_15987 = cljs.core.count.call(null,inst_15985);var inst_15988 = (inst_15987 > (0));var state_16013__$1 = state_16013;if(cljs.core.truth_(inst_15988))
{var statearr_16022_16042 = state_16013__$1;(statearr_16022_16042[(1)] = (4));
} else
{var statearr_16023_16043 = state_16013__$1;(statearr_16023_16043[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16014 === (11)))
{var inst_15985 = (state_16013[(10)]);var inst_16002 = (state_16013[(2)]);var tmp16021 = inst_15985;var inst_15985__$1 = tmp16021;var state_16013__$1 = (function (){var statearr_16024 = state_16013;(statearr_16024[(10)] = inst_15985__$1);
(statearr_16024[(11)] = inst_16002);
return statearr_16024;
})();var statearr_16025_16044 = state_16013__$1;(statearr_16025_16044[(2)] = null);
(statearr_16025_16044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16014 === (9)))
{var inst_15993 = (state_16013[(7)]);var state_16013__$1 = state_16013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16013__$1,(11),out,inst_15993);
} else
{if((state_val_16014 === (5)))
{var inst_16007 = cljs.core.async.close_BANG_.call(null,out);var state_16013__$1 = state_16013;var statearr_16026_16045 = state_16013__$1;(statearr_16026_16045[(2)] = inst_16007);
(statearr_16026_16045[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16014 === (10)))
{var inst_16005 = (state_16013[(2)]);var state_16013__$1 = state_16013;var statearr_16027_16046 = state_16013__$1;(statearr_16027_16046[(2)] = inst_16005);
(statearr_16027_16046[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16014 === (8)))
{var inst_15993 = (state_16013[(7)]);var inst_15985 = (state_16013[(10)]);var inst_15994 = (state_16013[(9)]);var inst_15992 = (state_16013[(8)]);var inst_15997 = (function (){var c = inst_15994;var v = inst_15993;var vec__15990 = inst_15992;var cs = inst_15985;return ((function (c,v,vec__15990,cs,inst_15993,inst_15985,inst_15994,inst_15992,state_val_16014,c__11083__auto___16037,out){
return (function (p1__15930_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15930_SHARP_);
});
;})(c,v,vec__15990,cs,inst_15993,inst_15985,inst_15994,inst_15992,state_val_16014,c__11083__auto___16037,out))
})();var inst_15998 = cljs.core.filterv.call(null,inst_15997,inst_15985);var inst_15985__$1 = inst_15998;var state_16013__$1 = (function (){var statearr_16028 = state_16013;(statearr_16028[(10)] = inst_15985__$1);
return statearr_16028;
})();var statearr_16029_16047 = state_16013__$1;(statearr_16029_16047[(2)] = null);
(statearr_16029_16047[(1)] = (2));
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
}
}
}
}
});})(c__11083__auto___16037,out))
;return ((function (switch__11018__auto__,c__11083__auto___16037,out){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_16033 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16033[(0)] = state_machine__11019__auto__);
(statearr_16033[(1)] = (1));
return statearr_16033;
});
var state_machine__11019__auto____1 = (function (state_16013){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_16013);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e16034){if((e16034 instanceof Object))
{var ex__11022__auto__ = e16034;var statearr_16035_16048 = state_16013;(statearr_16035_16048[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16049 = state_16013;
state_16013 = G__16049;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_16013){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_16013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___16037,out))
})();var state__11085__auto__ = (function (){var statearr_16036 = f__11084__auto__.call(null);(statearr_16036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___16037);
return statearr_16036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___16037,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11083__auto___16142 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___16142,out){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___16142,out){
return (function (state_16119){var state_val_16120 = (state_16119[(1)]);if((state_val_16120 === (7)))
{var inst_16101 = (state_16119[(7)]);var inst_16101__$1 = (state_16119[(2)]);var inst_16102 = (inst_16101__$1 == null);var inst_16103 = cljs.core.not.call(null,inst_16102);var state_16119__$1 = (function (){var statearr_16121 = state_16119;(statearr_16121[(7)] = inst_16101__$1);
return statearr_16121;
})();if(inst_16103)
{var statearr_16122_16143 = state_16119__$1;(statearr_16122_16143[(1)] = (8));
} else
{var statearr_16123_16144 = state_16119__$1;(statearr_16123_16144[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (1)))
{var inst_16096 = (0);var state_16119__$1 = (function (){var statearr_16124 = state_16119;(statearr_16124[(8)] = inst_16096);
return statearr_16124;
})();var statearr_16125_16145 = state_16119__$1;(statearr_16125_16145[(2)] = null);
(statearr_16125_16145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (4)))
{var state_16119__$1 = state_16119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16119__$1,(7),ch);
} else
{if((state_val_16120 === (6)))
{var inst_16114 = (state_16119[(2)]);var state_16119__$1 = state_16119;var statearr_16126_16146 = state_16119__$1;(statearr_16126_16146[(2)] = inst_16114);
(statearr_16126_16146[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (3)))
{var inst_16116 = (state_16119[(2)]);var inst_16117 = cljs.core.async.close_BANG_.call(null,out);var state_16119__$1 = (function (){var statearr_16127 = state_16119;(statearr_16127[(9)] = inst_16116);
return statearr_16127;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16119__$1,inst_16117);
} else
{if((state_val_16120 === (2)))
{var inst_16096 = (state_16119[(8)]);var inst_16098 = (inst_16096 < n);var state_16119__$1 = state_16119;if(cljs.core.truth_(inst_16098))
{var statearr_16128_16147 = state_16119__$1;(statearr_16128_16147[(1)] = (4));
} else
{var statearr_16129_16148 = state_16119__$1;(statearr_16129_16148[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (11)))
{var inst_16096 = (state_16119[(8)]);var inst_16106 = (state_16119[(2)]);var inst_16107 = (inst_16096 + (1));var inst_16096__$1 = inst_16107;var state_16119__$1 = (function (){var statearr_16130 = state_16119;(statearr_16130[(10)] = inst_16106);
(statearr_16130[(8)] = inst_16096__$1);
return statearr_16130;
})();var statearr_16131_16149 = state_16119__$1;(statearr_16131_16149[(2)] = null);
(statearr_16131_16149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (9)))
{var state_16119__$1 = state_16119;var statearr_16132_16150 = state_16119__$1;(statearr_16132_16150[(2)] = null);
(statearr_16132_16150[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (5)))
{var state_16119__$1 = state_16119;var statearr_16133_16151 = state_16119__$1;(statearr_16133_16151[(2)] = null);
(statearr_16133_16151[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (10)))
{var inst_16111 = (state_16119[(2)]);var state_16119__$1 = state_16119;var statearr_16134_16152 = state_16119__$1;(statearr_16134_16152[(2)] = inst_16111);
(statearr_16134_16152[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (8)))
{var inst_16101 = (state_16119[(7)]);var state_16119__$1 = state_16119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16119__$1,(11),out,inst_16101);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11083__auto___16142,out))
;return ((function (switch__11018__auto__,c__11083__auto___16142,out){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_16138 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16138[(0)] = state_machine__11019__auto__);
(statearr_16138[(1)] = (1));
return statearr_16138;
});
var state_machine__11019__auto____1 = (function (state_16119){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_16119);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e16139){if((e16139 instanceof Object))
{var ex__11022__auto__ = e16139;var statearr_16140_16153 = state_16119;(statearr_16140_16153[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16154 = state_16119;
state_16119 = G__16154;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_16119){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_16119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___16142,out))
})();var state__11085__auto__ = (function (){var statearr_16141 = f__11084__auto__.call(null);(statearr_16141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___16142);
return statearr_16141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___16142,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11083__auto___16251 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___16251,out){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___16251,out){
return (function (state_16226){var state_val_16227 = (state_16226[(1)]);if((state_val_16227 === (7)))
{var inst_16221 = (state_16226[(2)]);var state_16226__$1 = state_16226;var statearr_16228_16252 = state_16226__$1;(statearr_16228_16252[(2)] = inst_16221);
(statearr_16228_16252[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16227 === (1)))
{var inst_16203 = null;var state_16226__$1 = (function (){var statearr_16229 = state_16226;(statearr_16229[(7)] = inst_16203);
return statearr_16229;
})();var statearr_16230_16253 = state_16226__$1;(statearr_16230_16253[(2)] = null);
(statearr_16230_16253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16227 === (4)))
{var inst_16206 = (state_16226[(8)]);var inst_16206__$1 = (state_16226[(2)]);var inst_16207 = (inst_16206__$1 == null);var inst_16208 = cljs.core.not.call(null,inst_16207);var state_16226__$1 = (function (){var statearr_16231 = state_16226;(statearr_16231[(8)] = inst_16206__$1);
return statearr_16231;
})();if(inst_16208)
{var statearr_16232_16254 = state_16226__$1;(statearr_16232_16254[(1)] = (5));
} else
{var statearr_16233_16255 = state_16226__$1;(statearr_16233_16255[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16227 === (6)))
{var state_16226__$1 = state_16226;var statearr_16234_16256 = state_16226__$1;(statearr_16234_16256[(2)] = null);
(statearr_16234_16256[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16227 === (3)))
{var inst_16223 = (state_16226[(2)]);var inst_16224 = cljs.core.async.close_BANG_.call(null,out);var state_16226__$1 = (function (){var statearr_16235 = state_16226;(statearr_16235[(9)] = inst_16223);
return statearr_16235;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16226__$1,inst_16224);
} else
{if((state_val_16227 === (2)))
{var state_16226__$1 = state_16226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16226__$1,(4),ch);
} else
{if((state_val_16227 === (11)))
{var inst_16206 = (state_16226[(8)]);var inst_16215 = (state_16226[(2)]);var inst_16203 = inst_16206;var state_16226__$1 = (function (){var statearr_16236 = state_16226;(statearr_16236[(10)] = inst_16215);
(statearr_16236[(7)] = inst_16203);
return statearr_16236;
})();var statearr_16237_16257 = state_16226__$1;(statearr_16237_16257[(2)] = null);
(statearr_16237_16257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16227 === (9)))
{var inst_16206 = (state_16226[(8)]);var state_16226__$1 = state_16226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16226__$1,(11),out,inst_16206);
} else
{if((state_val_16227 === (5)))
{var inst_16206 = (state_16226[(8)]);var inst_16203 = (state_16226[(7)]);var inst_16210 = cljs.core._EQ_.call(null,inst_16206,inst_16203);var state_16226__$1 = state_16226;if(inst_16210)
{var statearr_16239_16258 = state_16226__$1;(statearr_16239_16258[(1)] = (8));
} else
{var statearr_16240_16259 = state_16226__$1;(statearr_16240_16259[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16227 === (10)))
{var inst_16218 = (state_16226[(2)]);var state_16226__$1 = state_16226;var statearr_16241_16260 = state_16226__$1;(statearr_16241_16260[(2)] = inst_16218);
(statearr_16241_16260[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16227 === (8)))
{var inst_16203 = (state_16226[(7)]);var tmp16238 = inst_16203;var inst_16203__$1 = tmp16238;var state_16226__$1 = (function (){var statearr_16242 = state_16226;(statearr_16242[(7)] = inst_16203__$1);
return statearr_16242;
})();var statearr_16243_16261 = state_16226__$1;(statearr_16243_16261[(2)] = null);
(statearr_16243_16261[(1)] = (2));
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
}
}
}
}
});})(c__11083__auto___16251,out))
;return ((function (switch__11018__auto__,c__11083__auto___16251,out){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_16247 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16247[(0)] = state_machine__11019__auto__);
(statearr_16247[(1)] = (1));
return statearr_16247;
});
var state_machine__11019__auto____1 = (function (state_16226){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_16226);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e16248){if((e16248 instanceof Object))
{var ex__11022__auto__ = e16248;var statearr_16249_16262 = state_16226;(statearr_16249_16262[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16263 = state_16226;
state_16226 = G__16263;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_16226){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_16226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___16251,out))
})();var state__11085__auto__ = (function (){var statearr_16250 = f__11084__auto__.call(null);(statearr_16250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___16251);
return statearr_16250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___16251,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11083__auto___16398 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___16398,out){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___16398,out){
return (function (state_16368){var state_val_16369 = (state_16368[(1)]);if((state_val_16369 === (7)))
{var inst_16364 = (state_16368[(2)]);var state_16368__$1 = state_16368;var statearr_16370_16399 = state_16368__$1;(statearr_16370_16399[(2)] = inst_16364);
(statearr_16370_16399[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (1)))
{var inst_16331 = (new Array(n));var inst_16332 = inst_16331;var inst_16333 = (0);var state_16368__$1 = (function (){var statearr_16371 = state_16368;(statearr_16371[(7)] = inst_16333);
(statearr_16371[(8)] = inst_16332);
return statearr_16371;
})();var statearr_16372_16400 = state_16368__$1;(statearr_16372_16400[(2)] = null);
(statearr_16372_16400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (4)))
{var inst_16336 = (state_16368[(9)]);var inst_16336__$1 = (state_16368[(2)]);var inst_16337 = (inst_16336__$1 == null);var inst_16338 = cljs.core.not.call(null,inst_16337);var state_16368__$1 = (function (){var statearr_16373 = state_16368;(statearr_16373[(9)] = inst_16336__$1);
return statearr_16373;
})();if(inst_16338)
{var statearr_16374_16401 = state_16368__$1;(statearr_16374_16401[(1)] = (5));
} else
{var statearr_16375_16402 = state_16368__$1;(statearr_16375_16402[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (15)))
{var inst_16358 = (state_16368[(2)]);var state_16368__$1 = state_16368;var statearr_16376_16403 = state_16368__$1;(statearr_16376_16403[(2)] = inst_16358);
(statearr_16376_16403[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (13)))
{var state_16368__$1 = state_16368;var statearr_16377_16404 = state_16368__$1;(statearr_16377_16404[(2)] = null);
(statearr_16377_16404[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (6)))
{var inst_16333 = (state_16368[(7)]);var inst_16354 = (inst_16333 > (0));var state_16368__$1 = state_16368;if(cljs.core.truth_(inst_16354))
{var statearr_16378_16405 = state_16368__$1;(statearr_16378_16405[(1)] = (12));
} else
{var statearr_16379_16406 = state_16368__$1;(statearr_16379_16406[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (3)))
{var inst_16366 = (state_16368[(2)]);var state_16368__$1 = state_16368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16368__$1,inst_16366);
} else
{if((state_val_16369 === (12)))
{var inst_16332 = (state_16368[(8)]);var inst_16356 = cljs.core.vec.call(null,inst_16332);var state_16368__$1 = state_16368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16368__$1,(15),out,inst_16356);
} else
{if((state_val_16369 === (2)))
{var state_16368__$1 = state_16368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16368__$1,(4),ch);
} else
{if((state_val_16369 === (11)))
{var inst_16348 = (state_16368[(2)]);var inst_16349 = (new Array(n));var inst_16332 = inst_16349;var inst_16333 = (0);var state_16368__$1 = (function (){var statearr_16380 = state_16368;(statearr_16380[(7)] = inst_16333);
(statearr_16380[(8)] = inst_16332);
(statearr_16380[(10)] = inst_16348);
return statearr_16380;
})();var statearr_16381_16407 = state_16368__$1;(statearr_16381_16407[(2)] = null);
(statearr_16381_16407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (9)))
{var inst_16332 = (state_16368[(8)]);var inst_16346 = cljs.core.vec.call(null,inst_16332);var state_16368__$1 = state_16368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16368__$1,(11),out,inst_16346);
} else
{if((state_val_16369 === (5)))
{var inst_16333 = (state_16368[(7)]);var inst_16336 = (state_16368[(9)]);var inst_16341 = (state_16368[(11)]);var inst_16332 = (state_16368[(8)]);var inst_16340 = (inst_16332[inst_16333] = inst_16336);var inst_16341__$1 = (inst_16333 + (1));var inst_16342 = (inst_16341__$1 < n);var state_16368__$1 = (function (){var statearr_16382 = state_16368;(statearr_16382[(12)] = inst_16340);
(statearr_16382[(11)] = inst_16341__$1);
return statearr_16382;
})();if(cljs.core.truth_(inst_16342))
{var statearr_16383_16408 = state_16368__$1;(statearr_16383_16408[(1)] = (8));
} else
{var statearr_16384_16409 = state_16368__$1;(statearr_16384_16409[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (14)))
{var inst_16361 = (state_16368[(2)]);var inst_16362 = cljs.core.async.close_BANG_.call(null,out);var state_16368__$1 = (function (){var statearr_16386 = state_16368;(statearr_16386[(13)] = inst_16361);
return statearr_16386;
})();var statearr_16387_16410 = state_16368__$1;(statearr_16387_16410[(2)] = inst_16362);
(statearr_16387_16410[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (10)))
{var inst_16352 = (state_16368[(2)]);var state_16368__$1 = state_16368;var statearr_16388_16411 = state_16368__$1;(statearr_16388_16411[(2)] = inst_16352);
(statearr_16388_16411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16369 === (8)))
{var inst_16341 = (state_16368[(11)]);var inst_16332 = (state_16368[(8)]);var tmp16385 = inst_16332;var inst_16332__$1 = tmp16385;var inst_16333 = inst_16341;var state_16368__$1 = (function (){var statearr_16389 = state_16368;(statearr_16389[(7)] = inst_16333);
(statearr_16389[(8)] = inst_16332__$1);
return statearr_16389;
})();var statearr_16390_16412 = state_16368__$1;(statearr_16390_16412[(2)] = null);
(statearr_16390_16412[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__11083__auto___16398,out))
;return ((function (switch__11018__auto__,c__11083__auto___16398,out){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_16394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16394[(0)] = state_machine__11019__auto__);
(statearr_16394[(1)] = (1));
return statearr_16394;
});
var state_machine__11019__auto____1 = (function (state_16368){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_16368);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e16395){if((e16395 instanceof Object))
{var ex__11022__auto__ = e16395;var statearr_16396_16413 = state_16368;(statearr_16396_16413[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16368);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16414 = state_16368;
state_16368 = G__16414;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_16368){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_16368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___16398,out))
})();var state__11085__auto__ = (function (){var statearr_16397 = f__11084__auto__.call(null);(statearr_16397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___16398);
return statearr_16397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___16398,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11083__auto___16557 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11083__auto___16557,out){
return (function (){var f__11084__auto__ = (function (){var switch__11018__auto__ = ((function (c__11083__auto___16557,out){
return (function (state_16527){var state_val_16528 = (state_16527[(1)]);if((state_val_16528 === (7)))
{var inst_16523 = (state_16527[(2)]);var state_16527__$1 = state_16527;var statearr_16529_16558 = state_16527__$1;(statearr_16529_16558[(2)] = inst_16523);
(statearr_16529_16558[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (1)))
{var inst_16486 = [];var inst_16487 = inst_16486;var inst_16488 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16527__$1 = (function (){var statearr_16530 = state_16527;(statearr_16530[(7)] = inst_16488);
(statearr_16530[(8)] = inst_16487);
return statearr_16530;
})();var statearr_16531_16559 = state_16527__$1;(statearr_16531_16559[(2)] = null);
(statearr_16531_16559[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (4)))
{var inst_16491 = (state_16527[(9)]);var inst_16491__$1 = (state_16527[(2)]);var inst_16492 = (inst_16491__$1 == null);var inst_16493 = cljs.core.not.call(null,inst_16492);var state_16527__$1 = (function (){var statearr_16532 = state_16527;(statearr_16532[(9)] = inst_16491__$1);
return statearr_16532;
})();if(inst_16493)
{var statearr_16533_16560 = state_16527__$1;(statearr_16533_16560[(1)] = (5));
} else
{var statearr_16534_16561 = state_16527__$1;(statearr_16534_16561[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (15)))
{var inst_16517 = (state_16527[(2)]);var state_16527__$1 = state_16527;var statearr_16535_16562 = state_16527__$1;(statearr_16535_16562[(2)] = inst_16517);
(statearr_16535_16562[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (13)))
{var state_16527__$1 = state_16527;var statearr_16536_16563 = state_16527__$1;(statearr_16536_16563[(2)] = null);
(statearr_16536_16563[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (6)))
{var inst_16487 = (state_16527[(8)]);var inst_16512 = inst_16487.length;var inst_16513 = (inst_16512 > (0));var state_16527__$1 = state_16527;if(cljs.core.truth_(inst_16513))
{var statearr_16537_16564 = state_16527__$1;(statearr_16537_16564[(1)] = (12));
} else
{var statearr_16538_16565 = state_16527__$1;(statearr_16538_16565[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (3)))
{var inst_16525 = (state_16527[(2)]);var state_16527__$1 = state_16527;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16527__$1,inst_16525);
} else
{if((state_val_16528 === (12)))
{var inst_16487 = (state_16527[(8)]);var inst_16515 = cljs.core.vec.call(null,inst_16487);var state_16527__$1 = state_16527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16527__$1,(15),out,inst_16515);
} else
{if((state_val_16528 === (2)))
{var state_16527__$1 = state_16527;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16527__$1,(4),ch);
} else
{if((state_val_16528 === (11)))
{var inst_16491 = (state_16527[(9)]);var inst_16495 = (state_16527[(10)]);var inst_16505 = (state_16527[(2)]);var inst_16506 = [];var inst_16507 = inst_16506.push(inst_16491);var inst_16487 = inst_16506;var inst_16488 = inst_16495;var state_16527__$1 = (function (){var statearr_16539 = state_16527;(statearr_16539[(7)] = inst_16488);
(statearr_16539[(11)] = inst_16507);
(statearr_16539[(8)] = inst_16487);
(statearr_16539[(12)] = inst_16505);
return statearr_16539;
})();var statearr_16540_16566 = state_16527__$1;(statearr_16540_16566[(2)] = null);
(statearr_16540_16566[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (9)))
{var inst_16487 = (state_16527[(8)]);var inst_16503 = cljs.core.vec.call(null,inst_16487);var state_16527__$1 = state_16527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16527__$1,(11),out,inst_16503);
} else
{if((state_val_16528 === (5)))
{var inst_16491 = (state_16527[(9)]);var inst_16488 = (state_16527[(7)]);var inst_16495 = (state_16527[(10)]);var inst_16495__$1 = f.call(null,inst_16491);var inst_16496 = cljs.core._EQ_.call(null,inst_16495__$1,inst_16488);var inst_16497 = cljs.core.keyword_identical_QMARK_.call(null,inst_16488,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16498 = (inst_16496) || (inst_16497);var state_16527__$1 = (function (){var statearr_16541 = state_16527;(statearr_16541[(10)] = inst_16495__$1);
return statearr_16541;
})();if(cljs.core.truth_(inst_16498))
{var statearr_16542_16567 = state_16527__$1;(statearr_16542_16567[(1)] = (8));
} else
{var statearr_16543_16568 = state_16527__$1;(statearr_16543_16568[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (14)))
{var inst_16520 = (state_16527[(2)]);var inst_16521 = cljs.core.async.close_BANG_.call(null,out);var state_16527__$1 = (function (){var statearr_16545 = state_16527;(statearr_16545[(13)] = inst_16520);
return statearr_16545;
})();var statearr_16546_16569 = state_16527__$1;(statearr_16546_16569[(2)] = inst_16521);
(statearr_16546_16569[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (10)))
{var inst_16510 = (state_16527[(2)]);var state_16527__$1 = state_16527;var statearr_16547_16570 = state_16527__$1;(statearr_16547_16570[(2)] = inst_16510);
(statearr_16547_16570[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16528 === (8)))
{var inst_16491 = (state_16527[(9)]);var inst_16487 = (state_16527[(8)]);var inst_16495 = (state_16527[(10)]);var inst_16500 = inst_16487.push(inst_16491);var tmp16544 = inst_16487;var inst_16487__$1 = tmp16544;var inst_16488 = inst_16495;var state_16527__$1 = (function (){var statearr_16548 = state_16527;(statearr_16548[(7)] = inst_16488);
(statearr_16548[(8)] = inst_16487__$1);
(statearr_16548[(14)] = inst_16500);
return statearr_16548;
})();var statearr_16549_16571 = state_16527__$1;(statearr_16549_16571[(2)] = null);
(statearr_16549_16571[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__11083__auto___16557,out))
;return ((function (switch__11018__auto__,c__11083__auto___16557,out){
return (function() {
var state_machine__11019__auto__ = null;
var state_machine__11019__auto____0 = (function (){var statearr_16553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16553[(0)] = state_machine__11019__auto__);
(statearr_16553[(1)] = (1));
return statearr_16553;
});
var state_machine__11019__auto____1 = (function (state_16527){while(true){
var ret_value__11020__auto__ = (function (){try{while(true){
var result__11021__auto__ = switch__11018__auto__.call(null,state_16527);if(cljs.core.keyword_identical_QMARK_.call(null,result__11021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11021__auto__;
}
break;
}
}catch (e16554){if((e16554 instanceof Object))
{var ex__11022__auto__ = e16554;var statearr_16555_16572 = state_16527;(statearr_16555_16572[(5)] = ex__11022__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16527);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16573 = state_16527;
state_16527 = G__16573;
continue;
}
} else
{return ret_value__11020__auto__;
}
break;
}
});
state_machine__11019__auto__ = function(state_16527){
switch(arguments.length){
case 0:
return state_machine__11019__auto____0.call(this);
case 1:
return state_machine__11019__auto____1.call(this,state_16527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11019__auto____0;
state_machine__11019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11019__auto____1;
return state_machine__11019__auto__;
})()
;})(switch__11018__auto__,c__11083__auto___16557,out))
})();var state__11085__auto__ = (function (){var statearr_16556 = f__11084__auto__.call(null);(statearr_16556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11083__auto___16557);
return statearr_16556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11085__auto__);
});})(c__11083__auto___16557,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map