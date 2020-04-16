class UserSettingsController < ApplicationController
    def index
        @user_settings = UserSetting.all
        render json: @user_settings, except: [:created_at, :updated_at]
    end
    
    def new
        @user_setting = UserSetting.new
    end

    def create
        @user_setting = UserSetting.create(userSetting_strong_params)
    end

    private

    def userSetting_strong_params
    params.require(:user).permit(:user_id, :setting_id)
    end
end
