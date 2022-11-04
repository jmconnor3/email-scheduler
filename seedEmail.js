const mongoose = require("mongoose");

const { Patient } = require("./import");

const Schema = mongoose.Schema;
const emailSchema = new Schema({
  name: String,
  schedule_date: String,
});
const emailModel = mongoose.model("Emails", emailSchema);

module.exports = async function seedEmails(db) {
  const emails = await Patient.find({ CONSENT: "Y" });
  emails.forEach(async (email, i) => {
    const today = new Date();
    const scheduledDate = today.setDate(today.getDate() + (i + 1));
    const res = {
      id: email._id,
      name: `Day${i + 1}`,
      schedule_date: scheduledDate,
    };
    await emailModel.insertMany([res]);
  });
};
