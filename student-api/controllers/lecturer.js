const Lecturer = require('../models').Lecturer;
const Course = require('../models').Course;

module.exports = {

    list(req, res) {
        return Lecturer
        .findAll({
            include: [{
                model: Course,
                as: 'course'
            }],
            order: [
                ['createdAt', 'DESC'],
                [{ model: Course, as: 'course'}, 'createdAt', 'DESC']
            ],
        })
        .then((lecturers) => res.status(200).send(lecturers))
        .catch((error) => res.status(400).send(error));
    },

    getById(req, res) {
        return Lecturer
        .findByPk(req.params.id, {
            include: [{ all: true, nested: true}],
        })
        .then((lecturer) => {
            if(!lecturer) {
                return res.status(404).send({
                    message: 'not found',
                    object: 'lecturer',
                    object_id: req.params.id
                });
            }
            return res.status(200).send(lecturer);
        })
        .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Lecturer
        .create({
            lecturer_name: req.body.lectuerer_name
        })
        .then((lecturer) => res.status(200).send(lecturer))
        .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Lecturer
        .findByPk(req.params.id, {
            include: [{ all: true, nested: true}],
        })
        .then(lecturer => {
            if(!lecturer) {
                return res.status(404).send({
                    message: 'not found',
                    object: 'lecturer',
                    object_id: req.params.id
                });
            }
            return lecturer.update({
                lecturer_name: req.body.lecturer_name || lecturer.lecturer_name
            })
            .then(() => res.status(200).send(lecturer))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Lecturer
        .findByPk(req.params.id)
        .then(lecturer => {
            if(!lecturer) {
                return res.status(404).send({
                    message: 'not found',
                    object: 'lecturer',
                    object_id: req.params.id
                });
            }
            return lecturer
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    }
}