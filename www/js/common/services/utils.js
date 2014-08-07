/* global define location */

define(['app'], function(app) {
  'use strict';

  app.service('mUtils', function($log) {
    this.isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };

    this.getQueryString = function(n, url) {
      var half;

      if (url !== undefined) {
        half = url.split('&' + n + '=')[1];
        if (!half) {
          half = url.split('?' + n + '=')[1];
        }
      } else {
        half = location.search.split('&' + n + '=')[1];
        if (!half) {
          half = location.search.split('?' + n + '=')[1];
        }
      }
      return half ? decodeURIComponent(half.split('&')[0]) : null;
    };

    //  Pumbaa80
    this.syntaxJsonHighlight = function(json) {
      try {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
          var cls = 'number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
      } catch (e) {
        $log.error('Error parsing JSON', json);
        return json;
      }
    };
  });

});
