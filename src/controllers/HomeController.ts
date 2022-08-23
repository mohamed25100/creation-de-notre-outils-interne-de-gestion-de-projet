import { Request, Response } from "express-serve-static-core";
import { idText } from "typescript";

export default class HomeController
{
    /**
     * Affiche la liste des articles
     * @param req 
     * @param res 
     */
    static index(req: Request, res: Response): void
    {
        const db = req.app.locals.db;
        const query = db.prepare('SELECT title_projet,id FROM PROJET WHERE id <= 4').all();
        const query2 = db.prepare('SELECT title_projet,id FROM PROJET WHERE id > 4').all();
        const articles = db.prepare('SELECT * FROM PROJET').all();
        const big = db.prepare('SELECT * FROM PROJET').all();
        res.render('pages/index', {
            title: 'Gestion de projets',
            comp: query,
            comp2: query2,
            articles: articles,
            big: big,
            
        });//console.log(big);
    }
}