// Copyright 2012 Google Inc. All Rights Reserved.

var A_04_03_06_16 = {
    name:'A_04_03_06_16',
    assert:'Matching Insertion Points: ' +
		'A valid selector fragment may contain a :only-of-type pseudo-class selector',
	highlight: '[[A valid selector fragment may contain:]][\\s\\S]*[[the following pseudo-class selector\\(s\\):]][\\s\\S]*[[:only-of-type]]',
    link:'http://www.w3.org/TR/shadow-dom/#matching-insertion-points'
};

var A_04_03_06_16_T01 = async_test('A_04_03_06_16_T01', PROPS(A_04_03_06_16, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));


A_04_03_06_16_T01.step(function () {
    var iframe = document.createElement('iframe');
    iframe.src = 'resources/bobs_page.html';
    document.body.appendChild(iframe);

    iframe.onload = A_04_03_06_16_T01.step_func(function () {
        try {

            var d = iframe.contentDocument;
            var ul = d.querySelector('ul.stories');
            var s = new SR(ul);
            
            //make shadow subtree
            var subdiv1 = document.createElement('div');
            subdiv1.innerHTML = '<ul><content select=":only-of-type"></content></ul>';
            s.appendChild(subdiv1);

            //All li1-li6 elements should be invisible
            assert_equals(d.querySelector('#li1').offsetTop, 0,
                'Point 1: element shouldn\'t match :only-of-type pseudo-class selector');
            assert_equals(d.querySelector('#li2').offsetTop, 0,
            	'Point 2: element shouldn\'t match :only-of-type pseudo-class selector');
            assert_equals(d.querySelector('#li3').offsetTop, 0,
            	'Point 3: element shouldn\'t match :only-of-type pseudo-class selector');
            assert_equals(d.querySelector('#li4').offsetTop, 0,
            	'Point 4: element shouldn\'t match :only-of-type pseudo-class selector');
            assert_equals(d.querySelector('#li5').offsetTop, 0,
        		'Point 5: element shouldn\'t match :only-of-type pseudo-class selector');
            assert_equals(d.querySelector('#li6').offsetTop, 0,
    			'Point 6: element shouldn\'t match :only-of-type pseudo-class selector');
            
            var s2 = new SR(d.querySelector('#divid'));
            
            //make shadow subtree
            var subdiv2 = document.createElement('div');
            subdiv2.innerHTML = '<content select=":only-of-type"></content>';
            s2.appendChild(subdiv2);

            //Span and ul both should be visible
            assert_true(d.querySelector('#spandex').offsetTop > 0,
                'Point 7: Element should match :only-of-type pseudo-class selector');
            assert_true(d.querySelector('#ul2').offsetTop > 0,
            	'Point 8: Element should match :only-of-type pseudo-class selector');
        } finally {
            iframe.parentNode.removeChild(iframe);
        }
        A_04_03_06_16_T01.done();
    });
});