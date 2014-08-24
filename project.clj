(defproject tweets "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.5"]
                 [figwheel "0.1.3-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-figwheel "0.1.3-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "figwheel"
              :source-paths ["src"]
              :compiler {
                :output-to "resources/public/js/compiled/tweets.js"
                :output-dir "resources/public/js/compiled/out"
                :optimizations :none
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :output-to "tweets.js"
                :optimizations :advanced
                :pretty-print false
                :preamble ["react/react.min.js"]
                :externs ["react/externs/react.js"]}}]})
