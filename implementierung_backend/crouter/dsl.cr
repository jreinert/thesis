class Router < Crouter::Router
  get "/users" do
    context.response.puts Users.all.to_json
  end

  get "/users/:id" do
    context.response.puts Users.find(params["id"])
  end

  group "/pages" do
    get "/", "PagesController#index"
    get "/:id", "PagesController#show"
  end
end
