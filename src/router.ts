import { Application } from "express";
import HomeController from "./controllers/HomeController";
import ProjetController from "./controllers/ProjetController";


export default function route(app: Application)
{
    /** Static pages **/
    app.get('/', (req, res) =>
    {
        HomeController.index(req, res);
    });

    app.get('/projet/:id',(req, res) => {
        ProjetController.projet(req, res);
    });

    /** Static pages **/
    app.get('/projet-all', (req, res) =>
    {
        HomeController.index(req, res)
    });

    app.get('/projet-create', (req, res) =>
    {
        ProjetController.showForm(req, res)
    });

    app.post('/projet-create', (req, res) =>
    {
        ProjetController.create(req, res)
    });

    app.get('/projet-read/:id', (req, res) =>
    {
        ProjetController.read(req, res)
    });

    app.get('/projet-update/:id', (req, res) =>
    {
        ProjetController.showFormUpdate(req, res)
    });

    app.post('/projet-update/:id', (req, res) =>
    {
        ProjetController.update(req, res)
    });

    app.get('/projet-delete/:id', (req, res) =>
    {
        ProjetController.delete(req, res)
    });
}