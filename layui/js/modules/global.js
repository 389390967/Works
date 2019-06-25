layui.define(['layer'], function (exports) {
  var $ = layui.jquery,
    layer = layui.layer,
    device = layui.device();

  // 阻止IE7以下访问
  if (device.ie && device.ie < 8) {
    layer.alert('网站最低支持ie8，您当前使用的是古老的 IE' + device.ie + '，请升级的你的IE浏览器，或者改用其他浏览器');
  }

  // 手机设备的简单适配
  var mobileTree = $('#mobile-tree-show'),
    mobileShade = $('#mobile-shade');

  mobileTree.on('click', function () {
    $('body').addClass('mobile-body');
  });

  mobileShade.on('click', function () {
    $('body').removeClass('mobile-body');
  });

  exports('global', {});
});