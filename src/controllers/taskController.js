exports.getTasks = (req, res) => {
  res.status(200).json({
    message: "Tasks retrieved successfully",
    tasks: []
  });
};

exports.createTask = (req, res) => {
  const { title } = req.body;

  res.status(201).json({
    message: "Task created successfully",
    task: { title }
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Task ${id} deleted successfully`
  });
};
