const studentModel = require('../model/student.model'); // Import the student model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Student Signup
const studentSignup = async (req, res) => {
    const data = req.body;

    if (!data.email || !data.name || !data.password || !data.rollno || !data.class) {
        res.status(400).json({
            message: 'Please enter name, email, password, roll number, and class',
        });
        return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 8);

    try {
        // Check if the student already exists
        const existingStudent = await studentModel.findOne({ email: data.email });

        if (existingStudent) {
            return res.status(400).json({ message: 'Student already exists' });
        }

        // Create a new student
        const newStudent = new studentModel({
            email: data.email,
            name: data.name,
            password: hashedPassword,
            rollno: data.rollno,
            class: data.class,
            subjects: data.subjects
        });

        // Save to the database
        await newStudent.save();
        res.status(200).json({ message: 'Student registered successfully' });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to register student',
            error: err.stack,
        });
    }
};

// Student Login
const studentLogin = async (req, res) => {
    const data = req.body;

    if (!data.email || !data.password) {
        res.status(400).json({
            message: 'Please provide email and password',
        });
        return;
    }

    try {
        // Find the student by email
        const existingStudent = await studentModel.findOne({ email: data.email });

        if (!existingStudent) {
            res.status(400).json({ message: 'Email not registered. Please sign up' });
            return;
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(data.password, existingStudent.password);

        if (!passwordMatch) {
            res.status(401).json({ message: 'Authentication failed' });
            return;
        }

        // Generate a token
        const token = jwt.sign({ student: existingStudent }, 'authsystem', { expiresIn: '1h' });

        res.status(200).json({
            token,
            message: 'Successfully logged in',
        });
    } catch (err) {
        res.status(500).json({
            message: 'Login failed',
            error: err.stack,
        });
    }
};

// Verify Token for Students
var decoded;
function verifyStudentToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({
            message: 'Access denied, please sign up or log in',
        });
        return;
    }

    try {
        // Verify the token
        decoded = jwt.verify(token, 'authsystem');
        console.log('Authorized Student:', decoded);
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = { studentSignup, studentLogin, verifyStudentToken };
