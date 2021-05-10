export class Person {
    constructor(protected name: string, private age: number) {
    }

    public welcome(): string {
        return `Hello ${this.name}`;
    }
}

export class Customerr extends Person {
    constructor(name: string, age: number, private advisor: string) {
        super(name, age);
    }

    public welcome(): string {
        return `Good morning ${this.name}`;
    }
}