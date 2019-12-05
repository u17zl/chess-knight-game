require 'BFS'
module Api
    module Chess
        class HelpController < ApplicationController
            def help
                position =  params["position"]
                target =  params["target"]
                path = BFS(position, target)
                render json: {status: 'SUCCESS', message:"OK", path: path}, status: :ok
            end
        end
    end
end
        