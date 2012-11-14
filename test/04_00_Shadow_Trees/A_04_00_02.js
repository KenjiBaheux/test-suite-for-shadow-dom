// Copyright 2012 Google Inc. All Rights Reserved.

var A_04_00_02 = {
    name:'A_04_00_02',
    assert:' Only elements must be allowed to become shadow hosts',
    link:'http://www.w3.org/TR/shadow-dom/#shadow-dom-subtrees',
    highlight:'Only elements must be allowed to become shadow hosts.'
};

//check that 'text' node can't be used as a shadow host
test(function () {
    var d = newHTMLDocument();
    var n = d.createTextNode('some text');
    d.body.appendChild(n);
    try {
        var s = new SR(n);
        assert(false, 'Text node can\'t be used as shadow root');
    } catch (e) {
        rethrowInternalErrors(e);
    }
}, 'A_04_00_02_T01', PROPS(A_04_00_02, {
    author:'Mikhail Fursov <mfursov@unipro.ru>',
    reviewer:'Sergey G. Grekhov <sgrekhov@unipro.ru>'
}));

//check that 'comment' node can't be used as a shadow host
test(function () {
    var d = newHTMLDocument();
    var n = d.createComment('comment');
    d.body.appendChild(n);
    try {
        var s = new SR(n);
        assert(false, 'Comment node can\'t be used as shadow root');
    } catch (e) {
        rethrowInternalErrors(e);
    }
}, 'A_04_00_02_T02', PROPS(A_04_00_02, {
    author:'Mikhail Fursov <mfursov@unipro.ru>',
    reviewer:'Sergey G. Grekhov <sgrekhov@unipro.ru>'
}));

//check that 'CDATA' node can't be used as a shadow host
test(function () {
    var d = newDocument();
    var n = d.createCDATASection('some data');
    d.documentElement.appendChild(n);
    try {
        var s = new SR(n);
        assert(false, 'CDATA section can\'t be used as shadow root');
    } catch (e) {
        rethrowInternalErrors(e);
    }
}, 'A_04_00_02_T03', PROPS(A_04_00_02, {
    author:'Mikhail Fursov <mfursov@unipro.ru>',
    reviewer:'Sergey G. Grekhov <sgrekhov@unipro.ru>'
}));

//check that 'attribute' node can't be used as a shadow host
test(function () {
    var d = newDocument();
    var n = d.createAttribute('attribute');
    d.documentElement.setAttributeNode(n);
    try {
        var s = new SR(n);
        assert(false, 'Check that Attribute node can\'t be used as shadow root');
    } catch (e) {
        rethrowInternalErrors(e);
    }
}, 'A_04_00_02_T04', PROPS(A_04_00_02, {
    author:'Mikhail Fursov <mfursov@unipro.ru>',
    reviewer:'Sergey G. Grekhov <sgrekhov@unipro.ru>'
}));

//check that 'document fragment' node can't be used as a shadow host
test(function () {
    var d = newDocument();
    var n = d.createDocumentFragment();
    d.documentElement.appendChild(n);
    try {
        var s = new SR(n);
        assert(false, 'DocumentFragment node can\'t be used as shadow root');
    } catch (e) {
        rethrowInternalErrors(e);
    }
}, 'A_04_00_02_T05', PROPS(A_04_00_02, {
    author:'Mikhail Fursov <mfursov@unipro.ru>',
    reviewer:'Sergey G. Grekhov <sgrekhov@unipro.ru>'
}));

//check that 'entity reference' node can't be used as a shadow host
test(function () {
    var d = newDocument();
    var n = d.createEntityReference('reference');
    d.documentElement.appendChild(n);
    try {
        var s = new SR(n);
        assert(false, 'Entity Reference node can\'t be used as shadow root');
    } catch (e) {
        rethrowInternalErrors(e);
    }
}, 'A_04_00_02_T06', PROPS(A_04_00_02, {
    author:'Mikhail Fursov <mfursov@unipro.ru>',
    reviewer:'Sergey G. Grekhov <sgrekhov@unipro.ru>'
}));

//check that 'processing instruction' node can't be used as a shadow host
test(function () {
    var d = newDocument();
    var n = d.createProcessingInstruction('xml', ' version = "1.0"');
    d.documentElement.appendChild(n);
    try {
        var s = new SR(n);
        assert(false, 'Processing instruction node can\'t be used as shadow root');
    } catch (e) {
        rethrowInternalErrors(e);
    }
}, 'A_04_00_02_T07', PROPS(A_04_00_02, {
    author:'Mikhail Fursov <mfursov@unipro.ru>',
    reviewer:'Sergey G. Grekhov <sgrekhov@unipro.ru>'
}));