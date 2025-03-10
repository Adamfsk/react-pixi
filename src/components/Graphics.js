import { Graphics as PixiGraphics } from 'pixi.js'
import { applyDefaultProps } from '../utils/props'

const Graphics = (root, props) => {
  const g = new PixiGraphics()

  g.applyProps = (instance, oldProps, newProps) => {
    const { draw, ...props } = newProps
    applyDefaultProps(instance, oldProps, props)

    if (draw && typeof draw === 'function') {
      draw.call(g, g)
    }
  }

  return g
}

export default Graphics
