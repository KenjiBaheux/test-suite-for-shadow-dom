/*
Distributed under both the W3C Test Suite License [1] and the W3C
3-clause BSD License [2]. To contribute to a W3C Test Suite, see the
policies and contribution forms [3].

[1] http://www.w3.org/Consortium/Legal/2008/04-testsuite-license
[2] http://www.w3.org/Consortium/Legal/2008/03-bsd-license
[3] http://www.w3.org/2004/10/27-testcases
*/

var A_05_01_04 = {
    name:'A_05_01_04',
    assert:'Event Retargeting:' +
		'Retargeting algorithm',
    link:'http://www.w3.org/TR/shadow-dom/#event-retargeting',
    highlight:'The retargeting algorithm is used to determine relative targets, ' +
    	'and it must be equivalent to processing the following steps:'
};


var A_05_01_04_T01 = async_test('A_05_01_04_T01', PROPS(A_05_01_04, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_01_04_T01.step(unit(function (ctx) {
	var d = newRenderedHTMLDocument(ctx);
	
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    //For #volume-slider-thumb relative target is #volume-slider-thumb
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').addEventListener('click',    		
    	A_05_01_04_T01.step_func(function (event) {
	        assert_equals(event.target.getAttribute('id'), 'volume-slider-thumb', 
        		'Wrong related target');
    }), false);
	
    var event = d.createEvent('HTMLEvents');
    event.initEvent ("click", true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
	A_05_01_04_T01.done();
}));



var A_05_01_04_T02 = async_test('A_05_01_04_T02', PROPS(A_05_01_04, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_01_04_T02.step(unit(function (ctx) {
	var d = newRenderedHTMLDocument(ctx);
	
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #volume-shadow-root relative target is #volume-slider-thumb
    roots.volumeShadowRoot.addEventListener('click', 
    	A_05_01_04_T02.step_func(function (event) {
	        assert_equals(event.target.getAttribute('id'), 'volume-slider-thumb', 
        		'Wrong related target');
    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ("click", true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
    A_05_01_04_T02.done();
}));




var A_05_01_04_T03 = async_test('A_05_01_04_T03', PROPS(A_05_01_04, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_01_04_T03.step(unit(function (ctx) {
	var d = newRenderedHTMLDocument(ctx);
	
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #volume-slider relative target is #volume-slider
    roots.playerShadowRoot.querySelector('#volume-slider').addEventListener('click',    		
    		A_05_01_04_T03.step_func(function (event) {
	        assert_equals(event.target.getAttribute('id'), 'volume-slider',
        		'Wrong related target');
    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ("click", true, false);
    //TODO remove this comment or vice versa uncomment this depending on
    //https://bugs.webkit.org/show_bug.cgi?id=102788    
    //roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    roots.playerShadowRoot.querySelector('#volume-slider').dispatchEvent(event);
    
    A_05_01_04_T03.done();
}));


var A_05_01_04_T04 = async_test('A_05_01_04_T04', PROPS(A_05_01_04, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_01_04_T04.step(unit(function (ctx) {
	var d = newRenderedHTMLDocument(ctx);
	
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #volume-slider-container relative target is #volume-slider
    roots.playerShadowRoot.querySelector('#volume-slider').addEventListener('click',    		
    		A_05_01_04_T04.step_func(function (event) {
	        assert_equals(event.target.getAttribute('id'), 'volume-slider',
        		'Wrong related target');
    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ("click", true, false);
    //TODO remove this comment or vice versa uncomment this depending on
    //https://bugs.webkit.org/show_bug.cgi?id=102788    
    //roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    roots.playerShadowRoot.querySelector('#volume-slider').dispatchEvent(event);
    
    A_05_01_04_T04.done();
}));


var A_05_01_04_T05 = async_test('A_05_01_04_T05', PROPS(A_05_01_04, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_01_04_T05.step(unit(function (ctx) {
	var d = newRenderedHTMLDocument(ctx);
	
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #controls relative target is #volume-slider
    roots.playerShadowRoot.querySelector('#volume-slider').addEventListener('click',    		
    		A_05_01_04_T05.step_func(function (event) {
	        assert_equals(event.target.getAttribute('id'), 'volume-slider',
        		'Wrong related target');
    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ("click", true, false);
    //TODO remove this comment or vice versa uncomment this depending on
    //https://bugs.webkit.org/show_bug.cgi?id=102788    
    //roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    roots.playerShadowRoot.querySelector('#volume-slider').dispatchEvent(event);
    
    A_05_01_04_T05.done();
}));


var A_05_01_04_T06 = async_test('A_05_01_04_T06', PROPS(A_05_01_04, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_01_04_T06.step(unit(function (ctx) {
	var d = newRenderedHTMLDocument(ctx);
	
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #player-shadow-root relative target is #volume-slider
    roots.playerShadowRoot.addEventListener('click',    		
    		A_05_01_04_T06.step_func(function (event) {
	        assert_equals(event.target.getAttribute('id'), 'volume-slider',
        		'Wrong related target');
    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ("click", true, false);
    //TODO remove this comment or vice versa uncomment this depending on
    //https://bugs.webkit.org/show_bug.cgi?id=102788    
    //roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    roots.playerShadowRoot.querySelector('#volume-slider').dispatchEvent(event);
    
    A_05_01_04_T06.done();
}));



var A_05_01_04_T07 = async_test('A_05_01_04_T07', PROPS(A_05_01_04, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_01_04_T07.step(unit(function (ctx) {
	var d = newRenderedHTMLDocument(ctx);
	
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #player relative target is #player
    d.querySelector('#player').addEventListener('click',    		
    		A_05_01_04_T07.step_func(function (event) {
	        assert_equals(event.target.getAttribute('id'), 'player',
        		'Wrong related target');
    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ("click", true, false);
    //TODO remove this comment or vice versa uncomment this depending on
    //https://bugs.webkit.org/show_bug.cgi?id=102788    
    //roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    roots.playerShadowRoot.querySelector('#volume-slider').dispatchEvent(event);
    
    A_05_01_04_T07.done();
}));