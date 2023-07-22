function parseCount(numOfString) {
    let result = Number.parseFloat(numOfString);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    } else {
        return result;
    };
};

function validateCount(numOfString) {
    try {
        let result = parseCount(numOfString);
        return result;
    } catch (error) {
        return error;
    };
};

class Triangle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        };
    };
    get perimeter() {
        let perim = this.sideA + this.sideB + this.sideC;
        return perim;
    };
    get area() {
        let p = (this.sideA + this.sideB + this.sideC) / 2;
        let area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        let resultArea = + area.toFixed(3)
        return resultArea;
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        let obj = {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
        };
        return obj;
    }
}