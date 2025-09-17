const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

let events = [];

app.get("/events", async (req, res) => {
  res.send(events);
});

const services = [
  "http://localhost:4000/events", // Posts Service
  "http://localhost:4001/events", // Comments Service
  "http://localhost:4002/events", // Query Service
];

app.post("/events", async (req, res) => {
  const event = req.body;

  events.push(event);

  for (let service of services) {
    try {
      await axios.post(service, event);
    } catch (err) {
      console.log(`Could not deliver event to ${service}:`, err.message);
    }
  }

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Event bus is listening on 4005");
});
