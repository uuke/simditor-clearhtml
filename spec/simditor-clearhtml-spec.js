(function() {
  describe('Simditor ClearHtml', function() {
    var $textarea, editor;
    editor = null;
    $textarea = null;
    beforeEach(function() {
      $textarea = $('<textarea id="editor"></textarea>').appendTo('body');
      return editor = new Simditor({
        textarea: $textarea,
        toolbar: ['clearhtml']
      });
    });
    afterEach(function() {
      if (editor != null) {
        editor.destroy();
      }
      return $textarea.remove();
    });
    return it('is a Simditor button', function() {
      var button;
      button = editor.toolbar.findButton('clearhtml');
      return expect(button instanceof Simditor.Button).toBe(true);
    });
  });

}).call(this);
