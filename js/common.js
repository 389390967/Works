// 输出js代码在页面
function appendJsCode(jsCodeId, preId) {
    var jsCode = document.getElementById(jsCodeId).innerHTML;
    var pre = document.getElementById(preId);

    var textRe1 = /\/\/\s([一二三四五六七八九十\d]+、.+\s*)/g;
    var textRe2 = /(\/\/.+\s*)/g;
    var keysRe1 = /(var|let|const|function|Class|this|console|log|null)/g;
    var keysRe2 = /(new|return)/g;
    var keysRe3 = /(\s[A-Z]+[\w\d]*|getElementById|getElementsByTagName|onmousedown|onmousemove|onmouseup|alert)/g;
    var keysRe4 = /(this)/g;
    var consoleLine = /console\.log(.+分割线.+);/g;
    var code = jsCode.replace(consoleLine, '<i class="line-blue"></i>')
        .replace(textRe1, '<span>$1</span>')
        .replace(textRe2, '<span class="gray">$1</span>')
        .replace(keysRe1, '<i>$1</i>')
        .replace(keysRe2, '<strong>$1</strong>')
        .replace(keysRe3, '<i class="green">$1</i>')
        .replace(keysRe4, '<b class="yellow-1">$1</b class="yellow-1">');

    pre.innerHTML = code;
}

// F5刷新iframe
function f5(id) {
    document.onkeydown = function (event) {
        var ev = event || window.event || arguments.callee.caller.arguments[0];
        if (ev && ev.keyCode == 116) {
            if (ev.preventDefault) {
                ev.preventDefault();
            } else {
                window.event.returnValue = false;
            }
            var iframe = document.getElementById(id);
            var iframeDOM = iframe.contentWindow || iframe.contentDocument;
            iframeDOM.location.reload(true); // 参数设置为 true，那么无论文档的最后修改日期是什么，它都会绕过缓存，从服务器上重新下载该文档。
        }
        // location.reload(true);
    };
}

// cookie --start
function setCookie(name, value, expiredays) {
    var exDate = new Date();
    exDate.setDate(exDate.getDate() + expiredays);
    document.cookie = name + '=' + encodeURIComponent(value) + (expiredays ? ';expires=' + exDate.toGMTString() : '');
}
/*--
encodeURIComponent(string) 函数可把字符串作为 URI 组件进行编码。
返回已编码的 string 的副本，其中某些字符被替换成了十六进制的转义序列。
这样就可以在所有的计算机上读取该字符串。 
--*/

function getCookie(name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + '=');
        if (start != -1) {
            start = start + name.length + 1;
            var end = document.cookie.indexOf(';', start);
            if (end == -1) {
                end = document.cookie.length;
            }
            return decodeURIComponent(document.cookie.substring(start, end));
        }
    }
    return '';
}
// cookie --end