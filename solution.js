//[[1,2,[3]],4]

var grandchild = [3];
var child = [1, 2, grandchild];
var parent = [child, 4];

function getFlatArray(_array) {
    var flatarr = [];
    _array.forEach(function(element) {
        //console.log("element type : " + Array.isArray(element)  );
        if (Array.isArray(element)) {
            var child_flatarray = getFlatArray(element);
            child_flatarray.forEach(function(child_element) {
                flatarr[flatarr.length] = child_element;
            }, this);
        } else {
            flatarr[flatarr.length] = element;
        }
    }, this);

    return flatarr;
}

console.log(getFlatArray(parent));