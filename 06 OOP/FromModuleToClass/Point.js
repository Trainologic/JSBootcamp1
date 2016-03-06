function Point(inX, inY) {
    var x = inX;
    var y = inY;

    function dump() {
        console.log(x + ", " + y);
    }

    function equals(pt) {
        return x==pt.getX() && y==pt.getY();
    }

    function getX() {
        return x;
    }

    function getY() {
        return y;
    }

    return {
        dump: dump,
        getX: getX,
        getY: getY,
        equals: equals,
    };
}

var pt1 = Point(5, 10);
var pt2 = Point(5, 10);

pt1.x = 123;

pt1.dump();
pt2.dump();

console.log(pt1.x);

console.log(pt1 == pt2);

console.log(pt1.equals(pt2));

console.log(pt1.dump == pt2.dump);