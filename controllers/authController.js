const bcrypt = require('bcrypt');
const { User } = require('../models');

class AuthController {

    static showLogin(req, res) {

        res.render('auth/login', {
            layout: false
        });

    }

    static async login(req, res) {

        try {

            const { username, password } = req.body;

            const user = await User.findOne({
                where: {
                    username
                }
            });

            if (!user) {

                req.flash('error', 'Username tidak ditemukan');

                return res.redirect('/login');

            }

            console.log('Password input:', password);
            console.log('Hash database:', user.password);

            const match = await bcrypt.compare(
                password,
                user.password
            );

            console.log('Hasil compare:', match);   

            if (!match) {

                req.flash('error', 'Password salah');

                return res.redirect('/login');

            }

            req.session.user = {
                id: user.id,
                username: user.username
            };

            req.flash('success', 'Login berhasil');

            res.redirect('/dashboard');

        } catch (error) {

            console.log(error);

        }

    }

    static logout(req, res) {

        req.session.destroy(() => {

            res.redirect('/login');

        });

    }

}

module.exports = AuthController;