class TeamsController < ApplicationController
    
    get "/teams" do
        teams = Team.all
        teams.to_json
    end

    get "/teams/:id" do
        teamAndAth = Team.find(params[:id])
        teamAndAth.to_json(include: :athletes)
    end

    post "/teams" do
        team = Team.create({name:params[:name], location:params[:location], image:params[:image], primary_color:params[:primary_color], secondary_color:params[:secondary_color]})
        team.to_json
    end

    delete "/teams/:id" do
        team = Team.find(params[:id])
        team.destroy
        {message: 'Team removed and destroyed by dodgeballs'}.to_json
    end

end