// 输出代码在页面
function appendCode(jsCodeId, codeId) {
    var jsCode = document.getElementById(jsCodeId).innerHTML;
    var codeTag = document.getElementById(codeId);

    var tagRe1 = /<(ul|\/ul|li|\/li|p|\/p|script|\/script)>/g;
    var consoleLine = /console.+(.+分割线.+);/g;
    var consoleRed = /console\.red|preTi\('(.+)'\);/g;
    var consoleTitle = /T\('(.+)'\);/g;
    var preTxet = /preTx\('(.+)'\);/g;


    var code = jsCode.replace(tagRe1, '&lt;$1&gt;')
        .replace(consoleLine, '<i class="line-blue"></i>')
        .replace(consoleRed, '<i class="red">$1</i>')
        .replace(consoleTitle, '<i class="pre-title">$1</i>')
        .replace(preTxet, '<i class="white">$1</i>');

    codeTag.innerHTML = code;
}

// 在 pre 标签中输出提示
function preTi(text) {}

// 在 pre 标签中输出文字
function preTx(text) {}

// 在 Console 面板输出橙色的文字
function T(title) {
    console.log('%c' + title, 'color:#ff502c');
}

// 在 Console 面板输出红色的文字
console.red = function (text) {
    console.log('%c' + text, 'color:#be3948');
};

// 在 Console 面板输出蓝色的文字
console.hr = function (text) {
    console.log('');
    console.log('%c' + text, 'color:#5CACEE');
    console.log('');
};

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