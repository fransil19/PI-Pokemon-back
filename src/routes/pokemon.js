const { Router } = require('express');
const router = Router();
const { getPokemon, createPokemon, getPokemonByID, updatePokemon, deletePokemon } = require('../controllers/pokemon')

router.get('/', async (req, res) => {
    try {
        //filtrar por api, bd o ambos
        const { name } = req.query
        let result;
        if (name) {
            result = await getPokemon(name)
        }
        else {
            result = await getPokemon(null)
        }
        return res.json(result)

    } catch (error) {
        return res.json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const poke = await getPokemonByID(id)
        return res.json(poke)
    } catch (error) {
        return res.json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, height, weight, speed, life, attack, defense, types } = req.body
        const result = await createPokemon(name, height, weight, speed, life, attack, defense, types)
        return res.status(201).json(result)
    } catch (error) {
        return res.json({ message: error.message })
    }
})

router.put('/', async (req, res) => {
  try {
      const {id, name, height, weight, speed, life, attack, defense, types } = req.body
      const result = await updatePokemon(id,name, height, weight, speed, life, attack, defense, types)
      return res.status(200).json(result)
  } catch (error) {
      return res.json({ message: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
      const { id } = req.params
      const result = await deletePokemon(id)
      return res.status(200).json(result)
  } catch (error) {
      return res.json({ message: error.message })
  }
})

module.exports = router