require_dependency 'BFS'
module Api
    module Chess
        class HelpsController < ApplicationController
            def help
                begin
                    position =  params["position"]
                    target =  params["target"]
                    path = BFS(position, target)
                    render json: {status: 200, message:"OK", path: path}, status: :ok
                rescue => exception
                    render json: {status: 400, message:"Bad Request"}, status: :bad_request
                end
            end
        end
    end
end