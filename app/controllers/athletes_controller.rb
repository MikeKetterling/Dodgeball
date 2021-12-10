class AthletesController < ApplicationController
    
    get "/athletes" do
        athletes = Athlete.all
        athletes.to_json(include: :team)
    end

    post "/athletes" do
        athlete = Athlete.create({name:params[:name], image:params[:image], height:params[:height], weight:params[:weight], strength:params[:strength], speed:params[:speed], team_id:params[:team_id]})
        athlete.to_json(include: :team)
    end

    patch "/athletes/:id" do
        athlete = Athlete.find(params[:id])

        athlete.update({strength:params[:strength], speed:params[:speed]})

        athlete.to_json(include: :team)
    end

    delete "/athletes/:id" do
        athlete = Athlete.find(params[:id])
        athlete.destroy
        {message: 'Athlete removed and destroyed by dodgeballs'}.to_json
    end
end