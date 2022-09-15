declare module '*.vert' {
    const content: string
    export default content
}

declare module '*.frag' {
    const content: string
    export default content
}

declare module '*.glsl' {
    const content: string
    export default content
}

declare global {
    namespace JSX {
      interface IntrinsicElements {
        boxMaterial: ReactThreeFiber.Object3DNode<BoxMaterial, typeof BoxMaterial>
      }
    }
  }