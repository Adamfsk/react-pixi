import { TYPES, PixiComponent, registerComponent, overrideComponent } from './utils/element'
import { render } from './render'
import Stage from './stage'
import { PixiFiber } from './reconciler'
import { Context as AppContext, AppProvider, AppConsumer, withPixiApp } from './stage/provider'
import { useTick, useApp } from './hooks'
import { applyDefaultProps } from './utils/props'

/**
 * -------------------------------------------
 * Public API
 * -------------------------------------------
 */

export { render, Stage, withPixiApp, PixiComponent, registerComponent, overrideComponent, PixiFiber }
export { AppProvider, AppConsumer, AppContext }
export { useTick, useApp }
export { applyDefaultProps }

export const BitmapText = TYPES.BitmapText
export const Container = TYPES.Container
export const Graphics = TYPES.Graphics
export const NineSlicePlane = TYPES.NineSlicePlane
export const ParticleContainer = TYPES.ParticleContainer
export const Sprite = TYPES.Sprite
export const Text = TYPES.Text
export const TilingSprite = TYPES.TilingSprite
export const SimpleMesh = TYPES.SimpleMesh
export const SimpleRope = TYPES.SimpleRope
