const fs = require("fs");

const fileName = "data.txt";

// CREATE
function createFile(content) {
    fs.writeFileSync(fileName, content);
    console.log("File created successfully");
}

// READ
function readFile() {
    const data = fs.readFileSync(fileName, "utf8");
    console.log("File Content:", data);
}

// UPDATE
function updateFile(newContent) {
    fs.writeFileSync(fileName, newContent);
    console.log("File updated successfully");
}

// DELETE
function deleteFile() {
    fs.unlinkSync(fileName);
    console.log("File deleted successfully");
}

// CRUD Operations
createFile("Hello Node.js!");
readFile();

updateFile("Updated Content");
readFile();

deleteFile();