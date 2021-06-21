import express from 'express'

const app = express()

const PORT = 3001 || process.env.PORT

app.get('/', (req, res) => {
  return res.json({ message: 'hello API' })
})

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`)
})
