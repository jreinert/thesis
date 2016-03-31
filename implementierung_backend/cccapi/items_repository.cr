class Items < Repository(Item)
  def roots
    execute_query({ parent_id: nil })
  end

  def children_of(item : Item)
    children_of(item.id)
  end

  def children_of(id : String)
    children_of(BSON::ObjectId.new(id))
  end

  def children_of(id : BSON::ObjectId)
    execute_query({ parent_id: id })
  end

  def parent_of(item : Item)
    parent_id = item.parent_id
    raise ResourceNotFound.new({ _id: parent_id }) unless parent_id
    find(parent_id)
  end

  def parent_of(id : String)
    parent_of(BSON::ObjectId.new(id))
  end

  def parent_of(id : BSON::ObjectId)
    item = find(id)
    parent_of(item)
  end

  def for_component(component : Component)
    find(component.item_id)
  end
end
