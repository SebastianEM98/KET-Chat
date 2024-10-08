import Message from "../models/message.model.js";
import Classroom from "../models/classroom.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { content, classroomId } = req.body;

        if (!content || !classroomId) {
            return res.status(400).json({ message: "Faltan datos por enviar" });
        }

        const classroom = await Classroom.findById(classroomId);
        if (!classroom) {
            return res.status(404).json({ message: "Clase no encontrada" });
        }

        const newMessage = new Message({
            content,
            senderId: req.user._id,
            classroomId: classroom._id,
            isModerator: req.user.type === "moderador"
        });

        await newMessage.save();

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error en el controlador de mensajes:", error.message);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { classroomId } = req.params;

        const messages = await Message.find({ classroomId })
            .populate('senderId', 'name username type')
            .sort({ created_at: 1 });

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error al obtener mensajes:", error.message);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
