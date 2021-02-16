export class Hero {
    id: string = '';
    name: string = '';
    superPower: string = '';
    address: string = '';

    constructor(properties?: Hero) {
        if (properties) {
            this.id = properties.id || '';
            this.name = properties.name || '';
            this.superPower = properties.superPower || '';
            this.address = properties.address || '';
        }
    }
}
