const { Order, Customer } = require('../models');
const TelegramService =
require('../services/telegramService');

class OrderController {

    static async index(req, res) {

        try {

            const orders = await Order.findAll({

                include: [

                    {
                        model: Customer
                    }

                ],

                order: [

                    ['id', 'DESC']

                ]

            });

            res.render(

                'orders/index',

                {

                    orders

                }

            );

        } catch (error) {

            console.log(error);

        }

    }

    static async showCreate(req, res) {

    try {

        const customers = await Customer.findAll({

            order: [['name', 'ASC']]

        });

        res.render(

            'orders/create',

            {

                customers

            }

        );

    } catch (error) {

        console.log(error);

    }

}
static async store(req, res) {

    try {

        const {

            customer_id,

            weight,

            price_per_kg

        } = req.body;

        // pesanan terakhir
        const lastOrder = await Order.findOne({

            order: [

                ['id', 'DESC']

            ]

        });

        let queueCode = 'A0001';

        if (lastOrder) {

            const lastNumber =
                parseInt(

                    lastOrder.queue_code.substring(1)

                );

            queueCode =
                'A' +
                String(
                    lastNumber + 1
                ).padStart(4, '0');

        }

        const totalPrice =
            weight * price_per_kg;

        await Order.create({

            queue_code:
            'ANTRIAN-' + Date.now(),

            customer_id,

            queue_code: queueCode,

            weight,

            price_per_kg,

            total_price: totalPrice,

            status: 'Menunggu'

        });

        req.flash(

            'success',

            'Pesanan berhasil ditambahkan'

        );

        res.redirect('/orders');

    } catch (error) {

        console.log(error);

    }

}
static async showEdit(req, res) {

    try {

        const order = await Order.findByPk(

            req.params.id

        );

        const customers = await Customer.findAll({

            order: [['name', 'ASC']]

        });

        res.render(

            'orders/edit',

            {

                order,

                customers

            }

        );

    } catch (error) {

        console.log(error);

    }

}
static async update(req, res) {

    try {

        const {

            customer_id,

            weight,

            price_per_kg,

            status

        } = req.body;

        const order = await Order.findByPk(
    req.params.id,
    {
        include: [Customer]
    }
);

await order.update({
    customer_id,
    weight,
    price_per_kg,
    total_price: weight * price_per_kg,
    status
});

if (status === 'Selesai') {

    const message =
`🧺 Smart Queue Laundry

Nomor Antrian : ${order.queue_code}

Berat Cucian : ${weight} Kg

Total Pembayaran : Rp${(weight * price_per_kg).toLocaleString('id-ID')}

Cucian Anda telah selesai dan siap diambil.

Terima kasih telah menggunakan Smart Queue Laundry.`;

    await TelegramService.sendMessage(

        order.Customer.telegram_chat_id,

        message

    );

}

        req.flash(

            'success',

            'Pesanan berhasil diupdate'

        );

        res.redirect('/orders');

    } catch (error) {

        console.log(error);

    }

}
static async destroy(req, res) {

    try {

        await Order.destroy({

            where: {

                id: req.params.id

            }

        });

        req.flash(

            'success',

            'Pesanan berhasil dihapus'

        );

        res.redirect('/orders');

    } catch (error) {

        console.log(error);

    }

}

static async showEdit(req, res) {

    try {

        const order =
        await Order.findByPk(
            req.params.id
        );

        const customers =
        await Customer.findAll();

        res.render(
            'orders/edit',
            {
                order,
                customers
            }
        );

    } catch (error) {

        console.log(error);

    }

}

static async delete(req, res) {

    try {

        await Order.destroy({

            where: {

                id: req.params.id

            }

        });

        req.flash(

            'success',

            'Pesanan berhasil dihapus'

        );

        res.redirect('/orders');

    } catch (error) {

        console.log(error);

    }

}

}

module.exports = OrderController;