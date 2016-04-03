const createState = (item = null, _oldAttributes = null) => ({
	_oldAttributes, item
});

describe(CHANGE_ITEM, () => {
	const state = createState({ _id: '1', attributes: { name: 'foo' } });
	const action = createAction(CHANGE_ITEM,
		(_id, attributes) => ({ _id, attributes })
	);

	it('updates the attributes of the selected item', () => {
		const { item: { attributes } } = reducer(state,
			action('1', { name: 'bar' })
		);
		expect(attributes).to.deep.equal({ name: 'bar' });
	});

	it('sets _pending to true', () => {
		const { item: { _pending } } = reducer(state,
			action('1', { name: 'bar' })
		);
		expect(_pending).to.be.true;
	});

	it('leaves the state unchanged if the id does not match', () => {
		expect(
			reducer(state, action('2'))
		).to.deep.equal(
			state
		);
	});
});
