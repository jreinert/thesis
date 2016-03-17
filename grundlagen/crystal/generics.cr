class BinaryTree(T)
  include Enumerable(T)
  getter left, right

  def initialize(@data : Comparable(T))
  end

  def <<(data : Comparable(T))
    if data < @data
      @left = self.class.new(data) unless @left.try(&.<< data)
    else
      @right = self.class.new(data) unless @right.try(&.<< data)
    end
  end

  def each(&block : T -> _)
    left.try(&.each(&block))
    yield @data
    right.try(&.each(&block))
  end
end

root = BinaryTree.new("this")
root << "is"
root << "a"
root << "test"

root.each { |string| puts string }
