const express = require('express')
const router = express.Router()

const { saveMedicine, getAllMedicines }
    = require('../controller/medicine-controller')

router.get('/', getAllMedicines);
router.post('/', saveMedicine);

module.exports = router;