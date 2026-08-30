require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const rupiah = require('./helpers/rupiah');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.set('layout extractScripts', true);

app.set('layout', './layouts/main');

app.locals.rupiah = rupiah;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
        secret: 'smartqueue123',
        resave: false,
        saveUninitialized: false
    })
);

app.use(flash());

app.use((req, res, next) => {

    res.locals.success = req.flash('success');

    res.locals.error = req.flash('error');

    next();

});

const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/', authRoutes);

app.use('/', dashboardRoutes);

app.use('/customers', customerRoutes);

app.use(
    '/orders',
    orderRoutes
);

app.get('/test', (req, res) => {
    res.send('TEST BERHASIL');
});

const PORT = process.env.PORT;

console.log('Sebelum listen');

app.listen(PORT, () => {

    console.log('Listen berhasil');

    console.log(`Server berjalan di port ${PORT}`);

});