class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.path = [[x, y]];
        if (x === undefined) {
            this.x = 0;
        }
        if (y === undefined) {
            this.y = 0;
        }
        this.direction = 90;
    }
    forward(numOfSteps) {
        let newArr = [];

        if (this.direction === 90) {   // This is facing east
            this.x += numOfSteps
            newArr.push(this.x)
            newArr.push(this.y)
            this.path.push(newArr);
        } 
        if (this.direction === 180) {  // This is facing south
            newArr.push(this.x)
            this.y += numOfSteps
            newArr.push(this.y)
            this.path.push(newArr);

        }
        if (this.direction === 270) {  // This is facing west
            this.x -= numOfSteps
            newArr.push(this.x)
            newArr.push(this.y)
            this.path.push(newArr);

        }
        if (this.direction === 360 || this.direction === 0) {  // This is facing north
            newArr.push(this.x)
            this.y -= numOfSteps;
            newArr.push(this.y)
            this.path.push(newArr);

        }

    }
    right() {
        if (this.direction === 360) {
            this.direction = 0
        } else {
            this.direction += 90
        }
    }
    left() {
        if (this.direction === 0) {
            this.direction = 360
        } else {
            this.direction -= 90
        }
    }
    allPoints() {

    }
    print() {

    }
}

const masterOogway = new Turtle(0, 0)
console.log(masterOogway.forward(2)); // masterOogway.path
console.log(masterOogway.x); 
console.log(masterOogway.y);
console.log(masterOogway.path);
console.log(masterOogway.right());
console.log(masterOogway.direction);
console.log(masterOogway.forward(3));
console.log(masterOogway.path);
console.log(masterOogway.right());
console.log(masterOogway.direction);
console.log(masterOogway.forward(1));
console.log(masterOogway.path);
console.log(masterOogway.forward(1));
console.log(masterOogway.path);
console.log(masterOogway.right());
console.log(masterOogway.direction);
console.log(masterOogway.forward(1));
console.log(masterOogway.path);

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
