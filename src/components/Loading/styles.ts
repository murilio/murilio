import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  height: 100%;
  width: 100%;
  background: radial-gradient(at center center,rgba(255,255,255,0.7) 0%,rgba(0,0,0,0.5) 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    width: 150px;
    height: 150px;
    animation: rotate 1s linear infinite;

    @keyframes rotate {
      0% { transform: rotate(0deg) }
      100% { transform: rotate(360deg) }
    }

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: #EA443B;
      stroke-linecap: round;
      stroke-width: 10;
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      transform: translate(5px, 5px);
      animation: animate 2s linear infinite;

      @keyframes animate {
        0% { stroke-dashoffset: 440; stroke: #EA443B }
        50% { stroke-dashoffset: 0; stroke: #4285F4 }
        50.1% { stroke-dashoffset: 880; }
        75% { stroke: #41A853 }
        100% { stroke-dashoffset: 440; stroke: #FBBE3C; }
      }
    }
  }
`
