class Turtle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.direction = 0;

        if (this.x === undefined) {
            this.x = 0;
        } 
        if (this.y === undefined) {
            this.y = 0;
        }
        this.bigPath = [[this.x, this.y]];
    }
    forward(numOfStep){
        this.path = [];

        if (this.direction === 360 || this.direction === 0) { // facing east
            for (let i = 0; i < numOfStep; i++) {
                this.x += numOfStep;
                this.path.push(this.x);
                this.path.push(this.y);
                this.bigPath.push(this.path);
            }
            this.x += numOfStep;
            this.path.push(this.x);
            this.path.push(this.y);
            this.bigPath.push(this.path);
        } else if (this.direction === 90) { // facing south
            this.y += numOfStep;
            this.path.push(this.x);
            this.path.push(this.y);
            this.bigPath.push(this.path);
        } else if (this.direction === 180) { // facing west
            this.x -= numOfStep;
            this.path.push(this.x);
            this.path.push(this.y);
            this.bigPath.push(this.path);
        } else if (this.direction === 270) { // facing north
            this.y -= numOfStep;
            this.path.push(this.x);
            this.path.push(this.y);
            this.bigPath.push(this.path);
        }

        return this.bigPath;
    }
    right() {
        if (this.direction >= 360) {
            this.direction = 0;
        }
        this.direction += 90;

    }
    left() {
        if (this.direction <= 0) {
            this.direction = 360;
        }
        this.direction -= 90;
    }
    allPoints() {
        this.bigPath;
    }
    print() {
        for (let i = 0; i < 5; i++) {
            this.row1 = ["□", "□", "□", "□", "□"];
            
        }
        return this.row1;
    }
}
const Yuko = new Turtle()
console.log(Yuko);
// console.log(Yuko.forward(3));
Yuko.forward(3);
console.log(Yuko.bigPath);
Yuko.forward(2);
console.log(Yuko.bigPath);
Yuko.print();
console.log(this.row1);


// x is yoko
// y is tate

// Remember that first position starts from East which is 90 degree.
// 1) Right() => 180 south
// 2) Right() => 270 west
// 3) Right() => 360 north
// 4) Right() => 90 east

// 1) Left() => 360 north
// 2) Left() => 270 west
// 3) Left() => 180 south
// 4) Left() => 90 east

// 0 or 360 faces to North
