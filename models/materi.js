module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        judul: {
            type: Sequelize.STRING,
        },
        materi: {
            type: Sequelize.STRING,
        },
        categoryId: {
            type: Sequelize.STRING,
        },  
        levelId: {
            type: Sequelize.STRING,
        },

    });
    return Materi;
}