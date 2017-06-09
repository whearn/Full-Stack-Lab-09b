// let rectangleBtn: HTMLElement = document.getElementById('rectangle-btn');
// let squareBtn: HTMLElement = document.getElementById('square-btn');
// let circleBtn: HTMLElement = document.getElementById('circle-btn');
// let triangleBtn: HTMLElement = document.getElementById('triangle-btn');

// let rectangleWidthInput: HTMLElement = document.getElementById('rectangle-width');
// let rectangleHeightInput: HTMLElement = document.getElementById('rectangle-height');
// let squareLengthInput: HTMLElement = document.getElementById('square-length');
// let circleRadiusInput: HTMLElement = document.getElementById('circle-radius');
// let triangleHeightInput: HTMLElement = document.getElementById('triangle-height');

// let sidePanelName: HTMLElement = document.getElementById('sidepanel-name');
// let sidePanelWidth: HTMLElement = document.getElementById('sidepanel-width');
// let sidePanelHeight: HTMLElement = document.getElementById('sidepanel-height');
// let sidePanelRadius: HTMLElement = document.getElementById('sidepanel-radius');
// let sidePanelArea: HTMLElement = document.getElementById('sidepanel-area');
// let sidePanelPerimeter: HTMLElement = document.getElementById('sidepanel-perimeter');

// class Shape {
//     shapeName: string;
//     x: number;
//     y: number;
//     div: HTMLDivElement;
//     width: number;
//     height: number;
//     radius: number;
//     area: number;
//     perimeter: number;

//     constructor(shapeName: string) {
//         this.shapeName = shapeName;
//         this.x = Math.floor(Math.random() * 550);
//         this.y = Math.floor(Math.random() * 550);
//         this.div = document.createElement('div');
//         this.div.className = `shape ${shapeName}`;
//         this.div.style.top = `${this.y}px`;
//         this.div.style.left = `${this.x}px`;
//         this.div.addEventListener('click', () => {
//             this.describe();
//         });
//         let canvas: HTMLElement = document.getElementById('shape-canvas');
//         canvas.appendChild(this.div);
//     }

//     describe() {
//         sidePanelName.innerText = `Shape Name: ${this.shapeName}`;
//         sidePanelWidth.innerText = `Width: ${this.width}`;
//         sidePanelHeight.innerText = `Height: ${this.height}`;
//         sidePanelRadius.innerText = `Radius: ${this.radius}`;
//         sidePanelArea.innerText = `Area: ${this.area}`;
//         sidePanelPerimeter.innerText = `Perimeter: ${this.perimeter}`;
//     }
// }

// class Rectangle extends Shape {
//     width: number;
//     height: number;
//     area: number;
//     perimeter: number;
//     div: HTMLDivElement;

//     constructor(width: number, height: number) {
//         super('rectangle');
//         this.width = width;
//         this.height = height;
//         this.area = this.area();
//         this.perimeter = this.perimeter();
//         this.div.style.width = `${width}px`;
//         this.div.style.height = `${height}px`;
//     }

//     area(): number {
//         return this.width * this.height;
//     }

//     perimeter(): number {
//         return 2 * (Number(this.width) + Number(this.height));
//     }
// }

// class Square extends Shape {
//     width: number;
//     height: number;
//     area: number;
//     perimeter: number;
//     div: HTMLDivElement;

//     constructor(length: number) {
//         super('square');
//         this.width = length;
//         this.height = length;
//         this.area = this.area();
//         this.perimeter = this.perimeter();
//         this.div.style.width = `${length}px`;
//         this.div.style.height = `${length}px`;
//     }

//     area(): number {
//         return this.width * this.height;
//     }

//     perimeter(): number {
//         return 4 * this.width;
//     }
// }

// class Circle extends Shape {
//     radius: number;
//     width: number;
//     length: number;
//     area: number;
//     perimeter: number;
//     div: HTMLDivElement;

//     constructor(radius: number) {
//         super('circle');
//         this.radius = radius;
//         this.width = this.diameter();
//         this.height = this.diameter();
//         this.area = this.area();
//         this.perimeter = this.perimeter();
//         this.div.style.width = `${this.diameter()}px`;
//         this.div.style.height = `${this.diameter()}px`;
//     }

//     diameter(): number {
//         return 2 * this.radius;
//     }

//     area(): number {
//         return Math.PI * Math.pow(this.radius, 2);
//     }

//     perimeter(): number {
//         return 2 * Math.PI * this.radius;
//     }
// }

// class Triangle extends Shape {
//     width: number;
//     height: number;
//     area: number;
//     perimeter: number;
//     div: HTMLDivElement;

//     constructor(height: number) {
//         super('triangle');
//         this.width = height;
//         this.height = height;
//         this.area = this.area();
//         this.perimeter = this.perimeter();
//         this.div.style.borderBottom = `${height}px solid yellow`;
//         this.div.style.borderRight = `${height}px solid transparent`;
//     }

//     area(): number {
//         return 0.5 * this.width * this.height;
//     }

//     perimeter(): number {
//         return 2 * this.height + Number(Math.sqrt(2 * Math.pow(this.height, 2)));
//     }
// }

// rectangleBtn.addEventListener('click', () => {
//     let rec = new Rectangle(rectangleWidthInput.value, rectangleHeightInput.value);
// });

// squareBtn.addEventListener('click', () => {
//     let sq = new Square(squareLengthInput.value);
// });

// circleBtn.addEventListener('click', () => {
//     let crc = new Circle(circleRadiusInput.value);
// });

// triangleBtn.addEventListener('click', () => {
//     let tri = new Triangle(triangleHeightInput.value);
// });

let rectangleBtn: HTMLElement = document.getElementById('rectangle-btn');
let squareBtn: HTMLElement = document.getElementById('square-btn');
let circleBtn: HTMLElement = document.getElementById('circle-btn');
let triangleBtn: HTMLElement = document.getElementById('triangle-btn');

let rectangleWidthInput: HTMLElement = document.getElementById('rectangle-width');
let rectangleHeightInput: HTMLElement = document.getElementById('rectangle-height');
let squareLengthInput: HTMLElement = document.getElementById('square-length');
let circleRadiusInput: HTMLElement = document.getElementById('circle-radius');
let triangleHeightInput: HTMLElement = document.getElementById('triangle-height');

let sidePanelName: HTMLElement = document.getElementById('sidepanel-name');
let sidePanelWidth: HTMLElement = document.getElementById('sidepanel-width');
let sidePanelHeight: HTMLElement = document.getElementById('sidepanel-height');
let sidePanelRadius: HTMLElement = document.getElementById('sidepanel-radius');
let sidePanelArea: HTMLElement = document.getElementById('sidepanel-area');
let sidePanelPerimeter: HTMLElement = document.getElementById('sidepanel-perimeter');

class Shape {
    shapeName: string;
    x: number;
    y: number;
    div: HTMLDivElement;
    width: number;
    height: number;
    radius: number;
    area: number;
    perimeter: number;

    constructor(shapeName: string, width: number, height: number) {
        this.shapeName = shapeName;
        this.width = width;
        this.height = height;
        this.x = Math.floor(Math.random() * 550);
        this.y = Math.floor(Math.random() * 550);
        this.div = document.createElement('div');
        this.div.className = `shape ${shapeName}`;
        this.div.style.top = `${this.y}px`;
        this.div.style.left = `${this.x}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
        let canvas: HTMLElement = document.getElementById('shape-canvas');
        canvas.appendChild(this.div);
    }

    describe() {
        sidePanelName.innerText = `Shape Name: ${this.shapeName}`;
        sidePanelWidth.innerText = `Width: ${this.width}`;
        sidePanelHeight.innerText = `Height: ${this.height}`;
        sidePanelRadius.innerText = `Radius: ${this.radius}`;
        sidePanelArea.innerText = `Area: ${this.area}`;
        sidePanelPerimeter.innerText = `Perimeter: ${this.perimeter}`;
    }
}

class Rectangle extends Shape {
    constructor(width: number, height: number) {
        super('rectangle', width, height);
        this.area = this.area();
        this.perimeter = this.perimeter();
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (Number(this.width) + Number(this.height));
    }
}

class Square extends Shape {
    constructor(length: number) {
        super('square', length, length);
        this.area = this.area();
        this.perimeter = this.perimeter();
        this.div.style.width = `${length}px`;
        this.div.style.height = `${length}px`;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 4 * this.width;
    }
}

class Circle extends Shape {
    constructor(radius: number) {
        super('circle', 2 * radius, 2 * radius);
        this.radius = radius;
        this.width = this.diameter();
        this.height = this.diameter();
        this.area = this.area();
        this.perimeter = this.perimeter();
        this.div.style.width = `${this.diameter()}px`;
        this.div.style.height = `${this.diameter()}px`;
    }

    diameter(): number {
        return 2 * this.radius;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {
    constructor(height: number) {
        super('triangle', height, height);
        this.area = this.area();
        this.perimeter = this.perimeter();
        this.div.style.borderBottom = `${height}px solid yellow`;
        this.div.style.borderRight = `${height}px solid transparent`;
    }

    area(): number {
        return 0.5 * this.width * this.height;
    }

    perimeter(): number {
        return 2 * this.height + Number(Math.sqrt(2 * Math.pow(this.height, 2)));
    }
}

rectangleBtn.addEventListener('click', () => {
    let rec = new Rectangle(rectangleWidthInput.value, rectangleHeightInput.value);
});

squareBtn.addEventListener('click', () => {
    let sq = new Square(squareLengthInput.value);
});

circleBtn.addEventListener('click', () => {
    let crc = new Circle(circleRadiusInput.value);
});

triangleBtn.addEventListener('click', () => {
    let tri = new Triangle(triangleHeightInput.value);
});