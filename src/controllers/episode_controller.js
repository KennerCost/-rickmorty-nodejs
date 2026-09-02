const episodeService = require("../services/episode_service");

async function getById(req, res, next) {
    // Recebe o ID informado na URL: /episode/28
    const { id } = req.params;

    // Verifica se o ID é um número inteiro positivo
    if (!/^[1-9]\d*$/.test(id)) {
        return res.status(400).json({
            error: "O ID deve ser um número inteiro positivo.",
        });
    }

    try {
        // Busca o episódio com os personagens já preenchidos
        const episode = await episodeService.getById(id);

        // O service retorna null quando o episódio não existe
        if (!episode) {
            return res.status(404).json({
                error: "Episódio não encontrado.",
            });
        }

        // Retorna o episódio em JSON
        return res.status(200).json(episode);

    } catch (error) {
        console.error("Erro completo:", error);

        // Trata falhas na consulta à API externa
        return next(error);
    }
}

module.exports = { getById };