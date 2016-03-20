function PointEx(x, y, z) {
    Point.call(this, x, y);

    this.z = z;
}

PointEx.prototype = Object.create(Point.prototype);
