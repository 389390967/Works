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