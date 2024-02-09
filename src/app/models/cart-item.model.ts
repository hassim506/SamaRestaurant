//Creation d'un model CartItem qui nous servira d'interface
export interface CartItem{
    id: number;
    name: string;
    price:number;
    quantity:number;
    image: string | undefined;
}