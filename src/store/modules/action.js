import { ONE_LESS, ONE_MORE } from "./actionRypes";

export const oneLess = (num) => {
    return {
      type: ONE_LESS,
      num,
    };
  };

  export const oneMore = (num) => {
    return {
      type: ONE_MORE,
      num,
    };
  };
  