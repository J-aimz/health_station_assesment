import { createContext, useReducer } from "react";


export const cartContext = createContext()

const { Provider } = cartContext

const initial_state = {
    items: [],
}
export default function CartContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initial_state)

    function reducer(state, action) {
        switch (action.type) {
          case "ADD":
            const newItem = action.payload
            const existingItem = state.items.find((el) => el.id === newItem.id)

            if (existingItem) {
              return {
                ...state,
                items: state.items.map((el) => {
                  if (el.id === newItem.id) {
                    return { ...el, quantity: el.quantity + 1 }
                  }
                  return el
                }),
              }
            } else {
              return {
                ...state,
                items: [...state.items, { ...newItem, quantity: 1 }], 
              }
            }
          case "REMOVE":
            return {
              ...state,
              items: state.items.filter((el) => (el.id !== action.payload)),
            };
          case "CLEAR":
            return { ...state, items: [] };
          default:
            return state;
        }
    }
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}