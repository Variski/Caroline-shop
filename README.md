# Flowchart Sistem Tembakau

Dokumen ini menjelaskan alur penggunaan sistem tembakau, mulai dari pembuatan perencanaan, input panen, input rompos, hingga proses report.

---

## 1. Flowchart Pembuatan Perencanaan Tembakau

Perencanaan digunakan sebagai dasar data produksi tembakau. Data ini berisi musim tanam, pemandor, bagian/kebun, luas lahan, rencana produksi hijau, rencana produksi kering, dan tanggal tanam.

```mermaid
flowchart TD
    A([Mulai]) --> B[User login ke sistem]
    B --> C{Role user}
    C -->|Admin / Tanaman| D[Masuk ke Master Data Operasional]
    C -->|Role lain| X[Akses dibatasi sesuai hak akses]

    D --> E[Pilih menu Data Perencanaan]
    E --> F[Klik Tambah Perencanaan]
    F --> G[Pilih Musim Tanam]
    G --> H[Pilih Pemandor]
    H --> I[Sistem mengambil data bagian/kebun dan luas lahan]

    I --> J[Input Tanggal Tanam]
    J --> K[Sistem menghitung Rencana Produksi Hijau]
    K --> L[Sistem menghitung Rencana Produksi Kering]

    L --> M{Data sudah benar?}
    M -->|Belum| N[Perbaiki data input]
    N --> G
    M -->|Sudah| O[Simpan Perencanaan]

    O --> P[Data Perencanaan tersimpan]
    P --> Q([Selesai])
```

### Penjelasan Alur

1. User login ke sistem.
2. User dengan role **Admin** atau **Tanaman** masuk ke menu **Master Data Operasional**.
3. User membuka menu **Data Perencanaan**.
4. User membuat data perencanaan baru.
5. User memilih **Musim Tanam** dan **Pemandor**.
6. Sistem mengambil informasi bagian/kebun dan luas lahan dari master data.
7. User mengisi tanggal tanam.
8. Sistem menghitung rencana produksi:
   - Rencana Produksi Hijau = Luas Ha x 17.500
   - Rencana Produksi Kering = Luas Ha x 1.750
9. Jika data sudah benar, user menyimpan data perencanaan.
10. Data perencanaan akan digunakan untuk input panen, input rompos, dan report.

---

## 2. Flowchart Input Panen Tembakau

Input Panen digunakan untuk mencatat produksi hijau dari kegiatan panen tembakau.

```mermaid
flowchart TD
    A([Mulai]) --> B[User login ke sistem]
    B --> C[Masuk ke menu Input Panen]
    C --> D{Role user}

    D -->|Admin / Tanaman| E[User memilih Data Perencanaan, Kebun/Lokasi, dan Pemandor]
    D -->|Role Kebun / selain Admin-Tanaman| F[Sistem mengisi data kebun/lokasi sesuai user login dan dibuat readonly]

    E --> G[User mengisi data panen]
    F --> G[User mengisi data panen]

    G --> H[Input Produksi Hijau]
    H --> I[Input STG]
    I --> J[Input Kamar Panen]
    J --> K[Tanggal panen terisi otomatis / sesuai form]

    K --> L{Apakah Data Perencanaan sudah memiliki Tanggal Awal Panen?}
    L -->|Belum| M[Sistem menyimpan tanggal panen pertama sebagai Tanggal Awal Panen]
    L -->|Sudah| N[Sistem tidak mengubah Tanggal Awal Panen]

    M --> O[Validasi data input]
    N --> O[Validasi data input]

    O --> P{Data valid?}
    P -->|Tidak| Q[Tampilkan pesan error]
    Q --> G
    P -->|Ya| R[Simpan data Input Panen]

    R --> S[Riwayat Input Panen diperbarui]
    S --> T[Calculated Metric diperbarui]
    T --> U[Data siap digunakan di Report]
    U --> V([Selesai])
```

### Penjelasan Alur

1. User masuk ke menu **Input Panen**.
2. Jika user adalah **Admin** atau **Tanaman**, user bisa memilih data perencanaan, kebun/lokasi, dan pemandor.
3. Jika user adalah role kebun atau role selain Admin/Tanaman, data kebun/lokasi mengikuti data user login dan tidak bisa dipilih bebas.
4. User menginput **Produksi Hijau**, **STG**, dan **Kamar Panen**.
5. Sistem mengecek apakah data perencanaan sudah memiliki **Tanggal Awal Panen**.
6. Jika belum ada, tanggal panen pertama disimpan sebagai tanggal awal panen.
7. Jika sudah ada, tanggal awal panen tidak diubah.
8. Sistem menyimpan data input panen.
9. Data masuk ke riwayat input dan digunakan untuk report.

---

## 3. Flowchart Input Rompos Tembakau

Input Rompos digunakan untuk mencatat produksi kering atau hasil rompos dari tembakau.

```mermaid
flowchart TD
    A([Mulai]) --> B[User login ke sistem]
    B --> C[Masuk ke menu Input Rompos]
    C --> D{Role user}

    D -->|Admin / Tanaman| E[User memilih Data Perencanaan, Kebun/Lokasi, dan Pemandor]
    D -->|Role Kebun / selain Admin-Tanaman| F[Sistem mengisi data kebun/lokasi sesuai user login dan dibuat readonly]

    E --> G[User mengisi data rompos]
    F --> G[User mengisi data rompos]

    G --> H[Input Produksi Kering Rompos]
    H --> I[Input Jumlah Kamar Rompos]
    I --> J[Input STG]
    J --> K[Tanggal rompos terisi otomatis / sesuai form]

    K --> L[Validasi data input]
    L --> M{Data valid?}

    M -->|Tidak| N[Tampilkan pesan error]
    N --> G
    M -->|Ya| O[Simpan data Input Rompos]

    O --> P[Riwayat Input Rompos diperbarui]
    P --> Q[Calculated Metric diperbarui]
    Q --> R[Data siap digunakan di Report]
    R --> S([Selesai])
```

### Penjelasan Alur

1. User masuk ke menu **Input Rompos**.
2. Jika user adalah **Admin** atau **Tanaman**, user dapat memilih data perencanaan, kebun/lokasi, dan pemandor.
3. Jika user adalah role kebun atau role selain Admin/Tanaman, data kebun/lokasi mengikuti user login dan tidak bisa dipilih bebas.
4. User menginput **Produksi Kering Rompos**, **Jumlah Kamar Rompos**, dan **STG**.
5. Sistem melakukan validasi data.
6. Jika data valid, sistem menyimpan input rompos.
7. Data masuk ke riwayat input dan digunakan untuk report.

---

## 4. Flowchart Report Tembakau

Report digunakan untuk menampilkan rekap data panen dan rompos berdasarkan filter yang dipilih.

```mermaid
flowchart TD
    A([Mulai]) --> B[User login ke sistem]
    B --> C[Masuk ke menu Report & Export]
    C --> D[User memilih filter report]

    D --> E[Pilih Periode Tanam]
    E --> F[Pilih Wilayah / Kebun / Bagian jika diperlukan]
    F --> G[Pilih Tanggal Awal dan Tanggal Akhir]
    G --> H[Klik Cari]

    H --> I[Sistem mengambil data perencanaan]
    I --> J[Sistem mengambil data input panen]
    J --> K[Sistem mengambil data input rompos]

    K --> L[Sistem menghitung data report]

    L --> M[Hitung Produksi Hijau Hari Ini]
    M --> N[Hitung Produksi Hijau s.d. Hari Ini]
    N --> O[Hitung Produksi Kering Rompos Hari Ini]
    O --> P[Hitung Produksi Kering Rompos s.d. Hari Ini]
    P --> Q[Hitung Rendemen]
    Q --> R[Hitung Kamar Belum Rompos]
    R --> S[Hitung Produktivitas jika data tersedia]

    S --> T[Tampilkan tabel report di website]
    T --> U{User ingin export?}

    U -->|Tidak| V([Selesai])
    U -->|Ya| W[Klik Export Excel]
    W --> X[Sistem membuat file Excel sesuai template]
    X --> Y[File Excel berhasil diunduh]
    Y --> Z([Selesai])
```

### Penjelasan Alur

1. User membuka menu **Report & Export**.
2. User memilih filter seperti **Periode Tanam**, **Wilayah**, **Kebun**, **Bagian**, **Tanggal Awal**, dan **Tanggal Akhir**.
3. Sistem mengambil data dari **Master Perencanaan**, **Input Panen**, dan **Input Rompos**.
4. Sistem menghitung produksi hijau, produksi kering rompos, rendemen, kamar belum rompos, dan produktivitas.
5. Report ditampilkan dalam bentuk tabel.
6. Jika user melakukan export, sistem membuat file Excel sesuai template.

---

## 5. Flowchart Report Regional Tembakau

Report Regional digunakan untuk menampilkan rekap produksi tembakau per kebun dan per hari.

```mermaid
flowchart TD
    A([Mulai]) --> B[User login ke sistem]
    B --> C[Masuk ke menu Report Regional]
    C --> D[Halaman menampilkan filter]

    D --> E[User memilih Periode Tanam]
    E --> F[User memilih Kebun, boleh satu atau lebih]
    F --> G[User memilih Tanggal Awal]
    G --> H[User memilih Tanggal Akhir]
    H --> I[Klik Cari]

    I --> J{Filter valid?}
    J -->|Tidak| K[Tampilkan pesan validasi]
    K --> D

    J -->|Ya| L[Sistem mengambil data kebun Tembakau]
    L --> M[Sistem mengambil data panen per kebun dan tanggal]
    M --> N[Sistem mengambil data rompos per kebun dan tanggal]
    N --> O[Sistem mengambil data ready for sale jika tersedia]

    O --> P[Sistem menghitung report per hari]
    P --> Q[Hitung Produksi Hijau]
    Q --> R[Hitung Produksi Kering Rompos]
    R --> S[Hitung Rendemen]
    S --> T[Hitung Bulan Ini]
    T --> U[Hitung s.d. Hari Ini]
    U --> V[Hitung Jumlah Total]

    V --> W[Tampilkan tabel per tanggal di website]
    W --> X{User export Excel?}

    X -->|Tidak| Y([Selesai])
    X -->|Ya| Z[Sistem membuat Excel per bulan]
    Z --> AA[Setiap sheet berisi tabel per hari]
    AA --> AB[Setiap tabel memiliki header dan jumlah total]
    AB --> AC[File Excel berhasil diunduh]
    AC --> AD([Selesai])
```

### Penjelasan Alur

1. User masuk ke menu **Report Regional**.
2. Saat halaman pertama dibuka, report tidak langsung tampil.
3. User harus memilih **Periode Tanam**, **Kebun**, **Tanggal Awal**, dan **Tanggal Akhir**.
4. Sistem menampilkan report berdasarkan filter.
5. Data dihitung per kebun dan per tanggal.
6. Jika rentang tanggal melewati beberapa bulan, export Excel dibuat per sheet bulan.
7. Setiap tanggal memiliki tabel sendiri.
8. Setiap tabel memiliki baris **JUMLAH TOTAL**.

---

## 6. Ringkasan Sumber Data

| Proses | Sumber Data | Keterangan |
| --- | --- | --- |
| Perencanaan | `master_perencanaan` | Menyimpan musim tanam, pemandor, bagian, luas, rencana produksi, tanggal tanam |
| Input Panen | `tembakau_panen` | Menyimpan produksi hijau, STG, kamar panen, tanggal panen |
| Input Rompos | `tembakau_rompos` | Menyimpan produksi kering rompos, STG, jumlah kamar rompos, tanggal rompos |
| Input Ready For Sale | `tembakau_ready_for_sale` | Menyimpan produksi kering ready for sale per kebun dan tanggal |
| Master Kebun/Lahan | `master_kebun_lahan` / `master_kebun` | Menyimpan data kebun, bagian, wilayah, luas lahan |
| Report | Gabungan master dan input | Menggabungkan data perencanaan, panen, rompos, dan ready for sale |

---

## 7. Ringkasan Rumus

### Rencana Produksi

```text
Rencana Produksi Hijau = Luas Ha x 17.500
Rencana Produksi Kering = Luas Ha x 1.750
```

### Produksi Hijau

```text
Produksi Hijau = SUM tembakau_panen.berat_hijau
```

### Produksi Kering Rompos

```text
Produksi Kering Rompos = SUM tembakau_rompos.berat_rompos
```

### Rendemen

```text
Rendemen (%) = Produksi Kering Rompos / Produksi Hijau x 100
```

### Kamar Belum Rompos

```text
Kamar Belum Rompos = Panen s.d. Hari Ini KMR - Rompos s.d. Hari Ini KMR
Kamar Belum Rompos = max(0, Panen SD KMR - Rompos SD KMR)
```

Jika hasil negatif, tampilkan `0`.

### Produktivitas

```text
Produktivitas = Produksi Kering Rompos s.d. Hari Ini / Luas Ha
```

---

## 8. Kesimpulan

Alur sistem tembakau dimulai dari pembuatan **Data Perencanaan**, kemudian dilanjutkan dengan **Input Panen** dan **Input Rompos**. Data input tersebut digunakan untuk menghasilkan **Report & Export** serta **Report Regional**.

Sistem mendukung perhitungan produksi hijau, produksi kering, rendemen, produktivitas, dan rekapitulasi per kebun maupun per tanggal.
