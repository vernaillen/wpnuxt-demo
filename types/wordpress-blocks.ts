
export type Block = {
    name: string
    attributes: BlockAttributes
    originalContent: string
    dynamicContent: string
    innerBlocks: Array<Block>
}

export type BlockAttributes = {
    url: string
    content: string
}

export type CoreParagraph = Block & {
}

export type ImageAttributes = BlockAttributes & {
    alt: string
    width: number
    height: number
}

export type CoreImage = Block & {
    attributes: ImageAttributes
}

export type CoreGallery = Block & {

}

export type CoreQuote = Block & {

}