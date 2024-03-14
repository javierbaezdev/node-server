const { Router } = require('express');

const playerRoutes = require('./modules/player/routes');

const router = Router();

router.get('/', (_, res) => res.send({ message: '' }));

router.use('/player', playerRoutes);

router.use('*', (_, res) =>
  res.status(400).send({ type: 'BAD_REQUEST', message: 'Method not exist' })
);

module.exports = router;
