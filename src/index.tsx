import * as React from 'react'
import styles from './styles.module.css'

type ParallaxDepthCardPropsType = {
  backgroundUrl: string
  title: string
  children?: React.ReactChild
  onClick?: Function
}

type ParallaxDepthCardStateType = {
  width: number
  height: number
  mouseX: number
  mouseY: number
  mounted: boolean
}

export const ParallaxDepthCard: React.FC<ParallaxDepthCardPropsType> = ({
  backgroundUrl,
  title,
  onClick,
  children
}: ParallaxDepthCardPropsType) => {
  const cardWrapRef = React.useRef<HTMLDivElement>(null)

  const [state, setState] = React.useState<ParallaxDepthCardStateType>({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mounted: false
  })

  let mouseLeaveDelay: NodeJS.Timeout | null = null

  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardWrapRef.current) {
      const { width, height } = state
      const newState = {
        ...state,
        mouseX: event.pageX - cardWrapRef.current.offsetLeft - width / 2,
        mouseY: event.pageY - cardWrapRef.current.offsetTop - height / 2
      }

      setState(newState)
    }
  }

  const handleMouseEnter = React.useCallback(() => {
    if (mouseLeaveDelay) {
      clearTimeout(mouseLeaveDelay)
    }
  }, [mouseLeaveDelay])

  const handleMouseLeave = React.useCallback(() => {
    mouseLeaveDelay = setTimeout(() => {
      setState({ ...state, mouseX: 0, mouseY: 0 })
    }, 1000)
  }, [mouseLeaveDelay, state])

  React.useEffect(() => {
    const { mounted } = state

    // mimic react.didMount()
    if (
      !mounted &&
      cardWrapRef?.current &&
      state.width === 0 &&
      state.height === 0
    ) {
      setState({
        ...state,
        width: cardWrapRef.current.offsetWidth,
        height: cardWrapRef.current.offsetHeight,
        mounted: true
      })
    }
  })

  // computed props
  const mousePX = () => state.mouseX / state.width
  const mousePY = () => state.mouseY / state.height

  const cardStyle = () => {
    const rX = mousePX() * 30
    const rY = mousePY() * -30
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    }
  }
  const cardBgTransform = () => {
    const tX = mousePX() * -40
    const tY = mousePY() * -40
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    }
  }

  return (
    <div
      className={styles['card-container']}
      onClick={() => onClick && onClick()}
    >
      <div
        className={styles['card-wrap']}
        onMouseMove={(event) => handleMouseMove(event)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardWrapRef}
      >
        <div className={styles.card} style={cardStyle()}>
          <div
            className={styles['card-bg']}
            style={{
              ...cardBgTransform(),
              backgroundImage: `url(${backgroundUrl})`
            }}
          />
          <div className={styles['card-info']}>
            <h1>{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
