import { GETTESTIMONIALS } from '../const/ConstTypes'

const initialState = {
    getTestimonials: []
}
export const testimonialsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GETTESTIMONIALS: {
            return {
                ...state,
                getTestimonials: state.getTestimonials.concat(action.testimonial.testimonials),
                count: action.testimonial.totalCount,
                message: action.testimonial.meassage
            }
        }
        default: return state;
    }
}