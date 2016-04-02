import update from 'react-addons-update';

function insertItem(state, item) {
	let index = -1;
	const { attributes: { pos } } = item;
	const { items } = state;
	if (typeof pos !== 'undefined') {
		index = items.findIndex(currentItem => {
			const { attributes: { pos: currentPos } } = currentItem;
			if (typeof currentPos === 'undefined') return true;
			return currentPos > pos;
		});
	}
	index = index === -1 ? items.length : index;
	return update(state, { items: { $splice: [[index, 0, item]] } });
}
