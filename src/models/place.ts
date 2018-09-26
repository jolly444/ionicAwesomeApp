import { Location } from "./location";

export class Page{

    constructor(public title:string,
                public description:string,
                public location:Location,
                public imagePath:string
        ){}
}