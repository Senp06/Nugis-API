const db = require("../models");
const Materi = db.konten;

//CREATE: untuk menambahkan data ke dalam tabel quiz
exports.create = async (req, res) => {

    try {
        const data = await Materi.create(req.body)
        res.json({
            message: "Content created successfully.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message ,
            data: null,
        });
    }
}

//READ: menampilkan atau mengambil semua data quiz sesuai model dari database
exports.getAll = async(req, res) => {
    try {
        const konten = await Materi.findAll()
        res.json({
            message: "Content retrieved successfully.",
            data: konten,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data:null,
        })
    }
};

// Mengubah data sesuai id yang dikirimkan
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Materi.findByPk(id, { rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Content updated successfully.",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving content",
            data: null,
        });
    }
}

// Menghapus data sesuai id yang dikirimkan
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Materi.findByPk(id, { rejectOnEmpty: true})

        quiz.destroy()

        res.json({
            message: "Materi with deleted."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving content",
            data: null,
        });
    }
}

// Mengambil data sesuai id yang dikirmkan
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Materi.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `Content retrieved successfully with id=${id}.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
};

// Menampilkan atau mengambil semua data quiz berdasarkan category tertentu
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const konten = await Materi.findAll({
        where: {
            categoryId: id
        }
    })
    res.json({
        message: `Content retrieved successfully woth categoryId=${id}.`,
        data: konten,
    });
}

// Menampilkan atau mengambil semua data quiz berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const konten = await Materi.findAll({
        where : {
            levelId: id
        }
    })
    res.json({
        message: `Content retrieved successfully with levelId=${id}.`,
        data: konten,
    });
}