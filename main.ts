// deno-lint-ignore-file
export interface BlockType {
  hash: string;
  timeStamp: string;
  data: any;
  text: string | null;
}

/**@class Block is used for object storage emulating blockchain principles. @example const data = new Block([]). */
export class Block {
  /**@property blocks */
  blocks: BlockType[];
  constructor(data: any = []) {
    if (data.length === undefined) {
      const arrData = [data];
      const nd: BlockType[] = [];
      arrData?.flatMap((d: any, i: number) => {
        const obj: BlockType = {
          hash: `${Math.floor(Math.random() * 999999999999)}`,
          timeStamp: new Date().toDateString(),
          data: d,
          text: i === 0 ? "first block" : null,
        };
        nd.push(obj);
      });
      this.blocks = nd;
    } else if (typeof data.length === "number") {
      if (typeof data === "string") {
        const arrData = [data];
        const nd: BlockType[] = [];
        arrData?.flatMap((d: any, i: number) => {
          const obj: BlockType = {
            hash: `${Math.floor(Math.random() * 999999999999)}`,
            timeStamp: new Date().toDateString(),
            data: d,
            text: i === 0 ? "first block" : null,
          };
          nd.push(obj);
        });

        this.blocks = nd;
      } else if (typeof data === "object") {
        const nd: BlockType[] = [];
        data?.flatMap((d: any, i: number) => {
          const obj: BlockType = {
            hash: `${Math.floor(Math.random() * 999999999999)}`,
            timeStamp: new Date().toDateString(),
            data: d,
            text: i === 0 ? "first block" : null,
          };
          nd.push(obj);
        });

        this.blocks = nd;
      } else if (data === "" || data === undefined) {
        this.blocks = [];
      } else {
        this.blocks = [];
      }
    } else {
      this.blocks = []
    }

    return this;
  }


  /**@method set add new data to your block */
  set(data: any, text: string | null = null) {
    if (data.length === undefined) {
      const arrData = [data];
      const nd: BlockType[] = [];
      arrData?.flatMap((d: any) => {
        const obj: BlockType = {
          hash: `${Math.floor(Math.random() * 999999999999)}`,
          timeStamp: new Date().toDateString(),
          data: d,
          text,
        };
        nd.push(obj);
      });
      this.blocks = [...this.blocks, ...nd];
    } else if (typeof data.length === "number") {
      if (typeof data === "string") {
        const arrData = [data];
        const nd: BlockType[] = [];
        arrData?.flatMap((d: any) => {
          const obj: BlockType = {
            hash: `${Math.floor(Math.random() * 999999999999)}`,
            timeStamp: new Date().toDateString(),
            data: d,
            text,
          };
          nd.push(obj);
        });

        this.blocks = [...this.blocks, ...nd];
      } else if (typeof data === "object") {
        const nd: BlockType[] = [];
        data?.flatMap((d: any) => {
          const obj: BlockType = {
            hash: `${Math.floor(Math.random() * 999999999999)}`,
            timeStamp: new Date().toDateString(),
            data: d,
            text,
          };
          nd.push(obj);
        });

        this.blocks = [...this.blocks, ...nd];
      }
    }
  }

  /**@method remove block with index or hash to remove block from blocks, or the last added block. 
   * @example data.remove() remove last, data.remove(index) remove with index, data.remove(hash) remove with hash. */
  delete(option:number|string|null=null) {
    if (option !== null && typeof option === "number") {
      const index = option
      const exist = this.blocks.filter((_, i) => i === index)
      const others = this.blocks.filter((_, i) => i !== index)

      if (exist.length !== 0) {
        this.blocks = others
      }

    } else if (option !== null && typeof option === "string") {
      const hash = option
      const exist = this.blocks.filter((block) => block?.hash === hash)
      const others = this.blocks.filter((block) => block.hash !== hash)

      if (exist.length !== 0) {
        this.blocks = others
      }

    } else if (option === null && typeof option === "object") {
      const d = this.blocks.pop()
      return d
    }
  }

    /**@method get block with index or hash to get block from blocks, or return all the blocks 
   * @example data.get() get all datas, data.get(index) get with index, data.get(hash) get with hash. */
  get(option:number|string|null=null) {
    if (option !== null && typeof option === "number") {
      const index = option
      const exist = this.blocks.filter((_, i) => i === index)

      if (exist.length !== 0) {
        return exist[0]
      } else {
        return "no block found"
      }

    } else if (option !== null && typeof option === "string") {
      const hash = option
      const exist = this.blocks.filter((block) => block?.hash === hash)

      if (exist.length !== 0) {
        return exist[0]
      } else {
        return "no block found"
      }

    } else if (option === null && typeof option === "object") {
      return this.blocks
    }
  }

  /**@method loop all blocks and return each block and index */
  loop(callBack:any) {
    this.blocks.flatMap((block, i) => callBack(block, i))
  }

  merge(cblock:Block) {
    const pbd = this.blocks
    const cbd = cblock.blocks
   
    const arr:BlockType[] = []
    cbd.flatMap((block: BlockType) => {
      if (block.text === "first block") {
        block.text = "merged first block"
      } 

      arr.push(block)
    })

    const nd = [...pbd, ...arr]
    this.blocks = nd
  }
}

/**@function block is used for object storage emulating blockchain principles. @example const data = block([]). */
export function block(data:any):Block {
  const blockInst = new Block(data)
  return blockInst
}
