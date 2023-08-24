import * as actionType from '../actions/actionType'

const products = JSON.parse(sessionStorage.getItem('arrCart'))

const initialState = {
  cartArr: Array.isArray(products) ? products : []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.BUY_PRODUCT:
      const productInCart = state.cartArr.find(
        (p) => p.id === action.payload.id
      )
      if (!productInCart) {
        sessionStorage.setItem("arrCart", JSON.stringify([...state.cartArr, action.payload]))
        return {
          cartArr: [...state.cartArr, action.payload]
        }
      } else {
        let newCart = state.cartArr;
        const objIndex = newCart.findIndex(
          (obj) => obj.id === action.payload.id
        )
        if (newCart[objIndex].quantity === undefined) {
          newCart[objIndex].quantity = 2
        } else {
          newCart[objIndex].quantity = newCart[objIndex].quantity + 1
        }
        sessionStorage.setItem("arrCart", JSON.stringify([...newCart]))
        return { cartArr: [...newCart] }
      }

    case actionType.DELETE_PRODUCT:
      let newCart = state.cartArr;
      const objIndex = newCart.findIndex((obj) => obj.id == action.payload.id)
      newCart.splice(objIndex, 1)
      sessionStorage.setItem("arrCart", JSON.stringify([...newCart]))
      return { cartArr: [...newCart] }

    case actionType.CHANGE_QUANTITY:
      let newCart1 = state.cartArr
      const objIndex1 = newCart1.findIndex((obj) => obj.id == action.payload.id)
      newCart1[objIndex1].quantity = action.payload.quantity
      sessionStorage.setItem("arrCart", JSON.stringify([...newCart1]))
      return { cartArr: [...newCart1] }
    default:
      return state
  }
}

export default rootReducer
