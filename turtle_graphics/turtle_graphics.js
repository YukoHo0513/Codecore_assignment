class Turtle {
    constructor(x, y) {
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
    forward(numOfStep) {

        if (this.direction === 360 || this.direction === 0) { // facing east
            for (let i = 0; i < numOfStep; i++) {
                this.path = [];
                this.x += 1;
                this.path.push(this.x);
                this.path.push(this.y);
                this.bigPath.push(this.path);
            }

        } else if (this.direction === 90) { // facing south
            for (let i = 0; i < numOfStep; i++) {
                this.path = [];
                this.y += 1;
                this.path.push(this.x);
                this.path.push(this.y);
                this.bigPath.push(this.path);
            }

        } else if (this.direction === 180) { // facing west
            for (let i = 0; i < numOfStep; i++) {
                this.path = [];
                this.x -= 1;
                this.path.push(this.x);
                this.path.push(this.y);
                this.bigPath.push(this.path);
            }
        } else if (this.direction === 270) { // facing north
            for (let i = 0; i < numOfStep; i++) {
                this.path = [];
                this.y -= 1;
                this.path.push(this.x);
                this.path.push(this.y);
                this.bigPath.push(this.path);
            }
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
        return this.bigPath;
    }
    print() {


        this.maxX = this.bigPath[0][0];
        for (let i = 0; i < this.bigPath.length; i++) {

            if (this.maxX < this.bigPath[i][0]) {
                this.maxX = this.bigPath[i][0]
            }
        }
        this.minX = this.bigPath[0][0];
        for (let i = 0; i < this.bigPath.length; i++) {
            if (this.minX > this.bigPath[i][0]) {
                this.minX = this.bigPath[i][0]
            }
        }
        if (this.minX < 0) {
            this.minX = Math.abs(this.minX);
            this.maxX += this.minX;
            for (let i = 0; i < this.bigPath.length; i++) {
                this.bigPath[i][0] += this.minX
            }
        }

        this.maxY = this.bigPath[0][1];
        for (let i = 0; i < this.bigPath.length; i++) {

            if (this.maxY < this.bigPath[i][1]) {
                this.maxY = this.bigPath[i][1]
            }
        }

        this.minY = this.bigPath[0][1];
        for (let i = 0; i < this.bigPath.length; i++) {
            if (this.minY > this.bigPath[i][1]) {
                this.minY = this.bigPath[i][1]
            }
        }

        if (this.minY < 0) {
            this.minY = Math.abs(this.minY)
            this.maxY += this.minY;
            for (let i = 0; i < this.bigPath.length; i++) {
                this.bigPath[i][1] += this.minY;
            }
        }

        this.result = [];
        for (let i = 0; i <= this.maxY; i++) {
            this.result.push(Array.from({ length: this.maxX + 1 }).fill('□'))

        }

        for (let i = 0; i < this.bigPath.length; i++) {
            this.result[this.bigPath[i][1]][this.bigPath[i][0]] = '■'
        }

        for (let row of this.result) {
            console.log(row)
        }

    }
}
const Yuko = new Turtle()
Yuko.forward(3);
Yuko.right();
Yuko.forward(1);
Yuko.left();
Yuko.left();
Yuko.forward(2);
Yuko.left();
Yuko.forward(4);
Yuko.print();
