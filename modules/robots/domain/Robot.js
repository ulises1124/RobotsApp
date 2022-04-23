export class Robot {
    constructor(props) {
        Object.assign(this, props);
    }

    toProperties() {
        return {
            id: this.id,
            name: this.name,
            model: this.model,
            health: this.health,
            status: this.status
        };
    }
}