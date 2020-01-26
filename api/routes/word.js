// const express = require('express');
// const router = express.Router();
// const guard = require('./verifyToken');
// const Dictionary = require('../models/dictionary');
// const Word = require('../models/word');
// const User = require('../models/user');
// const { WORD, TRANSFER } = require('../constants/dictionary');

// router.get('/', guard, async (req, res) => {
//     try {

//         console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", req.query.d)

//         const id = req.query.d;

//         const aa = await Word.find({ dictionary: id });

//         console.log(aa)
//             // .populate('word')
//             // .exec(function (err, post) {
//             //     if (err) console.log(err);

//             //     console.log(post)
//             // });

//         // const dictionary = await Dictionary.find({ user: req.body.id })
//         // console.log(dictionary)
//         res.status(200).json(aa);
//     } catch (error) {
//         next({ status: 400, body: error.message })
//     }
// });

// router.post('/', guard, async (req, res) => {
//     // TODO: add validation

//     try {
//         const word = Word({
//             [WORD]: req.body.word,
//             [TRANSFER]: req.body.transfer,
//             // name: req.body.name,
//             dictionary: '5e2436ddbe5f8e39220c2bdd'
//         });

//         const newWord = await word.save();

//         res.status(200).json(newWord)

//         // const dictionaryID = User({
//         //     dictionaryID: newDictionary._id
//         // });

//         // const newDictionaryID = await dictionaryID.save();

//         // res.status(200).json(newDictionaryID)

//     } catch (error) {
//         next({ status: 400, body: error.message })
//     }
// })

// module.exports = router;