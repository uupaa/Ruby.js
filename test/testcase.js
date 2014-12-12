var ModuleTestRuby = (function(global) {

return new Test("Ruby", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true,
    }).add([
        testSetup,
        // --- Array ---
        testArray_times,
        testArray_at,
        testArray_assoc,
        testArray_clear,
        testArray_clone,
        testArray_compact,
        testArray_cycle,
//      testArray_delete,
        testArray_find,
        testArray_uniq,
        testArray_index,
        testArray_delete_at,
        testArray_delete_if,
        testArray_empty,
        testArray_eql,

        testArray_first,
        testArray_last,
        // --- String ---
        testString_ascii_only,
        testString_capitalize,
        testString_center,
        testString_chomp,
        testString_chop,
        testString_codepoints,
        testString_count,
        testString_delete,
        testString_each_char,
        testString_each_codepoint,
        testString_each_line,
        testString_end_with,
        testString_eql,
        testString_gsub,
        testString_hex,
        testString_include,
        testString_insert,
        testString_size,
        testString_ljust,
        testString_lstrip,
        testString_ord,
        testString_partition,
        testString_reverse,
        testString_rjust,
        testString_rpartition,
        testString_rstrip,
        testString_scan,
        testString_squeeze,
        testString_strip,
        testString_swapcase,
        testString_to_f,
        testString_to_i,
        testString_tr,
        testString_tr_s,
    ]).run().clone();


function testSetup(test, pass, miss) {
    Ruby(2.0);

    test.done(pass());
}

function testArray_times(test, pass, miss) {
    var result = [
            [1, 2, 3].times(3).join() === [1, 2, 3, 1, 2, 3, 1, 2, 3].join(),
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_at(test, pass, miss) {
    var source = [ "a", "b", "c", "d", "e" ];
    var result = [
                source.at(0)  === "a",
                source.at(1)  === "b",
                source.at(-1) === "e",
                source.at(-2) === "d",
                source.at(10) === undefined,
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_assoc(test, pass, miss) {
    var source = [["Japan", "Tokyo"], ["Italy", "Roma"], ["China", "Beijing"]]
    var result = ["Italy", "Roma"]

    if (source.assoc("Italy").join() === result.join()) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testArray_clear(test, pass, miss) {
    var source = [ 1, 2 ]
    var result = [
                source.clear().join() === [].join(),
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_clone(test, pass, miss) {
    var func   = function hoge(){};
    var ary    = [1,2,3];
    var obj    = {a:1,b:2};
    var source = [ 1, 2, 3, null, undefined, NaN, func, ary, obj ];
    var result = [
                JSON.stringify(source.clone().join()) === JSON.stringify(source.join()),
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_compact(test, pass, miss) {
    var source = [ 1, 2, 3, null, undefined, NaN ];
    delete source[1];
    delete source[2];

    var result = [
                source.compact().join() === [1].join(),
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_cycle(test, pass, miss) {
    var r = [];
    var source = [ 1, 2, 3 ];
    var result = [
            source.cycle(3).join() === [].concat(source, source, source).join(),
            false,
        ];

    source.cycle(3, function(value, index) {
        r.push(value);
    });
    result[1] = r.join() === [].concat(source, source, source).join();

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

/*
function testArray_delete(test, pass, miss) {
    var source = [1, 2, 3, 2, 1];
    var result = [
            source.delete(2) === 2,
            source.join()    === [1, 3, 1].join(),
        ];

    var source2 = [1, 2, 3, 2, 1];
    var result2 = [
            source2.delete(undefined) === undefined,
            source2.join()            === [].join(),
            source2.delete(undefined) === undefined,
        ];

    if (/false/.test(result.join() + result2.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}
 */

function testArray_delete_at(test, pass, miss) {
    var source = ["apple", "orange", "banana", "kiwi", "peach"];
    source.delete_at(1);
    source.delete_at(-2);

    var array = [0, 1, 2, 3, 4]
    array.delete_at(2);

    var result = [
            source.join() === ["apple", "banana", "peach"].join(),
            array.join()  === [0, 1, 3, 4].join(),
        ];

    if (/false/.test(result.join() + result2.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_delete_if(test, pass, miss) {
    var source = [0, 1, 2, 3, 4, 5];

    source.delete_if(function(x) {
        return x % 2 === 0;
    });

    var result = [
            source.join() === [1, 3, 5].join()
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_empty(test, pass, miss) {
    var result = [
            [].empty()      === true,
            [1,2,3].empty() === false,
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_eql(test, pass, miss) {
    var result = [
            ["a", "b", "c"].eql( ["a", "b", "c"]) === true,
            ["a", "b", "c"].eql( ["a", "c", "b"]) === false,
            ["a", "b", 1].eql(   ["a", "b", 1.0]) === true, // false (1.eql?(1.0) が false なので)
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testArray_find(test, pass, miss) {
    var source = [38, 74, 56, 48, 87, 68, 81, 49];
    var result = 56;
    var callback = function(value, index, array) {
            return value % 7 === 0;
        };

    if (source.find(callback) === result) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testArray_assoc(test, pass, miss) {
    var source = [["Japan", "Tokyo"], ["Italy", "Roma"], ["China", "Beijing"]]
    var result = ["Italy", "Roma"]

    if (source.assoc("Italy").join() === result.join()) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testArray_index(test, pass, miss) {
    var source = ["apple", "orange", "banana", "kiwi"];

    if (source.index("banana") === 2 &&
        source.index("grape")  === undefined) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testArray_include(test, pass, miss) {
    var source = ["dog", "cat", "mouse"];

    if (source.include("cat") === true &&
        source.include("elephant")  === false) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testArray_first(test, pass, miss) {
    var source = ["apple", "orange", "banana", "kiwi", "peach"];

    if (source.first() === "apple") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testArray_delete_at(test, pass, miss) {
    var source = ["apple", "orange", "banana", "kiwi", "peach"];

    source.delete_at(1);
    source.delete_at(-2);

    if (source.join() === ["apple", "banana", "peach"].join()) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testArray_last(test, pass, miss) {
    var source = ["apple", "orange", "banana", "kiwi", "peach"];

    if (source.last() === "peach") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testArray_uniq(test, pass, miss) {
    var source = [1, 2, 5, 5, 1, 3, 1, 2, 4, 3];
    var result = [1, 2, 5, 3, 4];

    if (source.uniq().join() === result.join()) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}


function testString_ascii_only(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html

    if ("あbc".ascii_only() === false &&
        "abc".ascii_only() === true) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_capitalize(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var source = "heLLO, World";
    var result = "Hello, world";

    if (source.capitalize(source) === result) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_center(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "foo".center(10) === "   foo    ";
    var result2 = "foo".center(9)  === "   foo   ";
    var result3 = "foo".center(8)  === "  foo   ";
    var result4 = "foo".center(7)  === "  foo  ";
    var result5 = "foo".center(3)  === "foo";
    var result6 = "foo".center(2)  === "foo";
    var result7 = "foo".center(1)  === "foo";
    var result8 = "foo".center(10, "*") === "***foo****";
    var result10 = "hello".center(15)   === "     hello     ";
    var result11 = "hello".center(15, "-*") === "-*-*-hello-*-*-";

    if (result1 &&
        result2 &&
        result3 &&
        result4 &&
        result5 &&
        result6 &&
        result7 &&
        result8 &&
        result10 &&
        result11) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_chomp(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var source = "hello";

    if ("hello\n".chomp()       === "hello" &&
        "hello\r\n".chomp()     === "hello" &&
        "hello\r".chomp()       === "hello" &&
        "hello:".chomp(":")     === "hello") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_chop(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var source = "hello";

    if ("hello\n".chop()       === "hello" &&
        "hello\r\n".chop()     === "hello" &&
        "hello\r".chop()       === "hello" &&
        "hello:".chop()        === "hello" &&
        "あいう".chop()        === "あい") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_codepoints(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result = "hello わーるど".codepoints();

    if (result.join() === [104, 101, 108, 108, 111, 32, 12431, 12540, 12427, 12393].join()) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_count(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = 'abcdefg'.count('c') === 1;
    var result2 = '123456789'.count('2378') === 4;
    var result3 = '123456789'.count('2-8', '^4-6') === 4;

    if (result1 &&
        result2 &&
        result3) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_delete(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "123456789"["delete"]("2378") === "14569";
    var result2 = "123456789"["delete"]("2-8", "^4-6") === "14569";

    if (result1 &&
        result2) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_each_char(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result = [];

    "hello世界".each_char(function(value, index) {
        result.push(value);
    });

    if (result.join("") === "hello世界") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_each_codepoint(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result = [];

    "str".each_codepoint(function(value, index) {
        result.push(value);
    });

    if (result.join() === [115, 116, 114].join()) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_each_line(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = [];

    "aa\nbb\ncc\n".each_line(function(value, index) {
        result1.push(value);
    });
    var result2 = "aa\nbb\ncc\n".each_line();

    if (result1.join() === ["aa", "bb", "cc"].join() &&
        result2.join() === ["aa", "bb", "cc"].join()) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_end_with(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "string".end_with("ing") === true;
    var result2 = "string".end_with("str") === false;
    var result3 = "string".end_with("str", "ing") === true;

    if (result1 &&
        result2 &&
        result3) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_eql(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "string".eql("string") === true;
    var result2 = "string".eql("STRING") === false;

    if (result1 &&
        result2) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_gsub(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = 'abcdefg'.gsub(/def/, '!!') === "abc!!g";
    var result2 = 'abcabc'.gsub(/(b)/, '<<\\1>>') === "a<<b>>ca<<b>>c";
    var result3 = 'abcabc'.gsub(/(b)/, '<<$1>>') === "a<<b>>ca<<b>>c";
    var result4 = false;

    try {
        'abcabc'.gsub(/(b)/, '<<\\&>>') === "a<<b>>ca<<b>>c";
    } catch (err) {
        result4 = true;
    }

    if (result1 &&
        result2 &&
        result3 &&
        result4) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_hex(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "10".hex() === 16;
    var result2 = "ff".hex() === 255;
    var result3 = "0x10".hex() === 16;
    var result4 = "-0x10".hex() === -16;
    var result5 = "xyz".hex() === 0;
    var result6 = "10z".hex() === 16;
    var result7 = "1_0".hex() === 16;
    var result8 = "".hex() === 0;

    if (result1 &&
        result2 &&
        result3 &&
        result4 &&
        result5 &&
        result6 &&
        result7 &&
        result8) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_include(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "abcdef".include("def");

    if (result1) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_insert(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "foobaz".insert(3, "bar") === "foobarbaz";
    var result2 = "".insert(3, "bar") === "bar";

    if (result1 &&
        result2) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_size(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "foobaz".size() === 6;

    if (result1) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}




function testString_ljust(test, pass, miss) {
    var result1 = "foo".ljust(10) === "foo       ";
    var result2 = "foo".ljust(9)  === "foo      ";
    var result3 = "foo".ljust(8)  === "foo     ";
    var result4 = "foo".ljust(2)  === "foo";
    var result5 = "foo".ljust(1)  === "foo";
    var result6 = "foo".ljust(10, "*") === "foo*******";
    var result7 = "hello".ljust(15) === "hello          ";
    var result8 = "hello".ljust(15, "-*") === "hello-*-*-*-*-*";

    if (result1 &&
        result2 &&
        result3 &&
        result4 &&
        result5 &&
        result6 &&
        result7 &&
        result8) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_lstrip(test, pass, miss) {
    var result1 = "  abc\n".lstrip()  === "abc\n";
    var result2 = "\t abc\n".lstrip() === "abc\n";
    var result3 = "abc\n".lstrip()    === "abc\n";

    if (result1 &&
        result2 &&
        result3) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_ord(test, pass, miss) {
    var result1 =  "a".ord() === 97;

    if (result1) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_partition(test, pass, miss) {
    var result1 = "axaxa".partition("x").join() === ["a", "x", "axa"].join()
    var result2 = "aaaaa".partition("x").join() === ["aaaaa", "", ""].join()
    var result3 = "aaaaa".partition("").join()  === ["", "", "aaaaa"].join()

    if (result1 &&
        result2 &&
        result3) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_reverse(test, pass, miss) {
    var result1 = "foobar".reverse() === "raboof";
    var result2 =       "".reverse() === "";

    if (result1 &&
        result2) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_rjust(test, pass, miss) {
    var result1 =   "foo".rjust(10)       === "       foo";
    var result2 =   "foo".rjust(9)        === "      foo";
    var result3 =   "foo".rjust(8)        === "     foo";
    var result4 =   "foo".rjust(2)        === "foo";
    var result5 =   "foo".rjust(1)        === "foo";
    var result6 =   "foo".rjust(10, "*")  === "*******foo";
    var result7 = "hello".rjust(15)       === "          hello";
    var result8 = "hello".rjust(15, "-*") === "-*-*-*-*-*hello";

    if (result1 &&
        result2 &&
        result3 &&
        result4 &&
        result5 &&
        result6 &&
        result7 &&
        result8) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_rpartition(test, pass, miss) {
    var result1 = "axaxa".rpartition("x").join() === ["axa", "x", "a"].join();
    var result2 = "aaaaa".rpartition("x").join() === ["", "", "aaaaa"].join();
    var result3 = "aaaaa".rpartition("").join()  === ["aaaaa", "", ""].join();

    if (result1 &&
        result2 &&
        result3) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_rstrip(test, pass, miss) {
    var result1 = "  abc\n".rstrip()        === "  abc";
    var result2 = "  abc \t\r\n\0".rstrip() === "  abc";
    var result3 = "  abc".rstrip()          === "  abc";
    var result4 = "  abc\0 ".rstrip()       === "  abc";


    if (result1 &&
        result2 &&
        result3 &&
        result4) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_scan(test, pass, miss) {
    var result1 = "foobar".scan(/../).join()               === ["fo", "ob", "ar"].join()
    var result2 = "foobar".scan("o").join()                === ["o", "o"].join()
    var result3 = "foobarbazfoobarbaz".scan(/ba./).join()  === ["bar", "baz", "bar", "baz"].join()
    var result4 = "foobar".scan(/(.)/).join()              === [["f"], ["o"], ["o"], ["b"], ["a"], ["r"]].join()
    var result5 = "foobarbazfoobarbaz".scan(/(ba)(.)/).join() === [["ba", "r"], ["ba", "z"], ["ba", "r"], ["ba", "z"]].join()

    var result6 = "of the people, by the people, for the people".scan(/(\w+)/).join() === ["of", "the", "people", "by", "the", "people", "for", "the", "people"].join();
    var result7 = "of the people, by the people, for the people".scan("people").join() === ["people", "people", "people"].join();
    var result8 = "Hokkaido:Sapporo, Aomori:Aomori, Iwate:Morioka".scan(/(\w+):(\w+)/).join() === [["Hokkaido", "Sapporo"], ["Aomori", "Aomori"], ["Iwate", "Morioka"]].join();

    var result9 = [];
    var result10 = [];
    result9 = "foobarbazfoobarbaz".scan(/ba./, function(value) {
        result10.push(value);
    });

    var result11 = [];
    var result12 = [];
    result11 = "foobarbazfoobarbaz".scan("ba", function(value) {
        result12.push(value);
    });

    var result13 = [];
    var result14 = [];
    result13 = "foobarbazfoobarbaz".scan(/(ba)(.)/, function(value) {
        result14.push(value);
    });

    if (result1 &&
        result2 &&
        result3 &&
        result4 &&
        result5 &&
        result6 &&
        result7 &&
        result8 &&
        result9.join() === result10.join() &&
        result11.join() === result12.join() &&
        result13.join() === result14.join()) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_squeeze(test, pass, miss) {
    var result1 = "112233445566778899".squeeze()              === "123456789";
    var result2 = "112233445566778899".squeeze("2-8")         ===  "11234567899";
    var result3 = "112233445566778899".squeeze("2378")        === "11234455667899";
    var result4 = "112233445566778899".squeeze("2-8", "^4-6") === "11234455667899";

    if (result1 &&
        result2 &&
        result3 &&
        result4) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_start_with(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "string".start_with("str") === true;
    var result2 = "string".start_with("ing") === false;
    var result3 = "string".start_with("ing", "str") === true;

    if (result1 &&
        result2 &&
        result3) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_strip(test, pass, miss) {
    // http://docs.ruby-lang.org/ja/2.0.0/class/String.html
    var result1 = "  abc  \r\n".strip()    === "abc"
    var result2 = "abc\n".strip()          === "abc"
    var result3 = "  abc".strip()          === "abc"
    var result4 = "abc".strip()            === "abc"
    var result5 = "  \0  abc  \0".strip()  === "\000  abc"   // 右側のみ "\0" も取り除く
    var result6 = "\tabc\n".strip()        === "abc"

    if (result1 &&
        result2 &&
        result3 &&
        result4 &&
        result5 &&
        result6) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_swapcase(test, pass, miss) {
    var source = "heLLo, wORld";
    var result = "HEllO, WorLD";

    if (source.swapcase(source) === result) {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testString_to_f(test, pass, miss) {
    var result = [
            "10".to_f()    === 10.0,
            "10e2".to_f()  === 1000.0,
            "1e-2".to_f()  === 0.01,
            ".1".to_f()    === 0.1,
            "nan".to_f()   === 0.0,
            "INF".to_f()   === 0.0,
            "-Inf".to_f()  === -0.0,
          //("10" * 1000).to_f() === 0.0, -> Error
            "".to_f()      === 0.0,
            "1_0_0".to_f() === 100.0,
            " \n10".to_f() === 10.0,    // 先頭の空白は無視される
            "0xa.a".to_f() === 0.0,
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testString_to_i(test, pass, miss) {
    var result = [
            " 10".to_i()  === 10,
            "+10".to_i()  === 10,
            "-10".to_i()  === -10,
            "010".to_i()  === 10,
            "-010".to_i() === -10,
            "0x11".to_i() === 0,
            "".to_i()     === 0,
            "01".to_i(2)    === 1,
            "0b1".to_i(2)   === 1,
            "07".to_i(8)    === 7,
            "0o7".to_i(8)   === 7,
            "1f".to_i(16)   === 31,
            "0x1f".to_i(16) === 31,
            "0b10".to_i(0)  === 2,
            "0o10".to_i(0)  === 8,
            "010".to_i(0)   === 8,
            "0d10".to_i(0)  === 10,
            "0x10".to_i(0)  === 16,
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testString_tr(test, pass, miss) {
    var result = [
            "foo".tr("f", "X")      === "Xoo",
            "foo".tr('a-z', 'A-Z')  === "FOO",
            "FOO".tr('A-Z', 'a-z')  === "foo",
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testString_tr_s(test, pass, miss) {
    var result = [
            "gooooogle".tr_s("o", "X")       === "gXgle",
            "gooooogle".tr_s("a-z", "A-Z")   === "GOGLE",
            "foo".tr_s("o", "f")             === "ff",
            "foo".tr("o", "f").squeeze("f")  === "f",
        ];

    if (/false/.test(result.join())) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

})((this || 0).self || global);


