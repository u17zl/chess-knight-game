require 'BFS'
module Api
    module Chess
        class HelpController < ApplicationController
            def help
                position =  params["position"]
                target =  params["target"]

                path = BFS(position, target)
                puts path
                render json: {status: 'SUCCESS', message:"OK", path: path},status: :ok
            end

            private 

            
        end
    end
end
        