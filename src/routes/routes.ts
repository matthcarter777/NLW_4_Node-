import { Router } from 'express';

import UserController from '../controllers/UserController';
import SurveysController from '../controllers/SurveysController';
import SendMailController from '../controllers/SendMailController';
import AnsewareController from '../controllers/AnswerController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendEmailController = new SendMailController();
const ansWerController  = new AnsewareController();

/* Users */
router.post('/users', userController.create);

/* Surveys */

router.get('/surveys', surveysController.index);
router.post('/surveys', surveysController.create);

/* Send Email */

router.post('/sendMail', sendEmailController.execute);

/* ansewere */

router.get('/answers/:value', ansWerController.execute);


export default router;