class Rectangle {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	area() {
		this.a * this.b;
	}
}

class Square extends Rectangle {
	constructor(a) {
		super(a, a);
	}
}
