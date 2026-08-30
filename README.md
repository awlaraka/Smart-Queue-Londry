# Smart Queue Laundry

**Smart Queue Laundry** adalah aplikasi berbasis web yang dikembangkan untuk membantu pengelolaan antrean dan proses produksi pada usaha laundry. Sistem ini memungkinkan admin untuk mencatat pesanan, memantau status pengerjaan laundry, mengelola data pelanggan, serta memberikan informasi status pesanan secara lebih terstruktur.

Project ini dikembangkan sebagai **Tugas Akhir** dengan menggunakan teknologi **Node.js, Express.js, Sequelize ORM, MySQL, EJS, dan Bootstrap 5**.

---

## 📌 Fitur Utama

* 🔐 **Autentikasi Admin**

  * Login admin
  * Password terenkripsi menggunakan bcrypt

* 📊 **Dashboard**

  * Menampilkan jumlah pesanan
  * Informasi status pesanan
  * Ringkasan aktivitas laundry

* 🧾 **Manajemen Pesanan**

  * Menambahkan pesanan laundry
  * Mengubah data pesanan
  * Menghapus pesanan
  * Melihat detail pesanan

* 🔄 **Status Proses Laundry**

  Sistem menyediakan beberapa tahapan status pengerjaan:

  1. Menunggu
  2. Sedang Dicuci
  3. Sedang Dikeringkan
  4. Sedang Disetrika
  5. Selesai
  6. Sudah Diambil

* 📱 **Notifikasi Telegram**

  * Integrasi Telegram Bot API
  * Memberikan informasi kepada pelanggan mengenai perkembangan status pesanan

* 📋 **DataTables**

  * Pencarian data
  * Pengurutan data
  * Pagination

* 📈 **Visualisasi Data**

  * Menampilkan data dan statistik menggunakan Chart.js

* 📱 **Responsive Interface**

  * Menggunakan Bootstrap 5 sehingga dapat digunakan pada berbagai ukuran layar

---

## 🛠️ Teknologi yang Digunakan

| Teknologi        | Keterangan                       |
| ---------------- | -------------------------------- |
| Node.js          | Runtime JavaScript               |
| Express.js       | Framework backend                |
| Sequelize        | ORM untuk database               |
| MySQL            | Database                         |
| EJS              | Template engine                  |
| Bootstrap 5      | Framework CSS                    |
| bcrypt           | Enkripsi password                |
| Telegram Bot API | Sistem notifikasi                |
| DataTables       | Pengelolaan tabel data           |
| Chart.js         | Visualisasi data                 |
| dotenv           | Pengelolaan environment variable |

---

## 📂 Struktur Project

```text
smart-queue-laundry/
│
├── config/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── migrations/
├── seeders/
├── app.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

> Struktur folder dapat berbeda sesuai dengan perkembangan project.

---

## ⚙️ Persyaratan

Sebelum menjalankan project, pastikan perangkat telah memiliki:

* Node.js
* npm
* MySQL
* Git

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/awlaraka/Smart-Queue-Londry.git
```

Masuk ke folder project:

```bash
cd Smart-Queue-Londry
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment

Buat file `.env` pada folder utama project.

Contoh:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=smart_queue_laundry

TELEGRAM_BOT_TOKEN=your_bot_token
```

Sesuaikan konfigurasi database dan Telegram Bot dengan environment masing-masing.

### 4. Buat Database

Buat database MySQL:

```sql
CREATE DATABASE smart_queue_laundry;
```

Kemudian sesuaikan konfigurasi database pada file `.env`.

### 5. Jalankan Aplikasi

```bash
npm start
```

atau jika project menggunakan nodemon:

```bash
npm run dev
```

Aplikasi dapat diakses melalui:

```text
http://localhost:3000
```

---

## 🔒 Keamanan

File `.env` **tidak boleh di-upload ke repository GitHub** karena dapat berisi informasi sensitif seperti:

* Password database
* Telegram Bot Token
* API Key
* Credential lainnya

Gunakan `.gitignore`:

```gitignore
node_modules/
.env
.env.*
!.env.example
```

Untuk repository publik, gunakan `.env.example` sebagai contoh konfigurasi tanpa memasukkan credential asli.

---

## 🗄️ Database

Sistem menggunakan **MySQL** sebagai database utama.

Data yang dikelola antara lain:

* Data admin
* Data pelanggan
* Data pesanan
* Status proses laundry
* Informasi transaksi

Sequelize ORM digunakan untuk mempermudah interaksi antara aplikasi Node.js dengan database MySQL.

---

## 🔔 Integrasi Telegram

Smart Queue Laundry menggunakan **Telegram Bot API** sebagai salah satu media notifikasi.

Ketika terjadi perubahan status pesanan, sistem dapat mengirimkan informasi kepada pelanggan melalui Telegram.

Contoh alur:

```text
Pesanan Dibuat
      ↓
   Menunggu
      ↓
 Sedang Dicuci
      ↓
Sedang Dikeringkan
      ↓
 Sedang Disetrika
      ↓
    Selesai
      ↓
 Sudah Diambil
```

---

## 🎯 Tujuan Pengembangan

Aplikasi ini dikembangkan untuk membantu meningkatkan efisiensi pengelolaan antrean dan proses produksi laundry dengan menyediakan sistem yang terkomputerisasi.

Dengan adanya sistem ini, proses pencatatan pesanan, pemantauan status pengerjaan, dan penyampaian informasi kepada pelanggan dapat dilakukan secara lebih terstruktur.

---

## 👨‍💻 Pengembang

**M. Awla Raka**

Program Studi Teknologi Informasi
Universitas Muhammadiyah Sumatera Utara

**Project:** Smart Queue Laundry
**Status:** Tugas Akhir

---

## 📄 Lisensi

Project ini dibuat untuk keperluan akademik dan pengembangan sistem.
