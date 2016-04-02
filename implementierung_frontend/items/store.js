{
	collection: {
		items: [
			{
				_id: '1', _parentId: null,
				attributes: { name: 'Test 1' },
			},
			{ 
				_id: '2', _parentId: null,
				attributes: { name: 'Test 2' },
			},
			{
				_id: '3', _parentId: '1',
				attributes: { name: 'Test 3' },
			},
		],
		removeQueue: [],
		changeQueue: [],
	},
	selectedItem: {
		item: {
			_id: '1', _parentId: null,
			attributes: { name: 'Test 1' },
		}
	}
}
