const { Task } = require("../models")

const getTasks = async(req, res) => {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
}

const createTask = async(req, res) => {
    try{
        const {taskName, userId} = req.body;
        const task = await Task.findOne({
            where: {
                taskName: taskName.trim(),
                userId: userId
            }
        })

        if (!task){
            const newTask = await Task.create({
                taskName: taskName,
                isCompleted: false,
                userId: userId
            })
            res.status(200).json(newTask);
        } else {
            res.status(500).json({message: "Task Already Exists"})
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const getUserTasks = async (req, res) => {
    try {
        const { userId } = req.params;

        const userTasks = await Task.findAll({
            where: { userId: userId }
        });

        res.status(200).json(userTasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const editTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const updateData = req.body;

        const [updatedRows] = await Task.update(updateData, {
            where: { id: taskId }
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: "Task not found!" });
        }

        const updatedTask = await Task.findByPk(taskId);
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;

        await Task.destroy({
            where: { id: taskId }
        });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {getTasks, createTask, getUserTasks, editTask, deleteTask};