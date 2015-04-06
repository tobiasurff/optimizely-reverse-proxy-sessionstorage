## Synopsis

Optimizely’s Javascript snippet loads synchronously and therefore blocks rendering of the remaining page until it’s downloaded. This is necessary to prevent page flashing (content being rendered an then changed by Optimizely). This project allows you to run the snippet synchronously while downloading it asynchronously after the page is displayed by caching the Javascript in SessionStorage. This avoids page flashing while mitigating the impact network latency has on your page.

## Instructions

Launching this Node.js / Express app will run a web server with two endpoints. One that can be used as a drop-in replacement for Optimizely’s existing snippet (e.g. replace //cdn.optimizely.com/js/12345678.js with //cdn.myoptimizelyproxy.tk/js/12345678.js). This small Javascript file only contains logic to download Optimizely's snippet, run its code and cache a version of the snippet in SessionStorage for subsequent pageviews). The actual snippet is available via the second endpoint (//cdn.myoptimizelyproxy.tk/js/original/12345678.js). The only reason this isn't loaded directly from Optimizely's CDN is that it’s lacking the CORS http header required for loading its content via AJAX.

## Contributors

Toby Urff, Optimizely