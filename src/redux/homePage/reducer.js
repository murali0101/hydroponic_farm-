import data from "../../data/db.json";
const initState = {
  typeOfFarm: data.typeOfFarm,
};

export const homePageReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
