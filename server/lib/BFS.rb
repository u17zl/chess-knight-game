
def BFS(position, target)
    #all possible movments for the knight 

    dx = [2, 2, -2, -2, 1, 1, -1, -1] 
    dy = [1, -1, 1, -1, 2, -2, 2, -2] 
    queue = []

    visited = [Array.new(8, false)] * 8
    visited[position[0]][position[1]] = 1

    queue.push(Cell.new(position[0], position[1], []));
    
    while queue.any? 

        t = queue[0]
        queue.pop(0)

        # if current cell is equal to target  
        # cell, return its distance  
        if(t.x == target[0] and 
           t.y == target[1])
            puts t.path 
        end
        # iterate for all reachable states  
        for i in 0..7
        
            x = t.x + dx[i] 
            y = t.y + dy[i] 
              
            if(isInside(x, y) and !visited[x][y])
                visited[x][y] = true
                path = t.path.push([x,y])
                queue.push(cell.new(x, y, path))
            end
        end    
            
    end
end


def isInside(x, y)

    if (x >= 0 and x < 8 and 
        y >= 0 and y < 8)
        puts true
    else 
        puts false
    end
    
end

class Cell
    def initialize(x = 0, y = 0, path = [])
        @x = x 
        @y = y 
        @path = path
    end
end