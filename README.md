# Block

Block is a data structure/collection that uses Blockchain principle in managing and storing data.
### Block store datas in blocks with each block having timestamp, a text lable and hash for each stored data.
### basically, Block manages and store data emulating The Blockchain Principle.

#### Block is the container
#### block/blocks are the stored data 

- Store datas in blocks
- Each blocks form a Block
- Each block contains the actual data, a timestamp, hash, and a text label
- Full TypeScript type inference

## Methods
- get - get block with index or hash, or return all the blocks
- merge - merge two Blocks
- set - set add new data block to your Block
- loop - flatMap all blocks in the Block
- delete - remove block with index or hash, or remove the last added block

## Installation

```bash
npm i block
```

## Usage

### Basic Class Example
```typescript

import { Block, BlockType, block }  from "@block";

//creating a Block using the Constructor function
const datas = new Block([])

//creating a Block using the block function
const datas = block([])

```

# License

MIT © Ademujimi Oluwaseyi