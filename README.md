# 🌿 EcoDesa - Website Edukasi Pengelolaan Sampah

EcoDesa merupakan website edukasi mengenai pengelolaan sampah yang dikembangkan sebagai bagian dari Program Kuliah Kerja Nyata (KKN). Website ini bertujuan memberikan informasi kepada masyarakat mengenai pentingnya memilah sampah, mengenali jenis-jenis sampah, serta menerapkan prinsip 3R (Reduce, Reuse, Recycle) dalam kehidupan sehari-hari.

Selain sebagai media edukasi, EcoDesa juga dilengkapi dengan sistem pengumpulan data sederhana menggunakan **Google Form**, **Google Spreadsheet**, dan **Google Apps Script** sehingga data survei masyarakat dapat ditampilkan secara langsung pada dashboard statistik tanpa memerlukan database maupun hosting server.

---

## ✨ Fitur

* Landing Page responsif
* Informasi mengenai pengelolaan sampah
* Edukasi jenis-jenis sampah:

  * Organik
  * Anorganik
  * B3 (Bahan Berbahaya dan Beracun)
  * Residu
* Penjelasan prinsip 3R (Reduce, Reuse, Recycle)
* Dashboard statistik hasil survei masyarakat
* Visualisasi data menggunakan Chart.js
* Data diperbarui dari Google Spreadsheet secara realtime
* Desain modern menggunakan Bootstrap 5

---

## 🛠️ Teknologi yang Digunakan

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap 5
* Bootstrap Icons
* Chart.js

### Backend (Serverless)

* Google Form
* Google Spreadsheet
* Google Apps Script (REST API)

### Version Control

* Git
* GitHub

---

## 📊 Arsitektur Sistem

```text
Pengguna
    │
    ▼
Google Form
    │
    ▼
Google Spreadsheet
    │
    ▼
Google Apps Script (REST API)
    │
    ▼
Website EcoDesa
    │
    ▼
Dashboard Statistik
```

Website ini tidak menggunakan database MySQL maupun framework backend. Seluruh data survei disimpan pada Google Spreadsheet dan diakses melalui Google Apps Script sebagai REST API.

---

## 📁 Struktur Proyek

```text
EcoDesa/

│
├── assets/
│   ├── css/
│   ├── js/
│   ├── img/
│   └── data/
│
├── index.html
├── dashboard.html
└── README.md
```

---

## 📈 Dashboard

Dashboard menampilkan informasi hasil survei masyarakat, antara lain:

* Total responden
* Persentase masyarakat yang memilah sampah
* Jenis sampah yang paling banyak dihasilkan
* Cara pengelolaan sampah
* Grafik distribusi data
* Tabel data survei

Data dashboard diperbarui secara otomatis melalui Google Spreadsheet.

---

## 🌱 Tujuan Pengembangan

Website ini dikembangkan untuk:

* Meningkatkan kesadaran masyarakat mengenai pentingnya pengelolaan sampah.
* Menjadi media edukasi yang mudah diakses.
* Membantu proses pengumpulan data survei masyarakat.
* Menampilkan hasil survei dalam bentuk dashboard yang informatif.
* Mendukung kegiatan Program Kuliah Kerja Nyata (KKN).

---

## 🚀 Cara Menjalankan

1. Clone repository.

```bash
git clone https://github.com/yoshimitten/ecodesa-rex
```

2. Masuk ke folder proyek.

```bash
cd NAMA_REPOSITORY
```

3. Jalankan menggunakan Live Server pada Visual Studio Code.

---

## 📄 Lisensi

Proyek ini dikembangkan untuk kegiatan Program Kuliah Kerja Nyata (KKN) dan dapat digunakan sebagai media pembelajaran maupun referensi pengembangan website edukasi berbasis Google Spreadsheet.
