import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController{
    async handle(req: Request, res: Response){

        const { name, price, description, category_id } = req.body;

        const createProduteService = new CreateProductService();

        if(!req.file){
            throw new Error("Erro ao upar imagem")
        } else {

            const {originalname, filename: banner} = req.file;

            const product = await createProduteService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            return res.json(product);
        }

        
    }
}

export { CreateProductController }
