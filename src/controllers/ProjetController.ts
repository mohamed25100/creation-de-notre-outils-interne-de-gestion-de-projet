import { Request, Response } from "express-serve-static-core";

export default class ProjetController 
{
    static projet(req: Request, res: Response): void
    {
        const db = req.app.locals.db;
        let id = req.params.id;
        const query = db.prepare('SELECT title_projet FROM PROJET WHERE id = ?').all(id);
        const content = db.prepare('SELECT content_projet FROM PROJET WHERE id = ?').all(id);
        const small = db.prepare('SELECT * FROM PROJET').all();
        const smart = db.prepare('SELECT title_projet FROM PROJET WHERE id = ?').all(id);

        res.render('pages/projet', {
            title: 'Gestion de projets',
            title_projet: query,
            content_projet: content,
            small: small,
            smart: smart,
        })
    }
    
    /**
     * Affiche le formulaire de creation d'article
     * @param req 
     * @param res 
     */
     static showForm(req: Request, res: Response): void
     {
         res.render('pages/projet-create');
     }
 
     /**
       * Recupere le formulaire et insere l'article en db
       * @param req 
       * @param res 
       */
      static create(req: Request, res: Response): void
      {
         const db = req.app.locals.db;
  
         db.prepare('INSERT INTO PROJET ("title_projet", "content_projet") VALUES (?, ?)').run(req.body.title, req.body.content);
  
         res.redirect('/');
     }

     /**
     * Affiche 1 article
     * @param req 
     * @param res 
     */
    static read(req: Request, res: Response): void
    {
        const db = req.app.locals.db;

        const projet = db.prepare('SELECT * FROM PROJET WHERE id = ?').get(req.params.id);

        res.render('pages/projet', {
            projet: projet,
        });
    }
      /**
       * Affiche le formulaire pour modifier un article
       * @param req 
       * @param res 
       */
     static showFormUpdate(req: Request, res: Response)
     {
         const db = req.app.locals.db;
  
         const projet = db.prepare('SELECT * FROM PROJET WHERE id = ?').get(req.params.id);
         res.render('pages/projet-update', {
             projet: projet
         });
      }
  
      /**
       * Recupere le formulaire de l'article modifié et l'ajoute a la database
       * @param req 
       * @param res 
       */
     static update(req: Request, res: Response)
     {
         const db = req.app.locals.db;
  
         db.prepare('UPDATE PROJET SET title_projet = ?, content_projet = ? WHERE id = ?').run(req.body.title, req.body.content, req.params.id);
  
         ProjetController.projet(req, res);
     }
  
      /**
       * Supprime un article
       * @param req 
       * @param res 
       */
     static delete(req: Request, res: Response)
     {
         const db = req.app.locals.db;
  
         db.prepare('DELETE FROM PROJET WHERE id = ?').run(req.params.id);
  
         res.redirect('/');
     }
}