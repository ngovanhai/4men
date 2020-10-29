import { createSlice } from '@reduxjs/toolkit';


const initalState = [
    {
        "id": 2,
        "tittle": "GIÀY TÂY ĐEN G117",
        "soluong": 2,
        "gia": 550000,
        "mota": "test",
        "phanloai": "qiay",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg",
            "image2": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg",
            "image3": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg"
        },
        "slmua": "2",
        "size": "M"

    },
    {
        "id": 2,
        "tittle": "GIÀY TÂY ĐEN G117",
        "soluong": 2,
        "gia": 550000,
        "mota": "test",
        "phanloai": "qiay",
        "image": {
            "image1": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg",
            "image2": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg",
            "image3": "https://4menshop.com/images/thumbs/2017/05/giay-tay-den-g117-8279-slide-1.jpg"
        },
        "slmua": "3",
        "size": "M"
    },


]

const cart = createSlice({
    name: 'cart',
    initialState: initalState,
    reducers: {
        addProductToCart: (state, action) => {
            console.log("payload", action.payload);
            state.push(action.payload)
        },
        DeleteProductToCart: (state, action) => {
            console.log("payload delete", action);
            const deleteItemCartId = action.payload;
            return state.filter(item => item.id !== deleteItemCartId);


        }

    }
});

const { reducer, actions } = cart;
export const { test, DeleteProductToCart, addProductToCart } = actions;

export default reducer;
