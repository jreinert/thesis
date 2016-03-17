class Sheep
  def baah
    puts "baah"
  end
end

class Wolf
end

herd = (0...100).map { |i| i < 99 ? Sheep.new : Wolf.new }
sheep = herd.sample
# sheep.baah
# undefined method 'baah' for Wolf (compile-time type is (Sheep | Wolf))
if sheep.is_a? Sheep
  sheep.baah
else
  raise "there's a wolf! run!"
end
