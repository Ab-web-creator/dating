import { Quill } from 'react-quill'

const Parchment = Quill.import('parchment')
const Block = Parchment.query('block')

class SpeechBubbleBlot extends Block {
  static create(value) {
    let node = super.create(value)
    node.setAttribute('class', 'ql-speech-bubble')
    return node
  }
}

SpeechBubbleBlot.blotName = 'speechBubble'
SpeechBubbleBlot.tagName = 'p'

Quill.register('formats/speechBubble', SpeechBubbleBlot)


class DefaultBlot extends Block {
  static create() {
    let node = super.create()
    return node
  }
}

DefaultBlot.blotName = 'block'
DefaultBlot.tagName = 'p'

Quill.register(DefaultBlot)