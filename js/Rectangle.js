"use strict";

import Figure from './Figure.js';

export default class Rectangle {
    constructor(name, width, heigth) {
        super(name);
        this.width = width;
        this.heigth = heigth;
    }
    get area() {
        return this.width * this.height;
    }
    get circumference() {
        return (this.width + this.height) * 2;
    }
}