const axios = require('axios');

class TelegramService {

    static async sendMessage(

        chatId,

        message

    ) {

        try {

            await axios.post(

                `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,

                {

                    chat_id: chatId,

                    text: message

                }

            );

        } catch (error) {

            console.log(error.message);

        }

    }

}

module.exports = TelegramService;