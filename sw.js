var urlsToCache = [];

var CACHE_NAME = 'shreyas-mm-cache-v3';

// Cache posts
// Limits the number of posts that gets cached to 3
// Reads a piece of front-matter in each post that directs the second loop to the folder where the assets are held

  urlsToCache.push("/securing-web-applications-with-aws-elb-and-okta");

  urlsToCache.push("/tomcat-log-rotation-compression-encryption-gdpr-compliance-and-copy-to-aws-s3");

  urlsToCache.push("/how-to-install-tomcat");

  urlsToCache.push("/install-nodejs-ubuntu");

  urlsToCache.push("/i-just-cleared-rhce");

  urlsToCache.push("/setup-virtualbox-for-local-development-environment");

  urlsToCache.push("/install-django-on-ubuntu");

  urlsToCache.push("/device-drivers-linux");

  urlsToCache.push("/containers-cloud-lxc-docker-kubernetes");

  urlsToCache.push("/avl-trees-implementation-in-python");

  urlsToCache.push("/create-a-ramdisk-in-ubuntu-linux");

  urlsToCache.push("/a-new-beginning");


// Cache pages
// Do nothing if it's either an AMP page (as these are served via Googles cache) or the blog page
// Fallback to the offline pages for these

  
    urlsToCache.push("/404.html");
  

  
    urlsToCache.push("/about");
  

  
    urlsToCache.push("/archives");
  

  
    urlsToCache.push("/cheetsheet");
  

  
    urlsToCache.push("/");
  

  
    urlsToCache.push("/publications");
  


// Cache assets
// Removed assets/posts because I only want assets from the most recent posts getting cached

    

    
      urlsToCache.push("/assets/css/font.css");
    

    
      urlsToCache.push("/assets/favicons/android-chrome-192x192.png");
    

    
      urlsToCache.push("/assets/favicons/android-icon-144x144.png");
    

    
      urlsToCache.push("/assets/favicons/android-icon-192x192.png");
    

    
      urlsToCache.push("/assets/favicons/android-icon-36x36.png");
    

    
      urlsToCache.push("/assets/favicons/android-icon-48x48.png");
    

    
      urlsToCache.push("/assets/favicons/android-icon-72x72.png");
    

    
      urlsToCache.push("/assets/favicons/android-icon-96x96.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-114x114.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-120x120.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-144x144.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-152x152.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-180x180.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-57x57.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-60x60.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-72x72.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-76x76.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon-precomposed.png");
    

    
      urlsToCache.push("/assets/favicons/apple-icon.png");
    

    

    
      urlsToCache.push("/assets/favicons/favicon-16x16.png");
    

    
      urlsToCache.push("/assets/favicons/favicon-32x32.png");
    

    
      urlsToCache.push("/assets/favicons/favicon-96x96.png");
    

    

    
      urlsToCache.push("/assets/favicons/manifest.json");
    

    
      urlsToCache.push("/assets/favicons/ms-icon-144x144.png");
    

    
      urlsToCache.push("/assets/favicons/ms-icon-150x150.png");
    

    
      urlsToCache.push("/assets/favicons/ms-icon-310x310.png");
    

    
      urlsToCache.push("/assets/favicons/ms-icon-70x70.png");
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
      urlsToCache.push("/assets/fonts/recommended.css");
    

    
      urlsToCache.push("/assets/images/containers-cloud-lxc-docker-kubernetes.jpg");
    

    
      urlsToCache.push("/assets/images/device-drivers.jpg");
    

    
      urlsToCache.push("/assets/images/how-to-install-nodejs.jpg");
    

    
      urlsToCache.push("/assets/images/install-tomcat.jpg");
    

    
      urlsToCache.push("/assets/images/installing-django-on-ubuntu.jpg");
    

    
      urlsToCache.push("/assets/images/okta.jpg");
    

    
      urlsToCache.push("/assets/images/okta1.jpg");
    

    
      urlsToCache.push("/assets/images/okta2.png");
    

    
      urlsToCache.push("/assets/images/okta3.png");
    

    
      urlsToCache.push("/assets/images/okta4.png");
    

    
      urlsToCache.push("/assets/images/okta5.png");
    

    
      urlsToCache.push("/assets/images/okta6.png");
    

    
      urlsToCache.push("/assets/images/okta7.png");
    

    
      urlsToCache.push("/assets/images/okta8.png");
    

    
      urlsToCache.push("/assets/images/okta9.png");
    

    
      urlsToCache.push("/assets/images/py-avl-output1.jpg");
    

    
      urlsToCache.push("/assets/images/py-avl-output2.jpg");
    

    
      urlsToCache.push("/assets/images/py-avl.jpg");
    

    
      urlsToCache.push("/assets/images/ram-disk-in-ubuntu.jpg");
    

    
      urlsToCache.push("/assets/images/rhce.jpg");
    

    
      urlsToCache.push("/assets/images/shreyas-mm.jpg");
    

    
      urlsToCache.push("/assets/images/tomcat-log-rotation.jpg");
    

    
      urlsToCache.push("/assets/images/virtualbox.jpg");
    

    
      urlsToCache.push("/assets/images/virtualbox1.png");
    

    
      urlsToCache.push("/assets/images/virtualbox2.png");
    

    
      urlsToCache.push("/assets/images/virtualbox3.png");
    

    
      urlsToCache.push("/assets/images/virtualbox4.png");
    

    
      urlsToCache.push("/assets/images/virtualbox5.png");
    

    
      urlsToCache.push("/assets/images/virtualbox6.png");
    

    
      urlsToCache.push("/assets/images/virtualbox7.png");
    

    
      urlsToCache.push("/assets/js/instantclick.min.js");
    

    

    
      urlsToCache.push("/manifest.json");
    


// Installation of service worker
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// when offline we want our service worker to fetch the URLs
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});