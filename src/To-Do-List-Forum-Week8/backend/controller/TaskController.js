import TaskModel from "../models/TaskModel.js";

const getTasks = async(req, res) => {
    const tasks = await TaskModel.find({});
    res.status(200).json(tasks);
}

const createTask = async(req, res) => {
    try{
        const {TaskName, UserId} = req.body;
        const task = await TaskModel.findOne({
            TaskName: TaskName.trim(),
            UserId: UserId
        })

        if (!task){
            const newTask = await TaskModel.create({
                TaskName: TaskName,
                IsCompleted: false,
                UserId: UserId
            })
            res.status(200).json(newTask);
        } else {
            res.status(500).json({message: "Task Already Exists"})
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const getUserTasks = async(req, res) => {
    try{
        const {UserId} = req.params;
        const userTasks = await TaskModel.find({
            UserId: UserId
        })
        res.status(200).json(userTasks);
    } catch(err){
        res.status(500).json({message: err.message});
    }
}

const editTask = async(req, res) => {
    try{
        const {TaskId} = req.params;
        const update = req.body;

        const task = await TaskModel.findByIdAndUpdate(TaskId, update);
        if (!task){
            return res.status(404).json({message: "Task not found!"});
        }
        res.status(200).json(task);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const deleteTask = async(req, res) => {
    try{
        const {TaskId} = req.params;
        const result = await TaskModel.findByIdAndDelete(TaskId);
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export default {getTasks, createTask, getUserTasks, editTask, deleteTask};