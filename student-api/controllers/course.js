const Course = require('../models').Course;
const Student = require('../models').Student;
const Lecturer = require('../models').Lecturer;

module.exports = {

    list(req, res) {
        return Course
        .findAll({
            include: [{
                model: Student,
                as: 'students'
              },{
                model: Lecturer,
                as: 'lecturer'
              }],
            order: [
                ['createdAt', 'DESC'],
                [{model: Student, as: 'students'}, 'createdAt', 'DESC']
            ]
        })
        .then((courses) => res.status(200).send(courses))
        .catch((error) => res.status(400).send(error));
    },

    getById(req, res) {

        return Course
        .findByPk(req.params.id, {
            include: [{
                model: Student,
                as: 'students'
              },{
                model: Lecturer,
                as: 'lecturer'
              }],
            order: [
                ['createdAt', 'DESC'],
                [{model: Student, as: 'students'}, 'createdAt', 'DESC']
            ]
        })
        .then((course) => {
            if(!course) {
                return res.status(404).send({
                    message: 'not found',
                    object: 'course',
                    object_id: req.params.id
                });
            }
            return res.status(200).send(course);
        })
        .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Course
          .create({
            course_name: req.body.course_name,
          })
          .then((course) => res.status(201).send(course))
          .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Course
        .findByPk(req.params.id, {
            include: [{
                model: Student,
                as: 'students'
              },{
                model: Lecturer,
                as: 'lecturer'
            }],
        })
        .then(course => {
            if(!course) {
                return res.status(404).send({
                    message: 'not found',
                    object: 'course',
                    object_id: req.params.id
                });
            }
            return course
            .update({
                course_name: req.body.course_name || course.course_name
            })
            .then(() => res.status(200).send(course))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Course
        .findByPk(req.params.id)
        .then(course => {
            if(!course) {
                return res.status(404).send({
                    message: 'not found',
                    object: 'course',
                    object_id: req.params.id
                });
            }
            return course
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send());
        })
        .catch((error) => res.status(400).send(error));
    }
}