import { TOGGLE_LANGUAGE, OPEN_REVIEW_MODAL } from "../actions"

interface initialStateProps {
    language: string,
    reviewStatus: boolean
    review: {}
}

const initialState: initialStateProps = {
    language: "rus",
    reviewStatus: false,
    review: {},
}

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_LANGUAGE: {
            return {
                ...state,
                language: action.payload
            }
        }
        case OPEN_REVIEW_MODAL: {
            return {
                ...state,
                reviewStatus: true
            }
        }
        default: {
            return state
        }
    }

}