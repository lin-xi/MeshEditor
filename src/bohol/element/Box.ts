import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from "three";
import { Element } from "./Element";

class Box extends Element {
    width: number;
    height: number;
    length: number;

    constructor(width = 10, height = 10, length = 10) {
        super();

        this.width = width;
        this.height = height;
        this.length = length;

        const geometry = new BoxBufferGeometry(width, height, length);
        const material = new MeshBasicMaterial({
            color: 0x4e6ef2,
        });
        this.mesh = new Mesh(geometry, material);
    }

    /**
     * 元素选中
     */
    public selected(): void {
        //do nothing
    }

    public update() {
        //do nothing
    }
}

export { Box };
