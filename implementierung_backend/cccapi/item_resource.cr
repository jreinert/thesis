class Item < Resource
  BSON.mapping({
    id: { type: String, key: :_id, converter: ObjectIdConverter },
    name: String,
    parent_id: { type: String, converter: ObjectIdConverter, nilable: true }
  })

  attributes({
    name: String
  })

  relationships({
    parent: { to: :one, type: "items", key: parent_id },
    children: { to: :many, type: "items" },
    components: { to: :many, type: "components" }
  })

  def self.new(name : String, parent_id = nil)
    new(BSON::ObjectId.new.to_s, name, parent_id)
  end

  def initialize(@id : String, @name : String, @parent_id : String?)
  end
end
