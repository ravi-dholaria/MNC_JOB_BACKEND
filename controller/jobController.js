import jobModel from "../model/jobModel.js";
import data from '../job_data.json'; // Assuming 'data' is the default export
// Use assert to check the type property of the imported data
assert(data.type === 'json', 'Invalid data type');
export const jobController = async (req, res) => {
  try {
    const jobs = await jobModel.find({});
    res.status(200).send({
      success: true,
      length: jobs.length,
      message: "All Jobs",
      jobs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting jobs",
      error: error.message,
    });
  }
};

export const jobInsertController = async (req, res) => {
  try {
    await jobModel.deleteMany({});
    const jobs = await jobModel
      .insertMany(data.default)
      .then((docs) => {
        console.log(`${docs.length} documents inserted`);
        res.status(200).send({
          success: true,
          message: "Inserted successfully",
        });
      })
      .catch((err) => {
        console.error(`Error inserting data: ${err}`);
        res.status(501).send({
          message: "error while inserting",
          error,
        });
      });
  } catch (error) {
    res.status(501).send({
      message: "error while inserting",
      error,
    });
  }
};
