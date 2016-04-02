const initialState = { items: [], removeQueue: [], changeQueue: [] };

export default handleActions({
	...collectionHandlers('ITEM'),
	[FETCH_ITEMS_COMPLETE]: (state, action) => {
		if (action.error) { return state; }
		return update(state, { items: { $set: action.payload } });
	}
}, initialState);
