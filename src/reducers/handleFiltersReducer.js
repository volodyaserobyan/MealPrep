const initialUserState = {
    filtersHandle: []
}
export const handleFiltersReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case 'HANDLING_FILTERS': {
            for (let i = 0; i < state.filtersHandle.length; i++) {
                if (state.filtersHandle[i].name == action.filtersHandle.name) {
                    const newFiltersHandler = [...state.filtersHandle];
                    newFiltersHandler[i] = {
                        ...newFiltersHandler[i],
                        values: newFiltersHandler[i].values.concat(action.filtersHandle.values[0])
                    }
                    return {
                        ...state,
                        filtersHandle: newFiltersHandler
                    }
                }
            }

            return {
                ...state,
                filtersHandle: [...state.filtersHandle, action.filtersHandle]
            }
        }
        default: return state;
    }
}