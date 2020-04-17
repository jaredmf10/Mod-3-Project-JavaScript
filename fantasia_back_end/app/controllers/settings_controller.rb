class SettingsController < ApplicationController
    def index
        @settings = Setting.all
        render json: @settings, except: [:created_at, :updated_at]
    end
    def new
        @setting = Setting.new
        render json: @setting, except: [:created_at, :updated_at]
    end
    def create
        @setting = Setting.create(setting_strong_params)
        render json: @setting, except: [:updated_at, :created_at]
    end
    private
    def setting_strong_params
    params.require(:setting).permit(:name, :attack, :decay, :sustain, :release, :_attackCurve, :_releaseCurve)
    end
end