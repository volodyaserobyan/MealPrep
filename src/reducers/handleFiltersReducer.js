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
        case 'REMOVE_ITEM': {
            let index
            let newState = []
            for (let i = 0; i < state.filtersHandle.length; i++) {
                index = state.filtersHandle[i].values.indexOf(action.item)
                newState = [...state.filtersHandle]
                newState[i] = {
                    ...newState[i],
                    values: [...newState[i].values.slice(0, index),
                    ...newState[i].values.slice(index + 1)]
                }
                if(newState[i].values.length == 0) {
                    let deleteArr = state.filtersHandle.splice(i, 1)
                    return {
                        ...state
                    }
                    //  newState[i] = [...newState.slice(0, i), ...newState.slice(i + 1)]
                    //  console.log(newState, 'newstate')
                }
            }
            return {
                ...state,
                filtersHandle: [...newState]
            }
        }
        default: return state;
    }
}