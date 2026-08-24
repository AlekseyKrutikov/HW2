import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      if (action.payload === "up") {
        const sorted = [...state].sort((a, b) =>
          a.name.localeCompare(b.name, "ru"),
        );
        return sorted;
      } else if (action.payload === "down") {
        const sorted = [...state].sort((a, b) =>
          b.name.localeCompare(a.name, "ru"),
        );
        return sorted;
      }
    }
    case "check": {
      const filterUsers = state.filter((item) => item.age > 18);
      return filterUsers; // need to fix
    }
    default:
      return state;
  }
};
