class Person < JSONApi::Resource
  @@type = "people" # needs to be set for irregular plural forms only

  getter mother_id, father_id, friend_ids, child_ids

  def initialize(
    @id : Int32, @name, @age, @mother_id , @father_id,
    @friend_ids = [] of Int32, @child_ids = [] of Int32
  )
  end

  attributes({
    name: String,
    age:  Int32,
  })

  relationships({
    mother:   {to: :one, type: :people},
    father:   {to: :one, type: :people},
    friends:  {to: :many, type: :people, keys: @friend_ids},
    children: {to: :many, type: :people, keys: @child_ids},
  })
end
