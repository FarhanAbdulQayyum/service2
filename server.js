const express = require("express");
const app = express();
const PORT = 3001;

// Define a simple route
app.get("/", (req, res) => {
    res.send('________This is Service 2 ________verifying again _dummy2');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT} check`);
});
