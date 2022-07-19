import express, { Express, Request, Response } from "express"

const app: Express = express()

const PORT: number = 3000
app.listen(PORT, () => {
	console.log(`Listening on PORT :- ${PORT}`)
})

app.get('/', (req: Request, res: Response) => {
	res.send('<h1> Hello World </h1>')
})