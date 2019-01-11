import express from 'express';
import IncidentController from '../controllers/incidentController';
import Validate from '../middlewares/validate';

const router = express.Router();

router.get('/red-flags', IncidentController.getAllRedFlags);

router.get('/red-flags/:id', Validate.validateId,
  IncidentController.getRedFlag);

router.post('/red-flags', Validate.validateLocationUpdate,
  Validate.validatePost, IncidentController.postRedFlag);

router.patch('/red-flags/:id/location', Validate.validateId,
  Validate.validateLocationUpdate, IncidentController.updateLocation);

export default router;
