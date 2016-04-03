const response = body => ({
	data: {
		...JSON.parse(body).data,
		id: 0, relationships: { parent: { data: null } }
	}
});

describe('add', () => {
	it('makes a correct api request to store the item', () => {
		fetchMock.mock(API_URI + '/items/', 'POST', (url, { body }) => ({
			status: 201,
			body: response(body)
		}));

		return store.dispatch(add('foo')).then(() => {
			expect(fetchMock.called(API_URI + '/items/', 'POST')).to.be.true;
			const { body } = fetchMock
				.lastOptions(API_URI + '/items/', 'POST');
			expect(JSON.parse(body)).to.deep.equal({
				data: {
					type: 'items',
					attributes: { name: 'foo' },
					relationships: { parent: { data: null } }
				}
			});
		});
	});
});
