import Classroom from "../models/classroom.model.js";


export const createClassroom = async (req, res) => {
    try {

        if (req.user.type !== "moderador") {
            return res.status(403).json({ message: "No tienes permisos para crear una clase" });
        }

        const { name, videoUrl } = req.body;

        if (!name || !videoUrl) {
            return res.status(400).json({ message: "Faltan datos por enviar" });
        }

        const newClassroom = new Classroom({
            name,
            videoUrl
        });

        await newClassroom.save();

        res.status(201).json({
            message: "Clase creada exitosamente",
            classroom: newClassroom
        });
    } catch (error) {
        console.log("Error en el controlador de creación de clase:", error.message);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getClassroom = async (req, res) => {
    try {
        const { id } = req.params;
        const classroom = await Classroom.findById(id).select("-__v");

        if (!classroom) {
            return res.status(404).json({ message: "Clase no encontrada" });
        }

        res.status(200).json(classroom);
    } catch (error) {
        console.log("Error en el controlador de clases: ", error.message);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
