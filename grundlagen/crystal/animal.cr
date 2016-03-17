abstract class Animal
  getter? alive

  def initialize
    @alive = true
  end

  def eat(something)
    raise "#{to_s} is dead" unless alive?
    puts "#{to_s} eats #{something.to_s}"
  end

  def die
    @alive = false
  end

  def move
    raise "#{to_s} is dead" unless alive?
    puts "#{to_s} #{movement}"
  end

  private abstract def movement

  def to_s
    self.class.name
  end

  module Carnivore
    def eat(something)
      super
      puts "#{to_s}'s stomache hurts"
    end

    def eat(something : Animal)
      super
      something.die
    end
  end
end
