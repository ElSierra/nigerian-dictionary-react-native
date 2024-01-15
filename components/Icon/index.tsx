import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const HomeIcon = ({ size, color }: { size: number; color: string }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
    />
  </Svg>
);

export const SearchIcon = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
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
);

export const StarredIcon = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
    />
  </Svg>
);

export const HistoryIcon = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
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
);

export const LikeIcon = ({ size, color }: { size: number; color: string }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m7.48 18.35 3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l2.4-7.3c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
    />
  </Svg>
);

export const LikeIconFocused = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      fill={color}
      d="M8.39 18.49V8.33c0-.4.12-.79.34-1.12l2.73-4.06c.43-.65 1.5-1.11 2.41-.77.98.33 1.63 1.43 1.42 2.41l-.52 3.27c-.04.3.04.57.21.78.17.19.42.31.69.31h4.11c.79 0 1.47.32 1.87.88.38.54.45 1.24.2 1.95l-2.46 7.49c-.31 1.24-1.66 2.25-3 2.25h-3.9c-.67 0-1.61-.23-2.04-.66l-1.28-.99c-.49-.37-.78-.96-.78-1.58ZM5.21 6.379H4.18c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.48.63 2.08 2.18 2.08h1.03c1.55 0 2.18-.6 2.18-2.08V8.459c0-1.48-.63-2.08-2.18-2.08Z"
    />
  </Svg>
);

export const GlobalSearchIcon = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      fill={color}
      d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
      opacity={0.4}
    />
    <Path
      fill={color}
      d="M21.3 21.999c-.18 0-.36-.07-.49-.2l-1.86-1.86a.706.706 0 0 1 0-.99c.27-.27.71-.27.99 0l1.86 1.86c.27.27.27.71 0 .99-.14.13-.32.2-.5.2Z"
    />
  </Svg>
);
