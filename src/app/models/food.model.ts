
//Creation d'un model Food qui nous servira d'interface 
export interface Food{
    id: number;
    title: string;
    price: number;
    image?: string;
    description: string;
}