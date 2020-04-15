class UsersController < ApplicationController

    def new
        @user = User.new
    end

    def create
        @user = User.create(user_strong_params)
    end

    private

    def user_strong_params
    params.require(:user).permit(:user_id, :name)
    end
end
