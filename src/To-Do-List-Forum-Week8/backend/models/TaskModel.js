import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    TaskName: {type: String, required: true},
    IsCompleted: {type: Boolean, required: true},
    UserId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "user"}
}, {timestamps: true})

const TaskModel = mongoose.model("task", taskSchema);

export default TaskModel;