"use strict";

import Figure from './Figure.js';

export default class Circle extends Figure {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    get circumference() {
        return Math.PI * 2 * this.radius;
    }
}