import express from "express";

const router = express.Router();

// Data untuk objek mobil
const mobil = [
    {
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        tahun: "2021",
    },
    {
        merk: "Porsche",
        model: "Sport",
        warna: "Merah",
        tahun: "2024",
    }
];

// Objek mobil baru
const mobilBaru = [
    {
        merk: "Honda",
        model: "Civic",
        warna: "Biru",
        tahun: "2022",
        transmisi: "Manual",
    },
    {
        merk: "Ford",
        model: "Mustang",
        warna: "Putih",
        tahun: "2023",
        transmisi: "Otomatis",
    },
    {
        merk: "BMW",
        model: "X5",
        warna: "Hitam",
        tahun: "2022",
        transmisi: "Otomatis",
    },
    {
        merk: "Mercedes",
        model: "GLA",
        warna: "Perak",
        tahun: "2021",
        transmisi: "Manual",
    }
];

// Route untuk data mobil
router.get("/", (req, res) => {
    res.send(mobil);
});

// Route baru untuk data mobilBaru
router.get("/mobilBaru", (req, res) => {
    res.send(mobilBaru);
});

export default router;