require "crypto/bcrypt"
require "mongo"

class User
  module ObjectIdConverter
    extend self
    def from_bson(bson_value)
      (bson_value.value as BSON::ObjectId).to_s
    end

    def to_bson(object_id, appender)
      appender << BSON::ObjectId.new(object_id)
    end
  end

  module BcryptPasswordConverter
    extend self
    def from_bson(bson_value)
      Crypto::Bcrypt::Password.new(bson_value.value as String)
    end

    def to_bson(password, appender)
      password.to_s(appender)
    end
  end

  BSON.mapping({
    id: { type: String, key: :_id, converter: ObjectIdConverter },
    email: String,
    name: String,
    password: {
      type: Crypto::Bcrypt::Password,
      key: :hashed_password,
      converter: BcryptPasswordConverter
    }
  })
end
