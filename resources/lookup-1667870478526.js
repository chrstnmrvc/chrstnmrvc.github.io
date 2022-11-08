(function(window, undefined) {
  var dictionary = {
    "e746042c-5631-4455-a5a1-803d4dd10030": "Screen 2 - About",
    "c9e9c56b-b4cb-4115-8654-67f5e08f41ef": "Screen 5 - Contact",
    "1d08b623-ad84-45c1-933a-cca98249fc81": "Screen 3 - Help",
    "d95a20ca-2770-41ad-bd0c-419dd9037510": "Screen 4 - Team",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1 - Eugto",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);