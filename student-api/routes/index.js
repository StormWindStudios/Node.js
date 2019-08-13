var express = require('express');
var router = express.Router();
const classroomController = require('../controllers').classroom;
const studentController = require('../controllers').student;
const lecturerController = require('../controllers').lecturer;
const courseController = require('../controllers').course;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/classrooms', classroomController.list);
router.get('/api/classrooms/:id', classroomController.getById);
router.post('/api/classrooms', classroomController.add);
router.post('/api/classrooms/add_with_students', classroomController.addWithStudents);
router.put('/api/classrooms/:id', classroomController.update);
router.delete('/api/classrooms/:id', classroomController.delete);

router.get('/api/students', studentController.list);
router.get('/api/students/:id', studentController.getById);
router.post('/api/students', studentController.add);
router.put('/api/students/:id', studentController.update);
router.delete('/api/student/:id', studentController.delete);
router.post('/api/student/:d/add_course', studentController.addCourse);

router.get('/api/lecturers', lecturerController.list);
router.get('/api/lecturers/:id', lecturerController.getById);
router.post('/api/lecturers', lecturerController.add);
router.put('/api/lecturers/:id', lecturerController.update);
router.delete('/api/lecturers/:id', lecturerController.delete);

router.get('/api/courses', courseController.list);
router.get('/api/courses/:id', courseController.getById);
router.post('/api/courses', courseController.add);
router.put('/api/courses/:id', courseController.update);
router.delete('/api/courses/:id', courseController.delete);

module.exports = router;
