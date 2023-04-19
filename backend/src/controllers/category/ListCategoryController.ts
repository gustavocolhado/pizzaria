import { Request, Response } from 'express';
import { ListCateogryService } from '../../services/category/ListCategoryService';

class ListCategoryController {
    async handle(req: Request, res: Response) {
        const listCategoryService = new ListCateogryService();

        const category = await listCategoryService.execute();

        return res.json(category);
    }
}

export { ListCategoryController }