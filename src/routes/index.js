const express = require('express')
const router = express.Router()

const CouponsRoutes = require('./Coupon')
const UserRoutes = require('./User')

router.use('/coupons',CouponsRoutes)
router.use('/user',UserRoutes)

module.exports=router