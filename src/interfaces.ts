export type Rover = {
  id: string;
  img: string;
  cameras?: string[];
};

export type Camera = {
  id: string | number;
  name: string;
  rover_id: number;
  full_name: string;
};

export type Photo = {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
};
