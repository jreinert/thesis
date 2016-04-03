const response = body => ({
	data: {
		...JSON.parse(body).data,
		id: 0, relationships: { parent: { data: null } }
	}
});

describe('add', () => {
	it('dispatches correct actions', () => {
		fetchMock.mock(API_URI + '/items/', 'POST', (url, { body }) => ({
			status: 201,
			body: response(body)
		}));

		return store.dispatch(add('foo'))
			.then(() => {
				const { dispachedActions } = actionSpy;
				expect(dispachedActions.length).to.equal(2);
				const [ pending, complete ] = dispachedActions;
				const payload = {
					attributes: { name: 'foo' }, _parentId: null
				}
				const meta = { _cid: 'test-uuid' };
				expect(pending).to.deep.equal({
					type: ADD_ITEM_PENDING,
					payload,
					meta,
				})
				expect(complete).to.deep.equal({
					type: ADD_ITEM_COMPLETE,
					payload: { ...payload, _id: 0 },
					meta: { ...meta, broadcast: true },
				})
			});
	});
});
