require "./animal"

class Mouse < Animal
  private getter movement

  def initialize
    super
    @movement = "scurries about"
  end
end

class Snake < Animal
  include Carnivore

  def movement
    "slithers around"
  end
end

snake = Snake.new
mouse = Mouse.new

snake.move # Snake slithers around
mouse.move # Mouse scurries about

mouse.eat("cheese") # Mouse eats cheese
snake.eat("cheese") # Snake eats cheese - Snake's stomache hurts
snake.eat(mouse) # Snake eats Mouse

begin
  mouse.move
rescue exception
  puts exception.message # Mouse is dead
end
