Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'chess' do
      post 'helps' => 'helps#help'
    end
  end
end
