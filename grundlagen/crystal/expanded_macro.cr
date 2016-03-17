def populations(key)
  case(key)
    when :china     then 1_375_410_000
    when :india     then 1_285_930_000
    when :usa       then 323_050_000
    when :indonesia then 258_705_000
    when :brazil    then 205_775_000
    else raise "unknown key #{key}"
  end
end
