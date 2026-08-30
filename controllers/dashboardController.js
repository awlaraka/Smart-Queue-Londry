const { Order } = require('../models');
const { Op, fn, col } = require('sequelize');

class DashboardController {

    static async index(req, res) {

        try {

            const totalOrders = await Order.count();

            const finishedOrders = await Order.count({
                where: {
                    status: 'Selesai'
                }
            });

            const processingOrders = await Order.count({
                where: {
                    status: {
                        [Op.notIn]: [
                            'Selesai',
                            'Sudah Diambil'
                        ]
                    }
                }
            });

            const incomeToday =
                await Order.sum('total_price') || 0;

            // data sementara untuk grafik
            const orderData = [5, 8, 3, 10, 7, 6, 4];

            const incomeData = [
                35000,
                45000,
                30000,
                70000,
                60000,
                50000,
                25000
            ];

const statusChart = await Order.findAll({

    attributes: [

        'status',

        [fn('COUNT', col('id')), 'jumlah']

    ],

    group: ['status']

});

const statusLabels = statusChart.map(

    item => item.status

);

const statusData = statusChart.map(

    item => item.dataValues.jumlah

);
            res.render('dashboard/index', {

                totalOrders,

                finishedOrders,

                processingOrders,

                incomeToday,

                orderData,

                incomeData,

                statusLabels,

                statusData

            });

        } catch (error) {

            console.log(error);

        }

    }

}

module.exports = DashboardController;