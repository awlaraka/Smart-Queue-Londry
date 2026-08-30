const { Customer } = require('../models');

class CustomerController {

    static async index(req, res) {

        try {

            const customers = await Customer.findAll({
                order: [['id', 'ASC']]
            });

            res.render('customers/index', {
                customers
            });

        } catch (error) {

            console.log(error);

        }

    }

    static showCreate(req, res) {

        res.render('customers/create');

    }

    static async store(req, res) {

        try {

            const {
                name,
                phone,
                telegram_username,
                telegram_chat_id,
                address
            } = req.body;

           await Customer.create({

                name,
                phone,
                telegram_username,
                telegram_chat_id,
                address

            });

            req.flash(
            'success',
            'Pelanggan berhasil ditambahkan'
            );

            res.redirect('/customers');

        } catch (error) {

            console.log(error);

        }

    }

    static async showEdit(req, res) {

    try {

        const customer = await Customer.findByPk(
            req.params.id
        );

        res.render('customers/edit', {
            customer
        });

    } catch (error) {

        console.log(error);

    }

}


static async update(req, res) {

    try {

        const {
            name,
            phone,
            telegram_username,
            telegram_chat_id,
            address
        } = req.body;

        await Customer.update(

            {

                name,

                phone,

                telegram_username,

                telegram_chat_id,

                address

            },

            {

                where: {

                    id: req.params.id

                }

            }

        );

        req.flash(
        'success',
        'Data pelanggan berhasil diupdate'
        );

        res.redirect('/customers');

    } catch (error) {

        console.log(error);

    }

}

static async destroy(req, res) {

    try {

        await Customer.destroy({

            where: {

                id: req.params.id

            }

        });

        rreq.flash(
        'success',
        'Data pelanggan berhasil dihapus'
        );

        res.redirect('/customers');

    } catch (error) {

        console.log(error);

    }

}

}

module.exports = CustomerController;