(ns bombers.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as s]
            [cljs.core.async :refer [<! timeout put! >! chan take! sliding-buffer]]
            );[figwheel.client :as fw :include-macros true])
  (:import [goog.net XhrIo]))


(enable-console-print!)

;;Setup;;
;;;;;;;;;

(def base-url (str "http://" (.-host (.-location js/window))))

(def app-data (atom []))

(defn get_tweets []
  (.send XhrIo (str base-url "/tweets.json")
    (fn [res] (reset! app-data (take 5 (js->clj
      (.getResponseJson (.-target res)) :keywordize-keys true))))))

(get_tweets)

;;Functions;;
;;;;;;;;;;;;;

(defn find_links [string]
  (re-seq #"(http:.*)\s|(http:.*)\z" string))

;;DOM code;;
;;;;;;;;;;;;

(defn tweet [tweet owner]
  (dom/tr nil
    (dom/td nil
      (dom/img #js {:src (:profile_image_url (:user tweet)) :height "24" :width "24"}))
    (dom/td #js {:style #js {:textAlign "left" :textIndent "0%"}}
      (dom/a #js {:href (second (first (find_links (:text tweet)))) :style #js {:font-size "11px" :margin "0.3% 3%" :display "inline-block"}}(:text tweet)))))

(defn tweet_app [tweets owner]
  (dom/div #js {:className "b_box" :style #js {:min-height "265px"}}
    (dom/div #js {:className "b_header"}
      (dom/img #js {:src "/assets/twitterfeeds.jpg"})
    (apply dom/table nil
      (om/build-all tweet tweets)))))

(go (while (empty? @app-data); check if data is loaded
      (<! (timeout 16)))
  (om/root tweet_app
    app-data
    {:target (. js/document (getElementById "tweets"))}))

;;Update functions;;
;;;;;;;;;;;;;;;;;;;;

(go (while true
      (<! (timeout 30000))
      (get_tweets)))
