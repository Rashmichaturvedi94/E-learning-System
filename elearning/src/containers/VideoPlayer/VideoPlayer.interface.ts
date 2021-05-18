export interface VideoPlayerProps {
  // TODO: add required props below
  myProp?: boolean;
}

export type SelectedTextTrack = {
  type: string;
  value: string | number;
};

export type TextTrack = {
  title?: string;
  language: string;
  index: number;
};
