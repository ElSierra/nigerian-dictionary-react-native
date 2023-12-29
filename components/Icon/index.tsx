import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const HomeIcon = ({size,color}:{size:number; color: string}) => (
  <Svg
    
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"

  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
    />
  </Svg>
)

export const SearchIcon = ({size,color}:{size:number; color: string}) => (
  <Svg
    
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"

  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 21.5l-5.2-5.2"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 18a8 8 0 100-16 8 8 0 000 16z"
    />
  </Svg>
)

export const StarredIcon = ({size,color}:{size:number; color: string}) => (
    <Svg
   
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
    />
  </Svg>
    )


    export const HistoryIcon = ({size,color}:{size:number; color: string}) => (
        <Svg

        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
 
      >
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z"
        />
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
        />
      </Svg>
        )