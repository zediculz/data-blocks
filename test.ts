import { Block, block } from "./main.ts"
import type { BlockType } from "./main.ts"


const users = [
    { name: "john", "age": 67 },
    {name: "helen", "age": 27},
    {name: "melon", "age": 17},
    {name: "byui", "age": 61},
    {name: "ceiro", "age": 36},
    {name: "doe", "age": 47}
]


const b = new Block(users)
const bb = block([1, 2])

b.merge(bb)

const c = new Block("abc")
c.merge(b)

c.loop((data:BlockType) => {
    console.log(data)
})