require 'BFS'
module Api
    module Chess
        class HelpsController < ApplicationController
            def create
                position =  params["position"]
                target =  params["target"]
                path = BFS(position, target)
                render json: {status: 'SUCCESS', message:"OK", path: path}, status: :ok
            end
        end
    end
end
        