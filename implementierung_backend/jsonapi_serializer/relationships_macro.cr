# This is a comment
macro relationships(map)
  {% for key, value in map %}
    {% map[key] = { to: value } unless value.is_a?(HashLiteral) %}
    {% unless map[key][:type] %}
      {% map[key][:type] = "#{key.id}#{(value[:to].id.stringify == "one" ? "s" : "").id}" %}
    {% end %}
    {% unless map[key][:key] %}
      {% map[key][:key] = map[key][:keys] %}
    {% end %}
  {% end %}

  {% for key, value in map %}
    def {{key.id}}
      {% type = "JSONApi::To#{value[:to].id.camelcase}Relationship".id %}
      @{{key.id}} ||= {{type}}.new(
        {{key.id.stringify}},
        {{value[:type].id.stringify}},
        {% if value[:key] %}
          {{value[:key].id}},
        {% end %}
        resource_link: self_link
      )
    end
  {% end %}
end
