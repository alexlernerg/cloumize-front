
export interface Info {
  id: number;
  img: {
    src: string;
    alt: string;
  };
  title?: string;
  content: string;
}
export interface IEvent extends React.SyntheticEvent {target: any}

export interface ILandingParams {
  ID: string,
  onClick: React.MouseEventHandler<HTMLElement>
  screenWidthMobile?: boolean,
  info2?: Info[],
  info5?: Info[],
}