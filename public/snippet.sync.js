(function() {
  
  var optimizely_cached = (sessionStorage.getItem("optimizely_snippet") !== null) ? true : false;

  if (optimizely_cached) {
    eval(sessionStorage.getItem("optimizely_snippet"));
  } else {
    document.write('<script type="text/javascript" src="{{snippet_url}}"><\/script>');
  }

  function createCORSRequest(method, url){
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr){
          xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined"){
          xhr = new XDomainRequest();
          xhr.open(method, url);
      } else {
          xhr = null;
      }
      return xhr;
  }

  var request = createCORSRequest("get", "{{snippet_url}}");
  if (request){
    request.onload = function(){
      sessionStorage.setItem("optimizely_snippet", request.responseText);
    };
    request.send();
  }

})();