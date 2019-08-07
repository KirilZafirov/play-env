export interface IConfiguration {
    api: string;
}

export class EnvConfig implements IConfiguration {
    api: string;

    constructor(config : IConfiguration) {
        Object.assign(this , config);
    }

}