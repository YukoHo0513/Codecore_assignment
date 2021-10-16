const { response } = require('express');
const express = require('express');
const knex = require('../db/client');

const router = express.Router();



router.get("/", (request, response) => {
    console.log(request.query);
    knex.select('*')
        .from('cohorts')
        .orderBy('createdAt', 'desc')
        .then((data) => {
            console.log(data);
            response.render("show", { list: data });
        })
})


router.get('/new', (request, response) => {
    console.log(request.query);
    response.render('new_cohort')
})

router.post('/', (request, response) => { // make sure I have body-parser
    console.log(request.body);
    knex("cohorts")
    .insert({
        logoUrl: request.body.logoUrl,
        name: request.body.name,
        members: request.body.members
    })
    .returning('*')
    .then((data) => {
        console.log(data);
        response.redirect(`/cohorts`)
    })
})

router.get('/:id', (request, response) => {
    const id = request.params.id;
    knex('cohorts')
    .where('id', id)
    .first()
    .then((data) => {
        const quantity = parseInt(request.query.quantity)
        const method = request.query.method
        let createdArr = data.members.split(",")
        function shuffle(arr) {
            for (let i = 0; i < arr.length; i++) {
                let randomNum = Math.floor(Math.random() * arr.length)
                const temp = arr[i];
                arr[i] = arr[randomNum];
                arr[randomNum] = temp;
            }
            return arr;
        }
        const shuffledName = shuffle(createdArr)
        const teamCountChunkSize = shuffledName.length / quantity;
        let nameArr = [];
        if (method === "perTeam") {
            nameArr = sliceIntoChunks(shuffledName, quantity);
        } else if (method === "teamCount") {
            nameArr = sliceIntoChunks(shuffledName, teamCountChunkSize)
        }
        function sliceIntoChunks(arr, chunkSize) {
            const newArr = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                const chunk = arr.slice(i, i + chunkSize);
                newArr.push(chunk);
            }
            return newArr
        }
        response.render('each_cohort', {
            cohort: data,
            quantity: quantity,
            method: method,
            nameArr: nameArr
        })
        
    })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id
    knex('cohorts').where('id', id)
        .delete()
        .then(() => {
            response.redirect('/cohorts');
        })
})

router.get('/:id/edit', (request, response) => {
    const id = request.params.id
    knex('cohorts').where('id', id)
    .first()
    .then((data) => {
        response.render('edit', {cohort: data})
    })
})

router.patch('/:id', (request, response) => {
    const id = request.params.id
    knex('cohorts').where('id', id)
    .update({ 
        logoUrl: request.body.logoUrl,
        name: request.body.name,
        members: request.body.members
    })
    .then((data) => {
        response.redirect(`/cohorts/${request.params.id}`)
    })
})



module.exports = router;
