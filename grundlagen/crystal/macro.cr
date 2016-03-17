macro make_lut(name, hash)
  def {{name.id}}(key)
    case(key)
    {% for key, value in hash %}
      when {{key}} then {{value}}
    {% end %}
    else raise "unknown key #{key}"
    end
  end
end

make_lut(:populations, {
  china:     1_375_410_000
  india:     1_285_930_000
  usa:         323_050_000
  indonesia:   258_705_000
  brazil:      205_775_000
})
