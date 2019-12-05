
# to define movement is inside the board
def isInside(x, y)

    if (x >= 0 and x < 8 and 
        y >= 0 and y < 8)
        return true
    else 
        return false
    end
end

# single cell model
class Cell
    attr_accessor :x, :y, :path
    def initialize(x=0, y=0, path = [])
        @x = x 
        @y = y 
        @path = path
    end
end

# breadth_first_search to find shortest path to target
def BFS(position, target)

    # all 8 possible movements for the knight 
    dx = [2, 2, -2, -2, 1, 1, -1, -1] 
    dy = [1, -1, 1, -1, 2, -2, 2, -2] 

    # init queue and visited array
    queue = Array.new
    visited = Array.new(8) { Array.new(8, false) }

    # start position
    queue.push(Cell.new(position[0], position[1], []));
    visited[position[0]][position[1]] = true
    
    while queue.any? do

        t = queue.shift()
        
        # if current cell is equal to target cell, return its distance  
        if(t.x == target[0] and 
           t.y == target[1])
            return t.path 
        end

        # iterate for all reachable states  
        for i in 0..7
        
            x = t.x + dx[i] 
            y = t.y + dy[i] 

            # push possible movement to queue
            if(isInside(x, y) and !visited[x][y])
                visited[x][y] = true
                path = Array.new(t.path)
                queue.push(Cell.new(x, y, path.push([x,y])))
            end
        end    
    end
end