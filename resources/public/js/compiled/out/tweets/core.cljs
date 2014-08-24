(ns tweets.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! timeout]]
            [figwheel.client :as fw :include-macros true])
  (:import [goog.net XhrIo]))


(enable-console-print!)

;;Setup;;
;;;;;;;;;

(def app-data (atom []))
(defn get_tweets []
  (.log js/console "getting tweets")
  (.send XhrIo "http://bombers-hockey.com/tweets.json"
    (fn [res] (reset! app-data (take 5 (js->clj
      (.getResponseJson (.-target res)) :keywordize-keys true))))))
(get_tweets)

(defn find_links [string]
  (re-seq #"(http:.*)\s|(http:.*)\z" string))

(defn tweet [tweet owner]
  (.log js/console (str "tweet "(pr-str tweet)))
  (dom/li #js {:className "list-group-item" :style #js {:display "-webkit-box" :text-align "left" :font-size "xx-small" :padding "2px 0px 2px 10px"}}
    (dom/img #js {:src (:profile_image_url (:user tweet)) :height "24" :width "24"})
          (.log js/console (second (first (find_links (:text tweet)))))
    (dom/div #js {:style #js {:margin "0px 35px 0px 10px"}}
      (dom/a #js {:href (second (first (find_links (:text tweet)))) :style #js {:font-size "11px"}}(:text tweet)))))


(defn tweet_app [tweets owner]
  (.log js/console "tweet_app")
  (dom/div #js {:className "b_box" :style #js {:min-height "262px"}}
    (dom/div #js {:className "b_header"}
      (dom/img #js {:src "/assets/twitterfeeds.jpg"})
    (apply dom/div nil
      (om/build-all tweet tweets)))))

(om/root tweet_app
  app-data
  {:target (. js/document (getElementById "tweets"))})


(fw/watch-and-reload
 :jsload-callback (fn [] (.log js/console "reloaded")))


(go (while true
      (<! (timeout 30000))
      (get_tweets)))
