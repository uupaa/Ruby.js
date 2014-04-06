// @name: Ruby.js
// @require: Valid.js, Extend.js
// @cutoff: @assert @node

/*

# Standard call

     Ruby.uniq([1, 1]) -> [1]
     Ruby.ord("ab")    -> 97


# Direct call

     Ruby[2].Array.prototype.uniq.call([1, 1]) -> [1]
     Ruby[2].String.prototype.ord.call("ab")   -> 97


# OOP Extended

     Ruby(2);

     [1, 1].uniq() -> [1]
     "ab".ord()    -> 97

 */

(function(global) {

// --- variable --------------------------------------------
//{@assert
var Valid = global["Valid"] || require("uupaa.valid.js");
//}@assert

var Extend = global["Extend"] || require("uupaa.extend.js");

var _inNode = "process" in global;

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function Ruby(version) { // @arg Number(= 2.0): OOP Extended Ruby version number.
                         // @help: Ruby
                         // @desc: Extend functionality to the native objects.
    switch (version || 2.0) {
    case 2.0:
        Extend(global, Ruby["2"]);
    }
}

Ruby["repository"] = "https://github.com/uupaa/Ruby.js";
Ruby["2"] = {
    "Array": {
        "prototype": {
            "times":    Array_times,        // Array#times(times):Array
            "all":      Array.prototype.every,
            "any":      Array.prototype.some,
            "at":       Array_at,           // Array#at(nth):Any
            "assoc":    Array_assoc,        // Array#assoc(find:Any):Array/undefined
            "clear":    Array_clear,        // Array#clear():Array
            "clone":    Array_clone,        // Array#clone():Array
            "collect":  Array.prototype.map,
            "compact":  Array_compact,      // Array#compact():Array
            "cycle":    Array_cycle,        // Array#cycle(n:Integer, callback:Function = null):Array
            "detect":   Array_find,
          //"delete":   Array_delete,       // Array#delete(value:Any, callback:Function = null):Array
            "delete_at":Array_delete_at,    // Array#delete_at(index:Integer):Any
            "delete_if":Array_delete_if,    // Array#delete_if(callback:Function):Array
            "dup":      Array_clone,        // Array#dup():Array
            "each":     Array.prototype.forEach,
            "each_index":Array.prototype.forEach,
            "each_with_index":Array.prototype.forEach,
            "empty":    Array_empty,        // Array#empty():Boolean
            "eql":      Array_eql,          // Array#eql(target:Array):Boolean
            "find":     Array_find,         // Array#find(callback, ifnone = null):
            "find_index":Array_index,
            "index":    Array_index,        // Array#index(any:Any):Number/undefined
          //"fetch":
          //"fill":
          //"flatten":
            "first":    Array_first,        // Array#first():Any/undefined
            "include":  Array_include,      // Array#include(any:Any):Boolean
          //"insert":
            "to_s":     Array.prototype.toString,
          //"inspect":
          //"join":
          //"keep_if":
            "last":     Array_last,         // Array#last():Any/undefined
            "map":      Array.prototype.map,
          //"size":
          //"permutation":
          //"pop":
          //"product":
          //"push":
          //"rassoc":
          //"replace":
          //"reverse":
          //"reverse_each":
          //"rindex":
          //"rotate":
          //"sample":
            "select":   Array.prototype.filter,
          //"shift":
          //"shuffle":
          //"slice":
          //"sort":
            "to_a":     Array.prototype.valudOf,
          //"to_ary":
          //"transpose":
            "uniq":     Array_uniq          // Array#uniq():DenseArray
          //"unshift":
          //"values_at":
          //"zip":
        }
    },
    "String": {
        "prototype": {
            "times":    String_repeat,
            "ascii_only": String_ascii_only,// String#ascii_only():Boolean
            "capitalize": String_capitalize,// String#capitalize():String
            "center":   String_center,      // String#center(width:Number, padding:String = " "):String
            "chars":    String_chars,       // String#chars():String
            "chomp":    String_chomp,       // String#chomp(separator = "\n"):String
            "chop":     String_chop,        // String#chop():String
            "chr":      String_chr,         // String#chr():String
            "codepoints":String_codepoints, // String#codepoints():String
            "count":    String_count,       // String#count(...:TRString, ...):Integer
            "delete":   String_delete,      // String#delete(...:String, ...):String
            "downcase": String.prototype.toLowerCase,
            "each_char":String_each_char,   // String#each_char(callback:Function = null):String/Array
            "each_codepoint":String_each_codepoint,   // String#each_codepoint(callback:Function = null):String/Array
            "each_line":String_each_line,   // String#each_line(callback:Function = null, rs = "\n"):String/Array
            "end_with": String_end_with,    // String#end_with(...:String, ...):Boolean
            "eql":      String_eql,         // String#eql(target:String):Boolean
            "gsub":     String_gsub,        // String#gsub(pattern:RegExp, replace:String/Function):String
            "hex":      String_hex,         // String#hex():Integer
            "include":  String_include,     // String#include(target:String):Boolean
            "index":    String.prototype.indexOf,
            "insert":   String_insert,      // String#insert(pos:Integer, target:String):String
            "size":     String_size,        // String#size():Integer
            "lines":    String_each_line,   // String#lines(callback:Function = null, rs = "\n"):String/Array
            "ljust":    String_ljust,       // String#ljust(width:Number, padding:String = " "):String
            "lstrip":   String_lstrip,      // String#lstrip():String
//          "match":    String_match,       // String#match(pattern:String, pos:Integer = 0):MatchedArray
//          "succ":     String_succ,        // String#succ():String
//          "next":     String_next,        // String#next():String
            "ord":      String_ord,         // String#ord():Integer
            "partition":String_partition,   // String#partition(separator:String):StringArray
//          "prepend":  String_prepend,     // String#prepend(target:String):String
            "reverse":  String_reverse,     // String#reverse():String;
            "rindex":   String.prototype.lastIndexOf,
            "rjust":    String_rjust,       // String#rjust(width:Number, padding:String = " "):String
            "rpartition":String_rpartition, // String#rpartition(separator:String):StringArray
            "rstrip":   String_rstrip,      // String#rstrip():String
            "scan":     String_scan,        // String#scan(pattern:RegExp/String):StringArray
            "squeeze":  String_squeeze,     // String#squeeze(...:String, ...):String
            "start_with":String_start_with, // String#start_with(...:String, ...):Boolean
            "strip":    String_strip,       // String#strip():String
            "swapcase": String_swapcase,    // String#swapcase():String
            "to_f":     String_to_f,        // String#to_f():String
            "to_i":     String_to_i,        // String#to_i():String
            "to_s":     String.prototype.toString,
            "to_str":   String.prototype.toString,
            "tr":       Stirng_tr,          // String#tr(pattern:TRString, replace:TRString):String
            "tr_s":     Stirng_tr_s,        // String#tr_s(pattern:TRString, replace:TRString):String
            "upcase":   String.prototype.toUpperCase
        }
    },
    "Number": {
        "prototype": {
            "to_s":     Number_to_s,        // Number#to_s(radix:Integer = 10):String
            "upto":     Number_upto,        // Number#upto(max:Number, fn:Function)
            "downto":   Number_upto,        // Number#downto(min:Number, fn:Function)
            "step":     Number_step         // Number#step(limit:Number, step:Number, fn:Function)
        }
    }
};

// --- implement -------------------------------------------
Array_uniq.call([].concat(Object.keys(Ruby["2"]["Array"]["prototype"]),
                          Object.keys(Ruby["2"]["String"]["prototype"]),
                          Object.keys(Ruby["2"]["Number"]["prototype"]))).forEach(function(name) {

    Ruby[name] = function(that) {
        var klass = typeof that === "string" ? "String"
                  : typeof that === "number" ? "Number"
                  : Array.isArray(that) ? "Array" : "";

        return Ruby["2"][klass]["prototype"][name].call(that, [].slice.call(arguments, 1));
    };
});

// --- Array -----------------------------------------------
function Array_times(times) { // @arg Integer:
                              // @ret Array:
                              // @help: Array#times
    var rv = [];

    for (var i = 0, iz = times; i < iz; ++i) {
        rv.push(this);
    }
    return [].concat(rv);
}

function Array_at(nth) { // @arg Integer:
                         // @ret Any:
                         // @help: Array#at
    if (nth < 0) {
        return this[this.length + nth] || undefined;
    }
    return this[nth] || undefined;
}

function Array_assoc(find) { // @arg Any: find value
                             // @ret Array/undefined:
                             // @help: Array#assoc
    function _find(v) {
        return v[0] === find;
    }

    for (var i = 0, iz = this.length; i < iz; ++i) {
        if ( i in this && _find(this[i]) ) {
            return this[i];
        }
    }
    return;
}

function Array_clear() { // @ret Array: empry array.
                         // @help: Array#clear
    this.length = 0;
    return this;
}

function Array_clone() { // @ret Array: cloned array.
                         // @help: Array#clone
    var rv = [];
    for (var i = 0, iz = this.length; i < iz; ++i) {
        if (i in this) {
            rv[i] = this[i];
        }
    }
    return rv;
}

function Array_compact() { // @ret Array:
                           // @help: Array#compact
    var rv = [];

    for (var i = 0, iz = this.length; i < iz; ++i) {
        if (i in this) {
            var value = this[i];

            if (value === value && value !== undefined && value !== null) {
                rv.push(value);
            }
        }
    }
    return rv;
}

function Array_cycle(n,          // @arg Integer:
                     callback) { // @arg Function(= null):
                                 // @ret Array:
                                 // @help: Array#cycle
//{@assert
    _if(!Valid.type(n, "Integer") || n < 0, "Array#cycle(n)");
    _if(!Valid.type(callback, "Function/omit"), "Array#cycle(,callback)");
//}@assert

    var rv = [];
    var index = 0;

    for (var i = 0; i < n; ++i) {
        for (var j = 0, jz = this.length; j < jz; ++j) {
            if (j in this) {
                var value = this[j];

                if (callback) {
                    callback(value, index++);
                }
                rv.push(value);
            }
        }
    }
    return rv;
}

/*
function Array_delete(value,      // @arg Any:
                      callback) { // @arg Function(= null):
                                  // @ret Any:
                                  // @help: Array#delete
//{@assert
    _if(!Valid.type(callback, "Function/omit"), "Array#delete(,callback)");
//}@assert

    var rv = [];
    var lastMatchedValue = undefined;

    for (var i = 0, iz = this.length; i < iz; ++i) {
        if (i in this) {
            if (value === this[i]) {
                lastMatchedValue = this[i];
            } else {
                rv.push(this[i]);
            }
        }
    }
    if (lastMatchedValue === undefined) {
        if (callback) {
            for (var i = 0, iz = rv.length; i < iz; ++i) {
                rv[i] = callback(rv[i], i);
            }
            return rv;
        }
    }
    return lastMatchedValue;
}
 */

function Array_delete_at(index) { // @arg Integer:
                                  // @ret Any:
                                  // @help: Array#delete_at
//{@assert
    _if(!Valid.type(index, "Integer"), "Array#delete_at(index)");
//}@assert

    return this.splice(index, 1);
}

function Array_delete_if(callback) { // @arg Function:
                                     // @ret Array:
                                     // @help: Array#delete_if
//{@assert
    _if(!Valid.type(callback, "Function"), "Array#delete_if(callback)");
//}@assert

    var result = this.reduce(function(result, value, index) {
        if (!callback(value, index)) {
            result.push(value);
        }
        return result;
    }, []);

    this.length = 0;
    Array.prototype.push.apply(this, result);

    return this;
}

function Array_empty() { // @ret Boolean:
                         // @help: Array#empty
    return !this.length;
}

function Array_eql(target) { // @arg Array:
                             // @ret Boolean:
                             // @help: Array#eql
    if (this.length !== target.length) {
        return false;
    }
    for (var i = 0, iz = this.length; i < iz; ++i) {
        if (this[i] !== target[i]) {
            return false;
        }
    }
    return true;
}

function Array_index(any) { // @arg Any:
                            // @ret Number/undefined:
                            // @help: Array#index
    var rv = this.indexOf(any);

    return rv < 0 ? void 0 : rv;
}

function Array_first() { // @ret Any:
                         // @help: Array#first
//{@assert
    _if(arguments.length, "unsupported Array#first(num)");
//}@assert

    return this.length ? this[0] : undefined;
}

function Array_find(callback, // @arg Function:
                    ifnone) { // @arg Function(= null):
                              // @ret Any/undefined:
                              // @help: Array#find
    for (var i = 0, iz = this.length; i < iz; ++i) {
        var result = callback(this[i], i, this); // callback(value, index, array):Any

        if (result) {
            return this[i];
        }
    }
    return ifnone ? ifnone(this)
                  : undefined;
}

function Array_uniq() { // @ret DenseArray: new Array has unique value(s)
                        // @help: Array#uniq
                        // @desc: make array from unique values (avoid NaN, null and undefined values)
    var rv = [];

    for (var i = 0, iz = this.length; i < iz; ++i) {
        var value = this[i];

        if (value === value && value !== null && value !== undefined) { // avoid NaN, null, undefined.
            if (rv.indexOf(value) < 0) {
                rv.push(value);
            }
        }
    }
    return rv;
}

function Array_include(any) { // @arg Any:
                              // @ret Boolean:
                              // @help: Array#include
    return this.indexOf(any) >= 0;
}


function Array_last() { // @ret Any:
                        // @help: Array#last
//{@assert
    _if(arguments.length, "unsupported Array#last(num)");
//}@assert

    return this.length ? this[this.length - 1] : undefined;
}

// --- String ----------------------------------------------
function String_repeat(count) {
    count = count | 0;
    return (this.length && count > 0) ? Array(count + 1).join(this) : "";
}

function String_ascii_only() { // @ret Boolean:
                               // @help String#ascii_only
    for (var i = 0, iz = this.length; i < iz; ++i) {
        if (this.charCodeAt(i) > 0x7f) {
            return false;
        }
    }
    return true;
}

function String_capitalize() { // @ret String:
                               // @help: String#capitalize
    return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
}

function String_center(width,     // @arg Integer:
                       padding) { // @arg String(= " "):
                                  // @help: String#center
//{@assert
    _if(!Valid.type(width, "Integer"), "String#center(width)");
    _if(!Valid.type(padding, "String/omit"), "String#center(,padding)");
//}@assert

    padding = padding || " ";

    if (width <= this.length) {
        return this.valueOf();
    }
    var num = width - this.length;
    var lpad = (num / 2) | 0;
    var rpad = (num / 2 + 0.5) | 0;
    var filler = String_repeat.call(padding, width).slice(0, width);
    var rv = filler.slice(0, lpad) + this + filler.slice(-rpad);

    return rv;
}

function String_chars() { // @ret String:
                          // @help: String#chars
    return this.split("");
}

function String_chomp(separator) { // @arg String(= "\n"): trim char.
                                   // @ret String:
                                   // @help: String#chomp
    separator = separator === undefined ? "\n" : separator;

    switch (separator) {
    case null: return this.valueOf();
    case "\n": return this.replace(/(\r\n|\r|\n)$/,  "");
    case "":   return this.replace(/(\r\n|\r|\n)+$/, "");
    }
    return this.replace(RegExp(separator), "");
}

function String_chop() { // @ret String:
                         // @help: String#chop
    var iz = this.length;

    if (iz >= 2 && this[iz - 2] === "\r" && this[iz - 1] === "\n") {
        return this.slice(0, -2);
    }
    return this.slice(0, -1);
}

function String_chr() { // @ret String:
                        // @help: String#chr
    return this[0];
}

function String_codepoints() { // @ret UTF16IntegrArray:
                               // @help: String#codepoints
    var result = [];

    for (var i = 0, iz = this.length; i < iz; ++i) {
        result.push( this.charCodeAt(i) );
    }
    return result;
}

function String_count(/* ... */) { // @var_args TRString: eg: "a-c", "^0-9"
                                   // @ret Integer:
                                   // @help: String#count
    var rex = new CharSet().set([].slice.call(arguments)).get().liner;
    var rv = this.match(RegExp("[" + rex + "]", "g"));

    return rv.length;
}

function String_delete(/* ... */) { // @var_args String: eg: "a-c", "^0-9"
                                    // @ret String:
                                    // @help: String#delete
    var rex = new CharSet().set([].slice.call(arguments)).get().liner;
    var rv = this.replace(RegExp("[" + rex + "]", "g"), "");

    return rv;
}

function String_each_char(callback) { // @arg Function(= null): callback(value:String, index:Integer)
                                      // @ret String/Array:
                                      // @help: String#each_char
    var array = this.split("");

    if (typeof callback === "function") {
        array.forEach(callback);
        return this;
    }
    return array;
}

function String_each_codepoint(callback) { // @arg Function(= null): callback(value:Integer, index:Integer)
                                           // @ret String:
                                           // @help: String#each_codepoints
    var array = String_codepoints.call(this);

    if (typeof callback === "function") {
        array.forEach(callback);
        return this;
    }
    return array;
}

function String_each_line(callback, // @arg Function(= null): callback(value:Integer, index:Integer)
                          rs) {     // @arg String(= "\n"):
                                    // @ret String:
                                    // @help: String#each_line
    rs = rs === undefined ? "\n" : rs;
    var array = null;

    if (rs === "") { // paragraph mode
        array = this.chomp(rs).split("\r\n\r\n");
    } else if (rs === null || rs === undefined) {
        array = [this.valueOf()];
    } else {
        array = this.chomp(rs).split(rs);
    }
    if (typeof callback === "function") {
        array.forEach(callback);
        return this;
    }
    return array;
}

function String_end_with(/* ... */) { // @var_args String:
                                      // @ret Boolean:
                                      // @help: String#end_with
    var source = this.valueOf();

    return [].slice.call(arguments).some(function(pattern) {
        var pos = source.length - pattern.length;

        if (source.lastIndexOf(pattern, pos) === pos) {
            return true;
        }
        return false;
    });
}

function String_eql(target) { // @arg String:
                              // @ret Boolean:
                              // @help: String#eql
    return this.valueOf() === target;
}

function String_gsub(pattern,   // @arg RegExp:
                     replace) { // @arg String/Function:
                                // @ret String:
                                // @help: String#gsub
//{@assert
    _if(!Valid.type(pattern, "RegExp"), "Array#gsub(pattern)");
    _if(!Valid.type(replace, "String/Function"), "Array#gsub(,replace)");
//}@assert

    if (replace.indexOf("\\&") >= 0) {
        throw new Error("unsupported replace character");
    }
    var rex = _createRegExp(pattern, ["g"]);

    //replace = replace.replace(/\\(\d)/g, "\$$1");
    replace = replace.replace(/\\(\d)/g, "$$1");

    return this.replace(rex, replace);
}

function String_hex() { // @ret Integer:
                        // @help: String#hex
    return parseInt(this.replace(/_/g, ""), 16) || 0;
}

function String_include(target) { // @arg String:
                                  // @ret Boolean:
                                  // @help: String#include
    return this.indexOf(target) >= 0;
}

function String_insert(pos,      // @arg Integer:
                       target) { // @arg String:
                                 // @ret String:
                                 // @help: String#insert
    return this.slice(0, pos) + target + this.slice(pos);
}

function String_size() { // @ret Integer:
                         // @help: String#size
    return this.length;
}

function String_ljust(width,     // @arg Integer:
                      padding) { // @arg String(= " "):
                                 // @ret String:
                                 // @help: String#ljust
//{@assert
    _if(!Valid.type(width, "Integer"), "String#ljust(width)");
    _if(!Valid.type(padding, "String/omit"), "String#ljust(,padding)");
//}@assert

    if (width <= this.length) {
        return this.valueOf();
    }
    return ( this + String_repeat.call(padding || " ", width) ).slice(0, width);
}

function String_lstrip() { // @ret String:
                           // @help: String#ljust
    return this.replace(/^[ \t\r\n\f\v\0]+/, "");
}

function String_ord() { // @ret Integer:
                        // @help: String#ord
    if (!this.length) {
        throw new Error("String#ord() empty string");
    }
    return this.charCodeAt(0);
}

function String_partition(separator) { // @arg String:
                                       // @ret StringArray: [left-side, separator, right-side]
                                       // @help: String#partition
    var pos = this.indexOf(separator);

    if (pos >= 0) {
        return [this.slice(0, pos), separator, this.slice(pos + separator.length)];
    }
    return [this.valueOf(), "", ""];
}

function String_reverse() { // @ret String:
                            // @help: String#reverse
    return this.split("").reverse().join("");
}

function String_rjust(width,     // @arg Integer:
                      padding) { // @arg String(= " "):
                                 // @help: String#rjust
//{@assert
    _if(!Valid.type(width, "Integer"), "String#rjust(width)");
    _if(!Valid.type(padding, "String/omit"), "String#rjust(,padding)");
//}@assert

    if (width <= this.length) {
        return this.valueOf();
    }
    return ( String_repeat.call(padding || " ", width) + this ).slice(-width);
}

function String_rpartition(separator) { // @arg String:
                                        // @ret StringArray: [left-side, separator, right-side]
                                        // @help: String#rpartition
    var pos = this.lastIndexOf(separator);

    if (pos >= 0) {
        return [this.slice(0, pos), separator, this.slice(pos + separator.length)];
    }
    return ["", "", this.valueOf()];
}

function String_rstrip() { // @ret String:
                           // @help: String#rstrip
    return this.replace(/[ \t\r\n\f\v\0]+$/, "");
}

/*
function String_sub(pattern,   // @arg RegExp:
                    replace) { // @arg String/Function:
                               // @ret String:
                               // @help: String#sub
//{@assert
    _if(!Valid.type(pattern, "RegExp"), "Array#sub(pattern)");
    _if(!Valid.type(replace, "String/Function"), "Array#sub(,replace)");
//}@assert

    return this.replace(pattern, replace);
}
 */

function String_scan(pattern,    // @arg RegExp/String:
                     callback) { // @arg Function(= null): callback(value:String/StringArray, index:Integer):void
                                 // @ret StringArray: [matchedString, ...] or [ [capturedString, ...], ... ]
                                 // @help: String#scan
//{@assert
    _if(!Valid.type(pattern, "RegExp/String"), "String#scan(pattern)");
    _if(!Valid.type(callback, "Function/omit"), "String#scan(,callback)");
//}@assert

    var rex = _createRegExp(pattern, ["g"]);
    var source = this.valueOf();
    var result = [];
    var match = null;
    var callbackIndex = 0;

    while ((match = rex.exec(source)) !== null) {
        var hasCapture = match.length > 1;

        if (hasCapture) {
            // RegExp and Capture pattern.
            // /(\d)/g.exec("123") -> result.push(["1", "1"])
            //                        callback(["1", "1"], callbackIndex)
            Array.prototype.push.apply( result, [match.slice(1)] );
            if (callback) {
                callback(match.slice(1), callbackIndex++);
            }
        } else {
            // /\d/g.exec("123") -> result.push("1")
            //                      callback("1", callbackIndex)
            result.push( match[0] );
            if (callback) {
                callback(match[0], callbackIndex++);
            }
        }
    }
    return result;
}

function String_squeeze(/* ... */) { // @arg var_args: String
                                     // @ret String:
                                     // @help: String#squeeze
    var targetString = "";
    var cs = new CharSet();

    if (arguments.length) {
        cs.set([].slice.call(arguments));
    }
    targetString = cs.get().liner;

    var result = [];
    var source = this.valueOf();
    var lastChar = "";

    for (var i = 0, iz = source.length; i < iz; ++i) {
        var curtChar = source[i];

        if (!targetString || targetString.indexOf(curtChar) >= 0) {
            if (lastChar === curtChar) {
                continue; // skip
            }
        }
        if (lastChar !== curtChar) {
            lastChar = curtChar;
        }
        result.push(curtChar);
    }

    return result.join("");
}

function String_start_with(/* ... */) { // @var_args String:
                                        // @ret Boolean:
                                        // @help: String#start_with
    var source = this.valueOf();

    return [].slice.call(arguments).some(function(pattern) {
        if (source.indexOf(pattern) === 0) {
            return true;
        }
        return false;
    });
}

function String_strip() { // @ret String:
                          // @help: String#strip
    return this.replace(/^[ \t\r\n\f\v]+/, "").
                replace(/[ \t\r\n\f\v\0]+$/, "");
}

function String_swapcase() { // @ret String:
                             // @help: String#swapcase
    return this.replace(/(?:([A-Z])|([a-z]))/g, function(_, up, low) {
        return up ? up.toLowerCase() : low.toUpperCase();
    });
}

function String_to_f() { // @ret Number: to float value
                         // @help: String#to_f
    return parseFloat(this.replace(/_/g, "")) || 0.0;
}

function String_to_i(radix) { // @arg Integer(= 10): radix, from 2 to 36
                              // @ret Number: to integer value
                              // @help: String#to_i
    var value = this.valueOf();

    if (radix === undefined) {
        // nop
    } else if (radix === 0) {
        switch (value.slice(0, 2)) {
        case "0b": radix = 2;  break;
        case "0o": radix = 8;  break;
        case "0d": radix = 10; break;
        case "0x": radix = 16;
        }
        if (radix) {
            value = value.slice(2);
        }
        if (!radix && value[0] === "0") {
            radix = 8;
            value = value.slice(1);
        }
    } else {
        value = value.replace(/^(0b|0o|0d|0x)/, "");
    }
    return parseInt(value, radix || 10) || 0;
}

function Stirng_tr(pattern,   // @arg TRString:
                   replace) { // @arg TRString:
                              // @ret String:
                              // @help: String#tr
    var pat = new CharSet(pattern).get(); // { chars, liner }
    var rep = new CharSet(replace).get();

    var result = [];
    var chars = this.valueOf().split(""); // ["a", "b", ...]

    for (var i = 0, iz = chars.length; i < iz; ++i) {
        var c = chars[i];

        if (pat.chars[c]) { // matched
            var pos = pat.liner.indexOf(c);
            var r = rep.liner[pos] || rep.liner[rep.liner.length - 1] || "";

            result.push(r);
        } else {
            result.push(c);
        }
    }
    return result.join("");
}

function Stirng_tr_s(pattern,   // @arg TRString:
                     replace) { // @arg TRString:
                                // @ret String:
                                // @help: String#tr_s
    var pat = new CharSet(pattern).get(); // { chars, liner }
    var rep = new CharSet(replace).get();

    var result = [];
    var buffer = [];
    var chars = this.valueOf().split(""); // ["a", "b", ...]

    for (var i = 0, iz = chars.length; i < iz; ++i) {
        var c = chars[i];

        if (pat.chars[c]) { // matched
            var pos = pat.liner.indexOf(c);
            var r = rep.liner[pos] || rep.liner[rep.liner.length - 1] || "";

            buffer.push(r);
        } else {
            if (buffer.length) {
                result.push( String_squeeze.call( buffer.join("") ) );
                buffer.length = 0;
            }
            result.push(c);
        }
    }
    if (buffer.length) {
        result.push( String_squeeze.call( buffer.join("") ) );
    }
    return result.join("");
}

function _createRegExp(source,  // @arg RegExp/String:
                       flags) { // @arg StringArray: ["g"]
    flags = flags || [];

    if (typeof source === "string") {
        return RegExp(source, flags.join(""));
    }
    if (source.global) {
        flags.push("g");
    }
    if (source.multiline) {
        flags.push("m");
    }
    if (source.ignoreCase) {
        flags.push("i");
    }
    return RegExp(source["source"], flags.join(""));
}

function CharSet(pattern) { // @arg String(= ""):
    this._chars = {};
    this._liner = [];

    this.set(pattern);
}
CharSet.prototype = {
    constructor:    CharSet,
    get:            CharSet_get,
    set:            CharSet_set,
    add:            CharSet_add,
    addRange:       CharSet_addRange,
    remove:         CharSet_remove,
    removeRange:    CharSet_removeRange
};

function CharSet_get() { // @ret Object:
    return { chars: this._chars, liner: this._liner.join("") };
}

function CharSet_set(patterns) { // @arg StringArray/String:
    function _set(that, pattern) {
        if (pattern) {
            if (pattern[0] === "^") {
                pattern = pattern.slice(1);

                if (/\w-\w/.test(pattern)) {
                    that.removeRange(pattern);
                } else {
                    that.remove(pattern);
                }
            } else {
                if (/\w-\w/.test(pattern)) {
                    that.addRange(pattern);
                } else {
                    that.add(pattern);
                }
            }
        }
    }

    var that = this;

    if (Array.isArray(patterns)) {
        patterns.forEach(function(value) {
            _set(that, value);
        });
    } else if (typeof patterns === "string") {
        _set(this, patterns);
    }
    return this;
}

function CharSet_add(chars) { // @arg String: "12345"
    var ary = chars.split("");

    for (var i = 0, iz = ary.length; i < iz; ++i) {
        var c = ary[i];

        this._chars[c] = 1;
        if (this._liner.indexOf(c) < 0) {
            this._liner.push(c);
        }
    }
    return this;
}

function CharSet_addRange(range) { // @arg String: "0-9"
    var first = range.charCodeAt(0);
    var last  = range.charCodeAt(2);

    for (; first <= last; ++first) {
        var c = String.fromCharCode(first);

        this._chars[c] = 1;
        if (this._liner.indexOf(c) < 0) {
            this._liner.push(c);
        }
    }
    return this;
}

function CharSet_remove(chars) { // @arg String: "12345"
    var ary = chars.split("");

    for (var i = 0, iz = ary.length; i < iz; ++i) {
        var c = ary[i];

        delete this._chars[c];

        var pos = this._liner.indexOf(c);
        if (pos >= 0) {
            this._liner.splice(pos, 1);
        }
    }
    return this;
}

function CharSet_removeRange(range) { // @arg String: "0-9"
    var first = range.charCodeAt(0);
    var last  = range.charCodeAt(2);

    for (; first <= last; ++first) {
        var c = String.fromCharCode(first);

        delete this._chars[c];

        var pos = this._liner.indexOf(c);
        if (pos >= 0) {
            this._liner.splice(pos, 1);
        }
    }
    return this;
}

// --- Number ----------------------------------------------
function Number_upto(max,  // @arg Integer:
                     fn) { // @arg Function: callback(num:Integer, index:Integer array:Array)
                           // @help: Number#upto
//{@assert
    _if(!Valid.type(max, "Integer"), "Number#upto(max)");
    _if(!Valid.type(fn, "Function"), "Number#upto(,fn)");
//}@assert

  //this.to(max).forEach(fn);
    _Number_to(this, max).forEach(fn);
}

function Number_step(limit, // @arg Integer:
                     step,  // @arg Integer:
                     fn) {  // @arg Function: callback(num:Integer, index:Integer, array:Array)
                            // @help: Number#step
//{@assert
    _if(!Valid.type(limit, "Integer"), "Number#step(limit)");
    _if(!Valid.type(step, "Integer"), "Number#step(,step)");
    _if(!Valid.type(fn, "Function"), "Number#step(,,fn)");
//}@assert

//  +this > limit ? this.to(limit, -step).each(fn)  // Ruby spec
//                : this.to(limit,  step).each(fn);

    if (+this > limit) {
        _Number_to(this, limit, -step).forEach(fn); // Ruby spec
    } else {
        _Number_to(this, limit,  step).forEach(fn);
    }
}

function _Number_to(that,
                    end,            // @arg Integer: end number
                    filterOrStep) { // @arg Function/Integer(= 1): filter function or step number
                                    // @ret Array: [begin, ... end]
                                    // @this: begin number
                                    // @help: Number#to
                                    // @desc: create number array
                                    // @throw: Error("BAD_ARG")
    var rv = [], begin = that | 0, reverse = begin > end,
        i  = (reverse ? end : begin) | 0,
        iz = (reverse ? begin : end) | 0,
        type = typeof filterOrStep,
        step = 1;

    if (type === "function") {
        for (; i <= iz; ++i) {
            if (filterOrStep(i)) {
                rv.push(i);
            }
        }
    } else {
        if (type === "number") {
            step = filterOrStep | 0;
        }
        if (step < 1 || end >= 0x7FFFFFFF) {
            throw new Error("invalid Number#to(,step)");
        }
        for (; i <= iz; i += step) {
            rv.push(i);
        }
    }
    return reverse ? rv.reverse() : rv;
}

function Number_to_s(radix) { // @arg Integer(= 10): 2 - 36
                              // @help: Number#to_s
//{@assert
    _if(!Valid.type(radix, "Integer/omit"), "Number#to_s(radix)");
//}@assert

    return this.toString(radix || 10);
}

//{@assert
function _if(value, msg) {
    if (value) {
        throw new Error(msg);
    }
}
//}@assert

// --- export ----------------------------------------------
//{@node
if (_inNode) {
    module["exports"] = Ruby;
}
//}@node
if (global["Ruby"]) {
    global["Ruby_"] = Ruby; // already exsists
} else {
    global["Ruby"]  = Ruby;
}

})((this || 0).self || global);

