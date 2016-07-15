(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-clearhtml', ["jquery","simditor"], function (a0,b1) {
      return (root['SimditorClearHtml'] = factory(a0,b1));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simditor"));
  } else {
    root['SimditorClearHtml'] = factory(jQuery,Simditor);
  }
}(this, function ($, Simditor) {

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-clearhtml', ["jquery","simditor"], function (a0,b1) {
      return (root['SimditorClearHtml'] = factory(a0,b1));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simditor"));
  } else {
    root['SimditorClearHtml'] = factory(jQuery,Simditor);
  }
}(this, function ($, Simditor) {

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-clearhtml', ["jquery","simditor"], function (a0,b1) {
      return (root['SimditorClearHtml'] = factory(a0,b1));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simditor"));
  } else {
    root['SimditorClearHtml'] = factory(jQuery,Simditor);
  }
}(this, function ($, Simditor) {

var SimditorClearHtml,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SimditorClearHtml = (function(superClass) {
  extend(SimditorClearHtml, superClass);

  function SimditorClearHtml() {
    return SimditorClearHtml.__super__.constructor.apply(this, arguments);
  }

  SimditorClearHtml.cls = 'simditor-clearhtml';

  SimditorClearHtml.i18n = {
    'zh-CN': {
      clearhtml: '清除格式'
    },
    'en-US': {
      clearhtml: 'Clear Format'
    }
  };

  SimditorClearHtml.prototype.name = 'clearhtml';

  SimditorClearHtml.prototype.needFocus = false;

  SimditorClearHtml.prototype.iconClassOf = function() {
    return 'simditor-clearhtml-icon-uuke-qingchu';
  };

  SimditorClearHtml.prototype._init = function() {
    return SimditorClearHtml.__super__._init.call(this);
  };

  SimditorClearHtml.prototype.command = function() {
    var $rootNodes = this.editor.selection.rootNodes();
    if (!$rootNodes) {
      return;
    }

    var $rootDiv = $('<div/>').insertBefore($rootNodes[0]);
    var paragraphs = this.editor.formatter.clearHtml($rootNodes).split('\n');
    var resultNodes = []
    for (var i = 0; i < paragraphs.length; ++i) {
      var p = paragraphs[i];
      var $p = $("<p/>").html(p == '' ? '<br/>' : p);
      $rootDiv.append($p);
      resultNodes.push($p[0]);
    }
    $rootDiv.children().unwrap();

    this.editor.selection.setRangeAtEndOf($(resultNodes).last());
    return this.editor.trigger('valuechanged');
  };

  return SimditorClearHtml;

})(Simditor.Button);

Simditor.Toolbar.addButton(SimditorClearHtml);

return SimditorClearHtml;

}));

return SimditorClearHtml;

}));

return SimditorClearHtml;

}));
