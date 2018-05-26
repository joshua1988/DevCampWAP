var CACHE_NAME = "cache-v1";
var caches_files =[
    "/",
    "/images/test.png",
    "/dist/bundle.js"
];

var CACHE_WHITELIST = [];

self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
                .then(function(cache){
                    console.log("cache is worked")
                    return cache.addAll(caches_files)
                })
                .catch(function(err){
                    console.error(err)
                })
    )
});

self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request)
                .then(function(response){
                    if(response){
                        return response;
                    }
                    return fetch(event.response)
                })
                .catch(function(err){
                    console.error(err, "error fetch")
                })
    )
});

self.addEventListener("activate", function(event){
    event.waitUntil(
        caches.keys()
                .then(function(cacheName){
                    return Promise.all(
                        cacheName.map()
                    )
                })
    )
});

self.addEventListener("push", function(event){

})