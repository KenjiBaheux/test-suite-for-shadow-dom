/*
Distributed under both the W3C Test Suite License [1] and the W3C
3-clause BSD License [2]. To contribute to a W3C Test Suite, see the
policies and contribution forms [3].

[1] http://www.w3.org/Consortium/Legal/2008/04-testsuite-license
[2] http://www.w3.org/Consortium/Legal/2008/03-bsd-license
[3] http://www.w3.org/2004/10/27-testcases
*/

var A_10_02_04 = {
    name:'A_10_02_04',
    assert:'Extensions to Element Interface: ' +
    	'pseudo of type DOMString attribute; Test setter',
    link:'https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html#shadow-aware-attributes',
    highlight: '[[pseudo of type DOMString]]' +
    	'[\\s\\S]*[[If the new value is not null, create a new custom pseudo-element with element ' +
    	'and the new value as its value.]]'
};

test(unit(function (ctx) {
	
	var d = newRenderedHTMLDocument(ctx);
	    
    var style = d.createElement('style');
    style.innerHTML = 'span {' +
    	'font-size: 10px;' +
    	'}';
    d.head.appendChild(style);
    
    var widget = d.createElement('div');
    d.body.appendChild(widget);
    
    var s = new SR(widget);
    
    var thumb = d.createElement('span');
    thumb.innerHTML = 'This is a pseudo-element';
   
  //FIXME replace webkitPseudo by pseudo
    thumb.webkitPseudo = 'x-thumb';
    s.appendChild(thumb);
    
    var height = thumb.offsetHeight;
    
    assert_true(height > 0, 'Element should be rendered');
    
    style = d.createElement('style');
    style.innerHTML = '' + 
    	'div::x-thumb {' +
    	'font-size: 30px;' +
    	'}';
    d.body.appendChild(style);
    
    assert_true(thumb.offsetHeight > height, 'Pseudo-element style should be applied');
  //FIXME replace webkitPseudo by pseudo
    thumb.webkitPseudo = null;
    
    assert_equals(thumb.offsetHeight, height, 'Pseudo-element style should be discarded by new setter');
    
}), 'A_10_02_04_T01', PROPS(A_10_02_04, {
	author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
	reviewer:''
}));


test(unit(function (ctx) {
	
	var d = newRenderedHTMLDocument(ctx);
	    
    var widget = d.createElement('div');
    d.body.appendChild(widget);
    
    var s = new SR(widget);
    
    var thumb = d.createElement('span');
    thumb.innerHTML = 'This is a pseudo-element';
   
  //FIXME replace webkitPseudo by pseudo
    thumb.webkitPseudo = 'x-thumb';
    s.appendChild(thumb);
        
    assert_equals(thumb.webkitPseudo,  'x-thumb', 'Pseudo-element style attribute should be set');
  //FIXME replace webkitPseudo by pseudo
    thumb.webkitPseudo = 'x-thumb2';
    
    assert_equals(thumb.webkitPseudo, 'x-thumb2', 'New pseudo-element style should be set by setter');
    
}), 'A_10_02_04_T02', PROPS(A_10_02_04, {
	author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
	reviewer:''
}));


test(unit(function (ctx) {
	
	var d = newRenderedHTMLDocument(ctx);
	    
    var style = d.createElement('style');
    style.innerHTML = 'span {' +
    	'font-size: 10px;' +
    	'}';
    d.head.appendChild(style);
    
    var widget = d.createElement('div');
    d.body.appendChild(widget);
    
    var s = new SR(widget);
    
    var thumb = d.createElement('span');
    thumb.innerHTML = 'This is a pseudo-element';
   
  //FIXME replace webkitPseudo by pseudo
    thumb.webkitPseudo = 'x-thumb';
    s.appendChild(thumb);
    
    var height = thumb.offsetHeight;
    
    assert_true(height > 0, 'Element should be rendered');
    
    style = d.createElement('style');
    style.innerHTML = '' + 
    	'div::x-thumb {' +
    		'font-size: 30px;' +
    	'}' +
    	'div::x-thumb2 {' +
    		'font-size: 20px;' +
    	'}';
    	
    d.body.appendChild(style);
    
    var height2 = thumb.offsetHeight;
    
    assert_true(height2 > height, 'Pseudo-element style should be applied');
    
  //FIXME replace webkitPseudo by pseudo
    thumb.webkitPseudo = 'x-thumb2';
    
    assert_true(thumb.offsetHeight > height && thumb.offsetHeight < height2, 
    		'New pseudo-element style should be applied by setter');
    
}), 'A_10_02_04_T03', PROPS(A_10_02_04, {
	author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
	reviewer:''
}));
