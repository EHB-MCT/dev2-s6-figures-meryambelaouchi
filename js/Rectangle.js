"use strict";

import Figure from './Figure.js';

export default class Rectangle extends Figure {
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
    get HTMLString() {
        return `<div class="result">
        <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
        <div class="infoBox">
          <h3>Circle</h3>
          <dl>
            <dt>Radius</dt>
            <dd>RADIUS px</dd>
      
            <dt>Diameter</dt>
            <dd>DIAMETER px</dd>
      
            <dt>Area</dt>
            <dd>AREA px</dd>
      
            <dt>Circumference</dt>
            <dd>CIRCUMFERENCE px</dd>
          </dl>
        </div>
      </div>`;
    }
}