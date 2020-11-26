"use strict";

var outer = "<script type=\"text/javascript\">\n// <![CDATA[  <-- For SVG support\nif ('WebSocket' in window) {\n    (function () {\n        function refreshCSS() {\n            var sheets = [].slice.call(document.getElementsByTagName(\"link\"));\n            var head = document.getElementsByTagName(\"head\")[0];\n            for (var i = 0; i < sheets.length; ++i) {\n                var elem = sheets[i];\n                var parent = elem.parentElement || head;\n                parent.removeChild(elem);\n                var rel = elem.rel;\n                if (elem.href && typeof rel != \"string\" || rel.length == 0 || rel.toLowerCase() == \"stylesheet\") {\n                    var url = elem.href.replace(/(&|?)_cacheOverride=d+/, '');\n                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n                }\n                parent.appendChild(elem);\n            }\n        }\n        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n        var address = protocol + window.location.host + window.location.pathname + '/ws';\n        var socket = new WebSocket(address);\n        socket.onmessage = function (msg) {\n            if (msg.data == 'reload') window.location.reload();\n            else if (msg.data == 'refreshcss') refreshCSS();\n        };\n        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n            console.log('Live reload enabled.');\n            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n        }\n    })();\n}\nelse {\n    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n}\n// ]]>\n</script>";
var out2 = 'hello world';
var element = document.createElement('div');
element.innerHTML = outer;
var indicator = false;
element.childNodes.forEach(function (a) {
  return indicator = a instanceof HTMLElement ? true : indicator;
});
console.log('AAA', element.innerHTML, indicator);