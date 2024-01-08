"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.post('/', user_1.newUser);
router.post('/login', user_1.loginUser);
router.put('/:id/role', user_1.updateUserRole);
exports.default = router;
